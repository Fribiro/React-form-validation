(this["webpackJsonpreact-form-validation"]=this["webpackJsonpreact-form-validation"]||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(1),r=t.n(s),i=t(4),c=t.n(i),o=(t(16),t(17),t(18),t(2)),l=t(5),m=t(6),d=t(7),b=t(9),h=t(8),j=t(10),u=RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/),f=function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).onSubmit=function(e){e.preventDefault(),!function(e){var a=e.isError,t=Object(j.a)(e,["isError"]),n=!1;return Object.values(a).forEach((function(e){n=!(e.length>0)})),Object.values(t).forEach((function(e){n=null!==e})),n}(n.state)?console.log("Form is invalid!"):console.log(n.state)},n.formValChange=function(e){e.preventDefault();var a=e.target,t=a.name,s=a.value,r=Object(l.a)({},n.state.isError);switch(t){case"name":r.name=s.length<4?"Atleast 4 characaters required":"";break;case"email":r.email=u.test(s)?"":"Email address is invalid";break;case"password":r.password=s.length<6?"Atleast 6 characaters required":""}n.setState(Object(o.a)({isError:r},t,s))},n.state={name:"",email:"",password:"",isError:{name:"",email:"",password:""}},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state.isError;return Object(n.jsxs)("form",{onSubmit:this.onSubmit,noValidate:!0,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{type:"text",className:e.name.length>0?"is-invalid form-control":"form-control",name:"name",onChange:this.formValChange}),e.name.length>0&&Object(n.jsx)("span",{className:"invalid-feedback",children:e.name})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{type:"email",className:e.email.length>0?"is-invalid form-control":"form-control",name:"email",onChange:this.formValChange}),e.email.length>0&&Object(n.jsx)("span",{className:"invalid-feedback",children:e.email})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",className:e.password.length>0?"is-invalid form-control":"form-control",name:"password",onChange:this.formValChange}),e.password.length>0&&Object(n.jsx)("span",{className:"invalid-feedback",children:e.password})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-block btn-danger",children:"Create User"})]})}}]),t}(s.Component);var p=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.ff909e88.chunk.js.map