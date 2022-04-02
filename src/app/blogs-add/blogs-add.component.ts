import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, tap, takeUntil } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IBlogsPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-blogs-add',
  templateUrl: './blogs-add.component.html',
  styleUrls: ['./blogs-add.component.scss']
})
export class BlogsAddComponent implements OnDestroy {

  blogsAddForm: FormGroup;
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.blogsAddForm = this.formConfiguration;
  }

  /**
   * Initializes Form Configuration
   */
  private get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      blogTitle: ['', Validators.required],
      blogURL: ['', Validators.required],
      blogButtonText: ['', Validators.required],
      description: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ])
    });
  }

  /**
   * Returns AbstractControl array for description property
   */
  get descriptionControlFn(): AbstractControl[] {
    return (this.blogsAddForm.get('description') as FormArray).controls;
  }

  /**
   * Returns FormControl for description property
   * @param index { number } - index of the description
   * @returns { FormControl } - FormControl for description
   */
  getDescriptionControl(index: number): FormControl {
    return (this.blogsAddForm.get('description') as FormArray).controls[index] as FormControl;
  }

  /**
   * Remove description from form
   * @param index { number } - index of the description
   */
  removeDescription(index: number): void {
    (this.blogsAddForm.get('description') as FormArray).removeAt(index);
  }

  /**
   * Add new description to form
   */
  addDescription(): void {
    (this.blogsAddForm.get('description') as FormArray).push(
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
    this.blogsAddForm.updateValueAndValidity();
    if (this.blogsAddForm.valid) {
      this.contentService.addPageContent<IBlogsPage>(PAGENAME.BLOGS, this.blogsAddForm.value).pipe(
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
