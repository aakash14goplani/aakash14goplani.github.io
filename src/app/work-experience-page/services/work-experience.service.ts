/* eslint-disable no-prototype-builtins */
import { Injectable } from '@angular/core';
import { ICompanyExperience } from 'src/app/shared/global.model';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable()
export class WorkExperienceService {

  private groupedData: { [key: string]: ICompanyExperience[] } = {};
  private deconstructedData: ICompanyExperience[] = [];

  constructor() { }

  /**
   * Groups data by levelId
   * @param data { ICompanyExperience[] } - data to be grouped
   * @param predicate property on which object to group
   * @returns { { [key: string]: ICompanyExperience[] } } - grouped data
   */
  groupDataById(data: ICompanyExperience[], predicate: (v: ICompanyExperience) => string): { [key: string]: ICompanyExperience[] } {
    this.groupedData = data.reduce((acc, value) => {
      (acc[predicate(value)] ||= []).push(value);
      return acc;
    }, {} as { [key: string]: ICompanyExperience[] });

    return this.groupedData;
  }

  /**
   * Ungroup data that was previously grouped
   * @param data { ICompanyExperience[] } - data to be un-grouped
   * @returns { ICompanyExperience[] } - un-grouped data
   */
  prepareObjectToStoreInFirestore(data: ICompanyExperience[]): ICompanyExperience[] {
    for (let i = 0; i < data.length; i++) {
      const editedData: ICompanyExperience = data[i];
      const correspondingDataBeforeEdit: ICompanyExperience[] = this.groupedData[editedData.levelId];
      this.decontructData(editedData, correspondingDataBeforeEdit);
    }

    return this.deconstructedData;
  }

  /**
   * Helper function to deconstruct data
   * @param editedData { ICompanyExperience } - data to be edited
   * @param originalData { ICompanyExperience[] } - data before edit
   */
  private decontructData(editedData: ICompanyExperience, originalData: ICompanyExperience[]): void {
    for (const data of originalData) {
      const newlyPreparedData: ICompanyExperience = {} as ICompanyExperience;
      if (data.hasOwnProperty('title')) {
        newlyPreparedData.title = editedData.title;
      }
      if (data.hasOwnProperty('startDate')) {
        newlyPreparedData.startDate = editedData.startDate ? Timestamp.fromDate(new Date(editedData.startDate)) : null;
      }
      if (data.hasOwnProperty('endDate')) {
        newlyPreparedData.endDate = editedData.endDate ? Timestamp.fromDate(new Date(editedData.endDate)) : null;
      }
      if (data.hasOwnProperty('location')) {
        newlyPreparedData.location = editedData.location;
      }
      if (data.hasOwnProperty('showMoreContent')) {
        newlyPreparedData.showMoreContent = editedData.showMoreContent;
      }
      if (data.hasOwnProperty('description')) {
        newlyPreparedData.description = editedData.description;
      }
      if (data.hasOwnProperty('levelId')) {
        newlyPreparedData.levelId = editedData.levelId;
      }
      if (data.isExpanded) {
        newlyPreparedData.isExpanded = data.isExpanded;
      }
      newlyPreparedData.level = data.level;
      newlyPreparedData.expandable = data.expandable;

      this.deconstructedData.push(newlyPreparedData);
    }
  }

}
