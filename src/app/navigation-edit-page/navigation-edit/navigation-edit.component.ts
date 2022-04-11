import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ContentService } from 'src/app/shared/content-service/content.service';
import { INavigation, PAGENAME } from 'src/app/shared/global.model';

@Component({
  selector: 'app-navigation-edit',
  templateUrl: './navigation-edit.component.html',
  styleUrls: ['./navigation-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationEditComponent implements OnInit, OnDestroy {

  navigationEditForm!: FormGroup[];
  displayContent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isFormValid: boolean = true;
  private unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contentService: ContentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.prefillForm();
  }

  @HostListener('window:focusout', ['$event'])
  onFocusOut(event: Event): void {
    this.isFormValid = true;
    for (const data of this.navigationEditForm) {
      this.isFormValid = this.isFormValid && data.valid;
    }
  }

  /**
   * Initialize form skeleton
   * @param index { number } index
   */
  private initializeFormSkeleton(index: number) {
    const formGroupObject = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      url: ['', Validators.required]
    });

    for (let i = index; i < this.navigationEditForm.length; i++) {
      this.navigationEditForm[i] = formGroupObject as FormGroup;
    }
  }

  /**
   * Prefill form with data from Firebase
   */
  private prefillForm(): void {
    (this.contentService.getContentForPage<{ [key: number]: INavigation[] }>(PAGENAME.NAVIGATION) as Observable<{ [key: number]: INavigation[] }>)
      .pipe(
        map(navigation => navigation[0]),
        tap((navigationData: INavigation[]) => {
          this.navigationEditForm = new Array(navigationData.length);
          for (let i = 0; i < navigationData.length; i++) {
            this.initializeFormSkeleton(i);

            this.navigationEditForm[i].patchValue({
              name: navigationData[i].name,
              url: navigationData[i].url,
              icon: navigationData[i].icon
            });
          }
          this.displayContent.next(true);
        }),
        catchError((error) => {
          this.handleFirebaseError(error);
          return EMPTY;
        }),
        takeUntil(this.unsubscriber$)
      ).subscribe();
  }

  /**
   * Handle firebase error.
   * @param err { any } error
   * @returns { Observable<any> } observable
   */
  private handleFirebaseError(err: any): void {
    this.snackBar.open(err, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.displayContent.next(true);
  }

  /**
   * Cancel editing & Navigate back to home page
   */
  onCancel(): void {
    this.router.navigate(['/home']);
  }

  /**
   * Save navigation data in Firebase
   */
  updateDetails(): void {
    if (this.isFormValid) {
      this.displayContent.next(false);
      const submittedValues: INavigation[] = [];
      for (const data of this.navigationEditForm) {
        submittedValues.push(data.value);
      }

      this.contentService.updatePageContent<{ content: INavigation[] }>(PAGENAME.NAVIGATION, { content: submittedValues }, true, 0).pipe(
        takeUntil(this.unsubscriber$)
      ).subscribe({
        next: () => {
          this.displayContent.next(true);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.handleFirebaseError(err);
        }
      });
    } else {
      this.handleFirebaseError('Please fill all the required fields');
    }
  }

  ngOnDestroy(): void {
    this.displayContent.complete();
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
