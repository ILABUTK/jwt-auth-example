webpackJsonp([1],{52:function(e,t,a){var r=a(11)(a(56),a(61),null,null);e.exports=r.exports},56:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:null,email:null,password:null,error:!1}},methods:{register:function(){var e=this,t={name:this.name,email:this.email,password:this.password};window.axios.post("/auth/register",t).then(function(t){localStorage.setItem("id_token",t.headers.authorization),e.$router.push("/")}).catch(function(t){e.error=!0})}}}},61:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[e.error?a("div",{staticClass:"alert alert-danger"},[a("p",[e._v("There was an error, unable to register.")])]):e._e(),e._v(" "),a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){t.preventDefault(),e.register(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("E-mail")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-default",attrs:{type:"submit"}},[e._v("Register")])])])},staticRenderFns:[]}}});