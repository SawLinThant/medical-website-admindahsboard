(()=>{var e={};e.id=779,e.ids=[779],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},83245:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>d.a,__next_app__:()=>u,pages:()=>n,routeModule:()=>p,tree:()=>c});var r=a(70260),i=a(28203),l=a(25155),d=a.n(l),s=a(67292),o={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);a.d(t,o);let c=["",{children:["product-management",{children:["product",{children:["product-detail",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,69600)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,29372)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\layout.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],n=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx"],u={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/product-management/product/product-detail/[productId]/page",pathname:"/product-management/product/product-detail/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},70681:(e,t,a)=>{Promise.resolve().then(a.bind(a,69600))},7129:(e,t,a)=>{Promise.resolve().then(a.bind(a,74597))},31393:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},74597:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var r=a(45512),i=a(39400),l=a(52628),d=a(37239),s=a(54716),o=a(99355),c=a(1475),n=a(43030),u=a(35399);let p=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.kZ);return{deleteImageById:async t=>{try{let a=await e({variables:{id:t}});return a?.data?.delete_images_by_pk}catch(e){throw console.error("Error deleting image:",e),e}},loadingDeleteImage:t,errorDeleteImage:a}},g=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.oY);return{deleteProductById:async t=>{try{let a=await e({variables:{id:t}});return a?.data?.delete_products_by_pk}catch(e){throw console.error("Error deleting product:",e),e}},loadingDeleteProduct:t,errorDeleteProduct:a}},m=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.lm);return{deleteProductTag:async(t,a)=>{try{await e({variables:{product_id:t,tag_id:a}})}catch(e){console.log(e)}},loading:t,error:a}};var x=a(25029),h=a(63786),_=a(77722),f=a(31393);let v=({label:e,name:t,placeHolder:a,value:i,onChange:d,register:s,...o})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(l.J,{htmlFor:t,className:"text-inputlabel",children:e}),(0,r.jsxs)("div",{className:"w-full relative",children:[(0,r.jsx)(_.p,{id:t,name:t,type:"number",placeholder:a,value:i,onChange:d,...o,className:`py-2 pl-12 pr-2 rounded-lg border border-gray-300 ${o.className??""}`}),(0,r.jsx)("div",{className:"absolute top-2 left-3.5",children:(0,r.jsx)("div",{className:"w-[25px] h-[25px] rounded-lg text-center bg-[#c5bfc7] flex items-center justify-center",children:(0,r.jsx)(f.A,{size:15,color:"#211d22"})})})]})]});var b=a(68502),j=a(16596),y=a(24414),w=a(32701),$=a(84569),N=a(53837),k=a(6766),S=a(44269),P=a(45103),A=a(79334),C=a(58009);let q=({id:e})=>{let[t,a]=(0,C.useState)([]),[_,f]=(0,C.useState)(""),[q,I]=(0,C.useState)(!1),{uploadToS3:J}=(0,c.w)(),{tags:D}=(0,n.jt)(),{categories:E}=(0,n.E5)(),{toast:T}=(0,s.dj)(),{updateProduct:H}=(0,x.C)(),[R]=(0,u.n)(o.gI),{deleteProductTag:U}=m(),[G]=(0,u.n)(o.b),{deleteProductById:L,loadingDeleteProduct:z}=g(),O=(0,A.useRouter)(),{product:B,refetchProduct:M}=(0,n.LG)(e),[W,F]=(0,C.useState)({id:"",name:"",price:0,bulk_price:0,quantity:0,description:"",dosage:"",usage:"",unit_price:"",age_group:"",storage:"",category_id:"",default_stock_level:0,category:{id:"",name:""}}),{images:X,refetchImage:Y}=(0,n.Jd)(e),{deleteImageById:Z,loadingDeleteImage:K}=p(),{tagsById:Q,loadingTags:V}=(0,n._V)(e),[ee,et]=(0,C.useState)([]);(0,C.useEffect)(()=>{Q&&et(Q)},[V]),(0,C.useEffect)(()=>{B&&F(B)},[B]);let ea=async()=>{await L(W.id)&&O.push("/product-management/product/product-list")},er=e=>{a(t=>t.filter((t,a)=>a!==e))},ei=async e=>{await Z(e)&&Y()},el=async e=>{let a=[];for(let r of t){let t=await J(r);t&&(a.push(t),await G({variables:{product_id:e,image_url:t}}))}},ed=()=>{a([]),t.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e)))},es=async t=>{if(!Q||!ee)return;let a=ee.filter(e=>!Q.some(t=>t.id===e.id)),r=Q.filter(e=>!ee.some(t=>t.id===e.id));for(let e of a)await R({variables:{product_id:t,tag_id:e.id}});for(let t of r)await U(e,t.id)},eo=async()=>{try{I(!0),await H({id:e,name:W.name,price:W.price,bulk_price:W.bulk_price,quantity:1,description:W.description,dosage:W.dosage,usage:W.usage,unit_price:W.unit_price,age_group:W.age_group,storage:W.storage,updated_at:new Date(Date.now()).toISOString(),category_id:""===_?W.category_id:_})&&(es(e),await Promise.all([el(e)]),ed(),M(),Y(),T({description:"Product updated"}))}catch(e){console.log("Error creating product:",e),T({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating product.",action:(0,r.jsx)(d.Qg,{altText:"Try again",children:"Try again"})})}finally{I(!1)}};return(0,r.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,r.jsx)("div",{className:"h-11 w-11",children:(0,r.jsx)(b.o,{})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to product list"}),(0,r.jsx)("h1",{className:"text-headercolor font-bold text-xl",children:"Product Detail"})]})]}),(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)(j.A,{name:"name",label:"Product Name",placeHolder:W.name,type:"text",value:W.name,onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)(y.A,{placeHolder:"Enter Porduct Description Here",label:"Product Description",name:"description",value:W.description||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(j.A,{name:"dosage",label:"Dosage",placeHolder:W.dosage||"",type:"text",value:W.dosage||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(j.A,{name:"usage",label:"Usage",placeHolder:W.usage||"",type:"text",value:W.usage||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(j.A,{name:"storage",label:"Storage",placeHolder:W.storage||"",type:"text",value:W.storage||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(j.A,{name:"unit_price",label:"Unit",placeHolder:W.unit_price||"",type:"text",value:W.unit_price||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(j.A,{name:"age_group",label:"Age Group",placeHolder:W.age_group||"",type:"text",value:W.age_group||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category & Tag"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(l.J,{className:"text-inputlabel",children:"Product Category"}),(0,r.jsx)(w.A,{label:W.category?.name,setCategory:f,options:E})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(l.J,{className:"text-inputlabel",children:"Tags"}),(0,r.jsx)(N.A,{removeTag:e=>{et(t=>t.filter((t,a)=>a!==e))},setTag:e=>{et(e)},options:D,selectedTag:ee})]})]})]})]}),(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Product Images"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,r.jsx)($.A,{className:"w-[10rem]",onFileSelect:e=>{a(t=>[...t,...Array.from(e)])},multiple:!0}),X.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,r.jsx)(P.default,{src:e.image_url,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>ei(e.id),className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,r.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:K?(0,r.jsx)(k.A,{className:"animate-spin"}):"Remove"})})]},t)),t.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,r.jsx)(P.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>er(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,r.jsx)(S.A,{size:30,color:"black"})})]},t))]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Pricing"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8",children:(0,r.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[(0,r.jsx)(v,{label:"Price",name:"price",placeHolder:"000.00",value:W.price,onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))}),(0,r.jsx)(v,{label:"Bulk Price",name:"bulk_price",placeHolder:"000.00",value:W.bulk_price,onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})]})})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)("div",{className:"min-w-[7rem]",children:(0,r.jsx)(h.W,{label:"Delete",heading:"Are you sure you want to delete this product?",caption:"This action will permanently delete this product from the shop",actionDescription:"Deleting the product",action:ea,actionLoading:z})}),(0,r.jsx)(i.$,{type:"button",onClick:eo,disabled:q,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:q?(0,r.jsx)(k.A,{className:"animate-spin",size:25}):"Save"})]})]})]})]})})]})},I=()=>{let{productId:e}=(0,A.useParams)();return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(q,{id:e||""})})}},99355:(e,t,a)=>{"use strict";a.d(t,{GW:()=>p,b:()=>s,ff:()=>o,gI:()=>l,kZ:()=>c,lm:()=>d,oY:()=>u,q:()=>n,xq:()=>i});var r=a(37713);let i=(0,r.J1)`
  mutation createProduct(
    $name: String
    $price: Int
    $bulk_price: Int
    $quantity: Int
    $description: String
    $dosage: String
    $usage: String
    $storage: String
    $shop_id: uuid
    $age_group: String
    $unit_price: String
    $category_id: uuid
    $created_at: timestamptz
  ) {
    insert_products_one(
      object: {
        name: $name
        price: $price
        bulk_price: $bulk_price
        quantity: $quantity
        description: $description
        dosage: $dosage
        usage: $usage
        storage: $storage
        shop_id: $shop_id
        unit_price: $unit_price
        category_id: $category_id
        created_at: $created_at
        age_group: $age_group
      }
    ) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      unit_price
      age_group
      description
      created_at
    }
  }
`,l=(0,r.J1)`
  mutation createProductTag($product_id: uuid, $tag_id: uuid) {
    insert_product_tags_one(
      object: { product_id: $product_id, tag_id: $tag_id }
    ) {
      id
      product_id
      tag_id
    }
  }
`,d=(0,r.J1)`
  mutation DeleteProductTag($product_id: uuid!, $tag_id: uuid!) {
    delete_product_tags(
      where: { product_id: { _eq: $product_id }, tag_id: { _eq: $tag_id } }
    ) {
      affected_rows
    }
  }
`,s=(0,r.J1)`
  mutation createImage($product_id: uuid, $image_url: String) {
    insert_images_one(
      object: { product_id: $product_id, image_url: $image_url }
    ) {
      id
      product_id
      image_url
    }
  }
`,o=(0,r.J1)`
  mutation createAdImage($ad_id: uuid, $url: String) {
    insert_ad_images_one(
      object: { ad_id: $ad_id, url: $url }
    ) {
      id
      ad_id
      url
    }
  }
`,c=(0,r.J1)`
  mutation deleteImage($id: uuid!) {
    delete_images_by_pk(id: $id) {
      id
      product_id
      image_url
    }
  }
`,n=(0,r.J1)`
  mutation updateProduct(
    $id: uuid!
    $name: String
    $price: Int
    $bulk_price: Int
    $quantity: Int
    $description: String
    $dosage: String
    $usage: String
    $storage: String
    $category_id: uuid
    $unit_price: String
    $age_group: String
    $updated_at: timestamptz
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        price: $price
        bulk_price: $bulk_price
        quantity: $quantity
        description: $description
        dosage: $dosage
        usage: $usage
        unit_price: $unit_price
        age_group: $age_group
        storage: $storage
        category_id: $category_id
        updated_at: $updated_at
      }
    ) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      description
      updated_at
    }
  }
`,u=(0,r.J1)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
      name
    }
  }
`,p=(0,r.J1)`
  mutation updateProduct($id: uuid!, $input: products_set_input!) {
    update_products_by_pk(pk_columns: { id: $id }, _set: $input) {
      id
      name
      category_id
      price
      bulk_price
      quantity
      description
      dosage
      usage
      storage
      updated_at
    }
  }
`},25029:(e,t,a)=>{"use strict";a.d(t,{C:()=>l,X:()=>d});var r=a(99355),i=a(35399);let l=()=>{let[e,{loading:t,error:a}]=(0,i.n)(r.q);return{updateProduct:async t=>{try{let a=await e({variables:t});return a?.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loadingUpdateProduct:t,errorUpdateProduct:a}},d=()=>{let[e,{loading:t,error:a,data:l}]=(0,i.n)(r.GW);return{handleUpdateProduct:async(t,a,r)=>{try{let i=await e({variables:{id:t,input:{quantity:r,default_stock_level:a}}});return i.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loading:t,error:a,data:l}}},68502:(e,t,a)=>{"use strict";a.d(t,{o:()=>r.A});var r=a(93793)},53837:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var r=a(45512),i=a(58009),l=a(44269),d=a(98755),s=a(24849),o=a(69001),c=a(94577),n=a(82281);let u=({options:e,setTag:t,removeTag:a,selectedTag:u})=>{let[p,g]=i.useState(!1),[m,x]=i.useState(""),[h,_]=i.useState([]),[f,v]=i.useState(""),b=i.useRef(null),j=e=>{if(u&&!u.some(t=>t.id===e.id)){let a=[...u,e];_(a),t(a)}v(""),g(!1)},y=e=>{_(t=>t.filter(t=>t.id!==e))};return(0,r.jsxs)(c.AM,{open:p,onOpenChange:g,children:[(0,r.jsx)(c.Wv,{className:"w-full",asChild:!0,children:(0,r.jsxs)("div",{ref:b,className:"flex items-center flex-wrap gap-2 border rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500",onClick:()=>g(!0),children:[u&&u.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm",children:[(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("button",{onClick:r=>{r.stopPropagation(),y(e.id),a(t)},className:"text-gray-500 hover:text-gray-700",children:(0,r.jsx)(l.A,{className:"h-4 w-4"})})]},e.id)),(0,r.jsxs)("div",{className:"relative flex-1",children:[(0,r.jsx)("input",{placeholder:`${h.length<1?"Select Product Tag (s)":""}`,id:f,onChange:e=>v(e.target.id),className:"w-full text-sm text-inputname pr-6 border-none outline-none bg-transparent p-1"}),(0,r.jsx)(d.A,{size:15,color:"#796f6f",className:"absolute right-2 top-2"})]})]})}),(0,r.jsx)(c.hl,{style:{width:b.current?`${b.current.offsetWidth}px`:"auto"},className:"p-0",children:(0,r.jsxs)(o.uB,{children:[(0,r.jsx)(o.G7,{placeholder:"Search option..."}),(0,r.jsxs)(o.oI,{children:[(0,r.jsx)(o.xL,{children:"No option found."}),(0,r.jsx)(o.L$,{children:e.map(e=>(0,r.jsxs)(o.h_,{id:e.id,onSelect:t=>{x(t===m?"":t),g(!1),j(e)},children:[(0,r.jsx)(s.A,{className:(0,n.A)("mr-2 h-4 w-4",m===e.id?"opacity-100":"opacity-0")}),e.name]},e.id))})]})]})})]})}},69600:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\product-management\\\\product\\\\product-detail\\\\[productId]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx","default")},29372:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(62740),i=a(8081);function l({children:e}){return(0,r.jsx)(i.A,{children:e})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[1989,6137,8077,7911,8317,5103,9733,7338,5144,2182,308,8494,6889,7458],()=>a(83245));module.exports=r})();