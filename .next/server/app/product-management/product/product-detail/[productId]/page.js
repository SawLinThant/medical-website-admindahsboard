(()=>{var e={};e.id=779,e.ids=[779],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},83245:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,pages:()=>n,routeModule:()=>p,tree:()=>c});var r=a(70260),i=a(28203),l=a(25155),s=a.n(l),d=a(67292),o={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);a.d(t,o);let c=["",{children:["product-management",{children:["product",{children:["product-detail",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,69600)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,29372)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\layout.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],n=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx"],u={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/product-management/product/product-detail/[productId]/page",pathname:"/product-management/product/product-detail/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},70681:(e,t,a)=>{Promise.resolve().then(a.bind(a,69600))},7129:(e,t,a)=>{Promise.resolve().then(a.bind(a,9341))},31393:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},9341:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>I});var r=a(45512),i=a(39400),l=a(52628),s=a(37239),d=a(54716),o=a(99355),c=a(1475),n=a(57741),u=a(95631);let p=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.kZ);return{deleteImageById:async t=>{try{let a=await e({variables:{id:t}});return a?.data?.delete_images_by_pk}catch(e){throw console.error("Error deleting image:",e),e}},loadingDeleteImage:t,errorDeleteImage:a}},m=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.oY);return{deleteProductById:async t=>{try{let a=await e({variables:{id:t}});return a?.data?.delete_products_by_pk}catch(e){throw console.error("Error deleting product:",e),e}},loadingDeleteProduct:t,errorDeleteProduct:a}},g=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.lm);return{deleteProductTag:async(t,a)=>{try{await e({variables:{product_id:t,tag_id:a}})}catch(e){console.log(e)}},loading:t,error:a}},x=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.q);return{updateProduct:async t=>{try{let a=await e({variables:t});return a?.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loadingUpdateProduct:t,errorUpdateProduct:a}};var h=a(25501),f=a(77722),_=a(31393);let j=({label:e,name:t,placeHolder:a,value:i,onChange:s,register:d,...o})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(l.J,{htmlFor:t,className:"text-inputlabel",children:e}),(0,r.jsxs)("div",{className:"w-full relative",children:[(0,r.jsx)(f.p,{id:t,name:t,type:"number",placeholder:a,value:i,onChange:s,...o,className:`py-2 pl-12 pr-2 rounded-lg border border-gray-300 ${o.className??""}`}),(0,r.jsx)("div",{className:"absolute top-2 left-3.5",children:(0,r.jsx)("div",{className:"w-[25px] h-[25px] rounded-lg text-center bg-[#c5bfc7] flex items-center justify-center",children:(0,r.jsx)(_.A,{size:15,color:"#211d22"})})})]})]});var b=a(68502),v=a(16596),y=a(24414),w=a(32701),N=a(62004),$=a(53837),k=a(6766),P=a(44269),S=a(45103),A=a(79334),q=a(58009);let C=({id:e})=>{let[t,a]=(0,q.useState)([]),[f,_]=(0,q.useState)(""),[C,I]=(0,q.useState)(!1),{uploadToS3:D}=(0,c.w)(),{tags:J}=(0,n.jt)(),{categories:T}=(0,n.E5)(),{toast:E}=(0,d.dj)(),{updateProduct:R}=x(),[H]=(0,u.n)(o.gI),{deleteProductTag:L}=g(),[U]=(0,u.n)(o.b),{deleteProductById:G,loadingDeleteProduct:z}=m(),O=(0,A.useRouter)(),{product:B,refetchProduct:M}=(0,n.LG)(e),[W,F]=(0,q.useState)({id:"",name:"",price:0,bulk_price:0,quantity:0,description:"",dosage:"",usage:"",storage:"",category_id:"",category:{id:"",name:""}}),{images:Y,refetchImage:Z}=(0,n.Jd)(e),{deleteImageById:K,loadingDeleteImage:Q}=p(),{tagsById:V,loadingTags:X}=(0,n._V)(e),[ee,et]=(0,q.useState)([]);(0,q.useEffect)(()=>{V&&et(V)},[X]),(0,q.useEffect)(()=>{B&&F(B)},[B]);let ea=async()=>{await G(W.id)&&O.push("/product-management/product/product-list")},er=e=>{a(t=>t.filter((t,a)=>a!==e))},ei=async e=>{await K(e)&&Z()},el=async e=>{let a=[];for(let r of t){let t=await D(r);t&&(a.push(t),await U({variables:{product_id:e,image_url:t}}))}},es=()=>{a([]),t.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e)))},ed=async t=>{if(!V||!ee)return;let a=ee.filter(e=>!V.some(t=>t.id===e.id)),r=V.filter(e=>!ee.some(t=>t.id===e.id));for(let e of a)await H({variables:{product_id:t,tag_id:e.id}});for(let t of r)await L(e,t.id)},eo=async()=>{try{I(!0),await R({id:e,name:W.name,price:W.price,bulk_price:W.bulk_price,quantity:1,description:W.description,dosage:W.dosage,usage:W.usage,storage:W.storage,updated_at:new Date(Date.now()).toISOString(),category_id:""===f?W.category_id:f})&&(ed(e),await Promise.all([el(e)]),es(),M(),Z(),E({description:"Product updated"}))}catch(e){console.log("Error creating product:",e),E({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating product.",action:(0,r.jsx)(s.Qg,{altText:"Try again",children:"Try again"})})}finally{I(!1)}};return(0,r.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,r.jsx)("div",{className:"h-11 w-11",children:(0,r.jsx)(b.o,{})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to product list"}),(0,r.jsx)("h1",{className:"text-headercolor font-bold text-xl",children:"Product Detail"})]})]}),(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)(v.A,{name:"name",label:"Product Name",placeHolder:W.name,type:"text",value:W.name,onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)(y.A,{placeHolder:"Enter Porduct Description Here",label:"Product Description",name:"description",value:W.description||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(v.A,{name:"dosage",label:"Dosage",placeHolder:W.dosage||"",type:"text",value:W.dosage||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(v.A,{name:"usage",label:"Usage",placeHolder:W.usage||"",type:"text",value:W.usage||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(v.A,{name:"storage",label:"Storage",placeHolder:W.storage||"",type:"text",value:W.storage||"",onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category & Tag"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(l.J,{className:"text-inputlabel",children:"Product Category"}),(0,r.jsx)(w.A,{label:W.category?.name,setCategory:_,options:T})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(l.J,{className:"text-inputlabel",children:"Tags"}),(0,r.jsx)($.A,{removeTag:e=>{et(t=>t.filter((t,a)=>a!==e))},setTag:e=>{et(e)},options:J,selectedTag:ee})]})]})]})]}),(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Product Images"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,r.jsx)(N.A,{className:"w-[10rem]",onFileSelect:e=>{a(t=>[...t,...Array.from(e)])},multiple:!0}),Y.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,r.jsx)(S.default,{src:e.image_url,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>ei(e.id),className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,r.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:Q?(0,r.jsx)(k.A,{className:"animate-spin"}):"Remove"})})]},t)),t.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,r.jsx)(S.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>er(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,r.jsx)(P.A,{size:30,color:"black"})})]},t))]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Pricing"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8",children:(0,r.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[(0,r.jsx)(j,{label:"Price",name:"price",placeHolder:"000.00",value:W.price,onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))}),(0,r.jsx)(j,{label:"Bulk Price",name:"bulk_price",placeHolder:"000.00",value:W.bulk_price,onChange:e=>F(t=>({...t,[e.target.name]:e.target.value}))})]})})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)("div",{className:"min-w-[7rem]",children:(0,r.jsx)(h.W,{label:"Delete",heading:"Are you sure you want to delete this product?",caption:"This action will permanently delete this product from the shop",actionDescription:"Deleting the product",action:ea,actionLoading:z})}),(0,r.jsx)(i.$,{type:"button",onClick:eo,disabled:C,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:C?(0,r.jsx)(k.A,{className:"animate-spin",size:25}):"Save"})]})]})]})]})})]})},I=()=>{let{productId:e}=(0,A.useParams)();return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(C,{id:e||""})})}},99355:(e,t,a)=>{"use strict";a.d(t,{b:()=>d,gI:()=>l,kZ:()=>o,lm:()=>s,oY:()=>n,q:()=>c,xq:()=>i});var r=a(37713);let i=(0,r.J1)`
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
        category_id: $category_id
        created_at: $created_at
      }
    ) {
      id
      name
      category_id
      price
      bulk_price
      quantity
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
`,s=(0,r.J1)`
  mutation DeleteProductTag($product_id: uuid!, $tag_id: uuid!) {
    delete_product_tags(
      where: { product_id: { _eq: $product_id }, tag_id: { _eq: $tag_id } }
    ) {
      affected_rows
    }
  }
`,d=(0,r.J1)`
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
  mutation deleteImage($id: uuid!) {
    delete_images_by_pk(id: $id) {
      id
      product_id
      image_url
    }
  }
`,c=(0,r.J1)`
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
`,n=(0,r.J1)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
      name
    }
  }
`},68502:(e,t,a)=>{"use strict";a.d(t,{o:()=>r.A});var r=a(93793)},53837:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var r=a(45512),i=a(58009),l=a(44269),s=a(98755),d=a(24849),o=a(62383),c=a(94577),n=a(82281);let u=({options:e,setTag:t,removeTag:a,selectedTag:u})=>{let[p,m]=i.useState(!1),[g,x]=i.useState(""),[h,f]=i.useState([]),[_,j]=i.useState(""),b=i.useRef(null),v=e=>{if(u&&!u.some(t=>t.id===e.id)){let a=[...u,e];f(a),t(a)}j(""),m(!1)},y=e=>{f(t=>t.filter(t=>t.id!==e))};return(0,r.jsxs)(c.AM,{open:p,onOpenChange:m,children:[(0,r.jsx)(c.Wv,{className:"w-full",asChild:!0,children:(0,r.jsxs)("div",{ref:b,className:"flex items-center flex-wrap gap-2 border rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500",onClick:()=>m(!0),children:[u&&u.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm",children:[(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("button",{onClick:r=>{r.stopPropagation(),y(e.id),a(t)},className:"text-gray-500 hover:text-gray-700",children:(0,r.jsx)(l.A,{className:"h-4 w-4"})})]},e.id)),(0,r.jsxs)("div",{className:"relative flex-1",children:[(0,r.jsx)("input",{placeholder:`${h.length<1?"Select Product Tag (s)":""}`,id:_,onChange:e=>j(e.target.id),className:"w-full text-sm text-inputname pr-6 border-none outline-none bg-transparent p-1"}),(0,r.jsx)(s.A,{size:15,color:"#796f6f",className:"absolute right-2 top-2"})]})]})}),(0,r.jsx)(c.hl,{style:{width:b.current?`${b.current.offsetWidth}px`:"auto"},className:"p-0",children:(0,r.jsxs)(o.uB,{children:[(0,r.jsx)(o.G7,{placeholder:"Search option..."}),(0,r.jsxs)(o.oI,{children:[(0,r.jsx)(o.xL,{children:"No option found."}),(0,r.jsx)(o.L$,{children:e.map(e=>(0,r.jsxs)(o.h_,{id:e.id,onSelect:t=>{x(t===g?"":t),m(!1),v(e)},children:[(0,r.jsx)(d.A,{className:(0,n.A)("mr-2 h-4 w-4",g===e.id?"opacity-100":"opacity-0")}),e.name]},e.id))})]})]})})]})}},69600:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\product-management\\\\product\\\\product-detail\\\\[productId]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx","default")},29372:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(62740),i=a(8081);function l({children:e}){return(0,r.jsx)(i.A,{children:e})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[989,266,77,496,435,698,182,320,577,939],()=>a(83245));module.exports=r})();