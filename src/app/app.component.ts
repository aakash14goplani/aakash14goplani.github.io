import { Direction } from '@angular/cdk/bidi';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ContentService } from './shared/content-service/content.service';
import { INavigation, IThemes, PAGENAME, SessionKey } from './shared/global.model';
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
  language!: string;
  isMobile: boolean = true;
  navigationDetails$: Observable<Array<INavigation>> = this.helperService.getNavigationConfiguration();
  options$: Observable<Array<IThemes>> = this.themeService.getThemeOptions();
  activeTheme: string = '';
  themeType: string = '';
  currentYear: number = new Date().getFullYear();

  constructor(
    private helperService: ContentService,
    private themeService: ThemeService,
    private matIcon: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
  ) {
    this.matIcon.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons.svg'));
  }

  ngOnInit(): void {
    this.configureThemeOption();
    this.configureDirectionOption();
    this.configureLanguageOption();
  }

  private configureThemeOption(): void {
    const themeFromsession = sessionStorage.getItem(SessionKey.THEME);
    this.themeService.setTheme(themeFromsession ? themeFromsession : 'indigo-pink');
    this.activeTheme = themeFromsession ? themeFromsession : 'indigo-pink';
    this.themeType = this.getThemeType(this.activeTheme);
  }

  private configureDirectionOption(): void {
    const directionFromSession = sessionStorage.getItem(SessionKey.DIRECTION);
    this.direction = directionFromSession ? (directionFromSession as Direction) : 'ltr';
  }

  private configureLanguageOption(): void {
    const languageFromSession = sessionStorage.getItem(SessionKey.LANGUAGE);
    this.language = languageFromSession ? languageFromSession : 'en';
  }

  close() {
    this.sidenav.close();
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'hi' : 'en';
    sessionStorage.setItem(SessionKey.LANGUAGE, this.language);
  }

  changeTheme(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
    this.activeTheme = themeToSet;
    this.themeType = this.getThemeType(themeToSet);
    sessionStorage.setItem(SessionKey.THEME, themeToSet);
  }

  private getThemeType(theme: string): string {
    return (theme === 'indigo-pink' || theme === 'deeppurple-amber') ? 'light' : 'dark';
  }

  toggleDirection(): void {
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
    sessionStorage.setItem(SessionKey.DIRECTION, this.direction);
  }

  downloadResume(navItem: INavigation, event: Event): void {
    if (navItem.name.includes(PAGENAME.RESUME)) {
      event.preventDefault();
      this._snackBar.open('Feature still in progress', 'Close', {
        duration: 6000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  }
}
