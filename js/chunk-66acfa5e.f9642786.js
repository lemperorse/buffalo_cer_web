(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66acfa5e"],{"2fa4":function(t,e,a){"use strict";a("20f6");var r=a("80d2");e["a"]=Object(r["i"])("spacer","div","v-spacer")},"3c3a":function(t,e,a){},"615b":function(t,e,a){},"74ac":function(t,e,a){"use strict";var r=a("3c3a"),s=a.n(r);s.a},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return o}));var r=a("b0af"),s=a("80d2"),i=Object(s["i"])("v-card__actions"),n=Object(s["i"])("v-card__subtitle"),c=Object(s["i"])("v-card__text"),o=Object(s["i"])("v-card__title");r["a"]},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var r=a("5530"),s=(a("615b"),a("10d2")),i=a("297c"),n=a("1c87"),c=a("58df");e["a"]=Object(c["a"])(i["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots["default"]])}})},d263:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container w-full mx-auto"},[a("div",{staticClass:"w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"},[a("v-container",[a("v-btn",{attrs:{color:"white",depressed:"",fab:"",small:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")]),t._v("กลับ ")],1),a("h2",{staticClass:"font-bold text-2xl mb-2"},[t._v("ลืมรหัสผ่าน")]),a("hr",{staticClass:"border-b-2 border-gray-400 "})],1),a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 p-3"},[a("div",{staticClass:"bg-white border-b-4 border-blue-500 rounded shadow-xl p-2"},[a("v-card-title",{attrs:{"primary-title":""}},[t._v(" กรอกข้อมูล ")]),a("v-divider",{staticClass:"px-10"}),a("v-card-text",[a("v-text-field",{attrs:{value:"",label:"เลขบัตรประชาชน",type:"number","prepend-inner-icon":"mdi-card-account-details-outline"}}),a("v-text-field",{attrs:{value:"",label:"เบอร์โทรศัพท์",type:"number","prepend-inner-icon":"mdi-phone"}})],1),a("v-card-title",[a("v-spacer"),a("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"},[t._v(" ยืนยัน ")])],1)],1)])])],1)])},s=[],i={data:function(){return{}}},n=i,c=(a("74ac"),a("2877")),o=a("6544"),l=a.n(o),d=a("8336"),u=a("99d9"),v=a("a523"),b=a("ce7e"),f=a("132d"),p=a("2fa4"),h=a("8654"),m=Object(c["a"])(n,r,s,!1,null,"505c0cea",null);e["default"]=m.exports;l()(m,{VBtn:d["a"],VCardText:u["b"],VCardTitle:u["c"],VContainer:v["a"],VDivider:b["a"],VIcon:f["a"],VSpacer:p["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-66acfa5e.f9642786.js.map