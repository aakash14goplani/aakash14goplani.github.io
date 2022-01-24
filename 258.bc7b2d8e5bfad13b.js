"use strict";(self.webpackChunkresume_angular=self.webpackChunkresume_angular||[]).push([[258],{9258:(ee,D,d)=>{d.r(D),d.d(D,{WorkExperienceModule:()=>z});var h=d(9808),m=d(449),p=d(7579),O=d(1135),T=d(5191),b=d(9646),g=d(2722),t=d(5e3),f=d(3191),A=d(226);class P extends class S{constructor(){this.expansionModel=new m.Ov(!0)}toggle(i){this.expansionModel.toggle(this._trackByValue(i))}expand(i){this.expansionModel.select(this._trackByValue(i))}collapse(i){this.expansionModel.deselect(this._trackByValue(i))}isExpanded(i){return this.expansionModel.isSelected(this._trackByValue(i))}toggleDescendants(i){this.expansionModel.isSelected(this._trackByValue(i))?this.collapseDescendants(i):this.expandDescendants(i)}collapseAll(){this.expansionModel.clear()}expandDescendants(i){let e=[i];e.push(...this.getDescendants(i)),this.expansionModel.select(...e.map(n=>this._trackByValue(n)))}collapseDescendants(i){let e=[i];e.push(...this.getDescendants(i)),this.expansionModel.deselect(...e.map(n=>this._trackByValue(n)))}_trackByValue(i){return this.trackBy?this.trackBy(i):i}}{constructor(i,e,n){super(),this.getLevel=i,this.isExpandable=e,this.options=n,this.options&&(this.trackBy=this.options.trackBy)}getDescendants(i){const n=[];for(let r=this.dataNodes.indexOf(i)+1;r<this.dataNodes.length&&this.getLevel(i)<this.getLevel(this.dataNodes[r]);r++)n.push(this.dataNodes[r]);return n}expandAll(){this.expansionModel.select(...this.dataNodes.map(i=>this._trackByValue(i)))}}const y=new t.OlP("CDK_TREE_NODE_OUTLET_NODE");let _=(()=>{class o{constructor(e,n){this.viewContainer=e,this._node=n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b),t.Y36(y,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkTreeNodeOutlet",""]]}),o})();class B{constructor(i){this.$implicit=i}}let x=(()=>{class o{constructor(e){this.template=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),o})(),u=(()=>{class o{constructor(e,n){this._differs=e,this._changeDetectorRef=n,this._onDestroy=new p.x,this._levels=new Map,this.viewChange=new O.X({start:0,end:Number.MAX_VALUE})}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}ngOnInit(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(n=>!n.when);this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;(0,m.Z9)(this._dataSource)?e=this._dataSource.connect(this):(0,T.b)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,b.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,g.R)(this._onDestroy)).subscribe(n=>this.renderNodeChanges(n)))}renderNodeChanges(e,n=this._dataDiffer,r=this._nodeOutlet.viewContainer,s){const c=n.diff(e);!c||(c.forEachOperation((a,k,v)=>{if(null==a.previousIndex)this.insertNode(e[v],v,r,s);else if(null==v)r.remove(k),this._levels.delete(a.item);else{const K=r.get(k);r.move(K,v)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,n){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(s=>s.when&&s.when(n,e))||this._defaultNodeDef}insertNode(e,n,r,s){const c=this._getNodeDef(e,n),a=new B(e);a.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==s&&this._levels.has(s)?this._levels.get(s)+1:0,this._levels.set(e,a.level),(r||this._nodeOutlet.viewContainer).createEmbeddedView(c.template,a,n),l.mostRecentTreeNode&&(l.mostRecentTreeNode.data=e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.ZZ4),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-tree"]],contentQueries:function(e,n,r){if(1&e&&t.Suo(r,x,5),2&e){let s;t.iGM(s=t.CRH())&&(n._nodeDefs=s)}},viewQuery:function(e,n){if(1&e&&t.Gf(_,7),2&e){let r;t.iGM(r=t.CRH())&&(n._nodeOutlet=r.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,n){1&e&&t.GkF(0,0)},directives:[_],encapsulation:2}),o})(),l=(()=>{class o{constructor(e,n){this._elementRef=e,this._tree=n,this._destroyed=new p.x,this._dataChanges=new p.x,o.mostRecentTreeNode=this,this.role="treeitem"}get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}ngOnInit(){this._parentNodeAriaLevel=function Z(o){let i=o.parentElement;for(;i&&!R(i);)i=i.parentElement;return i?i.classList.contains("cdk-nested-tree-node")?(0,f.su)(i.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",`${this.level+1}`)}ngOnDestroy(){o.mostRecentTreeNode===this&&(o.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){this.role="treeitem"}}return o.mostRecentTreeNode=null,o.\u0275fac=function(e){return new(e||o)(t.Y36(t.SBq),t.Y36(u))},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-tree-node"]],hostAttrs:[1,"cdk-tree-node"],hostVars:1,hostBindings:function(e,n){2&e&&t.uIk("aria-expanded",n.isExpanded)},inputs:{role:"role"},exportAs:["cdkTreeNode"]}),o})();function R(o){const i=o.classList;return!(!(null==i?void 0:i.contains("cdk-nested-tree-node"))&&!(null==i?void 0:i.contains("cdk-tree")))}const I=/([A-Za-z%]+)$/;let N=(()=>{class o{constructor(e,n,r,s){this._treeNode=e,this._tree=n,this._element=r,this._dir=s,this._destroyed=new p.x,this.indentUnits="px",this._indent=40,this._setPadding(),s&&s.change.pipe((0,g.R)(this._destroyed)).subscribe(()=>this._setPadding(!0)),e._dataChanges.subscribe(()=>this._setPadding())}get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){const e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,n=null==this._level?e:this._level;return"number"==typeof n?`${n*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){const n=this._paddingIndent();if(n!==this._currentPadding||e){const r=this._element.nativeElement,s=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",c="paddingLeft"===s?"paddingRight":"paddingLeft";r.style[s]=n||"",r.style[c]="",this._currentPadding=n}}_setLevelInput(e){this._level=(0,f.su)(e,null),this._setPadding()}_setIndentInput(e){let n=e,r="px";if("string"==typeof e){const s=e.split(I);n=s[0],r=s[1]||r}this.indentUnits=r,this._indent=(0,f.su)(n),this._setPadding()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l),t.Y36(u),t.Y36(t.SBq),t.Y36(A.Is,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:["cdkTreeNodePadding","level"],indent:["cdkTreeNodePaddingIndent","indent"]}}),o})(),M=(()=>{class o{constructor(e,n){this._tree=e,this._treeNode=n,this._recursive=!1}get recursive(){return this._recursive}set recursive(e){this._recursive=(0,f.Ig)(e)}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u),t.Y36(l))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,n){1&e&&t.NdJ("click",function(s){return n._toggle(s)})},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),o})(),W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();const F=[{title:"Accenture",startDate:new Date("10/07/2015"),endDate:null,expandable:!0,level:0,isExpanded:!0,id:"01"},{title:"Team Lead",startDate:new Date("06/01/2021"),endDate:null,location:"Mumbai, India",expandable:!0,level:1,id:"11"},{description:["Will hold mostly description on TL","Will hold mostly description on TL","Will hold mostly description on TL","Will hold mostly description on TL"],showMoreContent:!1,expandable:!1,level:2,id:"21"},{title:"Senior Analyst",startDate:new Date("12/01/2018"),endDate:new Date("05/31/2020"),location:"Mumbai, India",description:[""],expandable:!0,level:1,id:"12"},{description:["Will hold mostly description on SSE","Will hold mostly description on SSE","Will hold mostly description on SSE"],showMoreContent:!1,expandable:!1,level:2,id:"22"},{title:"Analyst",startDate:new Date("12/01/2016"),endDate:new Date("11/30/2018"),location:"Mumbai, India",description:[""],expandable:!0,level:1,id:"13"},{description:["Will hold mostly description on SE","Will hold mostly description on SE"],showMoreContent:!1,expandable:!1,level:2,id:"23"},{title:"Associate",startDate:new Date("10/07/2015"),endDate:new Date("11/30/2016"),location:"Mumbai, India",expandable:!0,level:1,id:"14"},{description:["Will hold mostly description on ASE"],showMoreContent:!1,expandable:!1,level:2,id:"24"}];var C=d(9224),E=d(7423),w=d(3874);function Y(o,i){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" - ",e," ")}}const U=function(o){return{"flex-direction":o}},V=function(o){return{"max-height":o}};function q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"cdk-tree-node",7),t.TgZ(1,"div",8),t.YNc(2,Y,2,1,"p",9),t.qZA(),t.TgZ(3,"div",10),t.TgZ(4,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().updateShowMoreContentForNode(s)}),t._uU(5),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.oxw();t.Udp("display",n.shouldRender(e)?"flex":"none"),t.Q6J("ngStyle",t.VKq(6,U,2===n.treeControl.getLevel(e)?"column":"row")),t.xp6(1),t.Q6J("ngStyle",t.VKq(8,V,e.showMoreContent?"inherit":"4rem")),t.xp6(1),t.Q6J("ngForOf",e.description),t.xp6(3),t.Oqu(e.showMoreContent?"show less":"... show more")}}function Q(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"div",21),t._uU(2),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit,n=t.oxw();t.xp6(2),t.Oqu(n.computeRootNodeDuration(e.startDate,e.endDate))}}function J(o,i){if(1&o&&(t.TgZ(0,"div",21),t._uU(1),t.ALo(2,"date"),t.ALo(3,"date"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.AsE("",t.xi3(2,2,e.startDate,"mediumDate")," - ",e.endDate?t.xi3(3,5,e.endDate,"mediumDate"):"Present","")}}const $=function(o){return{"root-node":o}};function G(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"cdk-tree-node",12),t.TgZ(1,"div",13),t.TgZ(2,"button",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return s.isExpanded=!s.isExpanded}),t.TgZ(3,"mat-icon",15),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",16),t.TgZ(6,"div",17),t._uU(7),t.qZA(),t.YNc(8,Q,3,1,"ng-container",18),t.YNc(9,J,4,8,"ng-template",null,19,t.W1O),t.TgZ(11,"div",20),t._uU(12),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=t.MAs(10),r=t.oxw();t.Udp("display",r.shouldRender(e)?"flex":"none"),t.xp6(2),t.Udp("visibility",e.expandable?"visible":"hidden"),t.uIk("aria-label","Toggle "+e.name),t.xp6(2),t.hij(" ",0===r.treeControl.getLevel(e)?"expand_more ":r.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),t.xp6(2),t.Q6J("ngClass",t.VKq(11,$,0===r.treeControl.getLevel(e))),t.xp6(1),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",0===r.treeControl.getLevel(e))("ngIfElse",n),t.xp6(4),t.Oqu(e.location)}}let H=(()=>{class o{constructor(){this.EXPERIENCE_DATA=F,this.treeControl=new P(e=>e.level,e=>e.expandable),this.dataSource=new m.P3(this.EXPERIENCE_DATA),this.showMoreContent=!1,this.hasChild=(e,n)=>n.expandable}getParentNode(e){for(let r=this.EXPERIENCE_DATA.indexOf(e)-1;r>=0;r--)if(this.EXPERIENCE_DATA[r].level===e.level-1)return this.EXPERIENCE_DATA[r];return null}shouldRender(e){let n=this.getParentNode(e);for(;n;){if(!n.isExpanded)return!1;n=this.getParentNode(n)}return!0}trackByFn(e,n){return n.id}computeRootNodeDuration(e,n){let r=(n=n||new Date).getFullYear()-e.getFullYear(),s=n.getMonth()-e.getMonth();return s<0&&(r--,s+=12),r+" years, "+s+" months"}updateShowMoreContentForNode(e){e.showMoreContent=!e.showMoreContent}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-work-experience"]],decls:8,vars:4,consts:[["name","work-experience-page"],[1,"work-experience-container"],[1,"work-experience-container__title"],[1,"work-experience-container__contents"],[3,"dataSource","treeControl","trackBy"],["cdkTreeNodePadding","","class","example-tree-node",3,"display","ngStyle",4,"cdkTreeNodeDef"],["cdkTreeNodePadding","","class","example-tree-node",3,"display",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","",1,"example-tree-node",3,"ngStyle"],[1,"description",3,"ngStyle"],[4,"ngFor","ngForOf"],[1,"description-button"],["mat-button","",3,"click"],["cdkTreeNodePadding","",1,"example-tree-node"],[1,"node-icon"],["mat-icon-button","","cdkTreeNodeToggle","",3,"click"],[1,"mat-icon-rtl-mirror"],[1,"node-contents"],[1,"designation",3,"ngClass"],[4,"ngIf","ngIfElse"],["durationChildNodes",""],[1,"location"],[1,"duration"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"mat-card",1),t.TgZ(2,"mat-card-title",2),t._uU(3,"Organizations"),t.qZA(),t.TgZ(4,"mat-card-content",3),t.TgZ(5,"cdk-tree",4),t.YNc(6,q,6,10,"cdk-tree-node",5),t.YNc(7,G,13,13,"cdk-tree-node",6),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("dataSource",n.dataSource)("treeControl",n.treeControl)("trackBy",n.trackByFn),t.xp6(2),t.Q6J("cdkTreeNodeDefWhen",n.hasChild))},directives:[C.a8,C.n5,C.dn,u,x,l,N,h.PC,h.sg,E.lW,M,w.Hw,h.mk,h.O5],pipes:[h.uU],styles:[".work-experience-container__title[_ngcontent-%COMP%]{text-align:center;margin:2rem auto}.work-experience-container__contents[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%]{display:flex}.work-experience-container__contents[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{word-break:break-word;overflow:hidden}.work-experience-container__contents[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%]   .description-button[_ngcontent-%COMP%]{margin:-1rem 0 1rem}.work-experience-container__contents[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%]   .node-contents[_ngcontent-%COMP%]   .designation[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-weight:500;margin:.2rem 0;font-size:1.2rem;word-break:break-word}.work-experience-container__contents[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%]   .node-contents[_ngcontent-%COMP%]   .root-node[_ngcontent-%COMP%]{font-size:1.6rem;margin:.5rem 0}.work-experience-container__contents[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%]   .node-contents[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{margin-bottom:.5rem}@media screen and (min-width: 1024px){.work-experience-container[_ngcontent-%COMP%]{padding:3rem}}"],changeDetection:0}),o})();var X=d(4996);const j=[{path:"",component:H}];let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.ez,X.Bz.forChild(j),C.QW,W,E.ot,w.Ps]]}),o})()}}]);