(()=>{var e={};e.id=720,e.ids=[720],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},39699:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>o.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=r(70260),l=r(28203),s=r(25155),o=r.n(s),i=r(67292),n={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(a,n);let d=["",{children:["shop",{children:["shop-detail",{children:["[shopId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,44135)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,15290)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:l.RouteKind.APP_PAGE,page:"/shop/shop-detail/[shopId]/page",pathname:"/shop/shop-detail/[shopId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},21795:(e,a,r)=>{Promise.resolve().then(r.bind(r,44135))},35867:(e,a,r)=>{Promise.resolve().then(r.bind(r,24077))},24077:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>U});var t=r(45512),l=r(39400),s=r(52628),o=r(37239),i=r(54716),n=r(42340),d=r(1475),c=r(57741),m=r(95631);let p=()=>{let[e,{loading:a,error:r}]=(0,m.n)(n.B$);return{deleteShopById:async a=>{try{let r=await e({variables:{id:a}});return r?.data?.delete_shops_by_pk}catch(e){throw console.error("Error deleting shop:",e),e}},loadingDeleteShop:a,errorDeleteShop:r}},h=()=>{let[e,{loading:a,error:r}]=(0,m.n)(n.zV);return{deleteImageById:async a=>{try{let r=await e({variables:{id:a}});return r?.data?.delete_shop_images_by_pk}catch(e){throw console.error("Error deleting image:",e),e}},loadingDeleteImage:a,errorDeleteImage:r}},u=()=>{let[e,{loading:a,error:r}]=(0,m.n)(n.Ld);return{updateShopById:async a=>{try{let r=await e({variables:a});return r?.data?.update_shops_by_pk}catch(e){throw console.error("Error updating shop by ID:",e),e}},loadingUpdateShop:a,errorUpdateShop:r}};var g=r(37713);let x=(0,g.J1)`
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
`,f=()=>{let[e,{loading:a,error:r}]=(0,m.n)(x);return{updateUserByShopId:async a=>{try{let r=await e({variables:a});return r?.data?.update_users.returning}catch(e){throw console.error("Error updating user by shop ID:",e),e}},loadingUpdateUser:a,errorUpdateUser:r}};var _=r(25501),v=r(93793),b=r(16596),j=r(24414),y=r(32701),w=r(62004),$=r(6766),N=r(44269),S=r(45103),k=r(79334),A=r(58009);let C=({id:e})=>{let[a,r]=(0,A.useState)([]),[g,x]=(0,A.useState)([]),[C,U]=(0,A.useState)(""),{shopCategories:I}=(0,c.CE)(),[R,P]=(0,A.useState)(!1),{uploadToS3:D}=(0,d.w)(),{toast:E}=(0,i.dj)(),[L]=(0,m.n)(n.XD),{user:J}=(0,c.u8)(e),{shop:B,refetchShop:q}=(0,c._y)(e),{updateShopById:H,loadingUpdateShop:O}=u(),{updateUserByShopId:z}=f(),{images:T,refetchImage:G}=(0,c.yT)(e),{deleteImageById:F,loadingDeleteImage:M}=h(),{deleteShopById:X,loadingDeleteShop:V}=p(),W=(0,k.useRouter)(),[K,Q]=(0,A.useState)({id:"",name:"",logo:"",description:"",address:"",phone:"",category_id:"",remark:"",shop_admin_name:"",shop_category:{id:"",name:""}});(0,A.useEffect)(()=>{B&&Q(B)},[B]);let[Y,Z]=(0,A.useState)({id:"",username:"",email:"",phone:"",role:""});(0,A.useEffect)(()=>{J&&Z(J)},[J]);let ee=async()=>{await X(K.id)&&W.push("/shop/shop-list")},ea=async e=>{let a=await F(e);console.log(a),a&&G()},er=e=>{r(a=>a.filter((a,r)=>r!==e))},et=e=>{x(a=>a.filter((a,r)=>r!==e))},el=()=>{r([]),x([]),a.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e))),g.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e)))},es=async e=>{let r=[];for(let t of a){let a=await D(t);a&&(r.push(a),await L({variables:{shop_id:e,image_url:a}}))}console.log("Uploaded image URLs:",r)},eo=async()=>{await H({id:e,name:K.name,logo:"",description:K.description,address:K.address,phone:K.phone,category_id:""===C?K.category_id:C,remark:K.remark,shop_admin_name:K.shop_admin_name})&&q()},ei=async()=>{try{P(!0);let a="";if(g.length>0){let e=await D(g[0]);e&&(a=e)}await H({id:e,name:K.name,logo:""===a?K.logo:a,description:K.description,address:K.address,phone:K.phone,category_id:""===C?K.category_id:C,remark:K.remark,shop_admin_name:K.shop_admin_name})&&await z({shop_id:e,username:Y.username,email:Y.email,phone:Y.phone,role:Y.role,updated_at:new Date(Date.now()).toISOString()})&&(await Promise.all([es(e)]),G(),q(),E({description:"Shop updated"}))}catch(e){console.log("Error creating product:",e),E({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating shop.",action:(0,t.jsx)(o.Qg,{altText:"Try again",children:"Try again"})})}finally{el(),P(!1)}};return(0,t.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,t.jsx)("div",{className:"h-11 w-11",children:(0,t.jsx)(v.A,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to shop list"}),(0,t.jsx)("h1",{className:"text-headercolor font-bold text-xl"})]})]}),(0,t.jsx)("form",{children:(0,t.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,t.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)("div",{className:"w-1/2",children:(0,t.jsx)(b.A,{name:"name",label:"Shop Name",type:"text",placeHolder:K.name,value:K.name,onChange:e=>Q(a=>({...a,[e.target.name]:e.target.value}))})}),(0,t.jsx)(j.A,{placeHolder:K.description,value:K.description,onChange:e=>Q(a=>({...a,[e.target.name]:e.target.value})),label:"Shop Description",name:"description"})]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category"}),(0,t.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,t.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,t.jsx)(s.J,{className:"text-inputlabel",children:"Shop Category"}),(0,t.jsx)(y.A,{label:K.shop_category?.name,setCategory:U,options:I})]})})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Address & Contact"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)(b.A,{name:"address",label:"Shop Address *",type:"text",placeHolder:K.address,value:K.address,onChange:e=>Q(a=>({...a,[e.target.name]:e.target.value}))}),(0,t.jsx)(b.A,{name:"shop_phone",label:"Shop Phone Number *",type:"text",placeHolder:K.phone,value:K.phone,onChange:e=>Q(a=>({...a,[e.target.name]:e.target.value}))})]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Admin Detail"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,t.jsx)(b.A,{name:"shop_admin_name",label:"Full Name",type:"text",placeHolder:K.shop_admin_name,value:K.shop_admin_name||"",onChange:e=>Q(a=>({...a,[e.target.name]:e.target.value}))}),(0,t.jsx)(b.A,{name:"email",label:"Email *",type:"text",placeHolder:Y.email,value:Y.email||"",onChange:e=>Z(a=>({...a,[e.target.name]:e.target.value}))}),(0,t.jsx)(b.A,{name:"phone",label:"Phone Number *",type:"text",placeHolder:Y.phone,value:Y.phone||"",onChange:e=>Z(a=>({...a,[e.target.name]:e.target.value}))})]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Authentication Detail"}),(0,t.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,t.jsx)(b.A,{name:"username",label:"Username *",placeHolder:Y.username,value:Y.username||"",onChange:e=>Z(a=>({...a,[e.target.name]:e.target.value})),type:"text"})})]})]}),(0,t.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Images"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,t.jsx)(w.A,{className:"w-[10rem]",onFileSelect:e=>{r(a=>[...a,...Array.from(e)])},multiple:!0}),T.map((e,a)=>(0,t.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,t.jsx)(S.default,{src:e.image_url,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${a+1}`}),(0,t.jsx)("div",{onClick:()=>ea(e.id),className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,t.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:M?(0,t.jsx)($.A,{className:"animate-spin"}):"Remove"})})]},a)),a.map((e,a)=>(0,t.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,t.jsx)(S.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${a+1}`}),(0,t.jsx)("div",{onClick:()=>er(a),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,t.jsx)(N.A,{size:30,color:"black"})})]},a))]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Shop Banner Image"}),(0,t.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[g.length<1&&""===K.logo?(0,t.jsx)(w.A,{className:"w-[10rem]",onFileSelect:e=>{x(a=>[...a,...Array.from(e)])},multiple:!0}):null,g.map((e,a)=>(0,t.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,t.jsx)(S.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${a+1}`}),(0,t.jsx)("div",{onClick:()=>et(a),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,t.jsx)(N.A,{size:30,color:"black"})})]},a)),""!==K.logo?(0,t.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,t.jsx)(S.default,{src:K.logo,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:"banner logo"}),(0,t.jsx)("div",{onClick:eo,className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,t.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:O?(0,t.jsx)($.A,{className:"animate-spin"}):"Remove"})})]}):null]})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,t.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Remark"}),(0,t.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,t.jsx)(j.A,{label:"Remark",name:"remark",placeHolder:K.remark,value:K.remark||"",onChange:e=>Q(a=>({...a,[e.target.name]:e.target.value}))})})]}),(0,t.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,t.jsx)(_.W,{label:"Delete",heading:"Are you sure you want to delete this shop?",caption:"This action will permanently delete this shop from the list",actionDescription:"Deleting the product",action:ee,actionLoading:V}),(0,t.jsx)(l.$,{type:"button",disabled:R,onClick:ei,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:R?(0,t.jsx)($.A,{className:"animate-spin",size:25}):"Update"})]})]})]})]})})]})},U=()=>{let{shopId:e}=(0,k.useParams)();return(0,t.jsx)("div",{className:"",children:(0,t.jsx)(C,{id:e})})}},42340:(e,a,r)=>{"use strict";r.d(a,{B$:()=>n,Ld:()=>o,UW:()=>l,XD:()=>s,zV:()=>i});var t=r(37713);let l=(0,t.J1)`
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
`;let s=(0,t.J1)`
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
`,o=(0,t.J1)`
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
`,i=(0,t.J1)`
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
`},44135:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});let t=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\shop\\\\shop-detail\\\\[shopId]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\shop\\shop-detail\\[shopId]\\page.tsx","default")},15290:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>s});var t=r(62740),l=r(8081);function s({children:e}){return(0,t.jsx)(l.A,{children:e})}}};var a=require("../../../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),t=a.X(0,[989,266,77,496,435,698,182,320,577,939],()=>r(39699));module.exports=t})();