import { Component, OnInit } from '@angular/core';
import { ICertifications, IDegree } from '../shared/global.model';
import { educationData } from '../shared/site-content/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationDetails: Array<IDegree> = [];
  certificationList: Array<ICertifications> = [];

  constructor() { }

  ngOnInit(): void {
    this.certificationList = educationData.certificationList;
    this.educationDetails = educationData.educationDetails;
  }

}
