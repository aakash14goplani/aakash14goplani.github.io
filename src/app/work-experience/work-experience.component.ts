import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../shared/content-service/content.service';
import { ICompanyExperience, Locale } from '../shared/global.model';
import { workExperience } from '../shared/site-content/work-experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent implements OnInit {

  private EXPERIENCE_DATA: Array<ICompanyExperience> = workExperience.en;
  private locale: Locale = Locale.en;
  dataSource$: BehaviorSubject<ICompanyExperience[]> = new BehaviorSubject<ICompanyExperience[]>(this.EXPERIENCE_DATA);
  showMoreContent: boolean = false;
  treeControl: FlatTreeControl<ICompanyExperience> = new FlatTreeControl<ICompanyExperience>(
    node => node.level,
    node => node.expandable
  );

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.contentService.getApplicationLocale().subscribe((locale) => {
      this.locale = locale;
      this.EXPERIENCE_DATA = workExperience[locale as keyof typeof workExperience];
      this.dataSource$.next(this.EXPERIENCE_DATA);
    });
  }

  hasChild = (_: number, node: ICompanyExperience) => node.expandable;

  shouldRender(node: ICompanyExperience) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }

  private getParentNode(node: ICompanyExperience) {
    const nodeIndex = this.EXPERIENCE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.EXPERIENCE_DATA[i].level === node.level - 1) {
        return this.EXPERIENCE_DATA[i];
      }
    }

    return null;
  }

  computeRootNodeDuration(startDate: Date, endDate: Date): string {
    endDate = endDate ? endDate : new Date();
    let totalYears = endDate.getFullYear() - startDate.getFullYear();
    let partialMonths = endDate.getMonth() - startDate.getMonth();
    if (partialMonths < 0) {
      totalYears--;
      partialMonths = partialMonths + 12;
    }
    const _dateContent = {
      years: this.locale === Locale.en ? ' years, ' : ' साल, ',
      months: this.locale === Locale.en ? ' months' : ' महीने'
    };

    return totalYears + _dateContent.years + partialMonths + _dateContent.months;
  }

  updateShowMoreContentForNode(node: ICompanyExperience) {
    node.showMoreContent = !node.showMoreContent;
  }

}
