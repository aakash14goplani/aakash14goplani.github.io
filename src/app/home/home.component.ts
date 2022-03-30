import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, switchMap, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { Collections, Documents, IHomePage, Locale } from '../shared/global.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  introduction$!: Observable<IHomePage | undefined>;
  displaySpinner$: Subject<boolean> = new Subject<boolean>();
  private clickCounter: number = 0;

  constructor(
    private contentService: ContentService,
    private router: Router,
    public firebaseAuth: AngularFireAuth,
    private datastore: AngularFirestore,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.clickCounter = 0;

    this.introduction$ = this.contentService.getApplicationLocale().pipe(
      tap(_ => this.displaySpinner$.next(true)),
      switchMap((locale) => {
        const document = locale === Locale.en ? Documents.HOME_PAGE_EN : Documents.HOME_PAGE_HI;
        return this.datastore.collection<IHomePage>(Collections.HOME_PAGE).doc(document).valueChanges();
      }),
      tap(_ => this.displaySpinner$.next(false)),
      catchError((err) => {
        this._snackBar.open(err, 'X', {
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
   * Launches the auth screen when clicked 10 times
   * @param event { ClickEvent }
   * @returns void
   */
  launchAuthScreen(event: Event): void {
    event.preventDefault();
    this.clickCounter++;

    if (this.clickCounter >= 2) {
      this.clickCounter = 0;
      this.router.navigate(['/auth']);
    }
  }

  /**
   * Edit home page content
   */
  editHomePageDetails(): void {
    this.router.navigate(['/home-edit']);
  }

}
