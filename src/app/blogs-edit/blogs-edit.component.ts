import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IBlogsPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-blogs-edit',
  templateUrl: './blogs-edit.component.html',
  styleUrls: ['./blogs-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsEditComponent implements OnDestroy {

  blogsEditForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  private dataToEdit: IBlogsPage;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.displaySpinner.next(true);
    this.blogsEditForm = this.formConfiguration;
    this.dataToEdit = this.router.getCurrentNavigation()?.extras?.state?.['data'] || window.history.state?.data;
    // route back on page reload
    if (!this.dataToEdit) {
      this.router.navigate(['/blogs']);
    } else {
      this.prefillForm();
    }
  }

  /**
   * Initializes Form Configuration
   */
  private get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      blogTitle: ['', Validators.required],
      blogURL: ['', Validators.required],
      blogButtonText: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }

  /**
   * Prefill form with data from firebase
   */
  private prefillForm() {
    this.blogsEditForm.patchValue({
      blogTitle: this.dataToEdit.blogTitle,
      blogURL: this.dataToEdit.blogURL,
      blogButtonText: this.dataToEdit.blogButtonText,
      description: this.prefillBlogDescription(this.dataToEdit.description)
    });
    // as it is invoked immediately, it is not captured in CD, so delay the invocation
    setTimeout(() => this.displaySpinner.next(false));
  }

  /**
   * Prefill blog description
   * @param descriptionData { string[] } - array of description data
   */
  private prefillBlogDescription(descriptionData: string[]) {
    descriptionData.forEach((content) => {
      (this.blogsEditForm.get('description') as FormArray).push(
        new FormControl(content, Validators.required)
      );
    });
  }

  /**
   * Returns AbstractControl array for description property
   */
  get descriptionControlFn(): AbstractControl[] {
    return (this.blogsEditForm.get('description') as FormArray).controls;
  }

  /**
   * Returns FormControl for description property
   * @param index { number } - index of the description
   * @returns { FormControl } - FormControl for description
   */
  getDescriptionControl(index: number): FormControl {
    return (this.blogsEditForm.get('description') as FormArray).controls[index] as FormControl;
  }

  /**
   * Remove description from form
   * @param index { number } - index of the description
   */
  removeDescription(index: number): void {
    (this.blogsEditForm.get('description') as FormArray).removeAt(index);
  }

  /**
   * Add new description to form
   */
  addDescription(): void {
    (this.blogsEditForm.get('description') as FormArray).push(
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
  backToBlogsPage() {
    this.router.navigate(['/blogs']);
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    this.blogsEditForm.updateValueAndValidity();
    if (this.blogsEditForm.valid) {
      const editedData = {
        id: this.dataToEdit.id,
        ...this.blogsEditForm.value
      };
      this.contentService.updatePageContent<IBlogsPage>(PAGENAME.BLOGS, editedData).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/blogs']);
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
