(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qNYQ:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=function(){return function(){}}(),s=l("pMnS"),i=l("Ip0R"),a=l("AytR"),u=l("jwUf"),p=l("67Y/"),r=function(){function n(n,t,l,e){this.postsService=n,this.meta=t,this.title=l,this.route=e,this.routeAnimation=!0,this.display="block",this.environmentName=a.a.envName,this.apiBase=a.a.apiBase,this.state="small",this.posts=[],this.offline="",l.setTitle("My Home Page"),t.addTags([{name:"author",content:"wkylin"},{name:"keywords",content:"angular seo, angular 4 universal, etc"},{name:"description",content:"This is my Angular SEO-based App, enjoy it!"}])}return n.prototype.ngOnInit=function(){var n=this;this.route.data.pipe(Object(p.a)(function(n){return n.posts})).subscribe(function(t){n.posts=t}),navigator.onLine||(this.offline="Sorry, you're offline")},n.prototype.ngOnDestroy=function(){},n.prototype.queryPosts=function(){var n=this;this.posts$=this.postsService.queryPostsList().subscribe(function(t){console.log("data:",t),n.posts=t.data},function(n){n.error instanceof Error?console.log("An error occurred:",n.error.message):console.log("Backend returned code "+n.status+", body was: "+n.error)},function(){console.log("completed")})},n.prototype.pushItem=function(){this.posts.push({id:1,title:"Hey this is an item",author:"wkylin"}),this.state="small"===this.state?"large":"small"},n.prototype.removeItem=function(){this.posts.pop()},n}(),m=l("ZYjt"),c=l("ZYCi"),f=e["\u0275crt"]({encapsulation:0,styles:[[".ui-list-item[_ngcontent-%COMP%]{background:#eee;margin-bottom:10px;padding:1em}button[_ngcontent-%COMP%]{background:#347eff;border:none;color:#fff;margin:0 10px 20px 0;outline:0;padding:10px}"]],data:{animation:[{type:7,name:"myAnimation",definitions:[{type:0,name:"small",styles:{type:6,styles:{transform:"scale(1)"},offset:null},options:void 0},{type:0,name:"large",styles:{type:6,styles:{transform:"scale(1.2)"},offset:null},options:void 0},{type:1,expr:"small <=> large",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:"translateY(-75%)",offset:0},offset:null},{type:6,styles:{opacity:1,transform:"translateY(35px)",offset:.5},offset:null},{type:6,styles:{opacity:1,transform:"translateY(-75%)",offset:1},offset:null}]},timings:"300ms ease-in"},options:null}],options:{}},{type:7,name:"listAnimation",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:":enter",animation:{type:6,styles:{opacity:0},offset:null},options:{optional:!0}},{type:11,selector:":enter",animation:{type:12,timings:"300ms",animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:"translateY(-75px)",offset:0},offset:null},{type:6,styles:{opacity:.5,transform:"translateY(35px)",offset:.3},offset:null},{type:6,styles:{opacity:1,transform:"translateY(0)",offset:1},offset:null}]},timings:"1s ease-in"}]},options:{optional:!0}},{type:11,selector:":leave",animation:{type:12,timings:"300ms",animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:"translateY(0)",offset:0},offset:null},{type:6,styles:{opacity:.5,transform:"translateY(35px)",offset:.3},offset:null},{type:6,styles:{opacity:0,transform:"translateY(-75px)",offset:1},offset:null}]},timings:"1s ease-in"}]},options:{optional:!0}}],options:null}],options:{}},{type:7,name:"fadeInAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.5s"}],options:null}],options:{}}]}});function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"li",[["class","ui-list-item"]],null,null,null,null,null)),(n()(),e["\u0275ted"](1,null,[" "," "]))],null,function(n,t){n(t,1,0,t.context.$implicit.title)})}function d(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,16,"div",[["class","app-content"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","title"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["env:",""])),(n()(),e["\u0275eld"](4,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](5,null,["api: ",""])),(n()(),e["\u0275eld"](6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e["\u0275ted"](7,null,["",""])),(n()(),e["\u0275eld"](8,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" Welcome to Angular Animations!! "])),(n()(),e["\u0275eld"](10,0,null,null,1,"button",[],[[24,"@myAnimation",0]],[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.pushItem()&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Add item"])),(n()(),e["\u0275eld"](12,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.removeItem()&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Remove item"])),(n()(),e["\u0275eld"](14,0,null,null,2,"ul",[["class","ui-list"]],[[24,"@listAnimation",0]],null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](16,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,16,0,t.component.posts)},function(n,t){var l=t.component;n(t,3,0,l.environmentName),n(t,5,0,l.apiBase),n(t,7,0,l.offline),n(t,10,0,l.state),n(t,14,0,l.posts.length)})}function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-home",[],[[40,"@fadeInAnimation",0],[4,"display",null]],null,null,d,f)),e["\u0275did"](1,245760,null,0,r,[u.a,m.h,m.i,c.a],null,null)],function(n,t){n(t,1,0)},function(n,t){n(t,0,0,e["\u0275nov"](t,1).routeAnimation,e["\u0275nov"](t,1).display)})}var v=e["\u0275ccf"]("app-home",r,g,{},{},[]),h=l("gIcY"),b=l("pqyF"),A=function(){function n(n){this.pService=n}return n.prototype.resolve=function(n,t){return this.pService.queryPostsList()},n}(),k=l("FpXt"),x={title:"MyHome",isShowTabbar:!0},Y=function(){return function(){}}();l.d(t,"HomeModuleNgFactory",function(){return w});var w=e["\u0275cmf"](o,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,v]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,h.n,h.n,[]),e["\u0275mpd"](4608,h.d,h.d,[]),e["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,b.a,b.a,[]),e["\u0275mpd"](4608,A,A,[u.a]),e["\u0275mpd"](1073742336,h.m,h.m,[]),e["\u0275mpd"](1073742336,h.e,h.e,[]),e["\u0275mpd"](1073742336,h.l,h.l,[]),e["\u0275mpd"](1073742336,c.s,c.s,[[2,c.x],[2,c.o]]),e["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),e["\u0275mpd"](1073742336,k.a,k.a,[]),e["\u0275mpd"](1073742336,Y,Y,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,c.m,function(){return[[{path:"",component:r,data:x,resolve:{posts:A}}]]},[])])})}}]);