(this.webpackJsonp=this.webpackJsonp||[]).push([[4,3],{302:function(t,e,r){"use strict";r.r(e);r(49);var n=r(13),title=(r(2),r(1),r(4),r(9),r(118)),o={name:"",phone:"",email:"",detail:""},l={name:"",phone:"",email:"",company:"",post:"",purpose:"",detail:""},c={name:"FeedBack",components:{Title:title.default},data:function(){return{formList:this.isFeedBack?o:l}},computed:{isFeedBack:function(){return"feedBack"===this.$router.currentRoute.name},itemList:function(){return Object.keys(this.isFeedBack?o:l)}},mounted:function(){},methods:{handleSubmit:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.preventDefault(),alert("Submit Success")}),1e3);case 1:case"end":return e.stop()}}),e)})))()},resetForm:function(){var t=this;this.itemList.forEach((function(a){t.$set(t.formList,a,"")}))},handleClick:function(){}}},m=r(17),component=Object(m.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Title",{attrs:{text:"Cooperation"}}),this._v(" "),e("b-form",{on:{submit:this.handleSubmit}},[e("b-row",this._l(this.itemList,(function(t){return"detail"!==t?e("b-col",{key:t,attrs:{cols:"12",sm:"10",md:"6",lg:"6",xl:"6"}},[e("b-form-group",{attrs:{id:"normalItemList",label:t,"label-for":t}},[e("b-form-input",{key:t,attrs:{id:t,required:"",placeholder:"Enter "+t}})],1)],1):e("b-col",{key:"detail",attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[e("b-form-group",{attrs:{id:"details",label:"detail","label-for":"detail"}},[e("b-form-textarea",{key:"detail",attrs:{id:"detail",required:"",placeholder:"Enter details",rows:"3","max-rows":"6"}})],1)],1)})),1),this._v(" "),e("b-button",{staticStyle:{"{\n          margin":"0 auto"},attrs:{type:"submit",variant:"primary"}},[this._v("Submit")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:r(118).default})},325:function(t,e,r){"use strict";r.r(e);var n=r(302).default,o=r(17),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);