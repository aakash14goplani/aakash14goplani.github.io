"use strict";(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[592],{97:(D,c,o)=>{o.d(c,{b:()=>a});var d=o(7241),i=o(5975);function a(l){return!!l&&(l instanceof d.y||(0,i.m)(l.lift)&&(0,i.m)(l.subscribe))}},6776:(D,c,o)=>{o.d(c,{M:()=>l});var d=o(7841),i=o(9724),a=d.Z.firestore.Timestamp;let l=(()=>{class s{constructor(){this.groupedData={},this.deconstructedData=[],this.currentlyEditedData=[]}setCurrentlyEditedData(e){this.currentlyEditedData=e}groupDataById(e,n){return this.groupedData=e.reduce((t,r)=>{var p;return(t[p=n(r)]||(t[p]=[])).push(r),t},{}),this.groupedData}prepareObjectToStoreInFirestore(e){for(let n=0;n<e.length;n++){const t=e[n];this.decontructData(t,this.groupedData[t.levelId])}return this.deconstructedData}decontructData(e,n){for(const t of n){const r={};t.hasOwnProperty("title")&&(r.title=e.title),t.hasOwnProperty("startDate")&&(r.startDate=e.startDate?a.fromDate(new Date(e.startDate)):null),(t.hasOwnProperty("endDate")||e.endDate&&e.levelId===t.levelId)&&(r.endDate=e.endDate?a.fromDate(new Date(e.endDate)):null),t.hasOwnProperty("location")&&(r.location=e.location),t.hasOwnProperty("showMoreContent")&&(r.showMoreContent=e.showMoreContent),t.hasOwnProperty("description")&&(r.description=e.description),t.hasOwnProperty("levelId")&&(r.levelId=e.levelId),t.isExpanded&&(r.isExpanded=t.isExpanded),r.level=t.level,r.expandable=t.expandable,this.deconstructedData.push(r)}}addNewPositionInCompany(e){const n=this.getUpdatedLevelId();return this.currentlyEditedData.splice(1,0,{title:e.title,startDate:a.fromDate(new Date(e.startDate)),endDate:e.endDate?a.fromDate(new Date(e.endDate)):null,location:e.location,expandable:!0,level:1,levelId:n}),this.currentlyEditedData.splice(2,0,{description:e.description,showMoreContent:!1,expandable:!1,level:2,levelId:n}),this.currentlyEditedData}getUpdatedLevelId(){const n=this.currentlyEditedData[1].levelId;return n.charAt(0)+(+n.charAt(1)+1)}prepareObjectForAddingNewCompany(e){const n=[];return n.push({title:e.companyName,startDate:a.fromDate(new Date(e.companyStartDate)),endDate:e.companyEndDate?a.fromDate(new Date(e.companyEndDate)):null,expandable:!0,level:0,isExpanded:!0,levelId:"00"},{title:e.positionName,startDate:a.fromDate(new Date(e.positionStartDate)),endDate:e.positionEndDate?a.fromDate(new Date(e.positionEndDate)):null,location:e.location,expandable:!0,level:1,levelId:"01"},{description:e.description,showMoreContent:!1,expandable:!1,level:2,levelId:"01"}),n}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac}),s})()}}]);