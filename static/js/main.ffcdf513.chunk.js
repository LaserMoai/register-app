(this["webpackJsonpregister-app"]=this["webpackJsonpregister-app"]||[]).push([[0],{173:function(e,a,i){},280:function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),r=i(12),l=i.n(r),o=(i(173),i(103)),c=i(18),d=i(47),s=i(316),m=i(16),h=i(133),b=i(328),g=i(314),u=i(317),p=i(318),j=i(319),O=i(320),D=i(321),f=i(283),v=i(137),N=i.n(v),y=i(138),x=i.n(y),w=i(30),C=i.n(w),Y=(i(110),[{position:"manager",positionName:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440"},{position:"secretary",positionName:"\u0421\u0435\u043a\u0440\u0435\u0442\u0430\u0440\u044c"},{position:"seniorEngineer",positionName:"\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0438\u043d\u0436\u0435\u043d\u0435\u0440"},{position:"juniorEngineer",positionName:"\u041c\u043b\u0430\u0434\u0448\u0438\u0439 \u0438\u043d\u0436\u0435\u043d\u0435\u0440"},{position:"developer",positionName:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"}]),M=i(5),S=function(e){var a=e.data,i=e.onEditedEntrySelection,t=e.editedEntryId;return C.a.locale("ru"),Object(M.a)(b.a,{mb:5,children:Object(M.a)(g.a,{component:s.a,elevation:2,children:Object(M.b)(u.a,{children:[Object(M.a)(p.a,{children:Object(M.b)(j.a,{children:[Object(M.a)(O.a,{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),Object(M.a)(O.a,{align:"right",children:"\u0418\u043c\u044f"}),Object(M.a)(O.a,{align:"right",children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(M.a)(O.a,{align:"right",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(M.a)(O.a,{align:"right",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(M.a)(O.a,{align:"right",children:"\u041f\u043e\u043b"}),Object(M.a)(O.a,{align:"right",children:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443"}),Object(M.a)(O.a,{align:"right",children:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f"}),Object(M.a)(O.a,{align:"right",children:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432"}),Object(M.a)(O.a,{align:"right"})]})}),Object(M.a)(D.a,{children:a.map((function(e){return Object(M.b)(j.a,{css:{backgroundColor:e.id===t&&N.a[100]},children:[Object(M.a)(O.a,{children:e.lastName}),Object(M.a)(O.a,{align:"right",children:e.firstName}),Object(M.a)(O.a,{align:"right",children:e.patronymicName}),Object(M.a)(O.a,{align:"right",children:Y.find((function(a){return a.position===e.position})).positionName}),Object(M.a)(O.a,{align:"right",children:e.birthDate&&C()(e.birthDate).format("D MMM YYYY")}),Object(M.a)(O.a,{align:"right",children:Object(M.a)("span",{css:{fontSize:"2em"},children:"male"===e.gender?"\u2642":"\u2640"})}),Object(M.a)(O.a,{align:"right",children:e.hiringDate&&C()(e.hiringDate).format("D MMM YYYY")}),Object(M.a)(O.a,{align:"right",children:e.dismissalDate&&C()(e.dismissalDate).format("D MMM YYYY")}),Object(M.a)(O.a,{align:"right",children:e.privileged?"\u0415\u0441\u0442\u044c":"\u041d\u0435\u0442"}),Object(M.a)(O.a,{align:"right",children:Object(M.a)(f.a,{size:"small","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:function(){return i(e.id)},children:Object(M.a)(x.a,{css:{color:e.id===t&&"#3f51b5"}})})})]},e.id)}))})]})})})},E=i(284),T=i(322),B=i(323),q=i(287),k=i(288),I=i(291),F=i(334),V=i(290),J=i(289),W=i(335),z=i(325),G=i(330),H=i(331),L=i(324),A=i(326),K=i(144),P=i(25),Q=function(e){var a=e.editedEntry,i=e.onEntrySubmission,t=e.onEditCancellation;C.a.locale("ru");var n=Object(K.a)({initialValues:{lastName:"",firstName:"",patronymicName:"",position:"",birthDate:null,gender:"male",hiringDate:null,dismissalDate:null,privileged:!1},validationSchema:P.c({lastName:P.d().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),firstName:P.d().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),patronymicName:P.d(),position:P.d().oneOf(Y.map((function(e){return e.position})),"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),birthDate:P.b().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").nullable(),gender:P.d().oneOf(["male","female"],"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u043e\u043b"),hiringDate:P.b().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435").nullable(),dismissalDate:P.b().test("afterHiringDate","\u041d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0440\u0430\u043d\u044c\u0448\u0435 \u0434\u0430\u0442\u044b \u043f\u0440\u0438\u0451\u043c\u0430",(function(e){return!this.parent.hiringDate||!e||e.getTime()>=this.parent.hiringDate.getTime()})).nullable(),privileged:P.a().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")}),onSubmit:function(e,a){var t=a.resetForm;i(e),t()}});return a&&n.values.id!==a.id&&n.setValues(a),Object(M.a)(b.a,{display:"flex",justifyContent:"center",children:Object(M.b)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),n.handleSubmit()},css:{width:750,".MuiGrid-item":{display:"flex",justifyContent:"center","@media (min-width: 960px)":{display:"block"}}},children:[Object(M.a)(b.a,{display:{xs:"flex",md:"block"},justifyContent:"center",children:Object(M.a)(E.a,{variant:"h4",css:{paddingBottom:".8em"},children:a?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430":"\u041d\u043e\u0432\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a"})}),Object(M.b)(T.a,{container:!0,spacing:1,css:{paddingBottom:"1.5em"},children:[Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.a)(B.a,{name:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:n.values.lastName,onChange:n.handleChange,error:n.touched.lastName&&Boolean(n.errors.lastName),helperText:n.touched.lastName&&n.errors.lastName,required:!0})}),Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.a)(B.a,{name:"firstName",label:"\u0418\u043c\u044f",value:n.values.firstName,onChange:n.handleChange,error:n.touched.firstName&&Boolean(n.errors.firstName),helperText:n.touched.firstName&&n.errors.firstName,required:!0})}),Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.a)(B.a,{name:"patronymicName",label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:n.values.patronymicName,onChange:n.handleChange,error:n.touched.patronymicName&&Boolean(n.errors.patronymicName),helperText:n.touched.patronymicName&&n.errors.patronymicName})})]}),Object(M.b)(T.a,{container:!0,spacing:1,children:[Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.b)(q.a,{error:n.touched.position&&Boolean(n.errors.position),css:{marginTop:"1em !important"},children:[Object(M.a)(k.a,{id:"position-label",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(M.a)(I.a,{labelId:"position-label",name:"position",value:n.values.position,onChange:n.handleChange,css:{minWidth:200,marginBottom:"1em"},children:Y.map((function(e){return Object(M.a)(F.a,{value:e.position,children:e.positionName},e.position)}))}),Object(M.a)(V.a,{children:n.touched.position&&n.errors.position})]})}),Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.a)(A.a,{disableToolbar:!0,variant:"inline",format:"D MMMM YYYY",openTo:"year",margin:"normal",label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",value:n.values.birthDate,onChange:function(e){n.setFieldValue("birthDate",e)},error:n.touched.birthDate&&Boolean(n.errors.birthDate),helperText:n.touched.birthDate&&n.errors.birthDate,required:!0,css:{maxWidth:225}})}),Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.b)(q.a,{component:"fieldset",error:n.touched.gender&&Boolean(n.errors.gender),css:{marginTop:"1em !important"},children:[Object(M.a)(J.a,{component:"legend",children:"\u041f\u043e\u043b"}),Object(M.b)(W.a,{"aria-label":"\u041f\u043e\u043b",name:"gender",value:n.values.gender,onChange:n.handleChange,children:[Object(M.a)(z.a,{value:"male",control:Object(M.a)(G.a,{}),label:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"}),Object(M.a)(z.a,{value:"female",control:Object(M.a)(G.a,{}),label:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"})]}),Object(M.a)(V.a,{children:n.touched.gender&&n.errors.gender})]})})]}),Object(M.b)(T.a,{container:!0,spacing:1,css:{paddingBottom:"1.5em"},children:[Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.a)(A.a,{disableToolbar:!0,variant:"inline",format:"D MMMM YYYY",margin:"normal",label:"\u0414\u0430\u0442\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443",value:n.values.hiringDate,onChange:function(e){n.setFieldValue("hiringDate",e)},error:n.touched.hiringDate&&Boolean(n.errors.hiringDate),helperText:n.touched.hiringDate&&n.errors.hiringDate,required:!0,css:{maxWidth:225}})}),Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.a)(A.a,{disableToolbar:!0,variant:"inline",format:"D MMMM YYYY",margin:"normal",label:"\u0414\u0430\u0442\u0430 \u0443\u0432\u043e\u043b\u044c\u043d\u0435\u043d\u0438\u044f",value:n.values.dismissalDate,onChange:function(e){n.setFieldValue("dismissalDate",e)},error:n.touched.dismissalDate&&Boolean(n.errors.dismissalDate),helperText:n.touched.dismissalDate&&n.errors.dismissalDate,minDate:n.values.hiringDate||new Date("1900-01-01"),css:{maxWidth:225}})}),Object(M.a)(T.a,{item:!0,xs:12,md:4,children:Object(M.b)(q.a,{error:n.touched.privileged&&Boolean(n.errors.privileged),css:{marginTop:"1.5em !important"},children:[Object(M.a)(z.a,{control:Object(M.a)(H.a,{name:"privileged",checked:n.values.privileged,onChange:n.handleChange,color:"primary"}),label:"\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432"}),Object(M.a)(V.a,{children:n.touched.privileged&&n.errors.privileged})]})})]}),Object(M.b)(b.a,{display:"flex",justifyContent:"center",children:[Object(M.a)(L.a,{type:"submit",variant:"contained",color:"primary",children:a?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),a&&Object(M.a)(L.a,{variant:"contained",color:"default",onClick:function(){t(),n.resetForm()},css:{marginLeft:"1em !important"},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})]})]})})},R=function(e){return localStorage.setItem("employees",JSON.stringify(e))},U=function(){return JSON.parse(localStorage.getItem("employees"))};var X=function(){var e=U(),a=null!==e&&void 0!==e?e:[{id:0,lastName:"\u0410\u0440\u0434\u0430\u043a\u043e\u0432",firstName:"\u0418\u0433\u043e\u0440\u044c",patronymicName:"\u0413\u0435\u0440\u0430\u0441\u0438\u043c\u043e\u0432\u0438\u0447",position:"developer",birthDate:new Date(2e3,0,1),gender:"male",hiringDate:new Date(2020,0,1),dismissalDate:new Date(2020,0,1),privileged:!0},{id:1,lastName:"\u0414\u043e\u043d\u0447\u0435\u043d\u043a\u043e",firstName:"\u0418\u0432\u0430\u043d",patronymicName:"\u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447",position:"developer",birthDate:new Date(2e3,0,1),gender:"male",hiringDate:new Date(2020,0,1),dismissalDate:new Date(2020,0,1),privileged:!0},{id:2,lastName:"\u041a\u0443\u043b\u0430\u0433\u0438\u043d\u0430",firstName:"\u042e\u043b\u0438\u044f",patronymicName:"\u0410\u043d\u0430\u0442\u043e\u043b\u044c\u0435\u0432\u043d\u0430",position:"developer",birthDate:new Date(2e3,0,1),gender:"female",hiringDate:new Date(2020,0,1),dismissalDate:new Date(2020,0,1),privileged:!0},{id:3,lastName:"\u0411\u0438\u0440\u044e\u043a\u043e\u0432",firstName:"\u0415\u0432\u0433\u0435\u043d\u0438\u0439",patronymicName:"\u0415\u0432\u0433\u0435\u043d\u044c\u0435\u0432\u0438\u0447",position:"developer",birthDate:new Date(2e3,0,1),gender:"male",hiringDate:new Date(2020,0,1),dismissalDate:new Date(2020,0,1),privileged:!0},{id:4,lastName:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432",firstName:"\u0412\u0430\u043b\u0435\u0440\u0438\u0439",patronymicName:"\u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u043e\u0432\u0438\u0447",position:"developer",birthDate:new Date(2e3,0,1),gender:"male",hiringDate:new Date(2020,0,1),dismissalDate:new Date(2020,0,1),privileged:!0},{id:5,lastName:"\u0414\u0435\u0432\u0438\u043d",firstName:"\u0418\u0433\u043e\u0440\u044c",patronymicName:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",position:"developer",birthDate:new Date(2e3,0,1),gender:"male",hiringDate:new Date(2020,0,1),dismissalDate:new Date(2020,0,1),privileged:!1},{id:6,lastName:"\u0413\u0440\u0438\u0448\u0438\u043d\u0430",firstName:"\u041e\u043b\u044c\u0433\u0430",patronymicName:"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u043d\u0430",position:"developer",birthDate:new Date(2e3,0,1),gender:"female",hiringDate:new Date(2020,0,1),dismissalDate:null,privileged:!0},{id:7,lastName:"\u041a\u0430\u0440\u0441\u0435\u0432\u0430",firstName:"\u041f\u043e\u043b\u0438\u043d\u0430",patronymicName:"\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043d\u0430",position:"developer",birthDate:new Date(2e3,0,1),gender:"female",hiringDate:new Date(2020,0,1),dismissalDate:null,privileged:!0}],i=Object(t.useState)(a),n=Object(d.a)(i,2),r=n[0],l=n[1],b=Object(t.useState)(null),g=Object(d.a)(b,2),u=g[0],p=g[1];e||R(r);var j=null!==u&&r.find((function(e){return e.id===u}));return Object(M.a)(m.a,{utils:h.a,children:Object(M.a)("div",{css:{display:"flex",justifyContent:"center"},children:Object(M.b)(s.a,{elevation:5,css:{padding:"1em 2em",margin:"1em 0"},children:[Object(M.a)(S,{data:r,editedEntryId:u,onEditedEntrySelection:p}),Object(M.a)(Q,{editedEntry:j,onEntrySubmission:function(e){if(null!=u){var a=r.findIndex((function(e){return e.id===u}));l((function(i){var t=Object(c.a)(i);return t[a]=e,R(t),t})),p(null)}else l((function(a){var i=Object(c.a)(a);return i.push(Object(o.a)(Object(o.a)({},e),{},{id:r.length})),R(i),i}))},onEditCancellation:function(){return p(null)}})]})})})},Z=i(36);l.a.render(Object(Z.jsx)(n.a.StrictMode,{children:Object(Z.jsx)(X,{})}),document.getElementById("root"))}},[[280,1,2]]]);
//# sourceMappingURL=main.ffcdf513.chunk.js.map