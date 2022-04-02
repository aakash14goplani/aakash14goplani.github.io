import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IEducationPage, PAGENAME } from '../shared/global.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit, OnDestroy {

  educationData$!: Observable<IEducationPage>;
  displaySpinner$: Subject<boolean> = new Subject<boolean>();
  unsubscriber$: Subject<void> = new Subject<void>();

  constructor(
    private contentService: ContentService,
    private router: Router,
    public firebaseAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.displaySpinner$.next(true);
    this.educationData$ = (this.contentService.getContentForPage<IEducationPage>(PAGENAME.EDUCATION) as Observable<IEducationPage>)
      .pipe(
        tap(_ => this.displaySpinner$.next(false)),
        catchError((err) => {
          this.snackBar.open(err, 'X', {
            duration: 6000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          this.displaySpinner$.next(false);
          return EMPTY;
        })
      );
  }

  /**
   * Edit editEducation entry
   */
  editEducationPageDetails(): void {
    this.router.navigate(['/education-edit']);
  }

  ngOnDestroy(): void {
    this.displaySpinner$.complete();
  }

}
