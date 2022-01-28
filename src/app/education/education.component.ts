import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { IEducationPage } from '../shared/global.model';
import { educationData } from '../shared/site-content/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit {

  educationData$: BehaviorSubject<IEducationPage> = new BehaviorSubject<IEducationPage>(educationData.en);

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    type key = keyof typeof educationData;
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.educationData$.next(educationData[locale as key]);
    });
  }

}
