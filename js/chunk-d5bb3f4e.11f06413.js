(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5bb3f4e"],{"132d":function(t,e,s){"use strict";s("4804");var a,i=s("7e2b"),n=s("a9ad"),r=s("af2b"),o=s("7560"),l=s("80d2"),c=s("2b0e"),d=s("58df");function u(t){return["fas","far","fal","fab","fad"].some(e=>t.includes(e))}function p(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));const h=Object(d["a"])(i["a"],n["a"],r["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["w"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["t"])(t).find(e=>t[e]);return e&&a[e]||Object(l["f"])(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],a=this.getDefaultData();let i="material-icons";const n=t.indexOf("-"),r=n<=-1;r?s.push(t):(i=t.slice(0,n),u(i)&&(i="")),a.class[i]=!0,a.class[t]=!r;const o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,s)},renderSvgIcon(t,e){const s={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(s.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const s={class:{"v-icon__component":!0}},a=this.getSize();a&&(s.style={fontSize:a,height:a,width:a}),this.applyColors(s);const i=t.component;return s.props=t.props,s.nativeOn=s.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,s)])}},render(t){const e=this.getIcon();return"string"===typeof e?p(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:h,functional:!0,render(t,{data:e,children:s}){let a="";return e.domProps&&(a=e.domProps.textContent||e.domProps.innerHTML||a,delete e.domProps.textContent,delete e.domProps.innerHTML),t(h,e,a?[a]:s)}})},4804:function(t,e,s){},7496:function(t,e,s){"use strict";s("df86");var a=s("7560"),i=s("58df");e["a"]=Object(i["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},"7e2b":function(t,e,s){"use strict";var a=s("2b0e");function i(t){return function(e,s){for(const a in s)Object.prototype.hasOwnProperty.call(e,a)||this.$delete(this.$data[t],a);for(const a in e)this.$set(this.$data[t],a,e[a])}}e["a"]=a["a"].extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},a9ad:function(t,e,s){"use strict";var a=s("2b0e"),i=s("d9bd"),n=s("7bc6");e["a"]=a["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?(Object(i["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(i["b"])("class must be an object",this),e):(Object(n["d"])(t)?e.style={...e.style,"background-color":""+t,"border-color":""+t}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return Object(i["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(i["b"])("class must be an object",this),e;if(Object(n["d"])(t))e.style={...e.style,color:""+t,"caret-color":""+t};else if(t){const[s,a]=t.toString().trim().split(" ",2);e.class={...e.class,[s+"--text"]:!0},a&&(e.class["text--"+a]=!0)}return e}}})},af2b:function(t,e,s){"use strict";var a=s("2b0e");e["a"]=a["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},df86:function(t,e,s){},e858:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{staticClass:"container mx-auto  h-full"},[s("div",{staticClass:"flex content-center items-center justify-center  "},[s("div",{staticClass:"w-full lg:w-6/12 px-4"},[s("div",{staticClass:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"},[s("div",{staticClass:"rounded-t mb-0 px-6 py-6"},[s("button",{staticClass:"bg-white shadow-xl rounded-full mb-2",on:{click:function(e){return t.$router.go(-1)}}},[s("v-icon",{staticClass:"icon"},[t._v("mdi-chevron-left")])],1),s("div",{staticClass:"text-center mb-3 "},[s("h2",{staticClass:" "},[t._v("ส่งคำขอไปที่ผู้ดูแลระบบ")])]),s("form",{on:{submit:function(e){return e.preventDefault(),t.calling()}}},[s("div",{staticClass:"text-blue-500 text-center mb-3 font-bold"},[s("div",{staticClass:"mx-auto lg:mx-0 border-b-2 border-teal-500 opacity-25"}),s("div",{staticClass:"w-full md:w-12/12 pt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.personal_id,expression:"form.personal_id"}],class:""+t.$xinput,attrs:{required:"",type:"text",placeholder:"หมายเลขบัตรประชาชน"},domProps:{value:t.form.personal_id},on:{input:function(e){e.target.composing||t.$set(t.form,"personal_id",e.target.value)}}})]),s("div",{staticClass:"w-full md:w-12/12 pt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],class:""+t.$xinput,attrs:{required:"",type:"text",placeholder:"หมายเลขโทรศัพท์ที่ติดต่อกลับได้"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}})]),s("br"),s("button",{class:"bg-blue-600 "+t.btn,attrs:{type:"submit"}},[t._v(" ส่งคำขอ ")])])])])])])])]),s("CityDialog")],1)},i=[],n=(s("96cf"),s("1da1")),r=s("d4ec"),o=s("bee2"),l=s("262e"),c=s("2caf"),d=s("9ab4"),u=s("dcc8"),p=s("60a3"),h=function(t){Object(l["a"])(s,t);var e=Object(c["a"])(s);function s(){var t;return Object(r["a"])(this,s),t=e.apply(this,arguments),t.form={personal_id:null,tel:null,status:!1},t.btn="text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",t.input="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150",t}return Object(o["a"])(s,[{key:"calling",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].postHttp("/user/account/forgetpassword/",this.form);case 2:e=t.sent,e&&(alert("ส่งคำขอไปที่ผู้ดูแลระบบแล้ว"),this.$router.push("/"));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),s}(p["c"]);h=Object(d["a"])([Object(p["a"])({components:{},computed:{}})],h);var f=h,m=f,b=s("2877"),v=s("6544"),g=s.n(v),x=s("7496"),y=s("132d"),w=Object(b["a"])(m,a,i,!1,null,null,null);e["default"]=w.exports;g()(w,{VApp:x["a"],VIcon:y["a"]})}}]);
//# sourceMappingURL=chunk-d5bb3f4e.11f06413.js.map