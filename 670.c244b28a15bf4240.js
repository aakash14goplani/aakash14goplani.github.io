"use strict";(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[670],{4670:(W,h,d)=>{d.r(h),d.d(h,{WorkExperienceAddModule:()=>u});var i=d(1048),m=d(1659),C=d(8023),x=d(9018),y=d(8168),A=d(3568),b=d(3528),S=d(4823),D=d(6776),t=d(9724),_=d(5113),E=d(7632),v=d(9895),p=d(8182),g=d(2588),T=d(8904),I=d(3472),Z=d(4848);function P(n,l){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid company name"),t.qZA())}function F(n,l){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid start date"),t.qZA())}function w(n,l){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid company name"),t.qZA())}function N(n,l){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid start date"),t.qZA())}function O(n,l){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid location"),t.qZA())}function k(n,l){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid description"),t.qZA())}function e(n,l){if(1&n){const c=t.EpF();t.ynx(0,21),t.TgZ(1,"div")(2,"mat-form-field")(3,"mat-label"),t._uU(4),t.qZA(),t._UZ(5,"textarea",22),t.YNc(6,k,2,0,"mat-error",8),t.qZA(),t.TgZ(7,"button",23),t.NdJ("click",function(){const f=t.CHM(c).index;return t.oxw().removeFromArray("description",f)}),t.TgZ(8,"mat-icon"),t._uU(9,"delete"),t.qZA()()(),t.BQk()}if(2&n){const c=l.$implicit,o=l.index,s=t.oxw();t.Q6J("formGroupName",o),t.xp6(4),t.hij("Description #",o+1,""),t.xp6(1),t.Q6J("formControl",s.getFormControlFor("description",o)),t.xp6(1),t.Q6J("ngIf",null==c?null:c.errors)}}const a=[{path:"",component:(()=>{class n{constructor(c,o,s,f,M){this.formBuilder=c,this.router=o,this.contentService=s,this._snackBar=f,this.weService=M,this.displaySpinner=new C.x,this.unsubscriber$=new C.x,this.isFormValid=!0,this.displayAddNewPositionTemplate=!1,this.addNewExperience=this.formSkeleton,setTimeout(()=>this.displaySpinner.next(!1))}get formSkeleton(){return this.formBuilder.group({companyName:["",m.kI.required],positionName:["",m.kI.required],companyStartDate:["",m.kI.required],companyEndDate:[""],positionStartDate:["",m.kI.required],positionEndDate:[""],location:["",m.kI.required],description:this.formBuilder.array([])})}getAbstractControlFor(c){return this.addNewExperience.controls[c].controls}getFormControlFor(c,o){return this.addNewExperience.controls[c].controls[o]}removeFromArray(c,o){this.addNewExperience.controls[c].removeAt(o)}addNewFormControlFor(c){this.addNewExperience.controls[c].push(new m.NI("",m.kI.required))}handleFirebaseError(c){return this._snackBar.open(c,"X",{duration:6e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.displaySpinner.next(!1),x.E}backToWorkExperiencePage(){this.router.navigate(["/work-experience"])}onSubmit(){if(this.addNewExperience.updateValueAndValidity(),this.addNewExperience.valid){this.displaySpinner.next(!0);const c=this.weService.prepareObjectForAddingNewCompany(this.addNewExperience.value);this.contentService.addPageContent(S.M_.WORK_EXPERIENCE,{0:c}).pipe((0,y.b)(()=>{this.displaySpinner.next(!1),this.router.navigate(["/work-experience"])}),(0,A.K)(this.handleFirebaseError.bind(this)),(0,b.R)(this.unsubscriber$)).subscribe()}}ngOnDestroy(){this.unsubscriber$.next(),this.unsubscriber$.complete()}}return n.\u0275fac=function(c){return new(c||n)(t.Y36(m.qu),t.Y36(_.F0),t.Y36(E._),t.Y36(v.ux),t.Y36(D.M))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-work-experience-add"]],features:[t._Bn([D.M])],decls:61,vars:8,consts:[["for","add-new-company"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"container__root"],[1,"container__root__title"],[1,"container__root__content"],[1,"form-group"],["matInput","","placeholder","Company Name","formControlName","companyName"],[4,"ngIf"],["matInput","","placeholder","Company Start Date","formControlName","companyStartDate"],["matInput","","placeholder","Company End Date","formControlName","companyEndDate"],["matInput","","placeholder","Position Name","formControlName","positionName"],["matInput","","placeholder","Position Start Date","formControlName","positionStartDate"],["matInput","","placeholder","Position End Date","formControlName","positionEndDate"],["matInput","","placeholder","Location","formControlName","location"],["formArrayName","description",1,"form-group","description"],[3,"formGroupName",4,"ngFor","ngForOf"],["mat-raised-button","","type","button","color","primary",1,"add-btn-cta",3,"click"],[1,"cta"],["mat-raised-button","","color","primary","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"formGroupName"],["matInput","","placeholder","Description","rows","5",3,"formControl"],["mat-raised-button","","type","button","color","warn",3,"click"]],template:function(c,o){if(1&c&&(t.TgZ(0,"section",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"mat-card",3)(4,"mat-card-title",4),t._uU(5,"Add New Organization Details"),t.qZA(),t.TgZ(6,"mat-card-content",5)(7,"div",6)(8,"mat-form-field"),t._UZ(9,"input",7),t.YNc(10,P,2,0,"mat-error",8),t.qZA()(),t.TgZ(11,"div",6)(12,"mat-form-field"),t._UZ(13,"input",9),t.YNc(14,F,2,0,"mat-error",8),t.TgZ(15,"mat-hint"),t._uU(16,"Enter date in MM/DD/YYYY format"),t.qZA()()(),t.TgZ(17,"div",6)(18,"mat-form-field"),t._UZ(19,"input",10),t.TgZ(20,"mat-hint"),t._uU(21,"Leave blank if still working here else enter date in MM/DD/YYYY format"),t.qZA()()()()(),t.TgZ(22,"mat-card",3)(23,"mat-card-title",4),t._uU(24,"Add New Position Details"),t.qZA(),t.TgZ(25,"mat-card-content",5)(26,"div",6)(27,"mat-form-field"),t._UZ(28,"input",11),t.YNc(29,w,2,0,"mat-error",8),t.qZA()(),t.TgZ(30,"div",6)(31,"mat-form-field"),t._UZ(32,"input",12),t.YNc(33,N,2,0,"mat-error",8),t.TgZ(34,"mat-hint"),t._uU(35,"Enter date in MM/DD/YYYY format"),t.qZA()()(),t.TgZ(36,"div",6)(37,"mat-form-field"),t._UZ(38,"input",13),t.TgZ(39,"mat-hint"),t._uU(40,"Leave blank if still working here else enter date in MM/DD/YYYY format"),t.qZA()()(),t.TgZ(41,"div",6)(42,"mat-form-field"),t._UZ(43,"input",14),t.YNc(44,O,2,0,"mat-error",8),t.qZA()(),t.TgZ(45,"div",15),t.YNc(46,e,10,4,"ng-container",16),t.qZA(),t.TgZ(47,"button",17),t.NdJ("click",function(){return o.addNewFormControlFor("description")}),t.TgZ(48,"mat-icon"),t._uU(49,"add"),t.qZA(),t.TgZ(50,"span"),t._uU(51,"Add New Description"),t.qZA()(),t.TgZ(52,"mat-card-actions",18)(53,"button",19),t.NdJ("click",function(){return o.backToWorkExperiencePage()}),t._uU(54,"Cancel"),t.qZA(),t.TgZ(55,"button",20),t._uU(56,"Save"),t.qZA()()(),t.TgZ(57,"mat-card-footer")(58,"p")(59,"i"),t._uU(60,"You can only add one position here. If you want to add more position, click on edit button on main page."),t.qZA()()()()()()()),2&c){let s,f,M,U,Y;t.xp6(2),t.Q6J("formGroup",o.addNewExperience),t.xp6(8),t.Q6J("ngIf",null==o.addNewExperience||null==(s=o.addNewExperience.get("companyName"))?null:s.errors),t.xp6(4),t.Q6J("ngIf",null==o.addNewExperience||null==(f=o.addNewExperience.get("companyStartDate"))?null:f.errors),t.xp6(15),t.Q6J("ngIf",null==o.addNewExperience||null==(M=o.addNewExperience.get("positionName"))?null:M.errors),t.xp6(4),t.Q6J("ngIf",null==o.addNewExperience||null==(U=o.addNewExperience.get("positionStartDate"))?null:U.errors),t.xp6(11),t.Q6J("ngIf",null==o.addNewExperience||null==(Y=o.addNewExperience.get("location"))?null:Y.errors),t.xp6(2),t.Q6J("ngForOf",o.getAbstractControlFor("description")),t.xp6(9),t.Q6J("disabled",!o.addNewExperience.valid)}},directives:[m._Y,m.JL,m.sg,p.a8,p.n5,p.dn,g.KE,T.Nt,m.Fj,m.JJ,m.u,i.O5,g.TO,g.bx,m.CE,i.sg,m.x0,g.hX,m.oH,I.lW,Z.Hw,p.hq,p.rt],styles:[".container[_ngcontent-%COMP%]{margin:2rem;display:flex;flex-direction:column}.container__root[_ngcontent-%COMP%]{display:flex;margin:2rem auto;padding:2rem;flex-direction:column}.container__root__title[_ngcontent-%COMP%]{text-align:center}.container__root__content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:1rem auto}.container__root__content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}.container__root__content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{display:flex;align-self:stretch;flex-direction:column;margin:1rem auto}.container__root__content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.container__root__content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:70%}.container__root__content[_ngcontent-%COMP%]   .add-btn-cta[_ngcontent-%COMP%]{margin:2rem 0}.container__root__content[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:2rem}"],changeDetection:0}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[i.ez,_.Bz.forChild(a),m.UX,p.QW,I.ot,Z.Ps,v.ZX,g.lN,T.c]]}),n})()},8182:(W,h,d)=>{d.d(h,{$j:()=>E,G2:()=>g,QW:()=>k,a8:()=>w,dk:()=>N,dn:()=>t,hq:()=>v,n5:()=>_,rt:()=>p});var i=d(9724),m=d(1278),C=d(1531);const x=["*",[["mat-card-footer"]]],y=["*","mat-card-footer"],A=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],b=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let t=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=i.lG2({type:e,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=i.lG2({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=i.lG2({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),e})(),v=(()=>{class e{constructor(){this.align="start"}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=i.lG2({type:e,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(a,u){2&a&&i.ekj("mat-card-actions-align-end","end"===u.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=i.lG2({type:e,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-card-footer"]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=i.lG2({type:e,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),e})(),w=(()=>{class e{constructor(a){this._animationMode=a}}return e.\u0275fac=function(a){return new(a||e)(i.Y36(m.Qb,8))},e.\u0275cmp=i.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(a,u){2&a&&i.ekj("_mat-animation-noopable","NoopAnimations"===u._animationMode)},exportAs:["matCard"],ngContentSelectors:y,decls:2,vars:0,template:function(a,u){1&a&&(i.F$t(x),i.Hsn(0),i.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),e})(),N=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:b,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(a,u){1&a&&(i.F$t(A),i.Hsn(0),i.TgZ(1,"div",0),i.Hsn(2,1),i.qZA(),i.Hsn(3,2))},encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[C.BQ],C.BQ]}),e})()}}]);