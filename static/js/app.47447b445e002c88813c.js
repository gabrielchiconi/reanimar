webpackJsonp([1],{M93x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("xJD8"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);var o=n("qziy");var r=function(e){n("t2jE")},d=n("VU/8")(i.a,o.a,!1,r,null,null);t.default=d.exports},NHnr:function(e,t,n){"use strict";var a=o(n("7+uW")),i=o(n("M93x")),u=o(n("YaEn"));function o(e){return e&&e.__esModule?e:{default:e}}a.default.config.productionTip=!1,new a.default({el:"#app",router:u.default,components:{App:i.default},template:"<App/>"})},YaEn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("7+uW")),i=o(n("/ocq")),u=o(n("hpsn"));function o(e){return e&&e.__esModule?e:{default:e}}a.default.use(i.default),t.default=new i.default({routes:[{path:"/",name:"Start",component:u.default}]})},ajOY:function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"video-bg"}},[n("video",{ref:"videoEmbed",class:e.videoElementClassList,attrs:{src:"https://res.cloudinary.com/dza7f8g2e/video/upload/v1529635341/beach02.mp4",autoplay:"autoplay",loop:"loop",muted:"muted"},domProps:{muted:!0},on:{loadeddata:function(t){e.videoFadeIn()}}})]),n("div",{attrs:{id:"video-content"}},[n("h1",[e._v(e._s(e.title))]),n("p",[e._v(e._s(e.caption))])])])},staticRenderFns:[]};t.a=a},"eXI/":function(e,t){},hpsn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("nMZQ"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);var o=n("ajOY");var r=function(e){n("eXI/")},d=n("VU/8")(i.a,o.a,!1,r,"data-v-93364250",null);t.default=d.exports},nMZQ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=o(n("Zrlr")),u=o(n("wxAW"));function o(e){return e&&e.__esModule?e:{default:e}}var r=(0,o(n("c+8m")).default)({name:"VideoScreen"})(a=function(){function e(){(0,i.default)(this,e),this.title="Reanimar",this.caption="Um ensaio sobre a vida marítima.",this.displayVideo=!1}return(0,u.default)(e,[{key:"mounted",value:function(){this.setVideoPlaybackRate()}},{key:"videoFadeIn",value:function(){this.displayVideo=!0}},{key:"setVideoPlaybackRate",value:function(){this.$refs.videoEmbed.playbackRate=.8}},{key:"videoElementClassList",get:function(){return{show:this.displayVideo}}}]),e}())||a;t.default=r},qziy:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};t.a=a},t2jE:function(e,t){},xJD8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MainApp"}}},["NHnr"]);
//# sourceMappingURL=app.47447b445e002c88813c.js.map