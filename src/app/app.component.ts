import { Direction } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContentService } from './shared/content-service/content.service';
import { INavigation, IThemes, Locale, PAGENAME, PAGENAME_HI, SessionKey } from './shared/global.model';
import { navigation } from './shared/site-content/navigation';
import { ThemeService } from './shared/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  direction!: Direction;
  language!: Locale;
  isMobile: boolean = true;
  navigationDetails$: BehaviorSubject<Array<INavigation>> = new BehaviorSubject<Array<INavigation>>(navigation.en);
  options$: Observable<Array<IThemes>> = this.themeService.getThemeOptions();
  activeTheme: string = '';
  themeType: string = '';
  currentYear: number = new Date().getFullYear();
  locale: Locale = Locale.en;
  LocalEnum = Locale;

  constructor(
    private helperService: ContentService,
    private themeService: ThemeService,
    private matIcon: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar,
    public firebaseAuth: AngularFireAuth
  ) {
    this.matIcon.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons.svg'));
  }

  ngOnInit(): void {
    this.configureThemeOption();
    this.configureDirectionOption();
    this.configureLanguageOption();
    type key = keyof typeof navigation;
    this.helperService.getApplicationLocale().subscribe((locale) => {
      this.navigationDetails$.next(navigation[locale as key]);
      this.locale = locale;
    });
  }

  /**
   * Configure themes options from session storage. If value is present in session, select that
   * else fall back to default light theme.
   */
  private configureThemeOption(): void {
    const themeFromsession = sessionStorage.getItem(SessionKey.THEME);
    this.themeService.setTheme(themeFromsession ? themeFromsession : 'indigo-pink');
    this.activeTheme = themeFromsession ? themeFromsession : 'indigo-pink';
    this.themeType = this.getThemeType(this.activeTheme);
    sessionStorage.setItem(SessionKey.THEME, this.activeTheme);
  }

  /**
   * Configure direction options from session storage. If value is present in session, select that
   * else fall back to default ltr direction.
   */
  private configureDirectionOption(): void {
    const directionFromSession = sessionStorage.getItem(SessionKey.DIRECTION);
    this.direction = directionFromSession ? (directionFromSession as Direction) : 'ltr';
    sessionStorage.setItem(SessionKey.DIRECTION, this.direction);
  }

  /**
   * Configure language option from session storage. If value is present in session, select that
   * else fall back to default english language.
   */
  private configureLanguageOption(): void {
    const languageFromSession: Locale = sessionStorage.getItem(SessionKey.LANGUAGE) as Locale;
    this.language = languageFromSession ? languageFromSession : Locale.en;
    sessionStorage.setItem(SessionKey.LANGUAGE, this.language);
    this.helperService.updateContentLanguage(this.language);
  }

  /**
   * Close sidenav.
   */
  close(): void {
    this.sidenav.close();
  }

  /**
   * Change language.
   */
  toggleLanguage(): void {
    this.language = this.language === Locale.en ? Locale.hi : Locale.en;
    sessionStorage.setItem(SessionKey.LANGUAGE, this.language);
    this.helperService.updateContentLanguage(this.language);
  }

  /**
   * Change theme.
   * @param themeToSet { string } theme to be set
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
      const _snackBarText = {
        content: this.locale === Locale.en ? 'Feature still in progress' : 'सुविधा अभी जारी है',
        button: this.locale === Locale.en ? 'Close' : 'बंद करे'
      };
      this._snackBar.open(_snackBarText.content, _snackBarText.button, {
        duration: 6000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  }

  /**
   * Logout user.
   */
  logOut(): void {
    this.firebaseAuth.signOut()
      .then(() => {
        this._snackBar.open('You have been successfully logged out as Admin.', 'X', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.close();
      })
      .catch((error) => {
        this._snackBar.open(error, 'X', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.close();
      });
  }
}
