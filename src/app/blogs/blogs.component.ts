import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IBlog } from '../shared/global.model';
import blogsData from '../shared/site-content/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogsComponent {

  env: any;
  blogData: Array<IBlog> = blogsData;

  constructor() { }

}
