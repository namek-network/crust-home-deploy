(this.webpackJsonp=this.webpackJsonp||[]).push([[36],{480:function(t,e,r){"use strict";r.r(e);r(57);var n=r(18),title=(r(3),r(2),r(5),r(11),r(125)),o={name:"",phone:"",email:"",detail:""},l={name:"",phone:"",email:"",company:"",post:"",purpose:"",detail:""},c={name:"FeedBack",components:{Title:title.default},data:function(){return{formList:this.isFeedBack?o:l}},computed:{isFeedBack:function(){return"feedBack"===this.$router.currentRoute.name},itemList:function(){return Object.keys(this.isFeedBack?o:l)}},mounted:function(){},methods:{handleSubmit:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.preventDefault(),alert("Submit Success")}),1e3);case 1:case"end":return e.stop()}}),e)})))()},resetForm:function(){var t=this;this.itemList.forEach((function(a){t.$set(t.formList,a,"")}))},handleClick:function(){}}},m=r(15),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Title",{attrs:{text:"Cooperation"}}),t._v(" "),r("b-form",{on:{submit:t.handleSubmit}},[r("b-row",t._l(t.itemList,(function(t){return"detail"!==t?r("b-col",{key:t,attrs:{cols:"12",sm:"10",md:"6",lg:"6",xl:"6"}},[r("b-form-group",{attrs:{id:"normalItemList",label:t,"label-for":t}},[r("b-form-input",{key:t,attrs:{id:t,required:"",placeholder:"Enter "+t}})],1)],1):r("b-col",{key:"detail",attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[r("b-form-group",{attrs:{id:"details",label:"detail","label-for":"detail"}},[r("b-form-textarea",{key:"detail",attrs:{id:"detail",required:"",placeholder:"Enter details",rows:"3","max-rows":"6"}})],1)],1)})),1),t._v(" "),r("b-button",{staticStyle:{"{\n          margin":"0 auto"},attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:r(125).default})}}]);