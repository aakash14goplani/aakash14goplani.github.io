import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    type key = keyof typeof introduction;
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.introduction$.next(introduction[locale as key]);
    });
  }

}
