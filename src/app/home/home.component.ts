import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, Subject, take, tap } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IHomePage, PAGENAME } from '../shared/global.model';

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
  private isAdmin: boolean = false;

  constructor(
    private contentService: ContentService,
    private router: Router,
    public firebaseAuth: AngularFireAuth,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.clickCounter = 0;
    this.displaySpinner$.next(true);
    this.introduction$ = this.contentService.getContentForPage<IHomePage>(PAGENAME.HOME).pipe(
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

    this.firebaseAuth.authState.pipe(take(1)).subscribe(user => this.isAdmin = !!user);
  }

  /**
   * Launches the auth screen when clicked 10 times
   * @param event { ClickEvent }
   * @returns void
   */
  launchAuthScreen(event: Event): void {
    event.preventDefault();
    this.clickCounter++;

    if (this.clickCounter >= 2 && !this.isAdmin) {
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
