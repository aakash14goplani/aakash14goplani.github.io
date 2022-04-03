import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from '../../shared/content-service/content.service';
import { IHomePage, PAGENAME } from '../../shared/global.model';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEditComponent implements OnInit, OnDestroy {

  homeEditForm: FormGroup;
  imageUrl: string = '';
  displaySpinner: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();
  private filePath: string = '';
  private file!: File;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private service: ContentService,
    private _snackBar: MatSnackBar
  ) {
    this.homeEditForm = this.formConfiguration;
  }

  /**
   * Initializes Form Configuration
   */
  private get formConfiguration(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required],
      imageURL: '',
      socialHandles: this.formBuilder.array([])
    });
  }

  /**
   * Return social handles array control
   */
  get socialHandlesControlFn() {
    return (this.homeEditForm.get('socialHandles') as FormArray).controls;
  }

  ngOnInit(): void {
    (this.service.getContentForPage<IHomePage>(PAGENAME.HOME) as Observable<IHomePage>).pipe(
      tap(_ => this.displaySpinner.next(true)),
      takeUntil(this.unsubscriber$)
    ).subscribe({
      next: (data) => {
        if (data) {
          this.prefillForm(data);
        }
      },
      error: (err) => {
        this.handleFirebaseError(err);
      }
    });
  }

  /**
   * Prefill form with data
   * @param data { IHomePage }
   */
  private prefillForm(data: IHomePage) {
    this.homeEditForm.patchValue({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      imageURL: data.imageURL,
      socialHandles: this.getPrefillValueForSocialHandles(data.socialHandles)
    });
    this.imageUrl = data.imageURL;
    this.displaySpinner.next(false);
  }

  /**
   * Prefill social handles array
   * @param socialHandles { ISocialHandle[] }
   */
  private getPrefillValueForSocialHandles(socialHandles: Array<{ title: string; url: string; }>): void {
    socialHandles.forEach((socialHandle) => {
      (this.homeEditForm.get('socialHandles') as FormArray).push(this.formBuilder.group({
        title: [socialHandle.title, Validators.required],
        url: [socialHandle.url, Validators.required]
      }));
    });
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
   * Upload image to firebase storage
   * @param event { Event }
   */
  previewImage(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    this.filePath = `profile-picture/${this.file.name}`;

    this.service.uploadFileToFireStorage(this.filePath, this.file).pipe(
      tap((url) => {
        this.homeEditForm.patchValue({ imageURL: url });
        this.imageUrl = url;
        this.cdr.markForCheck();
      }),
      catchError((err) => {
        this.handleFirebaseError(err);
        return EMPTY;
      }),
      takeUntil(this.unsubscriber$)
    ).subscribe();
  }

  /**
   * Return back to home page when clicked on cancel button
   */
  backToHomePage() {
    this.router.navigate(['/home']);
  }

  /**
   * Remove social handle at index i
   * @param index { number }
   */
  removeSocialHandle(index: number): void {
    (this.homeEditForm.get('socialHandles') as FormArray).removeAt(index);
  }

  /**
   * Add new social handle
   */
  addNewSocialHandle(): void {
    (this.homeEditForm.get('socialHandles') as FormArray).push(
      this.formBuilder.group({
        title: ['', Validators.required],
        url: ['', Validators.required]
      })
    );
  }

  /**
   * Submit form and update content in firebase
   */
  onSubmit() {
    this.homeEditForm.updateValueAndValidity();
    if (this.homeEditForm.valid) {
      this.service.updatePageContent<IHomePage>(PAGENAME.HOME, this.homeEditForm.value).pipe(
        tap(_ => this.displaySpinner.next(true)),
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displaySpinner.next(false);
          this.router.navigate(['/home']);
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
