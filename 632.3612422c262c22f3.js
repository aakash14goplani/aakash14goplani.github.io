"use strict";(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[632],{5632:(b,E,m)=>{m.r(E),m.d(E,{AuthModule:()=>h});var p=m(1048),c=m(1659),_=m(5113),r=m(4848),A=m(3472),S=m(8904),x=m(2234),T=m(9895),M=m(4039),C=m(8023),v=m(3072),t=m(9724),w=m(1858);let P=(()=>{class s{constructor(e){this.firebaseAuth=e}signInWithEmailAndPassword(e,i){return(0,v.P)(()=>this.firebaseAuth.signInWithEmailAndPassword(e,i).then(a=>({isValidUser:!!a.user,errorMessage:""})).catch(a=>({isValidUser:!1,errorMessage:this.parseSingInResponse(a)})))}resetPassword(e){return(0,v.P)(()=>this.firebaseAuth.sendPasswordResetEmail(e).then(i=>({isValidUser:!0,errorMessage:"Please check your email with password reset instructions."})).catch(i=>({isValidUser:!1,errorMessage:this.parseSingInResponse(i)})))}parseSingInResponse(e){let a="";switch(e.code||"default"){case"auth/user-not-found":a="There is no user corresponding to the given email.";break;case"auth/wrong-password":a="The password is invalid for the given email, or the account corresponding to the email does not have a password set.";break;case"auth/invalid-email":a="Email address is not valid.";break;case"auth/user-disabled":a="User corresponding to the given email has been disabled.";break;default:a=e.message||"Unable to authenticate user."}return a}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(w.zQ))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var k=m(2588);const y=["emailInput"];function u(s,l){1&s&&(t.TgZ(0,"div",7),t._UZ(1,"mat-spinner",8),t.qZA())}function U(s,l){1&s&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function I(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"mat-icon",21),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).showPassword=!0}),t._uU(1,"visibility_off"),t.qZA()}}function d(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"mat-icon",21),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).showPassword=!1}),t._uU(1,"visibility"),t.qZA()}}function o(s,l){1&s&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid password "),t.qZA())}function n(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",9)(1,"form",10),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().validateUser()}),t.TgZ(2,"div",11)(3,"mat-form-field",12)(4,"mat-label"),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",13,14),t.TgZ(8,"mat-icon",15),t._uU(9,"email"),t.qZA(),t.YNc(10,U,2,0,"mat-error",16),t.qZA()(),t.TgZ(11,"div",11)(12,"mat-form-field",12)(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",17),t.YNc(16,I,2,0,"mat-icon",18),t.YNc(17,d,2,0,"mat-icon",18),t.YNc(18,o,2,0,"mat-error",16),t.qZA()(),t.TgZ(19,"div",11)(20,"a",19),t.NdJ("click",function(){t.CHM(e);const a=t.MAs(7);return t.oxw().forgotPassword(null==a?null:a.value)}),t._uU(21," Forgot Password? Enter email and then click link!! "),t.qZA()(),t.TgZ(22,"div",11)(23,"button",20),t._uU(24," Submit "),t.qZA()()()()}if(2&s){const e=t.oxw();let i,a;t.xp6(1),t.Q6J("formGroup",e.loginForm),t.xp6(9),t.Q6J("ngIf",null==e.loginForm||null==(i=e.loginForm.get("email"))?null:i.errors),t.xp6(5),t.Q6J("type",e.showPassword?"text":"password"),t.xp6(1),t.Q6J("ngIf",!e.showPassword),t.xp6(1),t.Q6J("ngIf",e.showPassword),t.xp6(1),t.Q6J("ngIf",null==e.loginForm||null==(a=e.loginForm.get("password"))?null:a.errors),t.xp6(5),t.Q6J("disabled",!e.loginForm.valid)}}const g=[{path:"",component:(()=>{class s{constructor(e,i,a,O){this.formBuilder=e,this.authService=i,this.router=a,this._snackBar=O,this.displayLoginform=!1,this.displaySpinner$=new C.x,this.showPassword=!1,this.loginForm=this.formBuilder.group({email:["",[c.kI.required,c.kI.email]],password:["",[c.kI.required,c.kI.minLength(6)]]})}signInWithEmailAndPassword(){this.displayLoginform=!0}forgotPassword(e){e?(this.displaySpinner$.next(!0),this.authService.resetPassword(e).subscribe({next:i=>{i.errorMessage&&this._snackBar.open(i.errorMessage,"X",{duration:6e3,verticalPosition:"bottom",horizontalPosition:"center"})},complete:()=>this.displaySpinner$.next(!1)})):this.emailInput.nativeElement.focus()}validateUser(){this.loginForm.updateValueAndValidity(),this.loginForm.valid&&this.displayLoginform&&(this.displaySpinner$.next(!0),this.authService.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password).subscribe({next:e=>{e.isValidUser?this.router.navigate(["/home"]):e.errorMessage&&this._snackBar.open(e.errorMessage,"X",{duration:6e3,verticalPosition:"bottom",horizontalPosition:"center"})},complete:()=>this.displaySpinner$.next(!1)}))}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(c.qu),t.Y36(P),t.Y36(_.F0),t.Y36(T.ux))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-auth"]],viewQuery:function(e,i){if(1&e&&t.Gf(y,5),2&e){let a;t.iGM(a=t.CRH())&&(i.emailInput=a.first)}},features:[t._Bn([P])],decls:16,vars:4,consts:[["for","auth-wall"],[1,"auth-container"],[1,"auth-container__title"],[1,"auth-container__signInWithEmailAndPassword"],["mat-icon-button","","aria-label","Sign In With Email And Password Button",3,"click"],["class","auth-container__spinner",4,"ngIf"],["class","auth-container__login-form",4,"ngIf"],[1,"auth-container__spinner"],["aria-label","loading data"],[1,"auth-container__login-form"],[1,"example-form",3,"formGroup","ngSubmit"],[1,"form-group"],["appearance","fill",1,"example-full-width"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com"],["emailInput",""],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","password","placeholder","password",3,"type"],["matSuffix","",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["matSuffix","",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Sign In"),t.qZA()(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",3)(7,"button",4),t.NdJ("click",function(){return i.signInWithEmailAndPassword()}),t.TgZ(8,"mat-icon"),t._uU(9,"email"),t.qZA(),t.TgZ(10,"span"),t._uU(11,"Continue With Email"),t.qZA()()(),t._UZ(12,"mat-divider"),t.YNc(13,u,2,0,"div",5),t.ALo(14,"async"),t.YNc(15,n,25,7,"div",6),t.qZA()()),2&e&&(t.xp6(13),t.Q6J("ngIf",t.lcZ(14,2,i.displaySpinner$)),t.xp6(2),t.Q6J("ngIf",i.displayLoginform))},directives:[x.d,A.lW,r.Hw,p.O5,M.Ou,c._Y,c.JL,c.sg,k.KE,k.hX,S.Nt,c.Fj,c.JJ,c.u,k.R9,k.TO,A.zs],pipes:[p.Ov],styles:[".auth-container[_ngcontent-%COMP%]{padding:3rem;display:flex;flex-direction:column;align-content:center;max-width:30rem}.auth-container__title[_ngcontent-%COMP%]{display:flex}.auth-container__spinner[_ngcontent-%COMP%]{margin-top:1rem}.auth-container__signInWithEmailAndPassword[_ngcontent-%COMP%]{display:flex;margin:1rem 0}.auth-container__signInWithEmailAndPassword[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.auth-container__login-form[_ngcontent-%COMP%]{margin-top:3rem;display:flex;flex-direction:column}.auth-container__login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin:1rem 0}"],changeDetection:0}),s})()}];let h=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[p.ez,_.Bz.forChild(g),r.Ps,A.ot,S.c,x.t,T.ZX,M.Cq,c.UX]]}),s})()},4039:(b,E,m)=>{m.d(E,{Cq:()=>U,Ou:()=>u});var p=m(2541),c=m(6344),_=m(1048),r=m(9724),A=m(1531),S=m(1278),x=m(4813),T=m(150);function M(d,o){if(1&d&&(r.O4$(),r._UZ(0,"circle",4)),2&d){const n=r.oxw(),f=r.MAs(1);r.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+n._spinnerAnimationLabel)("stroke-dashoffset",n._getStrokeDashOffset(),"px")("stroke-dasharray",n._getStrokeCircumference(),"px")("stroke-width",n._getCircleStrokeWidth(),"%")("transform-origin",n._getCircleTransformOrigin(f)),r.uIk("r",n._getCircleRadius())}}function C(d,o){if(1&d&&(r.O4$(),r._UZ(0,"circle",4)),2&d){const n=r.oxw(),f=r.MAs(1);r.Udp("stroke-dashoffset",n._getStrokeDashOffset(),"px")("stroke-dasharray",n._getStrokeCircumference(),"px")("stroke-width",n._getCircleStrokeWidth(),"%")("transform-origin",n._getCircleTransformOrigin(f)),r.uIk("r",n._getCircleRadius())}}const w=(0,A.pj)(class{constructor(d){this._elementRef=d}},"primary"),P=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function k(){return{diameter:100}}});class u extends w{constructor(o,n,f,g,h,s,l,e){super(o),this._document=f,this._diameter=100,this._value=0,this._resizeSubscription=x.w0.EMPTY,this.mode="determinate";const i=u._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),i.has(f.head)||i.set(f.head,new Set([100])),this._noopAnimations="NoopAnimations"===g&&!!h&&!h._forceAnimations,"mat-spinner"===o.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),h&&(h.diameter&&(this.diameter=h.diameter),h.strokeWidth&&(this.strokeWidth=h.strokeWidth)),n.isBrowser&&n.SAFARI&&l&&s&&e&&(this._resizeSubscription=l.change(150).subscribe(()=>{"indeterminate"===this.mode&&e.run(()=>s.markForCheck())}))}get diameter(){return this._diameter}set diameter(o){this._diameter=(0,p.su)(o),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(o){this._strokeWidth=(0,p.su)(o)}get value(){return"determinate"===this.mode?this._value:0}set value(o){this._value=Math.max(0,Math.min(100,(0,p.su)(o)))}ngOnInit(){const o=this._elementRef.nativeElement;this._styleRoot=(0,c.kV)(o)||this._document.head,this._attachStyleNode(),o.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const o=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${o} ${o}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(o){var n;const f=50*(null!==(n=o.currentScale)&&void 0!==n?n:1);return`${f}% ${f}%`}_attachStyleNode(){const o=this._styleRoot,n=this._diameter,f=u._diameters;let g=f.get(o);if(!g||!g.has(n)){const h=this._document.createElement("style");h.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),h.textContent=this._getAnimationText(),o.appendChild(h),g||(g=new Set,f.set(o,g)),g.add(n)}}_getAnimationText(){const o=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*o).replace(/END_VALUE/g,""+.2*o).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}u._diameters=new WeakMap,u.\u0275fac=function(o){return new(o||u)(r.Y36(r.SBq),r.Y36(c.t4),r.Y36(_.K0,8),r.Y36(S.Qb,8),r.Y36(P),r.Y36(r.sBO),r.Y36(T.rL),r.Y36(r.R0b))},u.\u0275cmp=r.Xpm({type:u,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(o,n){2&o&&(r.uIk("aria-valuemin","determinate"===n.mode?0:null)("aria-valuemax","determinate"===n.mode?100:null)("aria-valuenow","determinate"===n.mode?n.value:null)("mode",n.mode),r.Udp("width",n.diameter,"px")("height",n.diameter,"px"),r.ekj("_mat-animation-noopable",n._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(o,n){1&o&&(r.O4$(),r.TgZ(0,"svg",0,1),r.YNc(2,M,1,11,"circle",2),r.YNc(3,C,1,9,"circle",3),r.qZA()),2&o&&(r.Udp("width",n.diameter,"px")("height",n.diameter,"px"),r.Q6J("ngSwitch","indeterminate"===n.mode),r.uIk("viewBox",n._getViewBox()),r.xp6(2),r.Q6J("ngSwitchCase",!0),r.xp6(1),r.Q6J("ngSwitchCase",!1))},directives:[_.RF,_.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let U=(()=>{class d{}return d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({imports:[[A.BQ,_.ez],A.BQ]}),d})()}}]);