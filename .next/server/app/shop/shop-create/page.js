(()=>{var e={};e.id=783,e.ids=[783],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},58613:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=a(70260),s=a(28203),l=a(25155),i=a.n(l),o=a(67292),n={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);a.d(r,n);let d=["",{children:["shop",{children:["shop-create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,70172)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-create\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,48183)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-create\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-create\\page.tsx"],m={require:a,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/shop/shop-create/page",pathname:"/shop/shop-create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},72953:(e,r,a)=>{Promise.resolve().then(a.bind(a,70172))},9401:(e,r,a)=>{Promise.resolve().then(a.bind(a,39450))},39450:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>k});var t=a(45512),s=a(39400),l=a(52628),i=a(37239),o=a(54716),n=a(42340),d=a(1475),c=a(57741),m=a(95631);let p=()=>{let[e,{loading:r,error:a}]=(0,m.n)(n.UW);return{createShop:async r=>{try{let a=await e({variables:{name:r.name,logo:r.logo,description:r.description,address:r.address,phone:r.phone,category_id:r.category_id,created_at:r.created_at,remark:r.remark,shop_admin_name:r.shop_admin_name}});return a?.data?.insert_shops_one}catch(e){throw console.error("error creating user:",e),e}},loadingCreteShop:r,errorCreateShop:a}};var h=a(37713);let u=(0,h.J1)`
  mutation userRegister($email: String!, $password: String!, $username: String!, $role: String!, $phone: String, $shop_id: uuid) {
    userRegister(email: $email, password: $password, username: $username, role: $role, phone: $phone, shop_id: $shop_id) {
      message
      user_id
    }
  }
`,x=()=>{let[e,{loading:r,error:a}]=(0,m.n)(u);return{createUser:async r=>{try{let a=await e({variables:r});return a?.data}catch(e){throw console.error("Error creating user:",e),e}},loadingCreateUser:r,createUserError:a}};var g=a(93793),f=a(66704),_=a(88404),b=a(44830),j=a(32701),w=a(62004),v=a(44269),y=a(6766),N=a(45103),$=a(58009),S=a(6868);let A=()=>{let[e,r]=(0,$.useState)(0),[a,h]=(0,$.useState)([]),[u,A]=(0,$.useState)([]),[k,P]=(0,$.useState)(),[U,D]=(0,$.useState)(""),{shopCategories:R}=(0,c.CE)(),{createShop:E}=p(),[C,J]=(0,$.useState)(!1),{uploadToS3:L}=(0,d.w)(),{createUser:I}=x(),{handleSubmit:q,register:H,reset:O}=(0,S.mN)(),{toast:G}=(0,o.dj)(),[z]=(0,m.n)(n.XD);console.log(U);let F=e=>{h(r=>r.filter((r,a)=>a!==e))},T=e=>{A(r=>r.filter((r,a)=>a!==e))},B=async e=>{let r=[];for(let t of a){let a=await L(t);a&&(r.push(a),await z({variables:{shop_id:e,image_url:a}}))}console.log("Uploaded image URLs:",r)},M=async e=>{await I({username:e.username,email:e.email,password:e.password,role:e.role,phone:e.phone,shop_id:e.shop_id})},W=q(async e=>{if(!a.length)return G({title:"Invalid Data",description:"Please choose at least one photo."});if(!u.length)return G({title:"Invalid Data",description:"Please upload banner image."});if(!U)return G({title:"Invalid Data",description:"Please choose category."});if(!k)return G({title:"Invalid Data",description:"Please choose a date."});try{J(!0);let r=await L(u[0]);if(r&&console.log("shopphone:",e.shop_phone),r){let a=await E({name:e.shop_name,logo:r,description:e.description,address:e.address,phone:e.shop_phone,created_at:new Date(k||Date.now()).toISOString(),category_id:U,remark:e.remark,shop_admin_name:e.shop_admin_name});if(a){let r=a.id;await Promise.all([M({username:e.username,password:e.password,email:e.email,phone:e.phone,role:"shop admin",shop_id:r}),B(r)])}G({description:"Shop created"})}}catch(e){console.log("Error creating product:",e),G({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating shop.",action:(0,t.jsx)(i.Qg,{altText:"Try again",children:"Try again"})})}finally{J(!1)}});return(0,t.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"h-11 w-11",children:(0,t.jsx)(g.A,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to shop list"}),(0,t.jsx)("h1",{className:"text-headercolor font-bold text-xl",children:"Add New Shop"})]})]}),(0,t.jsx)("form",{onSubmit:W,children:(0,t.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,t.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)("div",{className:"w-1/2",children:(0,t.jsx)(_.A,{name:"shop_name",label:"Shop Name",placeHolder:"Enter shop name",type:"text",register:H})}),(0,t.jsx)(b.A,{placeHolder:"Enter shop Description Here",label:"Shop Description",name:"description",register:H})]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category"}),(0,t.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,t.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,t.jsx)(l.J,{className:"text-inputlabel",children:"Shop Category"}),(0,t.jsx)(j.A,{label:"Select Category",setCategory:D,options:R})]})})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Address & Contact"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)(_.A,{name:"address",label:"Shop Address *",placeHolder:"Enter shop address",type:"text",register:H}),(0,t.jsx)(_.A,{name:"shop_phone",label:"Shop Phone Number *",placeHolder:"Enter shop phone number",type:"text",register:H})]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Admin Detail"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)(_.A,{name:"shop_admin_name",label:"Full Name",placeHolder:"Enter full name",type:"text",register:H}),(0,t.jsx)(_.A,{name:"email",label:"Email *",placeHolder:"Enter email",type:"text",register:H}),(0,t.jsx)(_.A,{name:"phone",label:"Phone Number *",placeHolder:"Enter phone number",type:"text",register:H})]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Authentication Detail"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)(_.A,{name:"username",label:"Username *",placeHolder:"Enter username",type:"text",register:H}),(0,t.jsx)(_.A,{name:"password",label:"Password*",placeHolder:"Enter password",type:"password",register:H})]})]})]}),(0,t.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Images"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,t.jsx)(w.A,{className:"w-[10rem]",onFileSelect:e=>{h(r=>[...r,...Array.from(e)])},multiple:!0}),a.map((e,r)=>(0,t.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,t.jsx)(N.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${r+1}`}),(0,t.jsx)("div",{onClick:()=>F(r),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,t.jsx)(v.A,{size:30,color:"black"})})]},r))]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Banner Image"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[u.length<1?(0,t.jsx)(w.A,{className:"w-[10rem]",onFileSelect:e=>{A(r=>[...r,...Array.from(e)])},multiple:!0}):null,u.map((e,r)=>(0,t.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,t.jsx)(N.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${r+1}`}),(0,t.jsx)("div",{onClick:()=>T(r),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,t.jsx)(v.A,{size:30,color:"black"})})]},r))]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Remark"}),(0,t.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,t.jsx)(b.A,{placeHolder:"Enter remark here",label:"Remark",name:"remark",register:H})})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.$,{type:"button",onClick:()=>{O(),h([]),A([]),a.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e))),u.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e))),r(e=>e+1)},className:"bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]",children:"Discard"})}),(0,t.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,t.jsx)(f.G,{loading:C,setSelectedDate:P}),(0,t.jsx)(s.$,{type:"submit",disabled:C,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:C?(0,t.jsx)(y.A,{className:"animate-spin",size:25}):"Add Shop"})]})]})]})]})},e)]})},k=()=>(0,t.jsx)("div",{className:"",children:(0,t.jsx)(A,{})})},42340:(e,r,a)=>{"use strict";a.d(r,{B$:()=>n,Ld:()=>i,UW:()=>s,XD:()=>l,zV:()=>o});var t=a(37713);let s=(0,t.J1)`
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
`;(0,t.J1)`
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
`;let l=(0,t.J1)`
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
`,i=(0,t.J1)`
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
`,o=(0,t.J1)`
  mutation deleteImage($id: uuid!) {
    delete_shop_images_by_pk(id: $id) {
      id
      shop_id
      image_url
    }
  }
`,n=(0,t.J1)`
  mutation deleteShop($id: uuid!) {
    delete_shops_by_pk(id: $id) {
      id
      name
    }
  }
`},66704:(e,r,a)=>{"use strict";a.d(r,{G:()=>p});var t=a(45512),s=a(58009),l=a(39400),i=a(52706),o=a(99905),n=a(13155),d=a(44195);function c({className:e,classNames:r,showOutsideDays:a=!0,...s}){return(0,t.jsx)(n.hv,{showOutsideDays:a,className:(0,d.cn)("p-3",e),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,d.cn)((0,l.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,d.cn)((0,l.r)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...r},components:{IconLeft:({className:e,...r})=>(0,t.jsx)(i.A,{className:(0,d.cn)("h-4 w-4",e),...r}),IconRight:({className:e,...r})=>(0,t.jsx)(o.A,{className:(0,d.cn)("h-4 w-4",e),...r})},...s})}c.displayName="Calendar";var m=a(94577);function p({setSelectedDate:e,loading:r=!1}){let[a,i]=s.useState();return(0,t.jsxs)(m.AM,{children:[(0,t.jsx)(m.Wv,{asChild:!0,children:(0,t.jsx)(l.$,{disabled:r,className:"bg-slate-200 text-inputlabel rounded-md min-w-[7rem] hover:text-white",children:"Shcedule"})}),(0,t.jsx)(m.hl,{className:"w-auto p-0",children:(0,t.jsx)(c,{mode:"single",selected:a,onSelect:r=>{i(r),e(r)},initialFocus:!0})})]})}},88404:(e,r,a)=>{"use strict";a.d(r,{A:()=>i});var t=a(45512),s=a(77722),l=a(52628);let i=({label:e,name:r,type:a,placeHolder:i,register:o,...n})=>(0,t.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,t.jsx)(l.J,{htmlFor:String(r),className:"text-inputlabel",children:e}),(0,t.jsx)(s.p,{id:String(r),type:a,placeholder:i,...o?o(r,{required:`${String(r)} is required`}):{},..."file"!==a?n:{}})]})},44830:(e,r,a)=>{"use strict";a.d(r,{A:()=>n});var t=a(45512),s=a(52628),l=a(75002),i=a(7331),o=a(58009);let n=({label:e,name:r,placeHolder:a,register:n,...d})=>{let[c,m]=(0,o.useState)("");return(0,t.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,t.jsxs)("div",{className:"w-full flex flex-row justify-between",children:[(0,t.jsx)(s.J,{htmlFor:r,className:"text-inputlabel",children:e}),(0,t.jsxs)("label",{className:"no-underline text-inputlabel text-sm cursor-pointer",children:[(0,t.jsxs)("div",{className:"text-inputlabel text-sm flex items-center gap-1",children:[(0,t.jsx)(i.A,{size:20,color:"#796f6f"})," Upload text file"]}),(0,t.jsx)("input",{type:"file",accept:".txt",className:"hidden",onChange:e=>{let r=e.target.files?.[0];if(r){let e=new FileReader;e.onload=()=>{m(e.result)},e.readAsText(r)}}})]})]}),(0,t.jsx)(l.T,{...n?n(r,{required:`${String(r)} is required`}):{},id:r,className:"min-h-36",name:r,placeholder:a,value:c,onChange:e=>m(e.target.value),...d})]})}},48183:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>l});var t=a(62740),s=a(8081);function l({children:e}){return(0,t.jsx)(s.A,{children:e})}},70172:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>t});let t=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\shop\\\\shop-create\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-create\\page.tsx","default")}};var r=require("../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[989,266,77,496,435,698,868,227,182,320,577],()=>a(58613));module.exports=t})();