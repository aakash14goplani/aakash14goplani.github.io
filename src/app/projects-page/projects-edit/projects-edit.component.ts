import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, tap, takeUntil } from 'rxjs';
import { ContentService } from '../../shared/content-service/content.service';
import { IProjectsPage, PAGENAME } from '../../shared/global.model';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsEditComponent implements OnDestroy {

  projectsEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  private dataToEdit: IProjectsPage;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.projectsEditForm = this.formConfiguration;
    this.dataToEdit = this.router.getCurrentNavigation()?.extras?.state?.['data'] || window.history.state?.data;
    // route back on page reload
    if (!this.dataToEdit) {
      this.router.navigate(['/projects']);
    } else {
      this.prefillForm();
      // as it is invoked immediately, it is not captured in CD, so delay the invocation
      setTimeout(() => this.displaySpinner.next(false));
    }
  }

  /**
   * Initializes Form Configuration
   */
  private get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      showMoreContent: ['', Validators.required],
      buttonText: ['', Validators.required],
      content: this.formBuilder.array([]),
      tools: this.formBuilder.array([])
    });
  }

  /**
   * Prefill form with data from firebase
   */
  private prefillForm() {
    this.projectsEditForm.patchValue({
      title: this.dataToEdit.title,
      link: this.dataToEdit.link,
      showMoreContent: this.dataToEdit.showMoreContent,
      buttonText: this.dataToEdit.buttonText,
      content: this.prefillFormArray('content', this.dataToEdit.content),
      tools: this.prefillFormArray('tools', this.dataToEdit.tools)
    });
  }

  /**
   * Prefill form array
   * @param controlName { string } - name of the form array
   * @param data { string[] } - array of string data
   */
  private prefillFormArray(controlName: string, data: string[]) {
    data.forEach((content) => {
      (this.projectsEditForm.get(controlName) as FormArray).push(
        new FormControl(content, Validators.required)
      );
    });
  }

  /**
   * Returns AbstractControl array for given property
   * @param controlName { string } - name of the property
   * @returns { AbstractControl[] } - AbstractControl array for given property
   */
  getAbstractControlFor(controlName: string): AbstractControl[] {
    return (this.projectsEditForm.get(controlName) as FormArray).controls;
  }

  /**
   * Returns FormControl for given property
   * @param controlName { string } - name of the property
   * @param index { number } - index of the description
   * @returns { FormControl } - FormControl for description
   */
  getFormControlFor(controlName: string, index: number): FormControl {
    return (this.projectsEditForm.get(controlName) as FormArray).controls[index] as FormControl;
  }

  /**
   * Remove data from form
   * @param controlName { string } - name of the property
   * @param index { number } - index of the description
   */
  removeFromArray(controlName: string, index: number): void {
    (this.projectsEditForm.get(controlName) as FormArray).removeAt(index);
  }

  /**
   * Add new description to array
   * @param controlName { string } - name of the property
   */
  addNewFormControlFor(controlName: string): void {
    (this.projectsEditForm.get(controlName) as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  /**
   * Handle Firebase Error
   * @param err { Error }
   */
  private handleFirebaseError(err: any) {
    this._snackBar.open(err, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.displaySpinner.next(false);
  }

  /**
   * Return back to home page when clicked on cancel button
   */
  backToProjectsPage() {
    this.router.navigate(['/projects']);
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    this.projectsEditForm.updateValueAndValidity();
    if (this.projectsEditForm.valid) {
      const editedData = {
        id: this.dataToEdit.id,
        ...this.projectsEditForm.value
      };
      this.contentService.updatePageContent<IProjectsPage>(PAGENAME.PROJECTS, editedData).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/projects']);
        },
        error: (err) => {
          this.handleFirebaseError(err);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.displaySpinner.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
