(this.webpackJsonp=this.webpackJsonp||[]).push([[38,37],{456:function(t,e,n){"use strict";n.r(e);n(55);var r=n(18),title=(n(3),n(2),n(5),n(11),n(125)),o={name:"",phone:"",email:"",detail:""},l={name:"",phone:"",email:"",company:"",post:"",purpose:"",detail:""},c={name:"FeedBack",components:{Title:title.default},data:function(){return{formList:this.isFeedBack?o:l}},computed:{isFeedBack:function(){return"feedBack"===this.$router.currentRoute.name},itemList:function(){return Object.keys(this.isFeedBack?o:l)}},mounted:function(){},methods:{handleSubmit:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.preventDefault(),alert("Submit Success")}),1e3);case 1:case"end":return e.stop()}}),e)})))()},resetForm:function(){var t=this;this.itemList.forEach((function(a){t.$set(t.formList,a,"")}))},handleClick:function(){}}},d=n(15),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Title",{attrs:{text:"Cooperation"}}),t._v(" "),n("b-form",{on:{submit:t.handleSubmit}},[n("b-row",t._l(t.itemList,(function(t){return"detail"!==t?n("b-col",{key:t,attrs:{cols:"12",sm:"10",md:"6",lg:"6",xl:"6"}},[n("b-form-group",{attrs:{id:"normalItemList",label:t,"label-for":t}},[n("b-form-input",{key:t,attrs:{id:t,required:"",placeholder:"Enter "+t}})],1)],1):n("b-col",{key:"detail",attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("b-form-group",{attrs:{id:"details",label:"detail","label-for":"detail"}},[n("b-form-textarea",{key:"detail",attrs:{id:"detail",required:"",placeholder:"Enter details",rows:"3","max-rows":"6"}})],1)],1)})),1),t._v(" "),n("b-button",{staticStyle:{"{\n          margin":"0 auto"},attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:n(125).default})},515:function(t,e,n){"use strict";n.r(e);var r=n(456).default,o=n(15),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);