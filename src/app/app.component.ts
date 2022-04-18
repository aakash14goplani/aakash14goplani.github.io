import { Direction } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, Subject, take, tap } from 'rxjs';
import { ContentService } from './shared/content-service/content.service';
import { INavigation, IThemes, Locale, PAGENAME, PAGENAME_HI, SessionKey } from './shared/global.model';
import { ServiceWorkerEventsService } from './shared/service-worker-events/service-worker-events.service';
import { ThemeService } from './shared/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('navList', { static: false }) navList!: ElementRef;
  direction!: Direction;
  language!: Locale;
  isMobile: boolean = true;
  navigationDetails$!: Observable<INavigation[]>;
  options$!: Observable<Array<IThemes>>;
  activeTheme: string = '';
  themeType: string = '';
  currentYear: number = new Date().getFullYear();
  locale: Locale = Locale.en;
  LocalEnum = Locale;
  private unsubscriber$: Subject<void> = new Subject<void>();
  private resumeURL: string = '../assets/files/Resume_Aakash_Goplani.pdf';

  constructor(
    public helperService: ContentService,
    private themeService: ThemeService,
    private matIcon: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar,
    public firebaseAuth: AngularFireAuth,
    private router: Router,
    private serviceWorker: ServiceWorkerEventsService,
    private renderer: Renderer2
  ) {
    this.matIcon.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons.svg'));
  }

  ngOnInit(): void {
    setTimeout(() => this.serviceWorker.configureServiceWorker(), 1000);
    this.configureThemeOption();
    this.configureDirectionOption();
    this.configureLanguageOption();
    this.configureNavigationOptions();
  }

  /**
   * @description: Configure Side Navigation
   * @returns { void }
   */
  private configureNavigationOptions(): void {
    this.navigationDetails$ = (this.helperService.getContentForPage<{ [key: number]: INavigation[] }>(PAGENAME.NAVIGATION) as Observable<{ [key: number]: INavigation[] }>)
      .pipe(
        map(navigation => navigation[0]),
        catchError(this.handleFirebaseError.bind(this))
      );
  }

  /**
   * @description: Configure themes options from session storage. If value is present in session, select that
   * else fall back to default light theme.
   * @returns { void }
   */
  private configureThemeOption(): void {
    this.options$ = this.themeService.getThemeOptions().pipe(
      catchError(this.handleFirebaseError.bind(this))
    );
    const themeFromSession = sessionStorage.getItem(SessionKey.THEME);
    this.themeService.setTheme(themeFromSession ? themeFromSession : 'indigo-pink');
    this.activeTheme = themeFromSession ? themeFromSession : 'indigo-pink';
    this.themeType = this.getThemeType(this.activeTheme);
    sessionStorage.setItem(SessionKey.THEME, this.activeTheme);
  }

  /**
   * Handle firebase error.
   * @param err { any } error
   * @returns { Observable<any> } observable
   */
  private handleFirebaseError(err: any): Observable<never> {
    this._snackBar.open(err, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    return EMPTY;
  }

  /**
   * @description: Configure direction options from session storage. If value is present in session, select that
   * else fall back to default ltr direction.
   * @returns { void }
   */
  private configureDirectionOption(): void {
    const directionFromSession = sessionStorage.getItem(SessionKey.DIRECTION);
    this.direction = directionFromSession ? (directionFromSession as Direction) : 'ltr';
    sessionStorage.setItem(SessionKey.DIRECTION, this.direction);
  }

  /**
   * Configure language option from session storage. If value is present in session, select that
   * else fall back to default english language.
   * @returns { void }
   */
  private configureLanguageOption(): void {
    const languageFromSession: Locale = sessionStorage.getItem(SessionKey.LANGUAGE) as Locale;
    this.language = languageFromSession ? languageFromSession : Locale.en;
    sessionStorage.setItem(SessionKey.LANGUAGE, this.language);
    this.helperService.updateContentLanguage(this.language);
  }

  /**
   * Close sidenav.
   * @returns { void }
   */
  close(): void {
    this.sidenav.close();
  }

  /**
   * Change language.
   * @returns { void }
   */
  toggleLanguage(): void {
    this.language = this.language === Locale.en ? Locale.hi : Locale.en;
    sessionStorage.setItem(SessionKey.LANGUAGE, this.language);
    this.helperService.updateContentLanguage(this.language);
  }

  /**
   * Change theme.
   * @param themeToSet { string } theme to be set
   * @returns { void }
   */
  changeTheme(themeToSet: string): void {
    this.themeService.setTheme(themeToSet);
    this.activeTheme = themeToSet;
    this.themeType = this.getThemeType(themeToSet);
    sessionStorage.setItem(SessionKey.THEME, themeToSet);
  }

  /**
   * Get theme type - light | dark
   * @param theme { string } theme to be set
   * @returns { string } theme type
   */
  private getThemeType(theme: string): string {
    return (theme === 'indigo-pink' || theme === 'deeppurple-amber') ? 'light' : 'dark';
  }

  /**
   * Toggle directions.
   * @returns { void }
   */
  toggleDirection(): void {
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
    sessionStorage.setItem(SessionKey.DIRECTION, this.direction);
  }

  /**
   * Download the resume.
   * @param navItem { INavigation } navigation item
   * @param event { Event } event
   */
  downloadResume(navItem: INavigation, event: Event): void {
    if (navItem.name.includes(PAGENAME.RESUME) || navItem.name.includes(PAGENAME_HI.RESUME)) {
      event.preventDefault();
      this.helperService.downloadResume().pipe(
        tap((url) => {
          this.resumeURL = url ? url : this.resumeURL;

          const link = this.renderer.createElement('a');
          this.renderer.setAttribute(link, 'download', 'Resume_Aakash_Goplani.pdf');
          this.renderer.setAttribute(link, 'href', this.resumeURL);
          this.renderer.setAttribute(link, 'target', '_blank');
          this.renderer.appendChild(this.navList.nativeElement, link);
          link.click();
          this.renderer.removeChild(this.navList.nativeElement, link);
        }),
        take(1),
        catchError(this.handleFirebaseError.bind(this))
      ).subscribe();
    }
  }

  /**
   * Logout user.
   * @returns { void }
   */
  logOut(): void {
    this.firebaseAuth.signOut()
      .then(() => {
        this.performLogoutActions('You have been successfully logged out as Admin.');
      })
      .catch((error) => {
        this.performLogoutActions(error);
      });
  }

  /**
   * Navigate to the navigate-edit page.
   * @returns { void }
   */
  editNavItems(): void {
    this.close();
    this.router.navigate(['/navigation-edit']);
  }

  /**
   * Perform logout actions.
   * @param message { string } error/success message
   * @returns { void }
   */
  private performLogoutActions(message: string | any): void {
    this._snackBar.open(message, 'X', {
      duration: 6000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.close();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
}
