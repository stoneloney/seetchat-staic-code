(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-80c0a432"],{"0e04":function(e,n,t){"use strict";var a=t("2592");t.n(a).a},2592:function(e,n,t){},fe06:function(e,n,t){"use strict";t.r(n);var a={data:function(){return{shouKuanRen:"",shouKuanHao:"",money:null}},created:function(){this.screenHeight=window.screenHeight},mounted:function(){},methods:{fanHui:function(){this.$router.go(-1)}},computed:{},components:{}},o=(t("0e04"),t("9ca4")),s=Object(o.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"withdrawDeposit"},[t("van-sticky",[t("van-nav-bar",{staticStyle:{height:"50px"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticStyle:{"font-size":"18px"}},[e._v("提现")])]},proxy:!0},{key:"left",fn:function(){return[t("van-icon",{attrs:{name:"arrow-left",size:"20",color:"#000000"},on:{click:e.fanHui}})]},proxy:!0}])})],1),t("van-form",[t("van-field",{staticStyle:{"margin-top":"15px"},attrs:{name:"收款人",label:"收款人",placeholder:"请输入收款人",rules:[{required:!0,message:"请输入收款人姓名"}]},model:{value:e.shouKuanRen,callback:function(n){e.shouKuanRen=n},expression:"shouKuanRen"}}),t("van-field",{attrs:{name:"收款账号",label:"收款账号",placeholder:"请输入卡号",rules:[{required:!0,message:"请输入收款账号"}]},model:{value:e.shouKuanHao,callback:function(n){e.shouKuanHao=n},expression:"shouKuanHao"}}),t("div",{staticClass:"moneyKa"},[t("div",[e._v("提现金额")]),t("van-field",{staticClass:"moneyLie",attrs:{placeholder:"请输入金额","label-width":"22",type:"number",label:"￥"},model:{value:e.money,callback:function(n){e.money=n},expression:"money"}}),t("div",{staticClass:"fenGeXian"}),t("div",[e._v("可提现￥570")])],1),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{staticClass:"tiJiaoBut",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("\n                提交\n            ")])],1)],1)],1)}),[],!1,null,"7f2e263a",null);n.default=s.exports}}]);