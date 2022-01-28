import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IBlogsPage } from '../shared/global.model';
import { blogsData } from '../shared/site-content/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsComponent implements OnInit {

  blogData$: BehaviorSubject<Array<IBlogsPage>> = new BehaviorSubject<Array<IBlogsPage>>(blogsData.en);

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    type key = keyof typeof blogsData;
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.blogData$.next(blogsData[locale as key]);
    });
  }

}
