(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c497fb2"],{1626:function(e,t,a){},"1d36":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-gray-100"},[a("div",{staticClass:"container w-full mx-auto "},[a("div",{staticClass:"w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"},[a("v-container",[a("h2",{staticClass:"font-bold text-3xl"},[a("i",{staticClass:"em em-clipboard",attrs:{"aria-role":"presentation","aria-label":""}}),e._v(" ควายและใบพันธุ์ประวัติ")]),a("v-breadcrumbs",{attrs:{items:e.bc,large:""},scopedSlots:e._u([{key:"divider",fn:function(){return[a("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),a("hr",{staticClass:"border-b-2 border-gray-400 ma-1"})],1),a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 p-0 md:p-3"},[a("div",{staticClass:"bg-white border-b-4 border-green-500  rounded  shadow-xl  p-2"},[a("v-tabs",[a("v-tab",[a("v-icon",{attrs:{left:""}},[e._v("mdi-account")]),e._v(" ข้อมูลเจ้าของควาย ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[e._v("mdi-file-pdf-box-outline")]),e._v(" ใบพันธุ์ประวัติ ")],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",{staticClass:"font-bold text-2xl"},[e._v("ข้อมูลเจ้าของควาย")])]),a("v-card-text",[a("div",[a("v-expansion-panels",{attrs:{multiple:"",flat:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("h5",{staticClass:"font-bold uppercase text-gray-700 text-xl"},[e._v("ข้อมูลเจ้าของควาย")])]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{name:"name",label:"ชื่อเจ้าของควาย","prepend-inner-icon":"mdi-account"}}),a("v-text-field",{attrs:{name:"name",label:"กลุ่ม","prepend-inner-icon":"mdi-account-group"}}),a("v-text-field",{attrs:{name:"name",label:"ชื่อฟาร์ม","prepend-inner-icon":"mdi-home-outline"}}),a("v-text-field",{attrs:{name:"name",label:"ชื่อควาย","prepend-inner-icon":"mdi-cow"}}),a("v-text-field",{attrs:{name:"name",label:"ที่อยู่ฟาร์ม","prepend-inner-icon":"mdi-home-map-marker"}})],1)],1)],1)],1)])],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h2",{staticClass:"font-bold text-2xl"},[e._v("ใบพันธุ์ประวัติ")])]),a("v-card-text",[a("div",[a("v-expansion-panels",{attrs:{multiple:"",flat:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[a("h5",{staticClass:"font-bold uppercase text-gray-700 text-xl"},[e._v("ใบพันธุ์ประวัติอ้างอิง")])]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{name:"name",label:"ใบพันธุ์ประวัติอ้างอิง","prepend-inner-icon":"mdi-file-pdf-outline"}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[a("h5",{staticClass:"font-bold uppercase text-gray-700 text-xl"},[e._v("ใบพันธุ์ประวัติทางการ")])]),a("v-expansion-panel-content",[a("v-text-field",{attrs:{name:"name",label:"ใบพันธุ์ประวัติทางการ","prepend-inner-icon":"mdi-file-pdf-outline"}})],1)],1)],1)],1)])],1)],1)],1)],1)])])],1)])])},i=[],s={components:{},data:function(){return{panel:[0,1,2,3],bc:[{text:"ค้นหาใบพันธุ์ประวัติ",disabled:!1,href:"/#/user/search"},{text:"ควายและใบพันธุ์ประวัติ",disabled:!1,href:"/#/user/cer"}]}}},r=s,l=(a("685e"),a("2877")),d=a("6544"),c=a.n(d),o=a("2bc5"),p=a("b0af"),u=a("99d9"),v=a("a523"),b=a("cd55"),m=a("49e2"),f=a("c865"),x=a("0393"),h=a("132d"),g=a("71a3"),C=a("c671"),_=a("fe57"),y=a("8654"),w=Object(l["a"])(r,n,i,!1,null,null,null);t["default"]=w.exports;c()(w,{VBreadcrumbs:o["a"],VCard:p["a"],VCardText:u["a"],VCardTitle:u["b"],VContainer:v["a"],VExpansionPanel:b["a"],VExpansionPanelContent:m["a"],VExpansionPanelHeader:f["a"],VExpansionPanels:x["a"],VIcon:h["a"],VTab:g["a"],VTabItem:C["a"],VTabs:_["a"],VTextField:y["a"]})},"2bc5":function(e,t,a){"use strict";a("a15b");var n=a("5530"),i=(a("abd3"),a("ade3")),s=a("1c87"),r=a("58df"),l=Object(r["a"])(s["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(i["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),a=t.tag,i=t.data;return e("li",[e(a,Object(n["a"])(Object(n["a"])({},i),{},{attrs:Object(n["a"])(Object(n["a"])({},i.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots["default"])])}}),d=a("80d2"),c=Object(d["i"])("v-breadcrumbs__divider","li"),o=a("7560");t["a"]=Object(r["a"])(o["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(n["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,a=[],n=0;n<this.items.length;n++){var i=this.items[n];a.push(i.text),t?e.push(this.$scopedSlots.item({item:i})):e.push(this.$createElement(l,{key:a.join("."),props:i},[i.text])),n<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots["default"]||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},"615b":function(e,t,a){},"685e":function(e,t,a){"use strict";var n=a("1626"),i=a.n(n);i.a},abd3:function(e,t,a){},afdd:function(e,t,a){"use strict";var n=a("8336");t["a"]=n["a"]}}]);
//# sourceMappingURL=chunk-9c497fb2.d977a4e9.js.map