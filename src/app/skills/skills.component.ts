import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { ISkillsPage } from '../shared/global.model';
import { skillsPageData } from '../shared/site-content/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {

  displayedColumns: Array<string> = ['experteise', 'skills'];
  skillsData$: BehaviorSubject<ISkillsPage> = new BehaviorSubject<ISkillsPage>(skillsPageData.en);

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    type key = keyof typeof skillsPageData;
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.skillsData$.next(skillsPageData[locale as key]);
    });
  }
}
