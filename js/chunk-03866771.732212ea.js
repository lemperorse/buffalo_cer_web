(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03866771"],{"3a2f":function(t,e,i){"use strict";i("a9e3"),i("e25e");var s=i("ade3"),a=(i("9734"),i("4ad4")),n=i("a9ad"),o=i("16b7"),r=i("b848"),c=i("75eb"),l=i("f573"),d=i("f2e7"),h=i("80d2"),u=i("d9bd"),f=i("58df");e["a"]=Object(f["a"])(n["a"],o["a"],r["a"],c["a"],l["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||s?n=a+e.width/2-i.width/2:(this.left||this.right)&&(n=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=s+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=s+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h["t"])(this,"activator",!0)&&Object(u["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===h["x"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(s["a"])(t,this.contentClass,!0),Object(s["a"])(t,"menuable__content__active",this.isActive),Object(s["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"79af":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-gray-100"},[i("div",{staticClass:"container w-full mx-auto"},[i("div",{staticClass:"w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"},[i("v-container",[i("h2",{staticClass:"font-bold text-3xl"},[i("i",{staticClass:"em em-spiral_note_pad text-4xl",attrs:{"aria-role":"presentation","aria-label":""}}),t._v(" คำขอรหัสผ่าน")]),i("v-breadcrumbs",{attrs:{items:t.bc,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),i("hr",{staticClass:"border-b-2 border-gray-400 "})],1),i("div",{staticClass:"flex flex-wrap"},[i("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 p-0 mb-3 md:p-3"},[i("div",{staticClass:"bg-white border-b-4 border-blue-500  rounded  shadow-xl  p-2"},[i("div",{staticClass:"flex flex-row items-center"},[i("v-text-field",{attrs:{dense:"",clearable:"",flat:"","hide-details":"","append-icon":"mdi-magnify",label:"ค้นหา",outlined:"","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-divider",{staticClass:"ma-1",attrs:{vertical:""}}),i("v-btn",{staticClass:"border-blue-500",attrs:{depressed:"",color:"blue",medium:"",dense:"",dark:""},on:{click:function(e){return t.$router.push("/")}}},[i("v-icon",[t._v("mdi-magnify")]),t._v("ค้นหา ")],1)],1)])]),i("div",{staticClass:"w-full md:w-1/1 xl:w-1/1 p-0 md:p-3"},[i("v-data-table",{staticClass:"bg-white border-b-4 border-blue-500 rounded shadow-xl p-2",attrs:{headers:t.headers,items:t.desserts,search:t.search,"sort-by":"calories"},scopedSlots:t._u([{key:"item.actions",fn:function(e){return[i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"success",icon:""},on:{click:function(e){return t.$router.push("farmer")}}},"v-btn",a,!1),s),[i("v-icon",[t._v("mdi-eye-outline")])],1)]}}],null,!0)},[i("span",[t._v("ดูข้อมูล")])])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})],1)])],1)])])},a=[],n=(i("c975"),i("a434"),{data:function(){return{bc:[{text:"คำขอรหัสผ่าน",disabled:!1,href:"/#/admin/resetpass"}],search:"",dialog:!1,headers:[{text:"ชื่อ",value:"fname",sortable:!1},{text:"นามสกุล",value:"lname",sortable:!1},{text:"เบอร์โทรศัพท์",value:"phoneNumber",sortable:!1},{text:"สถานะการแก้ไขรหัสผ่าน",value:"glutenfree",sortable:!1},{text:"วันที่ขอคำร้อง",value:"date",sortable:!1},{text:"การจัดการ",value:"actions",sortable:!1}],show4:!1,desserts:[],editedIndex:-1,editedItem:{IDCard:"",name:"",email:"",status:""},defaultItem:{IDCard:"",name:"",email:"",status:""}}},computed:{formTitle:function(){return-1===this.editedIndex?" เพิ่มผู้ดูแล ":"แก้ไขข้อมูล"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{fname:"นายแดง",lname:"มีชัย",phoneNumber:"0123123123",date:"29/6/2020",glutenfree:"ยังไม่ได้แก้ไขรหัสผ่าน"},{fname:"นายแดง",lname:"มีชัย",phoneNumber:"0123123123",date:"29/6/2020",glutenfree:"แก้ไขรหัสผ่านแล้ว"},{fname:"นายแดง",lname:"มีชัย",phoneNumber:"0123123123",date:"29/6/2020",glutenfree:"แก้ไขรหัสผ่านแล้ว"}]},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.desserts.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(e,1)},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}}),o=n,r=i("2877"),c=i("6544"),l=i.n(c),d=i("2bc5"),h=i("8336"),u=i("a523"),f=i("8fea"),m=i("ce7e"),v=i("132d"),p=i("8654"),b=i("3a2f"),g=Object(r["a"])(o,s,a,!1,null,null,null);e["default"]=g.exports;l()(g,{VBreadcrumbs:d["a"],VBtn:h["a"],VContainer:u["a"],VDataTable:f["a"],VDivider:m["a"],VIcon:v["a"],VTextField:p["a"],VTooltip:b["a"]})},9734:function(t,e,i){},afdd:function(t,e,i){"use strict";var s=i("8336");e["a"]=s["a"]}}]);
//# sourceMappingURL=chunk-03866771.732212ea.js.map