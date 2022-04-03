import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { ICertifications, IDegree, IEducationPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationEditComponent implements OnInit, OnDestroy {

  educationEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.educationEditForm = this.formConfiguration;
  }

  /**
   * Initializes Form Configuration
   */
  private get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      educationHeadline: ['', Validators.required],
      certificationHeadline: ['', Validators.required],
      buttonText: ['', Validators.required],
      educationDetails: this.formBuilder.array([]),
      certificationList: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    (this.service.getContentForPage<IEducationPage>(PAGENAME.EDUCATION) as Observable<IEducationPage>).pipe(
      tap(_ => this.displaySpinner.next(true)),
      takeUntil(this.unsubscriber$)
    ).subscribe({
      next: (data) => {
        if (data) {
          this.prefillForm(data);
          this.displaySpinner.next(false);
        }
      },
      error: (err) => {
        this.handleFirebaseError(err);
      }
    });
  }

  /**
   * Prefill form with data from firebase
   * @param data { IEducationPage } - data from firebase
   */
  private prefillForm(data: IEducationPage) {
    this.educationEditForm.patchValue({
      educationHeadline: data.educationHeadline,
      certificationHeadline: data.certificationHeadline,
      buttonText: data.buttonText,
      educationDetails: this.prefillEducationDetails(data.educationDetails),
      certificationList: this.prefillCertificationDetails(data.certificationList)
    });
  }

  /**
   * Prefill form with Education Details from firebase
   * @param data { IDegree } - EducationDetails from database
   */
  private prefillEducationDetails(data: Array<IDegree>): void {
    data.forEach((element) => {
      (this.educationEditForm.get('educationDetails') as FormArray).push(this.formBuilder.group({
        degree: [element.degree, Validators.required],
        institute: [element.institute, Validators.required],
        duration: [element.duration, Validators.required],
        speciality: [element.speciality, Validators.required],
        percentage: [element.percentage, Validators.required]
      }));
    });
  }

  /**
   * Prefill form with Certification Details from firebase
   * @param data { ICertifications } - EducationDetails from database
   */
  private prefillCertificationDetails(data: Array<ICertifications>): void {
    data.forEach((element) => {
      (this.educationEditForm.get('certificationList') as FormArray).push(this.formBuilder.group({
        name: [element.name, Validators.required],
        organization: [element.organization, Validators.required],
        issued: [element.issued, Validators.required],
        url: [element.url, Validators.required]
      }));
    });
  }

  /**
   * Add new Education Details
   */
  addEducationDetails(): void {
    (this.educationEditForm.get('educationDetails') as FormArray).push(this.formBuilder.group({
      degree: ['', Validators.required],
      institute: ['', Validators.required],
      duration: ['', Validators.required],
      speciality: ['', Validators.required],
      percentage: ['', Validators.required]
    }));
  }

  /**
   * Delete Education Details
   * @param controlName { string } - name of the control
   * @param index { number } - index of the control
   */
  deleteEntryFor(controlName: string, index: number) {
    (this.educationEditForm.get(controlName) as FormArray).removeAt(index);
  }

  /**
   * Returns AbstractControl for the Certification Details
   * @param controlName { string } - name of the control
   * @returns { AbstractControl[] }
   */
  getAbstractControlFor(controlName: string): AbstractControl[] {
    return (this.educationEditForm.get(controlName) as FormArray).controls;
  }

  /**
   * Add new Certification Details
   */
  addCertificationDetails(): void {
    (this.educationEditForm.get('certificationList') as FormArray).push(this.formBuilder.group({
      name: ['', Validators.required],
      organization: ['', Validators.required],
      issued: ['', Validators.required],
      url: ['', Validators.required]
    }));
  }

  /**
   * Delete Certification Details
   * @param index { number } - index of the control
   */
  deleteCertificationEntry(index: number) {
    (this.educationEditForm.get('certificationList') as FormArray).removeAt(index);
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
  backToEducationPage() {
    this.router.navigate(['/education']);
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    this.educationEditForm.updateValueAndValidity();
    if (this.educationEditForm.valid) {
      this.service.updatePageContent<IEducationPage>(PAGENAME.EDUCATION, this.educationEditForm.value).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/education']);
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
