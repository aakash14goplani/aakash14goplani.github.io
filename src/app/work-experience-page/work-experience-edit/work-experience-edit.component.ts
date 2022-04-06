import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, tap, takeUntil } from 'rxjs';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;
import { ContentService } from 'src/app/shared/content-service/content.service';
import { ICompanyExperience, PAGENAME } from 'src/app/shared/global.model';
import { WorkExperienceService } from '../services/work-experience.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-work-experience-edit',
  templateUrl: './work-experience-edit.component.html',
  styleUrls: ['./work-experience-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorkExperienceService]
})
export class WorkExperienceEditComponent implements OnDestroy {

  workExperienceEditForm: FormGroup[];
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  dataToEdit: ICompanyExperience[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private _snackBar: MatSnackBar,
    private weService: WorkExperienceService,
    private date: DatePipe
  ) {
    this.dataToEdit = this.router.getCurrentNavigation()?.extras?.state?.['data'] || window.history.state?.data;
    // route back on page reload
    if (!this.dataToEdit) {
      this.workExperienceEditForm = [];
      this.router.navigate(['/work-experience']);
    } else {
      const groupedDataToEdit: { [key: string]: ICompanyExperience[] } = this.weService.groupDataById(this.dataToEdit, v => v.levelId);
      this.workExperienceEditForm = new Array(Object.keys(groupedDataToEdit).length);
      this.initializeFormSkeleton(0);
      this.prefillForm(groupedDataToEdit);
      // as it is invoked immediately, it is not captured in CD, so delay the invocation
      setTimeout(() => this.displaySpinner.next(false));
    }
  }

  /**
   * Initialize form skeleton - need to run it as many times as the number of levels
   * due to behavior of patchValue, if one value is null, all will be null And
   * if one is defined but for next iteration it is undefined, it will keep old defined value
   * @param index { number } - index of the form group
   */
  private initializeFormSkeleton(index: number) {
    const formGroupObject = this.formBuilder.group({
      title: [''],
      startDate: [''],
      endDate: [''],
      location: [''],
      description: this.formBuilder.array([]),
      showMoreContent: false,
      levelId: ['']
    });

    for (let i = index; i < this.workExperienceEditForm.length; i++) {
      this.workExperienceEditForm[i] = formGroupObject as FormGroup;
    }
  }

  /**
   * Prefill form with data from firebase
   * @param groupedDataToEdit { { [key: string]: ICompanyExperience[] } } - grouped data to edit
   */
  private prefillForm(groupedDataToEdit: { [key: string]: ICompanyExperience[] }) {
    Object.keys(groupedDataToEdit).forEach((key: string, index: number) => {
      const groupedData = groupedDataToEdit[key];
      this.initializeFormSkeleton(index);
      groupedData.forEach((data: ICompanyExperience, j: number) => {
        if (data?.level > -1) {
          if (data.title) {
            this.workExperienceEditForm[index].patchValue({
              title: data.title
            });
          }
          if (data.startDate) {
            this.workExperienceEditForm[index].patchValue({
              startDate: this.date.transform(data.startDate.toDate(), 'MM/dd/yyyy')
            });
          }
          if (data.endDate) {
            this.workExperienceEditForm[index].patchValue({
              endDate: this.date.transform(data.endDate.toDate(), 'MM/dd/yyyy')
            });
          }
          if (data.location) {
            this.workExperienceEditForm[index].patchValue({
              location: data.location
            });
          }
          if (data.showMoreContent) {
            this.workExperienceEditForm[index].patchValue({
              showMoreContent: data.showMoreContent
            });
          }
          if (data.description) {
            this.workExperienceEditForm[index].patchValue({
              description: this.prefillFormArray(data.description, index)
            });
          }

          this.workExperienceEditForm[index].patchValue({
            levelId: data?.levelId
          });
        }
      });
    });
  }

  /**
   * Prefill form array ~ description
   * @param controlName { string } - name of the form array
   * @param data { string[] } - array of string data
   */
  private prefillFormArray(data: string[], index: number) {
    if (data && data.length > 0) {
      // console.log('in: ', this.workExperienceEditForm[index].controls);
      data.forEach((content) => {
        (this.workExperienceEditForm[index].get('description') as FormArray)?.push(
          new FormControl(content)
        );
      });
    }
  }

  /**
   * Return Step header
   * @param formGroup { FormGroup } - current formGroup
   * @returns { string } - Stepper Header
   */
  getStepperHeader(formGroup: FormGroup): string {
    const level = formGroup.controls['levelId'].value;
    const title = formGroup.controls['title']?.value || '';
    const suffix = level === '00' ? ' company' : ' position';
    return `Edit details for ${title} ${suffix}`;
  }

  /**
   * Returns AbstractControl array for description
   * @param formGroup { FormGroup } - current FormGroup
   * @returns { AbstractControl[] } - AbstractControl array for given property
   */
  getAbstractControlFor(formGroup: FormGroup): AbstractControl[] {
    return (formGroup.controls['description'] as FormArray).controls;
  }

  /**
   * Returns FormControl array for description
   * @param formGroup { FormGroup } - current FormGroup
   * @param index { number } - index of the description
   * @returns { FormControl } - FormControl for description
   */
  getFormControlFor(formGroup: FormGroup, index: number): FormControl {
    return (formGroup.controls['description'] as FormArray).controls[index] as FormControl;
  }

  /**
   * Remove data from form
   * @param formGroup { FormGroup } - current FormGroup
   * @param index { number } - index of the description
   */
  removeFromArray(formGroup: FormGroup, index: number): void {
    (formGroup.controls['description'] as FormArray).removeAt(index);
  }

  /**
   * Add new description to array
   * @param formGroup { FormGroup } - current FormGroup
   */
  addNewFormControlFor(formGroup: FormGroup): void {
    (formGroup.controls['description'] as FormArray).push(
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
  backToWorkExperiencePage() {
    this.router.navigate(['/work-experience']);
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    for (const data of this.workExperienceEditForm) {
      console.log('onSubmit', data.value);
    }
    // this.workExperienceEditForm.updateValueAndValidity();
    if (this.workExperienceEditForm) {
      /* const editedData = {
        id: this.dataToEdit.id,
        ...this.workExperienceEditForm.value
      };
      this.contentService.updatePageContent<ICompanyExperience>(PAGENAME.PROJECTS, editedData).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/work-experience']);
        },
        error: (err) => {
          this.handleFirebaseError(err);
        }
      }); */
    }
  }

  updateChanges() { }

  ngOnDestroy(): void {
    this.displaySpinner.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
