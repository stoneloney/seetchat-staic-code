(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-03537fd2"],{"59a8":function(a,e,t){"use strict";var n=t("d0ff");t.n(n).a},"64ef":function(a,e,t){"use strict";var n=t("d46a");t.n(n).a},8183:function(a,e,t){"use strict";t.r(e);var n={data:function(){return{biaoQianshow:!1,myData:{fenVideo:[],geXInQIanMing:"",niCheng:"",XingBie:"",nianLing:"",shengRi:"",idHao:"",zhiYe:"",xingZuo:"",xueXiao:"",suoZaiDi:"",aiHao:"",biaoQianResult:[1,2]},listLan:[],listLie:[{label:1,value:"情感"},{label:2,value:"美食"},{label:3,value:"职场"},{label:4,value:"户外"},{label:5,value:"跳舞"},{label:6,value:"看电影"},{label:7,value:"打游戏"},{label:8,value:"情感"},{label:9,value:"美食"},{label:10,value:"职场"},{label:11,value:"户外"},{label:12,value:"跳舞"},{label:13,value:"看电影"},{label:14,value:"打游戏"},{label:15,value:"职场"},{label:16,value:"户外"},{label:17,value:"跳舞"},{label:18,value:"看电影"},{label:19,value:"打游戏"}]}},created:function(){this.screenHeight=window.screenHeight},mounted:function(){this.bQResultTurnListLan()},methods:{bQResultTurnListLan:function(){this.listLan=[];for(var a=0;a<this.myData.biaoQianResult.length;a++)for(var e=0;e<this.listLie.length;e++)this.myData.biaoQianResult[a]==this.listLie[e].label&&this.listLan.push({label:this.listLie[e].label,value:this.listLie[e].value})},fanHui:function(){this.$router.go(-1)},showBiaoQian:function(){this.biaoQianshow=!0},biaoQianGuanBi:function(){this.bQResultTurnListLan(),this.biaoQianshow=!1},afterRead:function(a){}},computed:{},components:{}},l=(t("59a8"),t("64ef"),t("9ca4")),i=Object(l.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"personalData"},[t("van-sticky",[t("van-nav-bar",{staticStyle:{height:"50px"},scopedSlots:a._u([{key:"title",fn:function(){return[t("span",{staticStyle:{"font-size":"18px"}},[a._v("编辑资料")])]},proxy:!0},{key:"left",fn:function(){return[t("van-icon",{attrs:{name:"arrow-left",size:"20",color:"#000000"},on:{click:a.fanHui}})]},proxy:!0}])})],1),t("van-form",[t("van-cell",{staticClass:"touLie",attrs:{label:"上传视频跟吸引他人关注你"},scopedSlots:a._u([{key:"title",fn:function(){return[t("span",{staticClass:"custom-title",staticStyle:{"margin-right":"25px"}},[a._v("封面/视频")]),t("van-uploader",{attrs:{"after-read":a.afterRead,"preview-size":"40px","max-count":4},model:{value:a.myData.fenVideo,callback:function(e){a.$set(a.myData,"fenVideo",e)},expression:"myData.fenVideo"}},[t("van-icon",{staticClass:"imgJianTou",attrs:{name:"arrow"}})],1)]},proxy:!0}])}),t("van-field",{staticClass:"touLie",attrs:{rows:"2",autosize:"",label:"个新签名",type:"textarea",maxlength:"30",placeholder:"展示我的态度30字以内","show-word-limit":""},model:{value:a.myData.geXInQIanMing,callback:function(e){a.$set(a.myData,"geXInQIanMing",e)},expression:"myData.geXInQIanMing"}}),t("van-field",{staticClass:"touLie",attrs:{name:"昵称",label:"昵称",placeholder:"请输入昵称",rules:[{required:!0,message:"请输入昵称"}]},model:{value:a.myData.niCheng,callback:function(e){a.$set(a.myData,"niCheng",e)},expression:"myData.niCheng"}}),t("van-field",{attrs:{name:"性别",label:"性别",placeholder:"性别",rules:[{required:!0,message:"请输入性别"}]},model:{value:a.myData.XingBie,callback:function(e){a.$set(a.myData,"XingBie",e)},expression:"myData.XingBie"}}),t("van-field",{attrs:{name:"年龄",label:"年龄",placeholder:"请输入年龄",rules:[{required:!0,message:"请输入年龄"}]},model:{value:a.myData.nianLing,callback:function(e){a.$set(a.myData,"nianLing",e)},expression:"myData.nianLing"}}),t("van-field",{attrs:{name:"生日",label:"生日",placeholder:"请输入生日",rules:[{required:!0,message:"请输入生日"}]},model:{value:a.myData.shengRi,callback:function(e){a.$set(a.myData,"shengRi",e)},expression:"myData.shengRi"}}),t("van-field",{staticClass:"touLie",attrs:{name:"ID号",label:"ID号",placeholder:"ID号",rules:[{required:!0,message:"请输入收ID号"}]},model:{value:a.myData.idHao,callback:function(e){a.$set(a.myData,"idHao",e)},expression:"myData.idHao"}}),t("van-field",{attrs:{name:"职业",label:"职业",placeholder:"请输入职业",rules:[{required:!0,message:"请输入职业"}]},model:{value:a.myData.zhiYe,callback:function(e){a.$set(a.myData,"zhiYe",e)},expression:"myData.zhiYe"}}),t("van-field",{attrs:{name:"星座",label:"星座",placeholder:"请输入星座",rules:[{required:!0,message:"请输入星座"}]},model:{value:a.myData.xingZuo,callback:function(e){a.$set(a.myData,"xingZuo",e)},expression:"myData.xingZuo"}}),t("van-field",{attrs:{name:"学校",label:"学校",placeholder:"请输入学校",rules:[{required:!0,message:"请输入学校"}]},model:{value:a.myData.xueXiao,callback:function(e){a.$set(a.myData,"xueXiao",e)},expression:"myData.xueXiao"}}),t("van-field",{attrs:{name:"所在地",label:"所在地",placeholder:"请输入所在地",rules:[{required:!0,message:"请输入所在地"}]},model:{value:a.myData.suoZaiDi,callback:function(e){a.$set(a.myData,"suoZaiDi",e)},expression:"myData.suoZaiDi"}}),t("van-field",{staticClass:"touLie",attrs:{rows:"2",autosize:"",label:"爱好",type:"textarea",maxlength:"100",placeholder:"您的爱好100字以内","show-word-limit":""},model:{value:a.myData.aiHao,callback:function(e){a.$set(a.myData,"aiHao",e)},expression:"myData.aiHao"}}),t("van-cell",{staticClass:"touLie",attrs:{label:"选择标签"},scopedSlots:a._u([{key:"title",fn:function(){return[t("span",{staticClass:"custom-title",staticStyle:{"margin-right":"50px"}},[a._v("标签")]),a._l(a.listLan,(function(e){return t("van-tag",{staticStyle:{margin:"3px"},attrs:{round:"",size:"medium",type:"danger"}},[a._v("\n                    "+a._s(e.value)+"\n                ")])}))]},proxy:!0},{key:"right-icon",fn:function(){return[t("van-icon",{staticStyle:{margin:"10px"},attrs:{name:"arrow"},on:{click:a.showBiaoQian}})]},proxy:!0}])}),t("van-row",{staticClass:"touLie"},[t("van-col",{attrs:{span:"1"}}),t("van-col",{attrs:{span:"10"}},[t("van-button",{attrs:{round:"",block:""}},[a._v("取消")])],1),t("van-col",{attrs:{span:"2"}}),t("van-col",{attrs:{span:"10"}},[t("van-button",{staticClass:"tiJiaoBut",attrs:{round:"",block:"","native-type":"submit"}},[a._v("提交")])],1)],1)],1),t("van-popup",{style:{height:"100%"},attrs:{"close-icon-position":"top-left",position:"bottom"},model:{value:a.biaoQianshow,callback:function(e){a.biaoQianshow=e},expression:"biaoQianshow"}},[t("van-sticky",[t("van-nav-bar",{staticStyle:{height:"50px"},scopedSlots:a._u([{key:"title",fn:function(){return[t("span",{staticStyle:{"font-size":"18px"}},[a._v("我的标签")])]},proxy:!0},{key:"left",fn:function(){return[t("van-icon",{attrs:{name:"arrow-left",size:"20",color:"#000000"},on:{click:a.biaoQianGuanBi}})]},proxy:!0}])})],1),t("van-checkbox-group",{model:{value:a.myData.biaoQianResult,callback:function(e){a.$set(a.myData,"biaoQianResult",e)},expression:"myData.biaoQianResult"}},[t("van-cell-group",a._l(a.listLie,(function(e){return t("van-cell",{key:e.label,attrs:{clickable:"",title:""+e.value},scopedSlots:a._u([{key:"right-icon",fn:function(){return[t("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:e.label,"checked-color":"#4CD4D2"}})]},proxy:!0}],null,!0)})})),1)],1)],1)],1)}),[],!1,null,"b1feaef8",null);e.default=i.exports},d0ff:function(a,e,t){},d46a:function(a,e,t){}}]);