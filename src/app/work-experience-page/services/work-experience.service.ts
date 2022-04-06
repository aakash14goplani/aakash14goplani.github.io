import { Injectable } from '@angular/core';
import { ICompanyExperience } from 'src/app/shared/global.model';

@Injectable()
export class WorkExperienceService {

  constructor() { }

  groupDataById(data: ICompanyExperience[], predicate: (v: ICompanyExperience) => string): { [key: string]: ICompanyExperience[] } {
    return data.reduce((acc, value) => {
      (acc[predicate(value)] ||= []).push(value);
      return acc;
    }, {} as { [key: string]: ICompanyExperience[] });
  }
}
