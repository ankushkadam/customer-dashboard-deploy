"use strict";(self.webpackChunkcustomer_dashboard=self.webpackChunkcustomer_dashboard||[]).push([[800],{8800:($,g,s)=>{s.r(g),s.d(g,{CustomerModule:()=>Y});var u=s(6895),h=s(2655),_=s(6931),t=s(4650),v=s(1135),C=s(1884),b=s(4004);class w{constructor(a){this.stateSubject=new v.X(a)}getState(){return this.stateSubject.pipe((0,C.x)())}getStateSnapshot(){return this.stateSubject.getValue()}select(a){return this.stateSubject.pipe((0,b.U)(n=>n[a]),(0,C.x)())}setState(a){const e=this.getStateSnapshot(),n=a instanceof Function?a(e):a,r=Object.assign({},e,n);this.stateSubject.next(r)}resetState(){this.stateSubject.next({})}}function P(){return new l({})}class l extends w{constructor(a){super(a)}}const m=[{id:1,firstName:"Vishal",lastName:"Sanap",email:"vishal@gmail.com",phoneNumber:"8596748596",active:!0},{id:2,firstName:"Sourabh",lastName:"Suryavanshi",email:"sourabh@gmail.com",phoneNumber:"7485968574",active:!0},{id:3,firstName:"Priyanka",lastName:"Shibe",email:"priyanka@gmail.com",phoneNumber:"7845986581",active:!0},{id:4,firstName:"Amit",lastName:"Kule",email:"amit@gmail.com",phoneNumber:"8596748785",active:!0},{id:5,firstName:"Amisha",lastName:"Nair",email:"amish@gmail.com",phoneNumber:"7596748596",active:!0},{id:6,firstName:"Avinash",lastName:"Sambherao",email:"avinash@gmail.com",phoneNumber:"8996748596",active:!0},{id:7,firstName:"Sunil",lastName:"Nemane",email:"sunit@gmail.com",phoneNumber:"8512748596",active:!0},{id:8,firstName:"Gayatri",lastName:"Dighe",email:"gayatri@gmail.com",phoneNumber:"8888748596",active:!0}];class f{constructor(){this.pageData={count:0,size:3,currentPage:0},this.sortData=[{key:"id",value:"desc"}]}}let p=(()=>{class o{constructor(e,n){this.customerConfig=e,this.store=n,this.store.resetState(),this.store.setState({...this.customerConfig})}getAllCustomerList(){const e=JSON.parse(JSON.stringify(m?.filter(n=>!0===n.active)));if(e&&e.length){this.sortingCustomerList(e);const n=this.filterCustomerAsPerPagination(e);this.store.setState({rowData:n})}else this.store.setState({rowData:[]})}sortingCustomerList(e){const{sortData:n}=this.store.getStateSnapshot();e.sort("asc"===n[0]?.value?(r,i)=>r[n[0]?.key]-i[n[0]?.key]:(r,i)=>i[n[0]?.key]-r[n[0]?.key])}filterCustomerAsPerPagination(e){let n=[],{pageData:r}=this.store.getStateSnapshot();return r.count=e.length,n=e.splice(0===r.currentPage?0:r.currentPage*r?.size,r.size),n}addCustomer(){const{rowData:e}=this.store.getStateSnapshot();e?.push({firstName:"Nayan",lastName:"Sutar",email:"xyz@gmail.com",phoneNumber:"8596748596"}),e?.reverse()}addAndEditCustomer(e,n){if(n){const r=m?.findIndex(i=>i.id===n);r&&(m[r].id=n,m[r].active=!0,m[r].email=e.email,m[r].firstName=e.firstName,m[r].lastName=e.lastName,m[r].phoneNumber=e.phoneNumber)}else e.id=m?.length>0?m?.length:1,e.active=!0,m?.push(e);this.getAllCustomerList()}changePageEvent(e){const{pageData:n}=this.store.getStateSnapshot();n.currentPage=e,this.store.setState({pageData:n}),this.getAllCustomerList()}deleteCustomer(e){if(m&&m.length){const n=m?.findIndex(r=>r.id===e?.id);m[n].active=!1}this.getAllCustomerList()}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(f),t.LFG(l))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();var N=s(5160),O=s(8618),M=s(6323),c=s(433);const Z=/^[6-9]\d{9}$/,x=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;let A=(()=>{class o{constructor(e,n,r){this.fb=e,this.service=n,this.store=r,this.formCloseEvent=new t.vpe}ngOnInit(){const{selectedCustomer:e}=this.store.getStateSnapshot();this.createCustomerForm(e)}get firstName(){return this.customerForm.get("firstName")}get lastName(){return this.customerForm.get("lastName")}get email(){return this.customerForm.get("email")}get phoneNumber(){return this.customerForm.get("phoneNumber")}createCustomerForm(e){this.customerForm=this.fb.group({firstName:["",c.kI.required],lastName:["",c.kI.required],email:["",[c.kI.required,c.kI.pattern(x)]],phoneNumber:["",[c.kI.required,c.kI.pattern(Z)]]}),e&&this.patchCustomerFormData(e)}patchCustomerFormData(e){e&&(this.customerId=e?.id,this.customerForm.patchValue(e))}submit(){this.customerForm.markAllAsTouched(),this.customerForm.invalid?alert("Invalid form, Please fill are correct deatails"):(this.service.addAndEditCustomer(this.customerForm.value,this.customerId),this.closeForm())}closeForm(){this.formCloseEvent.emit()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(c.qu),t.Y36(p),t.Y36(l))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer-form"]],outputs:{formCloseEvent:"formCloseEvent"},decls:45,vars:9,consts:[[1,"customer-form"],[1,"card"],[1,"card-header"],[1,"action-wrapper"],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-outline-secondary",3,"click"],[1,"card-body"],[3,"formGroup"],[1,"form-group"],["for","",1,"form-label"],[1,"red-asterisk"],["type","text","name","","id","","placeholder","First Name","formControlName","firstName",1,"form-control"],[1,"invalid-feedback"],["type","text","name","","id","","placeholder","Last Name","formControlName","lastName",1,"form-control"],["type","text","name","","id","","placeholder","eg: abc@gmail.com","formControlName","email",1,"form-control"],["type","text","name","","id","","placeholder","Phone Number","formControlName","phoneNumber",1,"form-control"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4,"Add Customer"),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return r.submit()}),t._uU(7,"Save"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return r.closeForm()}),t._uU(9,"Cancel"),t.qZA()()()(),t.TgZ(10,"div",1)(11,"div",6)(12,"form",7)(13,"div",8)(14,"label",9),t._uU(15,"First Name "),t.TgZ(16,"span",10),t._uU(17,"*"),t.qZA()(),t._UZ(18,"input",11),t.TgZ(19,"small",12),t._uU(20,"Please enter first name"),t.qZA()(),t.TgZ(21,"div",8)(22,"label",9),t._uU(23,"Last Name "),t.TgZ(24,"span",10),t._uU(25,"*"),t.qZA()(),t._UZ(26,"input",13),t.TgZ(27,"small",12),t._uU(28,"Please enter last name"),t.qZA()(),t.TgZ(29,"div",8)(30,"label",9),t._uU(31,"Email "),t.TgZ(32,"span",10),t._uU(33,"*"),t.qZA()(),t._UZ(34,"input",14),t.TgZ(35,"small",12),t._uU(36,"Please enter email"),t.qZA()(),t.TgZ(37,"div",8)(38,"label",9),t._uU(39,"Phone Number "),t.TgZ(40,"span",10),t._uU(41,"*"),t.qZA()(),t._UZ(42,"input",15),t.TgZ(43,"small",12),t._uU(44,"Please enter phone number"),t.qZA()()()()()()),2&n&&(t.xp6(12),t.Q6J("formGroup",r.customerForm),t.xp6(6),t.ekj("is-invalid",r.firstName.touched&&r.firstName.invalid),t.xp6(8),t.ekj("is-invalid",r.lastName.touched&&r.lastName.invalid),t.xp6(8),t.ekj("is-invalid",r.email.touched&&r.email.invalid),t.xp6(8),t.ekj("is-invalid",r.phoneNumber.touched&&r.phoneNumber.invalid))},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u],styles:[".customer-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:1rem}.customer-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.customer-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .action-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:.5rem}.customer-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:1rem}.customer-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{font-weight:500}.customer-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .red-asterisk[_ngcontent-%COMP%]{color:red}"]})}return o})();function y(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"div",16),t._uU(2),t.qZA(),t.BQk()),2&o){const e=a.$implicit;t.xp6(2),t.Oqu(null==e?null:e.name)}}function T(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",18)(1,"div",19),t._uU(2),t.qZA(),t.TgZ(3,"div",19),t._uU(4),t.qZA(),t.TgZ(5,"div",19),t._uU(6),t.qZA(),t.TgZ(7,"div",19)(8,"div")(9,"button",20),t.NdJ("click",function(){const i=t.CHM(e).$implicit,d=t.oxw(3);return t.KtG(d.editCustomer(i))}),t._UZ(10,"i-feather",21),t.qZA()(),t.TgZ(11,"div")(12,"button",20),t.NdJ("click",function(){const i=t.CHM(e).$implicit,d=t.oxw(3);return t.KtG(d.deleteCustomer(i))}),t._UZ(13,"i-feather",22),t.qZA()()()()}if(2&o){const e=a.$implicit;t.xp6(2),t.AsE("",null==e?null:e.firstName," ",null==e?null:e.lastName,""),t.xp6(2),t.Oqu(null==e?null:e.email),t.xp6(2),t.Oqu(null==e?null:e.phoneNumber)}}function S(o,a){if(1&o&&(t.ynx(0),t.YNc(1,T,14,4,"div",17),t.ALo(2,"async"),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.rowData$))}}function F(o,a){1&o&&t._uU(0," No Data Present ")}function E(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",4)(1,"h4"),t._uU(2,"Customer Details"),t.qZA(),t.TgZ(3,"div",5)(4,"div",6)(5,"app-toolbar",7),t.NdJ("toolbarItemClickedEmitter",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.toolbarClickEvent(r))}),t.qZA()(),t.TgZ(6,"div",8)(7,"app-pagination",9),t.NdJ("pageChangedEmitter",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.pageChangeEvent(r))}),t.ALo(8,"async"),t.qZA()()(),t.TgZ(9,"div",10)(10,"div",11),t.YNc(11,y,3,1,"ng-container",12),t.qZA(),t.TgZ(12,"div",13),t.YNc(13,S,3,3,"ng-container",14),t.ALo(14,"async"),t.YNc(15,F,1,0,"ng-template",null,15,t.W1O),t.qZA()()()}if(2&o){const e=t.MAs(16),n=t.oxw();t.xp6(7),t.Q6J("pageData",t.lcZ(8,4,n.pageDate$)),t.xp6(4),t.Q6J("ngForOf",n.columns),t.xp6(2),t.Q6J("ngIf",t.lcZ(14,6,n.rowData$).length)("ngIfElse",e)}}function k(o,a){if(1&o&&(t.TgZ(0,"div",25)(1,"div",26)(2,"div",27)(3,"div",28)(4,"label",29),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"div",28)(9,"label",29),t._uU(10,"Email"),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"div",28)(14,"label",29),t._uU(15,"Phone Number"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA()()()()()),2&o){const e=a.$implicit;t.xp6(7),t.AsE("",null==e?null:e.firstName," ",null==e?null:e.lastName,""),t.xp6(5),t.Oqu(null==e?null:e.email),t.xp6(5),t.Oqu(null==e?null:e.phoneNumber)}}function U(o,a){if(1&o&&(t.ynx(0),t.YNc(1,k,18,4,"div",24),t.ALo(2,"async"),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e.rowData$))}}function D(o,a){1&o&&t._uU(0," No Data Present ")}function I(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",23)(1,"h4"),t._uU(2,"Customer Details"),t.qZA(),t.TgZ(3,"div",6)(4,"app-toolbar",7),t.NdJ("toolbarItemClickedEmitter",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.toolbarClickEvent(r))}),t.qZA()(),t.YNc(5,U,3,3,"ng-container",14),t.ALo(6,"async"),t.YNc(7,D,1,0,"ng-template",null,15,t.W1O),t.TgZ(9,"div",8)(10,"app-pagination",9),t.NdJ("pageChangedEmitter",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.pageChangeEvent(r))}),t.ALo(11,"async"),t.qZA()()()}if(2&o){const e=t.MAs(8),n=t.oxw();t.xp6(5),t.Q6J("ngIf",t.lcZ(6,3,n.rowData$).length)("ngIfElse",e),t.xp6(5),t.Q6J("pageData",t.lcZ(11,5,n.pageDate$))}}function q(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"app-customer-form",31),t.NdJ("formCloseEvent",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.formCloseEvent())}),t.qZA()()}}const H=[{path:"home",component:(()=>{class o{constructor(e,n){this.store=e,this.service=n,this.columns=[{name:"Name",tooltip:"Name"},{name:"Email",tooltip:"Email"},{name:"PhoneNumber",tooltip:"PhoneNumber"},{name:"Action"}],this.rowData$=this.store.select("rowData"),this.toolbar$=this.store.select("toolbarData"),this.pageDate$=this.store.select("pageData"),this.isCustomerDashboard=!0}ngOnInit(){this.service.getAllCustomerList()}toolbarClickEvent(e){switch(e){case _.l.ADD:this.store.setState({selectedSampleSubmission:null}),this.isCustomerDashboard=!1;break;case _.l.REFRESH:this.service.getAllCustomerList()}}formCloseEvent(){this.isCustomerDashboard=!0}pageChangeEvent(e){this.service.changePageEvent(e)}editCustomer(e){this.store.setState({selectedCustomer:e}),this.isCustomerDashboard=!1}deleteCustomer(e){this.service.deleteCustomer(e)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(l),t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer-home"]],decls:4,vars:3,consts:[[1,"main-content-wrapper"],["class","customer-details",4,"ngIf"],["class","customer-details-mobile",4,"ngIf"],["class","customer-form-wrapper",4,"ngIf"],[1,"customer-details"],[1,"toolbar-pagination-wrapper"],[1,"toolbar"],[3,"toolbarItemClickedEmitter"],[1,"pagination"],[3,"pageData","pageChangedEmitter"],[1,"list-view-wrapper"],[1,"list-header"],[4,"ngFor","ngForOf"],[1,"list-row-wrapper"],[4,"ngIf","ngIfElse"],["emptyTemplate",""],[1,"header-item"],["class","list-row",4,"ngFor","ngForOf"],[1,"list-row"],[1,"row-item"],[1,"btn","btn-light",3,"click"],["name","edit"],["name","trash"],[1,"customer-details-mobile"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-4"],["for",""],[1,"customer-form-wrapper"],[3,"formCloseEvent"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.YNc(1,E,17,8,"div",1),t.YNc(2,I,12,7,"div",2),t.YNc(3,q,2,0,"div",3),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",r.isCustomerDashboard),t.xp6(1),t.Q6J("ngIf",r.isCustomerDashboard),t.xp6(1),t.Q6J("ngIf",!r.isCustomerDashboard))},dependencies:[u.sg,u.O5,N.n,O.Q,M.u,A,u.Ov],styles:[".main-content-wrapper[_ngcontent-%COMP%]{height:100%;overflow:hidden;display:flex;flex-direction:column;background:white;padding:1rem;border-radius:.25rem}.main-content-wrapper[_ngcontent-%COMP%]   .toolbar-pagination-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:end;margin-top:1rem}.main-content-wrapper[_ngcontent-%COMP%]   .toolbar-pagination-wrapper[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{margin-left:1rem}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr repeat(2,1fr) 10rem;font-weight:600;font-size:1.2rem;height:4rem;align-items:center;overflow:hidden}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]{padding:1rem;border:.5px solid #ddd;overflow:hidden}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] + .header-item[_ngcontent-%COMP%]{border-left-color:transparent}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr repeat(2,1fr) 10rem;height:4rem;align-items:center;overflow:hidden}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-row[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{border:.5px solid #ddd;padding:0 1rem;display:flex;align-items:center;height:inherit;border-top:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-row[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]:last-child{display:grid;grid-template-columns:repeat(2,1fr);place-content:center}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-row[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]:last-child   i-feather[_ngcontent-%COMP%]{color:#00f;width:2rem}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-row[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%] + .row-item[_ngcontent-%COMP%]{border-left-color:transparent}.main-content-wrapper[_ngcontent-%COMP%]   .list-view-wrapper[_ngcontent-%COMP%]   .list-row[_ngcontent-%COMP%]:hover{background-color:bisque}.main-content-wrapper[_ngcontent-%COMP%]   .customer-form-wrapper[_ngcontent-%COMP%]{width:50%;height:100%;overflow:auto;padding-right:1rem}.main-content-wrapper[_ngcontent-%COMP%]   .customer-details-mobile[_ngcontent-%COMP%]{display:none}@media only screen and (max-width: 768px){.main-content-wrapper[_ngcontent-%COMP%]   .customer-form-wrapper[_ngcontent-%COMP%]{width:100%}}@media only screen and (max-width: 600px){.main-content-wrapper[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]{display:none}.main-content-wrapper[_ngcontent-%COMP%]   .customer-details-mobile[_ngcontent-%COMP%]{height:100%;overflow:auto;display:block}.main-content-wrapper[_ngcontent-%COMP%]   .customer-details-mobile[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:.5rem}}"]})}return o})()},{path:"**",redirectTo:"home"}];let J=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(H),h.Bz]})}return o})();var L=s(6011),j=s(9047);let Y=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({providers:[p,f,{provide:l,useFactory:P}],imports:[u.ez,J,L.m,j.p,c.UX]})}return o})()}}]);