(()=>{var e={};e.id=520,e.ids=[520],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},46311:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=r(70260),i=r(28203),n=r(25155),l=r.n(n),a=r(67292),o={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,73751)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\login\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},22475:(e,t,r)=>{Promise.resolve().then(r.bind(r,49171))},98499:(e,t,r)=>{Promise.resolve().then(r.bind(r,32025))},77722:(e,t,r)=>{"use strict";r.d(t,{p:()=>l});var s=r(45512),i=r(58009),n=r(44195);let l=i.forwardRef(({className:e,type:t,...r},i)=>(0,s.jsx)("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:i,...r}));l.displayName="Input"},52628:(e,t,r)=>{"use strict";r.d(t,{J:()=>d});var s=r(45512),i=r(58009),n=r(92405),l=r(21643),a=r(44195);let o=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=i.forwardRef(({className:e,...t},r)=>(0,s.jsx)(n.b,{ref:r,className:(0,a.cn)(o(),e),...t}));d.displayName=n.b.displayName},88404:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(45512),i=r(77722),n=r(52628);let l=({label:e,name:t,type:r,placeHolder:l,register:a,...o})=>(0,s.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,s.jsx)(n.J,{htmlFor:String(t),className:"text-inputlabel",children:e}),(0,s.jsx)(i.p,{id:String(t),type:r,placeholder:l,...a?a(t,{required:`${String(t)} is required`}):{},..."file"!==r?o:{}})]})},32025:(e,t,r)=>{"use strict";r.d(t,{default:()=>g});var s=r(45512),i=r(54716),n=r(37713);let l=(0,n.J1)`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      message
    }
  }
`;var a=r(44165),o=r(44195),d=r(88404),c=r(95631);let u=(0,r(41680).A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var p=r(45103),m=r(79334),f=r(6868);let g=()=>{let{register:e,handleSubmit:t}=(0,f.mN)(),{setRole:r,setIsLogin:n,setUserId:g}=(0,a.F)(),x=(0,m.useRouter)(),[v,{loading:h}]=(0,c.n)(l,{onCompleted:e=>{console.log("login success");let t=e.userLogin.token;localStorage.setItem("token",t);let s=(0,o.o)(t);s&&(r(s.role),g(s.id),n(!0)),(0,i.oR)({description:"Login Success"}),s&&"admin"===s.role?x.push("/shop/shop-list"):x.push("/product-management/product/product-list")},onError:()=>{(0,i.oR)({variant:"destructive",description:"Invalid Credentials"})}}),b=t(async e=>{try{await v({variables:{email:e.email,password:e.password}})}catch(e){console.log(e),(0,i.oR)({description:"Unable to login"})}});return(0,s.jsxs)("div",{className:"lg:w-[900px] lg:max-w-[1400px] md:w-[83vw] lg:min-h-[60vh] md:min-h-[60vh] w-full grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 border border-gray-500",children:[(0,s.jsx)("div",{className:"col-span-7 border-r w-full h-full relative",children:(0,s.jsx)(p.default,{alt:"login",layout:"fill",src:"/images/login-bg.jpg",className:"object-cover"})}),(0,s.jsx)("div",{className:"col-span-5 px-6 py-10",children:(0,s.jsxs)("div",{className:"w-full flex flex-col gap-4",children:[(0,s.jsx)("div",{className:"w-full relative min-h-[100px] flex items-center justify-center rounded-md",children:(0,s.jsx)(p.default,{className:"object-contain",width:50,height:25,src:"/images/logo.png",alt:"logo"})}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h1",{className:"font-semibold text-2xl",children:"Login"}),(0,s.jsxs)("div",{className:"text-xs text-inputlabel mt-3 font-light",children:["The central hub for managing shops and ensuring smooth operations"," "]})]}),(0,s.jsxs)("form",{onSubmit:b,className:"w-full flex flex-col gap-8 mt-6",children:[(0,s.jsx)(d.A,{label:"Email",name:"email",type:"email",register:e,placeHolder:"Enter your email"}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)(d.A,{label:"Password",name:"password",type:"password",register:e,placeHolder:"Enter your password"}),(0,s.jsx)("span",{className:"w-full text-right text-sm text-inputlabel",children:"Forgot password"})]}),(0,s.jsx)("button",{type:"submit",disabled:h,className:"border min-h-[2.25rem] rounded-md bg-inputlabel text-white flex items-center justify-center",children:h?(0,s.jsx)(u,{className:"animate-spin",size:20}):"Login"})]}),(0,s.jsx)("span",{className:"text-inputlabel text-sm w-full text-center pb-4",children:"Account Setting"})]})})]})}},73751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(62740),i=r(49171);let n=()=>(0,s.jsx)("div",{className:"w-screen h-screen flex items-center justify-center",children:(0,s.jsx)(i.default,{})})},49171:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\modules\\\\components\\\\auth\\\\login.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\modules\\components\\auth\\login.tsx","default")},70440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(88077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},95631:(e,t,r)=>{"use strict";r.d(t,{n:()=>u});var s=r(97412),i=r(23331),n=r(55531),l=r(41948),a=r(44362),o=r(36282),d=r(7752),c=r(10428).Sw?i.useLayoutEffect:i.useEffect;function u(e,t){var r=(0,d.m)(null==t?void 0:t.client);(0,a.D$)(e,a.KG.Mutation);var u=i.useState({called:!1,loading:!1,client:r}),p=u[0],m=u[1],f=i.useRef({result:p,mutationId:0,isMounted:!0,client:r,mutation:e,options:t});c(function(){Object.assign(f.current,{client:r,options:t,mutation:e})});var g=i.useCallback(function(e){void 0===e&&(e={});var t=f.current,r=t.options,i=t.mutation,a=(0,s.Cl)((0,s.Cl)({},r),{mutation:i}),d=e.client||f.current.client;f.current.result.loading||a.ignoreResults||!f.current.isMounted||m(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:d});var c=++f.current.mutationId,u=(0,n.l)(a,e);return d.mutate(u).then(function(t){var r,s,i=t.data,n=t.errors,a=n&&n.length>0?new o.K4({graphQLErrors:n}):void 0,p=e.onError||(null===(r=f.current.options)||void 0===r?void 0:r.onError);if(a&&p&&p(a,u),c===f.current.mutationId&&!u.ignoreResults){var g={called:!0,loading:!1,data:i,error:a,client:d};f.current.isMounted&&!(0,l.L)(f.current.result,g)&&m(f.current.result=g)}var x=e.onCompleted||(null===(s=f.current.options)||void 0===s?void 0:s.onCompleted);return a||null==x||x(t.data,u),t}).catch(function(t){if(c===f.current.mutationId&&f.current.isMounted){var r,s={loading:!1,error:t,data:void 0,called:!0,client:d};(0,l.L)(f.current.result,s)||m(f.current.result=s)}var i=e.onError||(null===(r=f.current.options)||void 0===r?void 0:r.onError);if(i)return i(t,u),{data:void 0,errors:t};throw t})},[]),x=i.useCallback(function(){if(f.current.isMounted){var e={called:!1,loading:!1,client:f.current.client};Object.assign(f.current,{mutationId:0,result:e}),m(e)}},[]);return i.useEffect(function(){var e=f.current;return e.isMounted=!0,function(){e.isMounted=!1}},[]),[g,(0,s.Cl)({reset:x},p)]}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,266,77,496,868,182],()=>r(46311));module.exports=s})();