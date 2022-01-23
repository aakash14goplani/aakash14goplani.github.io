import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICompanyExperience } from '../shared/global.model';
import workExperience from '../shared/site-content/work-experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent {

  private readonly EXPERIENCE_DATA = workExperience;

  treeControl = new FlatTreeControl<ICompanyExperience>(
    node => node.level,
    node => node.expandable
  );

  dataSource = new ArrayDataSource(this.EXPERIENCE_DATA);

  showMoreContent: boolean = false;

  constructor() { }

  hasChild = (_: number, node: ICompanyExperience) => node.expandable;

  getParentNode(node: ICompanyExperience) {
    const nodeIndex = this.EXPERIENCE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.EXPERIENCE_DATA[i].level === node.level - 1) {
        return this.EXPERIENCE_DATA[i];
      }
    }

    return null;
  }

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

  trackByFn(index: number, item: ICompanyExperience) {
    return item.id;
  }

  computeRootNodeDuration(startDate: Date, endDate: Date): string {
    endDate = endDate ? endDate : new Date();
    let totalYears = endDate.getFullYear() - startDate.getFullYear();
    let partialMonths = endDate.getMonth() - startDate.getMonth();
    if (partialMonths < 0) {
      totalYears--;
      partialMonths = partialMonths + 12;
    }

    return totalYears + ' years, ' + partialMonths + ' months';
  }

  updateShowMoreContentForNode(node: ICompanyExperience) {
    node.showMoreContent = !node.showMoreContent;
  }

}
