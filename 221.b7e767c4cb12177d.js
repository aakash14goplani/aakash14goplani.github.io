"use strict";(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[221],{2221:(I,p,e)=>{e.r(p),e.d(p,{BlogsModule:()=>D});var d=e(9808),u=e(7579),y=e(9841),f=e(4004),b=e(8505),h=e(262),v=e(515),A=e(2722),_=e(4823),t=e(5e3),T=e(7632),x=e(4202),O=e(3385),C=e(1271),s=e(8966),g=e(9224),m=e(7423),Z=e(5245),B=e(773);const M=["deleteConfirmationModal"];function $(o,a){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.Oqu(n)}}function P(o,a){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"a",14),t.NdJ("click",function(){t.CHM(n);const l=t.oxw().$implicit,c=t.oxw(2),r=t.MAs(8);return c.launchDeleteConfirmationModal(l,r)}),t._uU(2,"Delete"),t.qZA(),t.TgZ(3,"a",14),t.NdJ("click",function(){t.CHM(n);const l=t.oxw().$implicit;return t.oxw(2).editBlogsPageDetails(l)}),t._uU(4,"Edit"),t.qZA(),t.BQk()}}function S(o,a){if(1&o&&(t.TgZ(0,"mat-card",7)(1,"mat-card-title",8),t._uU(2),t.qZA(),t.TgZ(3,"mat-card-content",9),t.YNc(4,$,2,1,"div",10),t.qZA(),t.TgZ(5,"mat-card-actions",11)(6,"a",12),t._uU(7),t.qZA(),t.YNc(8,P,5,0,"ng-container",13),t.ALo(9,"async"),t.qZA()()),2&o){const n=a.$implicit,i=t.oxw(2);t.xp6(2),t.Oqu(n.blogTitle),t.xp6(2),t.Q6J("ngForOf",n.description),t.xp6(2),t.Q6J("href",n.blogURL,t.LSH),t.xp6(1),t.Oqu(n.blogButtonText),t.xp6(1),t.Q6J("ngIf",t.lcZ(9,5,i.isAdmin$))}}function U(o,a){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,S,10,7,"mat-card",6),t.qZA()),2&o){const n=a.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}function F(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"div",15)(1,"button",16),t.NdJ("click",function(){return t.CHM(n),t.oxw().addNewBlog()}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t._uU(4," Add New Blog "),t.qZA()()}}function N(o,a){1&o&&t._UZ(0,"mat-spinner",17),2&o&&t.Q6J("diameter",100)}function Q(o,a){1&o&&(t.TgZ(0,"h1",18),t._uU(1,"Are you sure?"),t.qZA(),t.TgZ(2,"div",19),t._uU(3,"Performing this action will delete this entry forever!"),t.qZA(),t.TgZ(4,"div",20)(5,"button",21),t._uU(6,"Cancel"),t.qZA(),t.TgZ(7,"button",22),t._uU(8,"Delete"),t.qZA()()),2&o&&(t.xp6(7),t.Q6J("mat-dialog-close",!0))}const Y=[{path:"",component:(()=>{class o{constructor(n,i,l,c,r){this.contentService=n,this.router=i,this.firebaseAuth=l,this.snackBar=c,this.dialog=r,this.displaySpinner$=new u.x,this.unsubscriber$=new u.x}ngOnInit(){this.isAdmin$=(0,y.a)([this.firebaseAuth.user,this.contentService.isDatabaseOnline]).pipe((0,f.U)(([n,i])=>!!n&&!!i)),this.displaySpinner$.next(!0),this.blogData$=this.contentService.getContentForPage(_.M_.BLOGS).pipe((0,f.U)(n=>n.map(i=>Object.assign({id:i.id},i.data))),(0,b.b)(n=>this.displaySpinner$.next(!1)),(0,h.K)(n=>(this.snackBar.open(n,"X",{duration:6e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.displaySpinner$.next(!1),v.E)))}launchDeleteConfirmationModal(n,i){this.dialog.open(i).afterClosed().subscribe(c=>{c&&(this.displaySpinner$.next(!0),this.contentService.deletePageContent(_.M_.BLOGS,n).pipe((0,b.b)(r=>this.displaySpinner$.next(!1)),(0,h.K)(r=>(this.snackBar.open(r,"X",{duration:6e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.displaySpinner$.next(!1),v.E)),(0,A.R)(this.unsubscriber$)).subscribe())})}editBlogsPageDetails(n){this.router.navigate(["/blogs-edit"],{state:{data:n}})}addNewBlog(){this.router.navigate(["/blogs-add"])}ngOnDestroy(){this.displaySpinner$.complete(),this.unsubscriber$.next(),this.unsubscriber$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(T._),t.Y36(x.F0),t.Y36(O.zQ),t.Y36(C.ux),t.Y36(s.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blogs"]],viewQuery:function(n,i){if(1&n&&t.Gf(M,7),2&n){let l;t.iGM(l=t.CRH())&&(i.dialogContent=l.first)}},decls:9,vars:7,consts:[["for","blogs"],["class","blogs-container",4,"ngIf","ngIfElse"],["class","add-new-blog-cta",4,"ngIf"],["displayLoadingSpinner",""],["deleteConfirmationModal",""],[1,"blogs-container"],["class","blogs-container__blog","role","main",4,"ngFor","ngForOf"],["role","main",1,"blogs-container__blog"],[1,"blogs-container__blog--title"],[1,"blogs-container__blog--content"],[4,"ngFor","ngForOf"],[1,"blogs-container__blog--cta"],["target","_blank","mat-raised-button","","color","primary",3,"href"],[4,"ngIf"],["mat-raised-button","","color","accent",3,"click"],[1,"add-new-blog-cta"],["mat-raised-button","","color","primary",3,"click"],[1,"skills-page-container__spinner",3,"diameter"],["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(n,i){if(1&n&&(t.TgZ(0,"section",0),t.YNc(1,U,2,1,"div",1),t.ALo(2,"async"),t.YNc(3,F,5,0,"div",2),t.ALo(4,"async"),t.qZA(),t.YNc(5,N,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Q,9,1,"ng-template",null,4,t.W1O)),2&n){const l=t.MAs(6);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,3,i.blogData$))("ngIfElse",l),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,5,i.isAdmin$))}},directives:[d.O5,d.sg,g.a8,g.n5,g.dn,g.hq,m.zs,m.lW,Z.Hw,B.Ou,s.uh,s.xY,s.H8,s.ZT],pipes:[d.Ov],styles:[".blogs-container[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column}.blogs-container__blog[_ngcontent-%COMP%]{margin-bottom:2rem}.blogs-container__blog--title[_ngcontent-%COMP%]{font-weight:600}.blogs-container__blog--content[_ngcontent-%COMP%]{margin-top:1rem;font-size:1rem;line-height:1.6rem}.blogs-container__blog--content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:1rem}.blogs-container__blog--cta[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.add-new-blog-cta[_ngcontent-%COMP%]{display:flex;justify-content:center}@media screen and (min-width: 1024px){.blogs-container__blog[_ngcontent-%COMP%]{padding:3rem}}"],changeDetection:0}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,x.Bz.forChild(Y),g.QW,m.ot,C.ZX,B.Cq,s.Is,Z.Ps]]}),o})()}}]);