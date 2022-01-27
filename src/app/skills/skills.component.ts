import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ISkills } from '../shared/global.model';
import { skillsData } from '../shared/site-content/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {

  env: any;
  displayedColumns: Array<string> = ['experteise', 'skills'];
  dataSource: Array<ISkills> = [];
  softSkills: Array<string> = [];
  futureLearningSkills: Array<string> = [];

  constructor() {
    this.env = environment;
  }

  ngOnInit(): void {
    this.dataSource = skillsData.technicalSkills;
    this.softSkills = skillsData.softSkills;
    this.futureLearningSkills = skillsData.futureLearningSkills;
  }
}
