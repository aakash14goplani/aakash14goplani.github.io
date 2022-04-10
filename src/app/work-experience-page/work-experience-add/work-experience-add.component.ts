import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from 'src/app/shared/content-service/content.service';
import { ICompanyExperience, PAGENAME } from 'src/app/shared/global.model';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience-add',
  templateUrl: './work-experience-add.component.html',
  styleUrls: ['./work-experience-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorkExperienceService]
})
export class WorkExperienceAddComponent implements OnDestroy {

  addNewExperience: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  isFormValid: boolean = true;
  displayAddNewPositionTemplate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private _snackBar: MatSnackBar,
    private weService: WorkExperienceService
  ) {
    this.addNewExperience = this.formSkeleton;
    // as it is invoked immediately, it is not captured in CD, so delay the invocation
    setTimeout(() => this.displaySpinner.next(false));
  }

  /**
   * Initialize Form
   * @returns { FormGroup } - FormGroup
   */
  get formSkeleton(): FormGroup {
    return this.formBuilder.group({
      companyName: ['', Validators.required],
      positionName: ['', Validators.required],
      companyStartDate: ['', Validators.required],
      companyEndDate: [''],
      positionStartDate: ['', Validators.required],
      positionEndDate: [''],
      location: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  /**
   * Returns AbstractControl array for description
   * @param controlName { string } - control name
   * @returns { AbstractControl[] } - AbstractControl array for given property
   */
  getAbstractControlFor(controlName: string): AbstractControl[] {
    return (this.addNewExperience.controls[controlName] as FormArray).controls;
  }

  /**
   * Returns FormControl array for description
   * @param controlName { string } - control name
   * @param index { number } - index of the description
   * @returns { FormControl } - FormControl for description
   */
  getFormControlFor(controlName: string, index: number): FormControl {
    return (this.addNewExperience.controls[controlName] as FormArray).controls[index] as FormControl;
  }

  /**
   * Remove data from form
   * @param controlName { string } - control name
   * @param index { number } - index of the description
   */
  removeFromArray(controlName: string, index: number): void {
    (this.addNewExperience.controls[controlName] as FormArray).removeAt(index);
  }

  /**
   * Add new description to array
   * @param controlName { string } - control name
   */
  addNewFormControlFor(controlName: string): void {
    (this.addNewExperience.controls[controlName] as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  /**
   * Handle Firebase Error
   * @param err { Error }
   * @returns { Observable<void> }
   */
  private handleFirebaseError(err: any): Observable<never> {
    this._snackBar.open(err, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.displaySpinner.next(false);
    return EMPTY;
  }

  /**
   * Return back to home page when clicked on cancel button
   */
  backToWorkExperiencePage() {
    this.router.navigate(['/work-experience']);
  }

  /**
   * Add new work experience
   */
  onSubmit(): void {
    this.addNewExperience.updateValueAndValidity();

    if (this.addNewExperience.valid) {
      this.displaySpinner.next(true);
      const data = this.weService.prepareObjectForAddingNewCompany(this.addNewExperience.value);
      this.contentService.addPageContent<{ [key: number]: ICompanyExperience[] }>(PAGENAME.WORK_EXPERIENCE, { 0: data }).pipe(
        tap(() => {
          this.displaySpinner.next(false);
          this.router.navigate(['/work-experience']);
        }),
        catchError(this.handleFirebaseError),
        takeUntil(this.unsubscriber$)
      ).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
