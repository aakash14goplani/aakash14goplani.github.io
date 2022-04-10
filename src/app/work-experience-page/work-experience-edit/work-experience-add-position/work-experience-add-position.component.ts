import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap, takeUntil, Subject } from 'rxjs';
import { ContentService } from 'src/app/shared/content-service/content.service';
import { ICompanyExperience, PAGENAME } from 'src/app/shared/global.model';
import { WorkExperienceService } from '../../services/work-experience.service';

@Component({
  selector: 'app-work-experience-add-position',
  templateUrl: './work-experience-add-position.component.html',
  styleUrls: ['./work-experience-add-position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceAddPositionComponent implements OnDestroy {

  addNewPosition: FormGroup;
  private unsubscriber$: Subject<void> = new Subject<void>();
  @Output() actionResponse = new EventEmitter<boolean>();
  @Output() displaySpinner = new EventEmitter<boolean>();
  @Output() handleFirebaseError = new EventEmitter<string>();

  @Input() documentId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private weService: WorkExperienceService,
    private contentService: ContentService
  ) {
    this.addNewPosition = this.formConfiguration;
  }

  /**
   * Prepare Form configuration
   * @returns { FormGroup }
   */
  get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      location: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  /**
   * Returns the AbstractControl for form array
   * @param controlName { string } - name of the form control
   * @returns { AbstractControl[] } - array of form controls
   */
  getAbstractControlFor(controlName: string): AbstractControl[] {
    return (this.addNewPosition.get(controlName) as FormArray).controls;
  }

  /**
   * Returns Form Control for array
   * @param controlName { string } - name of the form array
   * @param index { number } - index of the form array
   * @returns { FormControl } - form control
   */
  getFormControlFor(controlName: string, index: number): FormControl {
    return (this.addNewPosition.get(controlName) as FormArray).controls[index] as FormControl;
  }

  /**
   * Remove control from form array
   * @param controlName { string } - name of the form array
   * @param index { number } - index of the form array
   */
  removeFromArray(controlName: string, index: number): void {
    (this.addNewPosition.get(controlName) as FormArray).removeAt(index);
  }

  /**
   * Adds new FormControl to FormArray
   * @param controlName { string } - name of the form array
   */
  addNewFormControlFor(controlName: string): void {
    (this.addNewPosition.get(controlName) as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  /**
   * Return back to work-experience-edit view
   */
  cancelEditingForm(): void {
    this.actionResponse.emit(false);
  }

  /**
   * Submit form and navigate to work-experience view
   */
  saveNewPosition() {
    this.addNewPosition.updateValueAndValidity();
    if (this.addNewPosition.valid) {
      this.actionResponse.emit(false);
      const submittedValues = this.weService.addNewPositionInCompany(this.addNewPosition.value);

      const dataToFirestore = {
        id: this.documentId,
        content: submittedValues
      };

      this.contentService.updatePageContent<{ id: string, content: ICompanyExperience[] }>(PAGENAME.WORK_EXPERIENCE, dataToFirestore, true).pipe(
        tap(_ => this.displaySpinner.emit(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.emit(false);
          this.router.navigate(['/work-experience']);
        },
        error: (err) => {
          this.handleFirebaseError.emit(err);
        }
      });

      this.router.navigate(['/work-experience']);
    } else {
      this.handleFirebaseError.emit('Please fill all the required fields');
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
