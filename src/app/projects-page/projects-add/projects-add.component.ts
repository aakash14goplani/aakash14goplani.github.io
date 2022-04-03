import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, tap, takeUntil } from 'rxjs';
import { ContentService } from '../../shared/content-service/content.service';
import { IProjectsPage, PAGENAME } from '../../shared/global.model';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.scss']
})
export class ProjectsAddComponent implements OnDestroy {

  projectsEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.projectsEditForm = this.formConfiguration;
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
      content: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ]),
      tools: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ])
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
      this.contentService.addPageContent<IProjectsPage>(PAGENAME.PROJECTS, this.projectsEditForm.value).pipe(
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
