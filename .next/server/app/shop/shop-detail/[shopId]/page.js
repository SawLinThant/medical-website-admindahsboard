(()=>{var e={};e.id=720,e.ids=[720],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},39699:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=t(70260),l=t(28203),s=t(25155),i=t.n(s),o=t(67292),n={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>o[e]);t.d(a,n);let d=["",{children:["shop",{children:["shop-detail",{children:["[shopId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,44135)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,15290)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx"],m={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:l.RouteKind.APP_PAGE,page:"/shop/shop-detail/[shopId]/page",pathname:"/shop/shop-detail/[shopId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21795:(e,a,t)=>{Promise.resolve().then(t.bind(t,44135))},35867:(e,a,t)=>{Promise.resolve().then(t.bind(t,24077))},76193:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});let r=(0,t(41680).A)("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]])},6766:(e,a,t)=>{"use strict";t.d(a,{A:()=>r});let r=(0,t(41680).A)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},24077:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>C});var r=t(45512),l=t(39400),s=t(52628),i=t(37239),o=t(54716),n=t(42340),d=t(1475),c=t(58190),m=t(95631);let p=()=>{let[e,{loading:a,error:t}]=(0,m.n)(n.B$);return{deleteShopById:async a=>{try{let t=await e({variables:{id:a}});return t?.data?.delete_shops_by_pk}catch(e){throw console.error("Error deleting shop:",e),e}},loadingDeleteShop:a,errorDeleteShop:t}},h=()=>{let[e,{loading:a,error:t}]=(0,m.n)(n.zV);return{deleteImageById:async a=>{try{let t=await e({variables:{id:a}});return t?.data?.delete_shop_images_by_pk}catch(e){throw console.error("Error deleting image:",e),e}},loadingDeleteImage:a,errorDeleteImage:t}},u=()=>{let[e,{loading:a,error:t}]=(0,m.n)(n.Ld);return{updateShopById:async a=>{try{let t=await e({variables:a});return t?.data?.update_shops_by_pk}catch(e){throw console.error("Error updating shop by ID:",e),e}},loadingUpdateShop:a,errorUpdateShop:t}};var x=t(37713);let f=(0,x.J1)`
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
`,g=()=>{let[e,{loading:a,error:t}]=(0,m.n)(f);return{updateUserByShopId:async a=>{try{let t=await e({variables:a});return t?.data?.update_users.returning}catch(e){throw console.error("Error updating user by shop ID:",e),e}},loadingUpdateUser:a,errorUpdateUser:t}};var y=t(25501),j=t(93793),v=t(16596),b=t(24414),_=t(32701),w=t(62004),N=t(6766),$=t(44269),S=t(45103),k=t(79334),A=t(58009);let R=({id:e})=>{let[a,t]=(0,A.useState)([]),[x,f]=(0,A.useState)([]),[R,C]=(0,A.useState)(""),{shopCategories:D}=(0,c.CE)(),[I,U]=(0,A.useState)(!1),{uploadToS3:P}=(0,d.w)(),{toast:L}=(0,o.dj)(),[E]=(0,m.n)(n.XD),{user:J}=(0,c.u8)(e),{shop:z,refetchShop:H}=(0,c._y)(e),{updateShopById:O,loadingUpdateShop:q}=u(),{updateUserByShopId:B}=g(),{images:M,refetchImage:T}=(0,c.yT)(e),{deleteImageById:F,loadingDeleteImage:G}=h(),{deleteShopById:V,loadingDeleteShop:W}=p(),X=(0,k.useRouter)(),[Y,K]=(0,A.useState)({id:"",name:"",logo:"",description:"",address:"",phone:"",category_id:"",remark:"",shop_admin_name:"",shop_category:{id:"",name:""}});(0,A.useEffect)(()=>{z&&K(z)},[z]);let[Q,Z]=(0,A.useState)({id:"",username:"",email:"",phone:"",role:""});(0,A.useEffect)(()=>{J&&Z(J)},[J]);let ee=async()=>{await V(Y.id)&&X.push("/shop/shop-list")},ea=async e=>{let a=await F(e);console.log(a),a&&T()},et=e=>{t(a=>a.filter((a,t)=>t!==e))},er=e=>{f(a=>a.filter((a,t)=>t!==e))},el=()=>{t([]),f([]),a.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e))),x.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e)))},es=async e=>{let t=[];for(let r of a){let a=await P(r);a&&(t.push(a),await E({variables:{shop_id:e,image_url:a}}))}console.log("Uploaded image URLs:",t)},ei=async()=>{await O({id:e,name:Y.name,logo:"",description:Y.description,address:Y.address,phone:Y.phone,category_id:""===R?Y.category_id:R,remark:Y.remark,shop_admin_name:Y.shop_admin_name})&&H()},eo=async()=>{try{U(!0);let a="";if(x.length>0){let e=await P(x[0]);e&&(a=e)}await O({id:e,name:Y.name,logo:""===a?Y.logo:a,description:Y.description,address:Y.address,phone:Y.phone,category_id:""===R?Y.category_id:R,remark:Y.remark,shop_admin_name:Y.shop_admin_name})&&await B({shop_id:e,username:Q.username,email:Q.email,phone:Q.phone,role:Q.role,updated_at:new Date(Date.now()).toISOString()})&&(await Promise.all([es(e)]),T(),H(),L({description:"Shop updated"}))}catch(e){console.log("Error creating product:",e),L({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating shop.",action:(0,r.jsx)(i.Qg,{altText:"Try again",children:"Try again"})})}finally{el(),U(!1)}};return(0,r.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,r.jsx)("div",{className:"h-11 w-11",children:(0,r.jsx)(j.A,{})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to shop list"}),(0,r.jsx)("h1",{className:"text-headercolor font-bold text-xl"})]})]}),(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)(v.A,{name:"name",label:"Shop Name",type:"text",placeHolder:Y.name,value:Y.name,onChange:e=>K(a=>({...a,[e.target.name]:e.target.value}))})}),(0,r.jsx)(b.A,{placeHolder:Y.description,value:Y.description,onChange:e=>K(a=>({...a,[e.target.name]:e.target.value})),label:"Shop Description",name:"description"})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(s.J,{className:"text-inputlabel",children:"Shop Category"}),(0,r.jsx)(_.A,{label:Y.shop_category?.name,setCategory:C,options:D})]})})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Address & Contact"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)(v.A,{name:"address",label:"Shop Address *",type:"text",placeHolder:Y.address,value:Y.address,onChange:e=>K(a=>({...a,[e.target.name]:e.target.value}))}),(0,r.jsx)(v.A,{name:"shop_phone",label:"Shop Phone Number *",type:"text",placeHolder:Y.phone,value:Y.phone,onChange:e=>K(a=>({...a,[e.target.name]:e.target.value}))})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Admin Detail"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)(v.A,{name:"shop_admin_name",label:"Full Name",type:"text",placeHolder:Y.shop_admin_name,value:Y.shop_admin_name||"",onChange:e=>K(a=>({...a,[e.target.name]:e.target.value}))}),(0,r.jsx)(v.A,{name:"email",label:"Email *",type:"text",placeHolder:Q.email,value:Q.email||"",onChange:e=>Z(a=>({...a,[e.target.name]:e.target.value}))}),(0,r.jsx)(v.A,{name:"phone",label:"Phone Number *",type:"text",placeHolder:Q.phone,value:Q.phone||"",onChange:e=>Z(a=>({...a,[e.target.name]:e.target.value}))})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Authentication Detail"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,r.jsx)(v.A,{name:"username",label:"Username *",placeHolder:Q.username,value:Q.username||"",onChange:e=>Z(a=>({...a,[e.target.name]:e.target.value})),type:"text"})})]})]}),(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Images"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,r.jsx)(w.A,{className:"w-[10rem]",onFileSelect:e=>{t(a=>[...a,...Array.from(e)])},multiple:!0}),M.map((e,a)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,r.jsx)(S.default,{src:e.image_url,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${a+1}`}),(0,r.jsx)("div",{onClick:()=>ea(e.id),className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,r.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:G?(0,r.jsx)(N.A,{className:"animate-spin"}):"Remove"})})]},a)),a.map((e,a)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,r.jsx)(S.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${a+1}`}),(0,r.jsx)("div",{onClick:()=>et(a),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,r.jsx)($.A,{size:30,color:"black"})})]},a))]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Banner Image"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[x.length<1&&""===Y.logo?(0,r.jsx)(w.A,{className:"w-[10rem]",onFileSelect:e=>{f(a=>[...a,...Array.from(e)])},multiple:!0}):null,x.map((e,a)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,r.jsx)(S.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${a+1}`}),(0,r.jsx)("div",{onClick:()=>er(a),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,r.jsx)($.A,{size:30,color:"black"})})]},a)),""!==Y.logo?(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,r.jsx)(S.default,{src:Y.logo,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:"banner logo"}),(0,r.jsx)("div",{onClick:ei,className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,r.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:q?(0,r.jsx)(N.A,{className:"animate-spin"}):"Remove"})})]}):null]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Remark"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,r.jsx)(b.A,{label:"Remark",name:"remark",placeHolder:Y.remark,value:Y.remark||"",onChange:e=>K(a=>({...a,[e.target.name]:e.target.value}))})})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)(y.W,{label:"Delete",heading:"Are you sure you want to delete this shop?",caption:"This action will permanently delete this shop from the list",actionDescription:"Deleting the product",action:ee,actionLoading:W}),(0,r.jsx)(l.$,{type:"button",disabled:I,onClick:eo,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:I?(0,r.jsx)(N.A,{className:"animate-spin",size:25}):"Update"})]})]})]})]})})]})},C=()=>{let{shopId:e}=(0,k.useParams)();return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(R,{id:e})})}},42340:(e,a,t)=>{"use strict";t.d(a,{B$:()=>n,Ld:()=>i,UW:()=>l,XD:()=>s,zV:()=>o});var r=t(37713);let l=(0,r.J1)`
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
`;(0,r.J1)`
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
`;let s=(0,r.J1)`
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
`,i=(0,r.J1)`
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
`,o=(0,r.J1)`
  mutation deleteImage($id: uuid!) {
    delete_shop_images_by_pk(id: $id) {
      id
      shop_id
      image_url
    }
  }
`,n=(0,r.J1)`
  mutation deleteShop($id: uuid!) {
    delete_shops_by_pk(id: $id) {
      id
      name
    }
  }
`},25501:(e,a,t)=>{"use strict";t.d(a,{W:()=>q});var r=t(45512),l=t(58009),s=t(6004);function i(e,a){if("function"==typeof e)return e(a);null!=e&&(e.current=a)}function o(...e){return l.useCallback(function(...e){return a=>{let t=!1,r=e.map(e=>{let r=i(e,a);return t||"function"!=typeof r||(t=!0),r});if(t)return()=>{for(let a=0;a<r.length;a++){let t=r[a];"function"==typeof t?t():i(e[a],null)}}}}(...e),e)}var n=t(28122),d=t(76660),c="AlertDialog",[m,p]=(0,s.A)(c,[n.Hs]),h=(0,n.Hs)(),u=e=>{let{__scopeAlertDialog:a,...t}=e,l=h(a);return(0,r.jsx)(n.bL,{...l,...t,modal:!0})};u.displayName=c;var x=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...l}=e,s=h(t);return(0,r.jsx)(n.l9,{...s,...l,ref:a})});x.displayName="AlertDialogTrigger";var f=e=>{let{__scopeAlertDialog:a,...t}=e,l=h(a);return(0,r.jsx)(n.ZL,{...l,...t})};f.displayName="AlertDialogPortal";var g=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...l}=e,s=h(t);return(0,r.jsx)(n.hJ,{...s,...l,ref:a})});g.displayName="AlertDialogOverlay";var y="AlertDialogContent",[j,v]=m(y),b=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,children:s,...i}=e,c=h(t),m=l.useRef(null),p=o(a,m),u=l.useRef(null);return(0,r.jsx)(n.G$,{contentName:y,titleName:_,docsSlug:"alert-dialog",children:(0,r.jsx)(j,{scope:t,cancelRef:u,children:(0,r.jsxs)(n.UC,{role:"alertdialog",...c,...i,ref:p,onOpenAutoFocus:function(e,a,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),!1===t||!r.defaultPrevented)return a?.(r)}}(i.onOpenAutoFocus,e=>{e.preventDefault(),u.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,r.jsx)(d.xV,{children:s}),(0,r.jsx)(R,{contentRef:m})]})})})});b.displayName=y;var _="AlertDialogTitle",w=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...l}=e,s=h(t);return(0,r.jsx)(n.hE,{...s,...l,ref:a})});w.displayName=_;var N="AlertDialogDescription",$=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...l}=e,s=h(t);return(0,r.jsx)(n.VY,{...s,...l,ref:a})});$.displayName=N;var S=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...l}=e,s=h(t);return(0,r.jsx)(n.bm,{...s,...l,ref:a})});S.displayName="AlertDialogAction";var k="AlertDialogCancel",A=l.forwardRef((e,a)=>{let{__scopeAlertDialog:t,...l}=e,{cancelRef:s}=v(k,t),i=h(t),d=o(a,s);return(0,r.jsx)(n.bm,{...i,...l,ref:d})});A.displayName=k;var R=({contentRef:e})=>{let a=`\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${N}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(a)},[a,e]),null},C=t(44195),D=t(39400);let I=l.forwardRef(({className:e,...a},t)=>(0,r.jsx)(g,{className:(0,C.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:t}));I.displayName=g.displayName;let U=l.forwardRef(({className:e,...a},t)=>(0,r.jsxs)(f,{children:[(0,r.jsx)(I,{}),(0,r.jsx)(b,{ref:t,className:(0,C.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));U.displayName=b.displayName;let P=({className:e,...a})=>(0,r.jsx)("div",{className:(0,C.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...a});P.displayName="AlertDialogHeader";let L=({className:e,...a})=>(0,r.jsx)("div",{className:(0,C.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});L.displayName="AlertDialogFooter";let E=l.forwardRef(({className:e,...a},t)=>(0,r.jsx)(w,{ref:t,className:(0,C.cn)("text-lg font-semibold",e),...a}));E.displayName=w.displayName;let J=l.forwardRef(({className:e,...a},t)=>(0,r.jsx)($,{ref:t,className:(0,C.cn)("text-sm text-muted-foreground",e),...a}));J.displayName=$.displayName;let z=l.forwardRef(({className:e,...a},t)=>(0,r.jsx)(S,{ref:t,className:(0,C.cn)((0,D.r)(),e),...a}));z.displayName=S.displayName;let H=l.forwardRef(({className:e,...a},t)=>(0,r.jsx)(A,{ref:t,className:(0,C.cn)((0,D.r)({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));H.displayName=A.displayName;var O=t(6766);function q({caption:e,heading:a,label:t,actionLoading:l,actionDescription:s,action:i}){return(0,r.jsxs)(u,{children:[(0,r.jsx)(x,{className:"w-full",asChild:!0,children:(0,r.jsx)(D.$,{variant:"outline",children:t})}),l?(0,r.jsx)(U,{className:"max-w-[300px]",children:(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-3 items-center justify-center",children:[(0,r.jsx)("span",{className:"font-semibold text-lg",children:s}),(0,r.jsx)(O.A,{size:25,className:"animate-spin"})]})}):(0,r.jsxs)(U,{children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(E,{children:a}),(0,r.jsx)(J,{children:e})]}),(0,r.jsxs)(L,{children:[(0,r.jsx)(H,{children:"Cancel"}),(0,r.jsx)(z,{onClick:i,children:"Continue"})]})]})]})}},16596:(e,a,t)=>{"use strict";t.d(a,{A:()=>i});var r=t(45512),l=t(77722),s=t(52628);let i=({label:e,name:a,type:t,placeHolder:i,value:o,onChange:n,...d})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(s.J,{htmlFor:String(a),className:"text-inputlabel",children:e}),(0,r.jsx)(l.p,{id:String(a),name:String(a),type:t,placeholder:i,value:o,onChange:n,...d})]})},24414:(e,a,t)=>{"use strict";t.d(a,{A:()=>i});var r=t(45512),l=t(52628),s=t(75002);let i=({label:e,name:a,value:t,placeHolder:i,onChange:o,onFileUpload:n,...d})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"w-full flex flex-row justify-between",children:(0,r.jsx)(l.J,{htmlFor:a,className:"text-inputlabel",children:e})}),(0,r.jsx)(s.T,{id:a,className:"min-h-36",name:a,placeholder:i,value:t,onChange:o,...d})]})},44135:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});let r=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\shop\\\\shop-detail\\\\[shopId]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx","default")},15290:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});var r=t(62740),l=t(8081);function s({children:e}){return(0,r.jsx)(l.A,{children:e})}}};var a=require("../../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[989,160,77,85,36,255,698,182,320,577],()=>t(39699));module.exports=r})();