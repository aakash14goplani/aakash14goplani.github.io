import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IHomePage } from '../shared/global.model';
import { introduction } from '../shared/site-content/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  introduction$: BehaviorSubject<IHomePage> = new BehaviorSubject<IHomePage>(introduction.en);
  private clickCounter: number = 0;

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clickCounter = 0;
    type key = keyof typeof introduction;
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.introduction$.next(introduction[locale as key]);
    });
  }

  /**
   * Launches the auth screen when clicked 10 times
   * @param event { ClickEvent }
   * @returns void
   */
  launchAuthScreen(event: Event): void {
    event.preventDefault();
    this.clickCounter++;

    if (this.clickCounter >= 10) {
      this.clickCounter = 0;
      this.router.navigate(['/auth']);
    }
  }

}
