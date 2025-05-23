(()=>{var e={};e.id=9720,e.ids=[5144,9720],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},39699:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=r(70260),n=r(28203),o=r(25155),l=r.n(o),s=r(67292),i={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>s[e]);r.d(t,i);let d=["",{children:["shop",{children:["shop-detail",{children:["[shopId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,44135)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,15290)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/shop/shop-detail/[shopId]/page",pathname:"/shop/shop-detail/[shopId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21795:(e,t,r)=>{Promise.resolve().then(r.bind(r,44135))},35867:(e,t,r)=>{Promise.resolve().then(r.bind(r,24077))},24849:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(41680).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},6766:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(41680).A)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},8523:(e,t,r)=>{"use strict";r.d(t,{A:()=>C});var a=r(97412),n=r(58009),o=r(97980),l=r(90574),s=(0,r(42673).f)(),i=function(){},d=n.forwardRef(function(e,t){var r=n.useRef(null),o=n.useState({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:i}),d=o[0],c=o[1],u=e.forwardProps,m=e.children,h=e.className,p=e.removeScrollBar,f=e.enabled,g=e.shards,v=e.sideCar,x=e.noIsolation,b=e.inert,y=e.allowPinchZoom,w=e.as,_=e.gapMode,j=(0,a.Tt)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),N=(0,l.S)([r,t]),S=(0,a.Cl)((0,a.Cl)({},j),d);return n.createElement(n.Fragment,null,f&&n.createElement(v,{sideCar:s,removeScrollBar:p,shards:g,noIsolation:x,inert:b,setCallbacks:c,allowPinchZoom:!!y,lockRef:r,gapMode:_}),u?n.cloneElement(n.Children.only(m),(0,a.Cl)((0,a.Cl)({},S),{ref:N})):n.createElement(void 0===w?"div":w,(0,a.Cl)({},S,{className:h,ref:N}),m))});d.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},d.classNames={fullWidth:o.pN,zeroRight:o.Mi};var c=r(2331),u=r(81520),m=r(57068),h=!1;if("undefined"!=typeof window)try{var p=Object.defineProperty({},"passive",{get:function(){return h=!0,!0}});window.addEventListener("test",p,p),window.removeEventListener("test",p,p)}catch(e){h=!1}var f=!!h&&{passive:!1},g=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return"hidden"!==r[t]&&!(r.overflowY===r.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===r[t])},v=function(e,t){var r=t.ownerDocument,a=t;do{if("undefined"!=typeof ShadowRoot&&a instanceof ShadowRoot&&(a=a.host),x(e,a)){var n=b(e,a);if(n[1]>n[2])return!0}a=a.parentNode}while(a&&a!==r.body);return!1},x=function(e,t){return"v"===e?g(t,"overflowY"):g(t,"overflowX")},b=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},y=function(e,t,r,a,n){var o,l=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),s=l*a,i=r.target,d=t.contains(i),c=!1,u=s>0,m=0,h=0;do{var p=b(e,i),f=p[0],g=p[1]-p[2]-l*f;(f||g)&&x(e,i)&&(m+=g,h+=f),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!d&&i!==document.body||d&&(t.contains(i)||t===i));return u&&(n&&1>Math.abs(m)||!n&&s>m)?c=!0:!u&&(n&&1>Math.abs(h)||!n&&-s>h)&&(c=!0),c},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},_=function(e){return[e.deltaX,e.deltaY]},j=function(e){return e&&"current"in e?e.current:e},N=0,S=[];let $=(0,c.m)(s,function(e){var t=n.useRef([]),r=n.useRef([0,0]),o=n.useRef(),l=n.useState(N++)[0],s=n.useState(m.T0)[0],i=n.useRef(e);n.useEffect(function(){i.current=e},[e]),n.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var t=(0,a.fX)([e.lockRef.current],(e.shards||[]).map(j),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var d=n.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var a,n=w(e),l=r.current,s="deltaX"in e?e.deltaX:l[0]-n[0],d="deltaY"in e?e.deltaY:l[1]-n[1],c=e.target,u=Math.abs(s)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===u&&"range"===c.type)return!1;var m=v(u,c);if(!m)return!0;if(m?a=u:(a="v"===u?"h":"v",m=v(u,c)),!m)return!1;if(!o.current&&"changedTouches"in e&&(s||d)&&(o.current=a),!a)return!0;var h=o.current||a;return y(h,t,e,"h"===h?s:d,!0)},[]),c=n.useCallback(function(e){if(S.length&&S[S.length-1]===s){var r="deltaY"in e?_(e):w(e),a=t.current.filter(function(t){var a;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(a=t.delta)[0]===r[0]&&a[1]===r[1]})[0];if(a&&a.should){e.cancelable&&e.preventDefault();return}if(!a){var n=(i.current.shards||[]).map(j).filter(Boolean).filter(function(t){return t.contains(e.target)});(n.length>0?d(e,n[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),h=n.useCallback(function(e,r,a,n){var o={name:e,delta:r,target:a,should:n,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(a)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),p=n.useCallback(function(e){r.current=w(e),o.current=void 0},[]),g=n.useCallback(function(t){h(t.type,_(t),t.target,d(t,e.lockRef.current))},[]),x=n.useCallback(function(t){h(t.type,w(t),t.target,d(t,e.lockRef.current))},[]);n.useEffect(function(){return S.push(s),e.setCallbacks({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:x}),document.addEventListener("wheel",c,f),document.addEventListener("touchmove",c,f),document.addEventListener("touchstart",p,f),function(){S=S.filter(function(e){return e!==s}),document.removeEventListener("wheel",c,f),document.removeEventListener("touchmove",c,f),document.removeEventListener("touchstart",p,f)}},[]);var b=e.removeScrollBar,$=e.inert;return n.createElement(n.Fragment,null,$?n.createElement(s,{styles:"\n  .block-interactivity-".concat(l," {pointer-events: none;}\n  .allow-interactivity-").concat(l," {pointer-events: all;}\n")}):null,b?n.createElement(u.jp,{gapMode:e.gapMode}):null)});var k=n.forwardRef(function(e,t){return n.createElement(d,(0,a.Cl)({},e,{ref:t,sideCar:$}))});k.classNames=d.classNames;let C=k},24077:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var a=r(45512),n=r(39400),o=r(52628),l=r(37239),s=r(54716),i=r(42340),d=r(1475),c=r(43030),u=r(35399);let m=()=>{let[e,{loading:t,error:r}]=(0,u.n)(i.B$);return{deleteShopById:async t=>{try{let r=await e({variables:{id:t}});return r?.data?.delete_shops_by_pk}catch(e){throw console.error("Error deleting shop:",e),e}},loadingDeleteShop:t,errorDeleteShop:r}},h=()=>{let[e,{loading:t,error:r}]=(0,u.n)(i.zV);return{deleteImageById:async t=>{try{let r=await e({variables:{id:t}});return r?.data?.delete_shop_images_by_pk}catch(e){throw console.error("Error deleting image:",e),e}},loadingDeleteImage:t,errorDeleteImage:r}},p=()=>{let[e,{loading:t,error:r}]=(0,u.n)(i.Ld);return{updateShopById:async t=>{try{let r=await e({variables:t});return r?.data?.update_shops_by_pk}catch(e){throw console.error("Error updating shop by ID:",e),e}},loadingUpdateShop:t,errorUpdateShop:r}};var f=r(37713);let g=(0,f.J1)`
  mutation updateUserByShopId(
    $shop_id: uuid!
    $username: String
    $email: String
    $phone: String
    $role: String
    $updated_at: timestamptz
  ) {
    update_users(
      where: { shop_id: { _eq: $shop_id } }
      _set: {
        username: $username
        email: $email
        phone: $phone
        role: $role
        updated_at: $updated_at
      }
    ) {
      returning {
        id
        username
        email
        phone
        role
        updated_at
      }
    }
  }
`,v=()=>{let[e,{loading:t,error:r}]=(0,u.n)(g);return{updateUserByShopId:async t=>{try{let r=await e({variables:t});return r?.data?.update_users.returning}catch(e){throw console.error("Error updating user by shop ID:",e),e}},loadingUpdateUser:t,errorUpdateUser:r}};var x=r(63786),b=r(93793),y=r(16596),w=r(24414),_=r(32701),j=r(84569),N=r(6766),S=r(44269),$=r(45103),k=r(79334),C=r(58009);let E=({id:e})=>{let[t,r]=(0,C.useState)([]),[f,g]=(0,C.useState)([]),[E,R]=(0,C.useState)(""),{shopCategories:A}=(0,c.CE)(),[L,I]=(0,C.useState)(!1),{uploadToS3:P}=(0,d.w)(),{toast:M}=(0,s.dj)(),[U]=(0,u.n)(i.XD),{user:D}=(0,c.u8)(e),{shop:T,refetchShop:B}=(0,c._y)(e),{updateShopById:J,loadingUpdateShop:H}=p(),{updateUserByShopId:O}=v(),{images:X,refetchImage:q}=(0,c.yT)(e),{deleteImageById:z,loadingDeleteImage:G}=h(),{deleteShopById:W,loadingDeleteShop:Y}=m(),F=(0,k.useRouter)(),[K,Z]=(0,C.useState)({id:"",name:"",logo:"",description:"",address:"",phone:"",category_id:"",remark:"",shop_admin_name:"",shop_category:{id:"",name:""}});(0,C.useEffect)(()=>{T&&Z(T)},[T]);let[Q,V]=(0,C.useState)({id:"",username:"",email:"",phone:"",role:""});(0,C.useEffect)(()=>{D&&V(D)},[D]);let ee=async()=>{await W(K.id)&&F.push("/shop/shop-list")},et=async e=>{let t=await z(e);console.log(t),t&&q()},er=e=>{r(t=>t.filter((t,r)=>r!==e))},ea=e=>{g(t=>t.filter((t,r)=>r!==e))},en=()=>{r([]),g([]),t.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e))),f.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e)))},eo=async e=>{let r=[];for(let a of t){let t=await P(a);t&&(r.push(t),await U({variables:{shop_id:e,image_url:t}}))}console.log("Uploaded image URLs:",r)},el=async()=>{await J({id:e,name:K.name,logo:"",description:K.description,address:K.address,phone:K.phone,category_id:""===E?K.category_id:E,remark:K.remark,shop_admin_name:K.shop_admin_name})&&B()},es=async()=>{try{I(!0);let t="";if(f.length>0){let e=await P(f[0]);e&&(t=e)}await J({id:e,name:K.name,logo:""===t?K.logo:t,description:K.description,address:K.address,phone:K.phone,category_id:""===E?K.category_id:E,remark:K.remark,shop_admin_name:K.shop_admin_name})&&await O({shop_id:e,username:Q.username,email:Q.email,phone:Q.phone,role:Q.role,updated_at:new Date(Date.now()).toISOString()})&&(await Promise.all([eo(e)]),q(),B(),M({description:"Shop updated"}))}catch(e){console.log("Error creating product:",e),M({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating shop.",action:(0,a.jsx)(l.Qg,{altText:"Try again",children:"Try again"})})}finally{en(),I(!1)}};return(0,a.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,a.jsx)("div",{className:"h-11 w-11",children:(0,a.jsx)(b.A,{})}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to shop list"}),(0,a.jsx)("h1",{className:"text-headercolor font-bold text-xl"})]})]}),(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,a.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(y.A,{name:"name",label:"Shop Name",type:"text",placeHolder:K.name,value:K.name,onChange:e=>Z(t=>({...t,[e.target.name]:e.target.value}))})}),(0,a.jsx)(w.A,{placeHolder:K.description,value:K.description,onChange:e=>Z(t=>({...t,[e.target.name]:e.target.value})),label:"Shop Description",name:"description"})]})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category"}),(0,a.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,a.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,a.jsx)(o.J,{className:"text-inputlabel",children:"Shop Category"}),(0,a.jsx)(_.A,{label:K.shop_category?.name,setCategory:R,options:A})]})})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Address & Contact"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,a.jsx)(y.A,{name:"address",label:"Shop Address *",type:"text",placeHolder:K.address,value:K.address,onChange:e=>Z(t=>({...t,[e.target.name]:e.target.value}))}),(0,a.jsx)(y.A,{name:"shop_phone",label:"Shop Phone Number *",type:"text",placeHolder:K.phone,value:K.phone,onChange:e=>Z(t=>({...t,[e.target.name]:e.target.value}))})]})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Admin Detail"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,a.jsx)(y.A,{name:"shop_admin_name",label:"Full Name",type:"text",placeHolder:K.shop_admin_name,value:K.shop_admin_name||"",onChange:e=>Z(t=>({...t,[e.target.name]:e.target.value}))}),(0,a.jsx)(y.A,{name:"email",label:"Email *",type:"text",placeHolder:Q.email,value:Q.email||"",onChange:e=>V(t=>({...t,[e.target.name]:e.target.value}))}),(0,a.jsx)(y.A,{name:"phone",label:"Phone Number *",type:"text",placeHolder:Q.phone,value:Q.phone||"",onChange:e=>V(t=>({...t,[e.target.name]:e.target.value}))})]})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Authentication Detail"}),(0,a.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,a.jsx)(y.A,{name:"username",label:"Username *",placeHolder:Q.username,value:Q.username||"",onChange:e=>V(t=>({...t,[e.target.name]:e.target.value})),type:"text"})})]})]}),(0,a.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Banner Images"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,a.jsx)(j.A,{className:"w-[10rem]",onFileSelect:e=>{r(t=>[...t,...Array.from(e)])},multiple:!0}),X.map((e,t)=>(0,a.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,a.jsx)($.default,{src:e.image_url,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,a.jsx)("div",{onClick:()=>et(e.id),className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,a.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:G?(0,a.jsx)(N.A,{className:"animate-spin"}):"Remove"})})]},t)),t.map((e,t)=>(0,a.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,a.jsx)($.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,a.jsx)("div",{onClick:()=>er(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,a.jsx)(S.A,{size:30,color:"black"})})]},t))]})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Logo Image"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[f.length<1&&""===K.logo?(0,a.jsx)(j.A,{className:"w-[10rem]",onFileSelect:e=>{g(t=>[...t,...Array.from(e)])},multiple:!0}):null,f.map((e,t)=>(0,a.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,a.jsx)($.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,a.jsx)("div",{onClick:()=>ea(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,a.jsx)(S.A,{size:30,color:"black"})})]},t)),""!==K.logo?(0,a.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,a.jsx)($.default,{src:K.logo,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:"banner logo"}),(0,a.jsx)("div",{onClick:el,className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,a.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:H?(0,a.jsx)(N.A,{className:"animate-spin"}):"Remove"})})]}):null]})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Remark"}),(0,a.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,a.jsx)(w.A,{label:"Remark",name:"remark",placeHolder:K.remark,value:K.remark||"",onChange:e=>Z(t=>({...t,[e.target.name]:e.target.value}))})})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,a.jsx)("div",{}),(0,a.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,a.jsx)(x.W,{label:"Delete",heading:"Are you sure you want to delete this shop?",caption:"This action will permanently delete this shop from the list",actionDescription:"Deleting the product",action:ee,actionLoading:Y}),(0,a.jsx)(n.$,{type:"button",disabled:L,onClick:es,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:L?(0,a.jsx)(N.A,{className:"animate-spin",size:25}):"Update"})]})]})]})]})})]})},R=()=>{let{shopId:e}=(0,k.useParams)();return(0,a.jsx)("div",{className:"",children:(0,a.jsx)(E,{id:e})})}},42340:(e,t,r)=>{"use strict";r.d(t,{B$:()=>i,Ld:()=>l,UW:()=>n,XD:()=>o,zV:()=>s});var a=r(37713);let n=(0,a.J1)`
  mutation createShop(
   $name: String
   $logo: String
   $description: String
   $address: String
   $phone: String
   $category_id: uuid
   $created_at: timestamptz
   $remark: String
   $shop_admin_name: String
  ) {
    insert_shops_one(
      object: {
        name: $name
        logo: $logo
        description: $description
        address: $address
        phone: $phone
        category_id: $category_id
        created_at: $created_at
        remark: remark
        shop_admin_name: $shop_admin_name
      }
    ) {
      id
      name
      logo
      description
      address
      phone
      category_id
      created_at
      remark
      shop_admin_name
    }
  }
`;(0,a.J1)`
  mutation createUser(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
    $shop_id: uuid!
  ) {
    insert_users_one(
      object: {
        username: $username
        email: $email
        password: $password
        role: $role
        shop_id: $shop_id
      }
    ) {
      id
      username
      email
      role
      shop_id
    }
  }
`;let o=(0,a.J1)`
  mutation createShopImages(
   $image_url: String
   $shop_id: uuid
  ) {
    insert_shop_images_one(
      object: {
        image_url: $image_url
        shop_id: $shop_id
      }
    ) {
      id
      image_url
      shop_id
    }
  }
`,l=(0,a.J1)`
  mutation updateShopById(
    $id: uuid!
    $name: String
    $logo: String
    $description: String
    $address: String
    $phone: String
    $category_id: uuid
    $remark: String
    $shop_admin_name: String
  ) {
    update_shops_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        logo: $logo
        description: $description
        address: $address
        phone: $phone
        category_id: $category_id
        remark: $remark
        shop_admin_name: $shop_admin_name
      }
    ) {
      id
      name
      logo
      description
      address
      phone
      category_id
      remark
      shop_admin_name
    }
  }
`,s=(0,a.J1)`
  mutation deleteImage($id: uuid!) {
    delete_shop_images_by_pk(id: $id) {
      id
      shop_id
      image_url
    }
  }
`,i=(0,a.J1)`
  mutation deleteShop($id: uuid!) {
    delete_shops_by_pk(id: $id) {
      id
      name
    }
  }
`},44135:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\shop\\\\shop-detail\\\\[shopId]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx","default")},15290:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(62740),n=r(8081);function o({children:e}){return(0,a.jsx)(n.A,{children:e})}},47108:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var a=r(23331),n=r(10428).Sw?a.useLayoutEffect:a.useEffect},35399:(e,t,r)=>{"use strict";r.d(t,{n:()=>u});var a=r(97412),n=r(23331),o=r(55531),l=r(41948),s=r(44362),i=r(36282),d=r(7752),c=r(47108);function u(e,t){var r=(0,d.m)(null==t?void 0:t.client);(0,s.D$)(e,s.KG.Mutation);var u=n.useState({called:!1,loading:!1,client:r}),m=u[0],h=u[1],p=n.useRef({result:m,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});(0,c.E)(function(){Object.assign(p.current,{client:r,options:t,mutation:e})});var f=n.useCallback(function(e){void 0===e&&(e={});var t=p.current,r=t.options,n=t.mutation,s=(0,a.Cl)((0,a.Cl)({},r),{mutation:n}),d=e.client||p.current.client;p.current.result.loading||s.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:d});var c=++p.current.mutationId,u=(0,o.l)(s,e);return d.mutate(u).then(function(t){var r,a,n=t.data,o=t.errors,s=o&&o.length>0?new i.K4({graphQLErrors:o}):void 0,m=e.onError||(null===(r=p.current.options)||void 0===r?void 0:r.onError);if(s&&m&&m(s,u),c===p.current.mutationId&&!u.ignoreResults){var f={called:!0,loading:!1,data:n,error:s,client:d};p.current.isMounted&&!(0,l.L)(p.current.result,f)&&h(p.current.result=f)}var g=e.onCompleted||(null===(a=p.current.options)||void 0===a?void 0:a.onCompleted);return s||null==g||g(t.data,u),t}).catch(function(t){if(c===p.current.mutationId&&p.current.isMounted){var r,a={loading:!1,error:t,data:void 0,called:!0,client:d};(0,l.L)(p.current.result,a)||h(p.current.result=a)}var n=e.onError||(null===(r=p.current.options)||void 0===r?void 0:r.onError);if(n)return n(t,u),{data:void 0,errors:t};throw t})},[]),g=n.useCallback(function(){if(p.current.isMounted){var e={called:!1,loading:!1,client:p.current.client};Object.assign(p.current,{mutationId:0,result:e}),h(e)}},[]);return n.useEffect(function(){var e=p.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[f,(0,a.Cl)({reset:g},m)]}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1989,6137,8077,7911,8317,5103,9733,7338,2182,308,8494,6889,7458],()=>r(39699));module.exports=a})();