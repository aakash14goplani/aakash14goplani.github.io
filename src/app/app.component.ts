import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ContentService } from './shared/content-service/content.service';
import { INavigation, IThemes } from './shared/global.model';
import { ThemeService } from './shared/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isDarkTheme: boolean = false;
  direction: Direction = 'ltr';
  isMobile: boolean = true;
  navigationDetails: Array<INavigation> = [];
  showHomeButton: boolean = true;
  options$: Observable<Array<IThemes>> = this.themeService.getThemeOptions();

  constructor(
    private helperService: ContentService,
    private themeService: ThemeService,
    private matIcon: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIcon.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons.svg'));
  }

  ngOnInit(): void {
    this.navigationDetails = this.helperService.getNavigationConfiguration();
    this.configureThemeOption();
  }

  private configureThemeOption(): void {
    this.themeService.setTheme('deeppurple-amber');
  }

  close() {
    this.sidenav.close();
  }

  toggleLanguage() { }

  changeTheme(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
  }

  toggleDirection(): void {
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
  }
}
