import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContentService } from './shared/content.service';
import { INavigation } from './shared/global.model';

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

  constructor(
    private helperService: ContentService,
    private router: Router,
    private matIcon: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.matIcon.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons.svg'));
  }

  ngOnInit(): void {
    this.navigationDetails = this.helperService.getNavigationConfiguration();
  }

  close() {
    this.sidenav.close();
  }

  redirectToHomePage() {
    this.router.navigate(['']);
  }

  toggleLanguage() { }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection(): void {
    this.direction = this.direction === 'ltr' ? 'rtl' : 'ltr';
  }
}
