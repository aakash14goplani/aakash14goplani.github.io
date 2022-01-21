import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ICertifications, IDegree, ISkills } from '../shared/global.model';
import { data } from '../shared/site-content/about-me';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  env: any;
  displayedColumns: Array<string> = ['experteise', 'skills'];
  educationDetails: Array<IDegree> = [];
  dataSource: Array<ISkills> = [];
  certificationList: Array<ICertifications> = [];
  futureLearningSkills: Array<string> = [];

  constructor() {
    this.env = environment;
  }

  ngOnInit(): void {
    this.dataSource = data.skills;
    this.futureLearningSkills = data.futureLearningSkills;
    this.certificationList = data.certificationList;
    this.educationDetails = data.educationDetails;
  }
}