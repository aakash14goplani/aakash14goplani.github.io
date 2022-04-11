"use strict";(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[394],{9394:(B,y,d)=>{d.r(y),d.d(y,{ProjectsEditModule:()=>Z});var m=d(9808),T=d(4202),g=d(3075),r=d(7579),E=d(8505),j=d(2722),I=d(4823),t=d(5e3),F=d(7632),P=d(1271),M=d(9224),x=d(4106),k=d(7531),b=d(9814),S=d(7423),D=d(5245),h=d(773);function w(c,u){1&c&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid title"),t.qZA())}function U(c,u){1&c&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid URL"),t.qZA())}function p(c,u){1&c&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid label text"),t.qZA())}function i(c,u){1&c&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid description"),t.qZA())}function o(c,u){if(1&c){const a=t.EpF();t.ynx(0,22),t.TgZ(1,"div")(2,"mat-form-field")(3,"mat-label"),t._uU(4),t.qZA(),t._UZ(5,"textarea",23),t.YNc(6,i,2,0,"mat-error",9),t.qZA(),t.TgZ(7,"button",24),t.NdJ("click",function(){const A=t.CHM(a).index;return t.oxw(2).removeFromArray("content",A)}),t.TgZ(8,"mat-icon"),t._uU(9,"delete"),t.qZA()()(),t.BQk()}if(2&c){const a=u.$implicit,l=u.index,f=t.oxw(2);t.Q6J("formGroupName",l),t.xp6(4),t.hij("Project Para Description #",l+1,""),t.xp6(1),t.Q6J("formControl",f.getFormControlFor("content",l)),t.xp6(1),t.Q6J("ngIf",null==a?null:a.errors)}}function _(c,u){1&c&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter valid tools name"),t.qZA())}function C(c,u){if(1&c){const a=t.EpF();t.ynx(0,22),t.TgZ(1,"div")(2,"mat-form-field")(3,"mat-label"),t._uU(4),t.qZA(),t._UZ(5,"input",25),t.YNc(6,_,2,0,"mat-error",9),t.qZA(),t.TgZ(7,"button",24),t.NdJ("click",function(){const A=t.CHM(a).index;return t.oxw(2).removeFromArray("tools",A)}),t.TgZ(8,"mat-icon"),t._uU(9,"delete"),t.qZA()()(),t.BQk()}if(2&c){const a=u.$implicit,l=u.index,f=t.oxw(2);t.Q6J("formGroupName",l),t.xp6(4),t.hij("Project Tools #",l+1,""),t.xp6(1),t.Q6J("formControl",f.getFormControlFor("tools",l)),t.xp6(1),t.Q6J("ngIf",null==a?null:a.errors)}}function e(c,u){if(1&c){const a=t.EpF();t.TgZ(0,"form",6),t.NdJ("ngSubmit",function(){return t.CHM(a),t.oxw().onSubmit()}),t.TgZ(1,"div",7)(2,"mat-form-field")(3,"mat-label"),t._uU(4,"Project Title"),t.qZA(),t._UZ(5,"input",8),t.YNc(6,w,2,0,"mat-error",9),t.qZA()(),t.TgZ(7,"div",7)(8,"mat-form-field")(9,"mat-label"),t._uU(10,"Project URL"),t.qZA(),t._UZ(11,"input",10),t.YNc(12,U,2,0,"mat-error",9),t.qZA()(),t.TgZ(13,"div",11)(14,"mat-radio-group",12)(15,"mat-label"),t._uU(16,"Show More Content?"),t.qZA(),t.TgZ(17,"mat-radio-button",13),t._uU(18,"Yes"),t.qZA(),t.TgZ(19,"mat-radio-button",13),t._uU(20,"No"),t.qZA()()(),t.TgZ(21,"div",7)(22,"mat-form-field")(23,"mat-label"),t._uU(24,"Project Label Text"),t.qZA(),t._UZ(25,"input",14),t.YNc(26,p,2,0,"mat-error",9),t.qZA()(),t.TgZ(27,"div",15),t.YNc(28,o,10,4,"ng-container",16),t.qZA(),t.TgZ(29,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw().addNewFormControlFor("content")}),t.TgZ(30,"mat-icon"),t._uU(31,"add"),t.qZA(),t.TgZ(32,"span"),t._uU(33,"Add New Description"),t.qZA()(),t.TgZ(34,"div",18),t.YNc(35,C,10,4,"ng-container",16),t.qZA(),t.TgZ(36,"button",17),t.NdJ("click",function(){return t.CHM(a),t.oxw().addNewFormControlFor("tools")}),t.TgZ(37,"mat-icon"),t._uU(38,"add"),t.qZA(),t.TgZ(39,"span"),t._uU(40,"Add New tools"),t.qZA()(),t.TgZ(41,"mat-card-actions",19)(42,"button",20),t.NdJ("click",function(){return t.CHM(a),t.oxw().backToProjectsPage()}),t._uU(43,"Cancel"),t.qZA(),t.TgZ(44,"button",21),t._uU(45,"Save"),t.qZA()()()}if(2&c){const a=t.oxw();let l,f,A;t.Q6J("formGroup",a.projectsEditForm),t.xp6(6),t.Q6J("ngIf",null==a.projectsEditForm||null==(l=a.projectsEditForm.get("title"))?null:l.errors),t.xp6(6),t.Q6J("ngIf",null==a.projectsEditForm||null==(f=a.projectsEditForm.get("link"))?null:f.errors),t.xp6(5),t.Q6J("value",!0),t.xp6(2),t.Q6J("value",!1),t.xp6(7),t.Q6J("ngIf",null==a.projectsEditForm||null==(A=a.projectsEditForm.get("buttonText"))?null:A.errors),t.xp6(2),t.Q6J("ngForOf",a.getAbstractControlFor("content")),t.xp6(7),t.Q6J("ngForOf",a.getAbstractControlFor("tools")),t.xp6(9),t.Q6J("disabled",!a.projectsEditForm.valid)}}function n(c,u){1&c&&t._UZ(0,"mat-spinner",26),2&c&&t.Q6J("diameter",100)}const v=[{path:"",component:(()=>{class c{constructor(a,l,f,A){var O,N,L,R;this.formBuilder=a,this.router=l,this.contentService=f,this._snackBar=A,this.displaySpinner=new r.x,this.unsubscriber$=new r.x,this.projectsEditForm=this.formConfiguration,this.dataToEdit=(null===(L=null===(N=null===(O=this.router.getCurrentNavigation())||void 0===O?void 0:O.extras)||void 0===N?void 0:N.state)||void 0===L?void 0:L.data)||(null===(R=window.history.state)||void 0===R?void 0:R.data),this.dataToEdit?(this.prefillForm(),setTimeout(()=>this.displaySpinner.next(!1))):this.router.navigate(["/projects"])}get formConfiguration(){return this.formBuilder.group({title:["",g.kI.required],link:["",g.kI.required],showMoreContent:["",g.kI.required],buttonText:["",g.kI.required],content:this.formBuilder.array([]),tools:this.formBuilder.array([])})}prefillForm(){this.projectsEditForm.patchValue({title:this.dataToEdit.title,link:this.dataToEdit.link,showMoreContent:this.dataToEdit.showMoreContent,buttonText:this.dataToEdit.buttonText,content:this.prefillFormArray("content",this.dataToEdit.content),tools:this.prefillFormArray("tools",this.dataToEdit.tools)})}prefillFormArray(a,l){l.forEach(f=>{this.projectsEditForm.get(a).push(new g.NI(f,g.kI.required))})}getAbstractControlFor(a){return this.projectsEditForm.get(a).controls}getFormControlFor(a,l){return this.projectsEditForm.get(a).controls[l]}removeFromArray(a,l){this.projectsEditForm.get(a).removeAt(l)}addNewFormControlFor(a){this.projectsEditForm.get(a).push(new g.NI("",g.kI.required))}handleFirebaseError(a){this._snackBar.open(a,"X",{duration:6e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.displaySpinner.next(!1)}backToProjectsPage(){this.router.navigate(["/projects"])}onSubmit(){if(this.projectsEditForm.updateValueAndValidity(),this.projectsEditForm.valid){const a=Object.assign({id:this.dataToEdit.id},this.projectsEditForm.value);this.contentService.updatePageContent(I.M_.PROJECTS,a).pipe((0,E.b)(l=>this.displaySpinner.next(!0)),(0,j.R)(this.unsubscriber$)).subscribe({next:()=>{this.displaySpinner.next(!1),this.router.navigate(["/projects"])},error:l=>{this.handleFirebaseError(l)}})}}ngOnDestroy(){this.displaySpinner.complete(),this.unsubscriber$.next(),this.unsubscriber$.complete()}}return c.\u0275fac=function(a){return new(a||c)(t.Y36(g.qu),t.Y36(T.F0),t.Y36(F._),t.Y36(P.ux))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-projects-edit"]],decls:9,vars:4,consts:[["for","projects-edit-page"],[1,"projects-edit-page__container"],[1,"projects-edit-page__container__title"],[1,"projects-edit-page__container__contents"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["displayLoadingSpinner",""],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","matInput","","placeholder","Project Title","formControlName","title"],[4,"ngIf"],["type","text","matInput","","placeholder","Project URL","formControlName","link"],[1,"form-group__radio-group"],["aria-label","Show More Content?","formControlName","showMoreContent"],[3,"value"],["type","text","matInput","","placeholder","Project Button Text","formControlName","buttonText"],["formArrayName","content",1,"projects-edit-page__container__contents--description"],[3,"formGroupName",4,"ngFor","ngForOf"],["mat-raised-button","","type","button","color","primary",1,"projects-edit-page__container__contents--add-btn-cta",3,"click"],["formArrayName","tools",1,"projects-edit-page__container__contents--description"],[1,"projects-edit-page__container__contents__cta"],["mat-raised-button","","color","primary","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"formGroupName"],["matInput","","placeholder","Project Description","rows","5",3,"formControl"],["mat-raised-button","","type","button","color","warn",3,"click"],["type","text","matInput","","placeholder","Project Tools","rows","5",3,"formControl"],[3,"diameter"]],template:function(a,l){if(1&a&&(t.TgZ(0,"section",0)(1,"mat-card",1)(2,"mat-card-title",2),t._uU(3,"Edit Project Details"),t.qZA(),t.TgZ(4,"mat-card-content",3),t.YNc(5,e,46,9,"form",4),t.ALo(6,"async"),t.qZA()()(),t.YNc(7,n,1,1,"ng-template",null,5,t.W1O)),2&a){const f=t.MAs(8);t.xp6(5),t.Q6J("ngIf",!1===t.lcZ(6,2,l.displaySpinner))("ngIfElse",f)}},directives:[M.a8,M.n5,M.dn,m.O5,g._Y,g.JL,g.sg,x.KE,x.hX,k.Nt,g.Fj,g.JJ,g.u,x.TO,b.VQ,b.U0,g.CE,m.sg,g.x0,g.oH,S.lW,D.Hw,M.hq,h.Ou],pipes:[m.Ov],styles:[".projects-edit-page__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:2rem}.projects-edit-page__container__title[_ngcontent-%COMP%]{text-align:center}.projects-edit-page__container__contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:1rem 0}.projects-edit-page__container__contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex}.projects-edit-page__container__contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group__radio-group[_ngcontent-%COMP%]{margin:1rem 0}.projects-edit-page__container__contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group__radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin:0 2rem}.projects-edit-page__container__contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}.projects-edit-page__container__contents--description[_ngcontent-%COMP%]{display:flex;align-self:stretch;flex-direction:column}.projects-edit-page__container__contents--description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.projects-edit-page__container__contents--description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:70%}.projects-edit-page__container__contents--add-btn-cta[_ngcontent-%COMP%]{margin:2rem 0}.projects-edit-page__container__contents__cta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:2rem}@media screen and (min-width: 768px){.projects-edit-page__container__contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:70%}}"],changeDetection:0}),c})()}];let Z=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[m.ez,T.Bz.forChild(v),g.UX,M.QW,S.ot,h.Cq,P.ZX,x.lN,k.c,D.Ps,b.Fk]]}),c})()},9224:(B,y,d)=>{d.d(y,{$j:()=>x,G2:()=>S,QW:()=>C,a8:()=>i,dk:()=>o,dn:()=>P,hq:()=>k,n5:()=>M,rt:()=>b});var m=d(5e3),T=d(6360),g=d(508);const r=["*",[["mat-card-footer"]]],E=["*","mat-card-footer"],j=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],I=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let P=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=m.lG2({type:e,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=m.lG2({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=m.lG2({type:e,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),e})(),k=(()=>{class e{constructor(){this.align="start"}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=m.lG2({type:e,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(s,v){2&s&&m.ekj("mat-card-actions-align-end","end"===v.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=m.lG2({type:e,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-card-footer"]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275dir=m.lG2({type:e,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),e})(),i=(()=>{class e{constructor(s){this._animationMode=s}}return e.\u0275fac=function(s){return new(s||e)(m.Y36(T.Qb,8))},e.\u0275cmp=m.Xpm({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(s,v){2&s&&m.ekj("_mat-animation-noopable","NoopAnimations"===v._animationMode)},exportAs:["matCard"],ngContentSelectors:E,decls:2,vars:0,template:function(s,v){1&s&&(m.F$t(r),m.Hsn(0),m.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),e})(),o=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:I,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(s,v){1&s&&(m.F$t(j),m.Hsn(0),m.TgZ(1,"div",0),m.Hsn(2,1),m.qZA(),m.Hsn(3,2))},encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[g.BQ],g.BQ]}),e})()},773:(B,y,d)=>{d.d(y,{Cq:()=>w,Ou:()=>h});var m=d(3191),T=d(925),g=d(9808),r=d(5e3),E=d(508),j=d(6360),I=d(727),t=d(495);function F(p,i){if(1&p&&(r.O4$(),r._UZ(0,"circle",4)),2&p){const o=r.oxw(),_=r.MAs(1);r.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+o._spinnerAnimationLabel)("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(_)),r.uIk("r",o._getCircleRadius())}}function P(p,i){if(1&p&&(r.O4$(),r._UZ(0,"circle",4)),2&p){const o=r.oxw(),_=r.MAs(1);r.Udp("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(_)),r.uIk("r",o._getCircleRadius())}}const k=(0,E.pj)(class{constructor(p){this._elementRef=p}},"primary"),b=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function S(){return{diameter:100}}});class h extends k{constructor(i,o,_,C,e,n,s,v){super(i),this._document=_,this._diameter=100,this._value=0,this._resizeSubscription=I.w0.EMPTY,this.mode="determinate";const Z=h._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),Z.has(_.head)||Z.set(_.head,new Set([100])),this._noopAnimations="NoopAnimations"===C&&!!e&&!e._forceAnimations,"mat-spinner"===i.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),e&&(e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth)),o.isBrowser&&o.SAFARI&&s&&n&&v&&(this._resizeSubscription=s.change(150).subscribe(()=>{"indeterminate"===this.mode&&v.run(()=>n.markForCheck())}))}get diameter(){return this._diameter}set diameter(i){this._diameter=(0,m.su)(i),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(i){this._strokeWidth=(0,m.su)(i)}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,(0,m.su)(i)))}ngOnInit(){const i=this._elementRef.nativeElement;this._styleRoot=(0,T.kV)(i)||this._document.head,this._attachStyleNode(),i.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const i=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(i){var o;const _=50*(null!==(o=i.currentScale)&&void 0!==o?o:1);return`${_}% ${_}%`}_attachStyleNode(){const i=this._styleRoot,o=this._diameter,_=h._diameters;let C=_.get(i);if(!C||!C.has(o)){const e=this._document.createElement("style");e.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),e.textContent=this._getAnimationText(),i.appendChild(e),C||(C=new Set,_.set(i,C)),C.add(o)}}_getAnimationText(){const i=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*i).replace(/END_VALUE/g,""+.2*i).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}h._diameters=new WeakMap,h.\u0275fac=function(i){return new(i||h)(r.Y36(r.SBq),r.Y36(T.t4),r.Y36(g.K0,8),r.Y36(j.Qb,8),r.Y36(b),r.Y36(r.sBO),r.Y36(t.rL),r.Y36(r.R0b))},h.\u0275cmp=r.Xpm({type:h,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(i,o){2&i&&(r.uIk("aria-valuemin","determinate"===o.mode?0:null)("aria-valuemax","determinate"===o.mode?100:null)("aria-valuenow","determinate"===o.mode?o.value:null)("mode",o.mode),r.Udp("width",o.diameter,"px")("height",o.diameter,"px"),r.ekj("_mat-animation-noopable",o._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(i,o){1&i&&(r.O4$(),r.TgZ(0,"svg",0,1),r.YNc(2,F,1,11,"circle",2),r.YNc(3,P,1,9,"circle",3),r.qZA()),2&i&&(r.Udp("width",o.diameter,"px")("height",o.diameter,"px"),r.Q6J("ngSwitch","indeterminate"===o.mode),r.uIk("viewBox",o._getViewBox()),r.xp6(2),r.Q6J("ngSwitchCase",!0),r.xp6(1),r.Q6J("ngSwitchCase",!1))},directives:[g.RF,g.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let w=(()=>{class p{}return p.\u0275fac=function(o){return new(o||p)},p.\u0275mod=r.oAB({type:p}),p.\u0275inj=r.cJS({imports:[[E.BQ,g.ez],E.BQ]}),p})()}}]);