(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{2874:function(e,t){},daf3:function(e,t,a){"use strict";var n=a("2874"),s=a.n(n);t["default"]=s.a},df27:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}})],1)]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"bin_name",attrs:{props:t}},[e._v("\n            "+e._s(t.row.bin_name)+"\n          ")]),a("q-td",{key:"goods_code",attrs:{props:t}},[e._v("\n            "+e._s(t.row.goods_code)+"\n          ")]),a("q-td",{key:"goods_desc",attrs:{props:t}},[e._v("\n            "+e._s(t.row.goods_desc)+"\n          ")]),a("q-td",{key:"goods_qty",attrs:{props:t}},[e._v("\n            "+e._s(t.row.goods_qty)+"\n          ")]),a("q-td",{key:"pick_qty",attrs:{props:t}},[e._v("\n            "+e._s(t.row.pick_qty)+"\n          ")]),a("q-td",{key:"picked_qty",attrs:{props:t}},[e._v("\n            "+e._s(t.row.picked_qty)+"\n          ")]),a("q-td",{key:"bin_size",attrs:{props:t}},[e._v("\n            "+e._s(t.row.bin_size)+"\n          ")]),a("q-td",{key:"bin_property",attrs:{props:t}},[e._v("\n            "+e._s(t.row.bin_property)+"\n          ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n            "+e._s(t.row.create_time)+"\n          ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n            "+e._s(t.row.update_time)+"\n          ")])],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex cordova-footer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:e.barscan},on:{input:[function(t){t.target.composing||(e.barscan=t.target.value)},function(t){return e.datachange()}]}})])]],2)},s=[],o=a("3004"),i=(a("3a34"),a("18d6"));var r="false";function c(e,t){var a={};a[e]=t,a.SEND_RESULT=r,window.plugins.intentShim.sendBroadcast({action:"com.symbol.datawedge.api.ACTION",extras:a},(function(){}),(function(){}))}function d(){window.plugins.intentShim.unregisterBroadcastReceiver()}function l(e){}function _(e){for(var t=0;t<e.length;t++)e[t].SCANNER_NAME,t<e.length-1&&", "}function p(e){}function g(e,t){var a=e.extras["com.symbol.datawedge.data_string"];document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=a,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}var m={name:"Pageurovo_locationquery",data(){return{openid:"",login_name:"",authin:"0",pathname:"stock/bin/",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"goods_desc",label:this.$t("stock.view_stocklist.goods_desc"),field:"onhand_stock",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.onhand_stock"),field:"goods_qty",align:"center"},{name:"pick_qty",label:this.$t("stock.view_stocklist.pick_stock"),field:"pick_qty",align:"center"},{name:"picked_qty",label:this.$t("stock.view_stocklist.picked_stock"),field:"picked_qty",align:"center"},{name:"bin_size",label:this.$t("warehouse.view_binset.bin_size"),field:"bin_size",align:"center"},{name:"bin_property",label:this.$t("warehouse.view_binset.bin_property"),field:"bin_property",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"10000"},screenq:this.$q.screen,IMEI:window.device,batteryStatus:"determining...",barscan:"",bin_scan:""}},methods:{datachange(){var e=this;e.$q.localStorage.has("auth")&&Object(o["e"])("scanner/?bar_code="+e.barscan,{}).then((t=>{e.barscan=t.results[0].code,"BINSET"===t.results[0].mode?(e.bin_scan=t.results[0].code,e.goods_scan=""):"GOODS"===t.results[0].mode&&(e.goods_scan=t.results[0].code,e.countAdd(e.goods_scan))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},countAdd(e){var t=this;t.table_list.filter((function(a,n,s){a.bin_name===t.bin_scan&&a.goods_code===e&&(t.table_list[n].physical_inventory+=1)}))},getList(){var e=this;e.$q.localStorage.has("auth")&&Object(o["e"])(e.pathname,{}).then((t=>{e.table_list=t.results})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.barscan="",e.bin_scan="",e.goods_scan="",e.getList()},ConfirmCount(){var e=this;i["a"].has("auth")&&Object(o["i"])(e.pathname,e.table_list).then((t=>{e.$q.notify({message:"Success Confirm Cycle Count",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},updateBatteryStatus(e){var t=this;t.batteryStatus=`Level: ${e.level}, plugged: ${e.isPlugged}`},scanEvents(){var e=this;document.addEventListener("deviceready",e.onDeviceReady,!1)},onDeviceReady(){var e=this;e.receivedEvent("deviceready"),e.registerBroadcastReceiver(),e.determineVersion()},onPause:function(){d()},onResume(){var e=this;e.registerBroadcastReceiver()},receivedEvent(e){},startSoftTrigger(){c("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","START_SCANNING")},stopSoftTrigger(){c("com.symbol.datawedge.api.SOFT_SCAN_TRIGGER","STOP_SCANNING")},determineVersion(){c("com.symbol.datawedge.api.GET_VERSION_INFO","")},setDecoders(){var e={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",PARAM_LIST:{scanner_selection:"auto"}}};c("com.symbol.datawedge.api.SET_CONFIG",e)},registerBroadcastReceiver(){window.plugins.intentShim.registerBroadcastReceiver({filterActions:["com.greaterwms.app.ACTION","com.symbol.datawedge.api.RESULT_ACTION"],filterCategories:["android.intent.category.DEFAULT"]},(function(e){if(e.extras.hasOwnProperty("RESULT_INFO")){var t=e.extras.RESULT+" ("+e.extras.COMMAND.substring(e.extras.COMMAND.lastIndexOf(".")+1,e.extras.COMMAND.length)+")";l(t.toLowerCase())}if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){var a=e.extras["com.symbol.datawedge.api.RESULT_GET_VERSION_INFO"],n=a.DATAWEDGE;if(n>="6.3"&&(c("com.symbol.datawedge.api.CREATE_PROFILE","wms"),c("com.symbol.datawedge.api.GET_ACTIVE_PROFILE",""),c("com.symbol.datawedge.api.ENUMERATE_SCANNERS","")),n>="6.4"){var s={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",RESET_CONFIG:"true",PARAM_LIST:{}},APP_LIST:[{PACKAGE_NAME:"com.greaterwms.app",ACTIVITY_LIST:["*"]}]};c("com.symbol.datawedge.api.SET_CONFIG",s);var o={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"INTENT",RESET_CONFIG:"true",PARAM_LIST:{intent_output_enabled:"true",intent_action:"com.greaterwms.app.ACTION",intent_delivery:"2"}}};c("com.symbol.datawedge.api.SET_CONFIG",o),setTimeout((function(){c("com.symbol.datawedge.api.GET_ACTIVE_PROFILE","")}),1e3)}n>="6.5"&&(r="true")}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")){var i=e.extras["com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS"];_(i)}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){var d=e.extras["com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE"];p(d)}else e.extras.hasOwnProperty("RESULT_INFO")||g(e,(new Date).toLocaleString())}))}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?e.authin="1":e.authin="0"},mounted(){var e=this;window.addEventListener("batterystatus",e.updateBatteryStatus,!1),e.height=this.$q.screen.height-175+"px",e.barscan="",e.bin_scan="",e.scanEvents()},updated(){},beforeDestroy(){var e=this;window.removeEventListener("batterystatus",e.updateBatteryStatus,!1),window.removeEventListener("deviceready",e.onDeviceReady,!1)},destroyed(){}},u=m,E=a("42e1"),b=a("daf3"),y=a("eaac"),v=a("e7a9"),h=a("9c40"),w=a("bd08"),f=a("db86"),N=a("eebe"),I=a.n(N),S=Object(E["a"])(u,n,s,!1,null,null,null);"function"===typeof b["default"]&&Object(b["default"])(S);t["default"]=S.exports;I()(S,"components",{QTable:y["a"],QBtnGroup:v["a"],QBtn:h["a"],QTr:w["a"],QTd:f["a"]})}}]);