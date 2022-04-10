/* eslint-disable no-prototype-builtins */
import { Injectable } from '@angular/core';
import { ICompanyExperience } from 'src/app/shared/global.model';
import firebase from 'firebase/compat/app';
import Timestamp = firebase.firestore.Timestamp;

@Injectable()
export class WorkExperienceService {

  private groupedData: { [key: string]: ICompanyExperience[] } = {};
  private deconstructedData: ICompanyExperience[] = [];
  private currentlyEditedData: ICompanyExperience[] = [];

  constructor() { }

  /**
   * Currently edited data
   * @param data { ICompanyExperience[] } - data to be edited
   */
  setCurrentlyEditedData(data: ICompanyExperience[]) {
    this.currentlyEditedData = data;
  }

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
      if (data.hasOwnProperty('endDate') || (editedData.endDate && editedData.levelId === data.levelId)) {
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

  /**
   * Adds new position for company
   * @param data { data } - new position to be added
   */
  addNewPositionInCompany(data: Partial<ICompanyExperience>): ICompanyExperience[] {
    const levelId = this.getUpdatedLevelId();
    this.currentlyEditedData.splice(1, 0, {
      title: data.title,
      startDate: Timestamp.fromDate(new Date(data.startDate)),
      endDate: data.endDate ? Timestamp.fromDate(new Date(data.endDate)) : null,
      location: data.location,
      expandable: true,
      level: 1,
      levelId
    } as ICompanyExperience);
    this.currentlyEditedData.splice(2, 0, {
      description: data.description,
      showMoreContent: false,
      expandable: false,
      level: 2,
      levelId
    } as ICompanyExperience);

    return this.currentlyEditedData;
  }

  /**
   * Returns level-id for given data
   * @returns { string } - new level id
   */
  private getUpdatedLevelId(): string {
    const lastData = this.currentlyEditedData[1];
    const lastDataLevelId = lastData.levelId;
    const newDataLevelId = lastDataLevelId.charAt(0) + ((+lastDataLevelId.charAt(1)) + 1);

    return newDataLevelId;
  }

  /**
   * Prepares data to be stored in firestore
   * @param data { any } - data to be added
   * @param key { number } - key in firestore
   * @returns { ICompanyExperience[] } - new data
   */
  prepareObjectForAddingNewCompany(data: any): ICompanyExperience[] {
    const array: ICompanyExperience[] = [];
    array.push({
      title: data.companyName,
      startDate: Timestamp.fromDate(new Date(data.companyStartDate)),
      endDate: data.companyEndDate ? Timestamp.fromDate(new Date(data.companyEndDate)) : null,
      expandable: true,
      level: 0,
      isExpanded: true,
      levelId: '00'
    }, {
      title: data.positionName,
      startDate: Timestamp.fromDate(new Date(data.positionStartDate)),
      endDate: data.positionEndDate ? Timestamp.fromDate(new Date(data.positionEndDate)) : null,
      location: data.location,
      expandable: true,
      level: 1,
      levelId: '01'
    }, {
      description: data.description,
      showMoreContent: false,
      expandable: false,
      level: 2,
      levelId: '01'
    });

    return array;
  }

}
