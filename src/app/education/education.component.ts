import { Component, OnInit } from '@angular/core';
import { ICertifications, IDegree } from '../shared/global.model';
import { data } from '../shared/site-content/about-me';

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
    this.certificationList = data.certificationList;
    this.educationDetails = data.educationDetails;
  }

}
