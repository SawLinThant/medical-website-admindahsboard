(()=>{var e={};e.id=779,e.ids=[779],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},83245:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>n});var r=a(70260),l=a(28203),i=a(25155),s=a.n(i),d=a(67292),o={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);a.d(t,o);let n=["",{children:["product-management",{children:["product",{children:["product-detail",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,69600)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,29372)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\layout.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx"],u={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:l.RouteKind.APP_PAGE,page:"/product-management/product/product-detail/[productId]/page",pathname:"/product-management/product/product-detail/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},70681:(e,t,a)=>{Promise.resolve().then(a.bind(a,69600))},7129:(e,t,a)=>{Promise.resolve().then(a.bind(a,74597))},31393:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},76193:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]])},6766:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]])},74597:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q});var r=a(45512),l=a(39400),i=a(52628),s=a(37239),d=a(54716),o=a(99355),n=a(1475),c=a(58190),u=a(95631);let p=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.kZ);return{deleteImageById:async t=>{try{let a=await e({variables:{id:t}});return a?.data?.delete_images_by_pk}catch(e){throw console.error("Error deleting image:",e),e}},loadingDeleteImage:t,errorDeleteImage:a}},m=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.oY);return{deleteProductById:async t=>{try{let a=await e({variables:{id:t}});return a?.data?.delete_products_by_pk}catch(e){throw console.error("Error deleting product:",e),e}},loadingDeleteProduct:t,errorDeleteProduct:a}},g=()=>{let[e,{loading:t,error:a}]=(0,u.n)(o.lm);return{deleteProductTag:async(t,a)=>{try{await e({variables:{product_id:t,tag_id:a}})}catch(e){console.log(e)}},loading:t,error:a}};var x=a(25029),f=a(25501),h=a(77722),y=a(31393);let j=({label:e,name:t,placeHolder:a,value:l,onChange:s,register:d,...o})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(i.J,{htmlFor:t,className:"text-inputlabel",children:e}),(0,r.jsxs)("div",{className:"w-full relative",children:[(0,r.jsx)(h.p,{id:t,name:t,type:"number",placeholder:a,value:l,onChange:s,...o,className:`py-2 pl-12 pr-2 rounded-lg border border-gray-300 ${o.className??""}`}),(0,r.jsx)("div",{className:"absolute top-2 left-3.5",children:(0,r.jsx)("div",{className:"w-[25px] h-[25px] rounded-lg text-center bg-[#c5bfc7] flex items-center justify-center",children:(0,r.jsx)(y.A,{size:15,color:"#211d22"})})})]})]});var v=a(68502),b=a(16596),_=a(24414),w=a(32701),N=a(62004),$=a(53837),k=a(6766),A=a(44269),P=a(45103),S=a(79334),C=a(58009);let D=({id:e})=>{let[t,a]=(0,C.useState)([]),[h,y]=(0,C.useState)(""),[D,q]=(0,C.useState)(!1),{uploadToS3:I}=(0,n.w)(),{tags:R}=(0,c.jt)(),{categories:J}=(0,c.E5)(),{toast:E}=(0,d.dj)(),{updateProduct:T}=(0,x.C)(),[H]=(0,u.n)(o.gI),{deleteProductTag:L}=g(),[z]=(0,u.n)(o.b),{deleteProductById:M,loadingDeleteProduct:U}=m(),G=(0,S.useRouter)(),{product:O,refetchProduct:F}=(0,c.LG)(e),[B,W]=(0,C.useState)({id:"",name:"",price:0,bulk_price:0,quantity:0,description:"",dosage:"",usage:"",storage:"",category_id:"",default_stock_level:0,category:{id:"",name:""}}),{images:V,refetchImage:Y}=(0,c.Jd)(e),{deleteImageById:Z,loadingDeleteImage:X}=p(),{tagsById:K,loadingTags:Q}=(0,c._V)(e),[ee,et]=(0,C.useState)([]);(0,C.useEffect)(()=>{K&&et(K)},[Q]),(0,C.useEffect)(()=>{O&&W(O)},[O]);let ea=async()=>{await M(B.id)&&G.push("/product-management/product/product-list")},er=e=>{a(t=>t.filter((t,a)=>a!==e))},el=async e=>{await Z(e)&&Y()},ei=async e=>{let a=[];for(let r of t){let t=await I(r);t&&(a.push(t),await z({variables:{product_id:e,image_url:t}}))}},es=()=>{a([]),t.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e)))},ed=async t=>{if(!K||!ee)return;let a=ee.filter(e=>!K.some(t=>t.id===e.id)),r=K.filter(e=>!ee.some(t=>t.id===e.id));for(let e of a)await H({variables:{product_id:t,tag_id:e.id}});for(let t of r)await L(e,t.id)},eo=async()=>{try{q(!0),await T({id:e,name:B.name,price:B.price,bulk_price:B.bulk_price,quantity:1,description:B.description,dosage:B.dosage,usage:B.usage,storage:B.storage,updated_at:new Date(Date.now()).toISOString(),category_id:""===h?B.category_id:h})&&(ed(e),await Promise.all([ei(e)]),es(),F(),Y(),E({description:"Product updated"}))}catch(e){console.log("Error creating product:",e),E({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating product.",action:(0,r.jsx)(s.Qg,{altText:"Try again",children:"Try again"})})}finally{q(!1)}};return(0,r.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,r.jsx)("div",{className:"h-11 w-11",children:(0,r.jsx)(v.o,{})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to product list"}),(0,r.jsx)("h1",{className:"text-headercolor font-bold text-xl",children:"Product Detail"})]})]}),(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)(b.A,{name:"name",label:"Product Name",placeHolder:B.name,type:"text",value:B.name,onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)(_.A,{placeHolder:"Enter Porduct Description Here",label:"Product Description",name:"description",value:B.description||"",onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(b.A,{name:"dosage",label:"Dosage",placeHolder:B.dosage||"",type:"text",value:B.dosage||"",onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(b.A,{name:"usage",label:"Usage",placeHolder:B.usage||"",type:"text",value:B.usage||"",onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(b.A,{name:"storage",label:"Storage",placeHolder:B.storage||"",type:"text",value:B.storage||"",onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))})})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category & Tag"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(i.J,{className:"text-inputlabel",children:"Product Category"}),(0,r.jsx)(w.A,{label:B.category?.name,setCategory:y,options:J})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(i.J,{className:"text-inputlabel",children:"Tags"}),(0,r.jsx)($.A,{removeTag:e=>{et(t=>t.filter((t,a)=>a!==e))},setTag:e=>{et(e)},options:R,selectedTag:ee})]})]})]})]}),(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Product Images"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,r.jsx)(N.A,{className:"w-[10rem]",onFileSelect:e=>{a(t=>[...t,...Array.from(e)])},multiple:!0}),V.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative group",children:[(0,r.jsx)(P.default,{src:e.image_url,width:300,height:300,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>el(e.id),className:"absolute inset-0 flex items-center justify-center hover:cursor-pointer",children:(0,r.jsx)("div",{className:"group-hover:opacity-100 flex opacity-0 transition-all flex-row items-center px-3 py-1 rounded bg-slate-100",children:X?(0,r.jsx)(k.A,{className:"animate-spin"}):"Remove"})})]},t)),t.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,r.jsx)(P.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>er(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,r.jsx)(A.A,{size:30,color:"black"})})]},t))]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Pricing"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8",children:(0,r.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[(0,r.jsx)(j,{label:"Price",name:"price",placeHolder:"000.00",value:B.price,onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))}),(0,r.jsx)(j,{label:"Bulk Price",name:"bulk_price",placeHolder:"000.00",value:B.bulk_price,onChange:e=>W(t=>({...t,[e.target.name]:e.target.value}))})]})})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)("div",{className:"min-w-[7rem]",children:(0,r.jsx)(f.W,{label:"Delete",heading:"Are you sure you want to delete this product?",caption:"This action will permanently delete this product from the shop",actionDescription:"Deleting the product",action:ea,actionLoading:U})}),(0,r.jsx)(l.$,{type:"button",onClick:eo,disabled:D,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:D?(0,r.jsx)(k.A,{className:"animate-spin",size:25}):"Save"})]})]})]})]})})]})},q=()=>{let{productId:e}=(0,S.useParams)();return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(D,{id:e||""})})}},99355:(e,t,a)=>{"use strict";a.d(t,{GW:()=>p,b:()=>d,ff:()=>o,gI:()=>i,kZ:()=>n,lm:()=>s,oY:()=>u,q:()=>c,xq:()=>l});var r=a(37713);let l=(0,r.J1)`
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
`,i=(0,r.J1)`
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
  mutation createAdImage($ad_id: uuid, $url: String) {
    insert_ad_images_one(
      object: { ad_id: $ad_id, url: $url }
    ) {
      id
      ad_id
      url
    }
  }
`,n=(0,r.J1)`
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
`},25029:(e,t,a)=>{"use strict";a.d(t,{C:()=>i,X:()=>s});var r=a(99355),l=a(95631);let i=()=>{let[e,{loading:t,error:a}]=(0,l.n)(r.q);return{updateProduct:async t=>{try{let a=await e({variables:t});return a?.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loadingUpdateProduct:t,errorUpdateProduct:a}},s=()=>{let[e,{loading:t,error:a,data:i}]=(0,l.n)(r.GW);return{handleUpdateProduct:async(t,a,r)=>{try{let l=await e({variables:{id:t,input:{quantity:r,default_stock_level:a}}});return l.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loading:t,error:a,data:i}}},25501:(e,t,a)=>{"use strict";a.d(t,{W:()=>M});var r=a(45512),l=a(58009),i=a(6004);function s(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function d(...e){return l.useCallback(function(...e){return t=>{let a=!1,r=e.map(e=>{let r=s(e,t);return a||"function"!=typeof r||(a=!0),r});if(a)return()=>{for(let t=0;t<r.length;t++){let a=r[t];"function"==typeof a?a():s(e[t],null)}}}}(...e),e)}var o=a(28122),n=a(76660),c="AlertDialog",[u,p]=(0,i.A)(c,[o.Hs]),m=(0,o.Hs)(),g=e=>{let{__scopeAlertDialog:t,...a}=e,l=m(t);return(0,r.jsx)(o.bL,{...l,...a,modal:!0})};g.displayName=c;var x=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...l}=e,i=m(a);return(0,r.jsx)(o.l9,{...i,...l,ref:t})});x.displayName="AlertDialogTrigger";var f=e=>{let{__scopeAlertDialog:t,...a}=e,l=m(t);return(0,r.jsx)(o.ZL,{...l,...a})};f.displayName="AlertDialogPortal";var h=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...l}=e,i=m(a);return(0,r.jsx)(o.hJ,{...i,...l,ref:t})});h.displayName="AlertDialogOverlay";var y="AlertDialogContent",[j,v]=u(y),b=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,children:i,...s}=e,c=m(a),u=l.useRef(null),p=d(t,u),g=l.useRef(null);return(0,r.jsx)(o.G$,{contentName:y,titleName:_,docsSlug:"alert-dialog",children:(0,r.jsx)(j,{scope:a,cancelRef:g,children:(0,r.jsxs)(o.UC,{role:"alertdialog",...c,...s,ref:p,onOpenAutoFocus:function(e,t,{checkForDefaultPrevented:a=!0}={}){return function(r){if(e?.(r),!1===a||!r.defaultPrevented)return t?.(r)}}(s.onOpenAutoFocus,e=>{e.preventDefault(),g.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,r.jsx)(n.xV,{children:i}),(0,r.jsx)(S,{contentRef:u})]})})})});b.displayName=y;var _="AlertDialogTitle",w=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...l}=e,i=m(a);return(0,r.jsx)(o.hE,{...i,...l,ref:t})});w.displayName=_;var N="AlertDialogDescription",$=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...l}=e,i=m(a);return(0,r.jsx)(o.VY,{...i,...l,ref:t})});$.displayName=N;var k=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...l}=e,i=m(a);return(0,r.jsx)(o.bm,{...i,...l,ref:t})});k.displayName="AlertDialogAction";var A="AlertDialogCancel",P=l.forwardRef((e,t)=>{let{__scopeAlertDialog:a,...l}=e,{cancelRef:i}=v(A,a),s=m(a),n=d(t,i);return(0,r.jsx)(o.bm,{...s,...l,ref:n})});P.displayName=A;var S=({contentRef:e})=>{let t=`\`${y}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${y}\` by passing a \`${N}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${y}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return l.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},C=a(44195),D=a(39400);let q=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(h,{className:(0,C.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:a}));q.displayName=h.displayName;let I=l.forwardRef(({className:e,...t},a)=>(0,r.jsxs)(f,{children:[(0,r.jsx)(q,{}),(0,r.jsx)(b,{ref:a,className:(0,C.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t})]}));I.displayName=b.displayName;let R=({className:e,...t})=>(0,r.jsx)("div",{className:(0,C.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});R.displayName="AlertDialogHeader";let J=({className:e,...t})=>(0,r.jsx)("div",{className:(0,C.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});J.displayName="AlertDialogFooter";let E=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(w,{ref:a,className:(0,C.cn)("text-lg font-semibold",e),...t}));E.displayName=w.displayName;let T=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)($,{ref:a,className:(0,C.cn)("text-sm text-muted-foreground",e),...t}));T.displayName=$.displayName;let H=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(k,{ref:a,className:(0,C.cn)((0,D.r)(),e),...t}));H.displayName=k.displayName;let L=l.forwardRef(({className:e,...t},a)=>(0,r.jsx)(P,{ref:a,className:(0,C.cn)((0,D.r)({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));L.displayName=P.displayName;var z=a(6766);function M({caption:e,heading:t,label:a,actionLoading:l,actionDescription:i,action:s}){return(0,r.jsxs)(g,{children:[(0,r.jsx)(x,{className:"w-full",asChild:!0,children:(0,r.jsx)(D.$,{variant:"outline",children:a})}),l?(0,r.jsx)(I,{className:"max-w-[300px]",children:(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-3 items-center justify-center",children:[(0,r.jsx)("span",{className:"font-semibold text-lg",children:i}),(0,r.jsx)(z.A,{size:25,className:"animate-spin"})]})}):(0,r.jsxs)(I,{children:[(0,r.jsxs)(R,{children:[(0,r.jsx)(E,{children:t}),(0,r.jsx)(T,{children:e})]}),(0,r.jsxs)(J,{children:[(0,r.jsx)(L,{children:"Cancel"}),(0,r.jsx)(H,{onClick:s,children:"Continue"})]})]})]})}},68502:(e,t,a)=>{"use strict";a.d(t,{o:()=>r.A});var r=a(93793)},16596:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(45512),l=a(77722),i=a(52628);let s=({label:e,name:t,type:a,placeHolder:s,value:d,onChange:o,...n})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(i.J,{htmlFor:String(t),className:"text-inputlabel",children:e}),(0,r.jsx)(l.p,{id:String(t),name:String(t),type:a,placeholder:s,value:d,onChange:o,...n})]})},24414:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});var r=a(45512),l=a(52628),i=a(75002);let s=({label:e,name:t,value:a,placeHolder:s,onChange:d,onFileUpload:o,...n})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"w-full flex flex-row justify-between",children:(0,r.jsx)(l.J,{htmlFor:t,className:"text-inputlabel",children:e})}),(0,r.jsx)(i.T,{id:t,className:"min-h-36",name:t,placeholder:s,value:a,onChange:d,...n})]})},53837:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var r=a(45512),l=a(58009),i=a(44269),s=a(98755),d=a(24849),o=a(62383),n=a(94577),c=a(82281);let u=({options:e,setTag:t,removeTag:a,selectedTag:u})=>{let[p,m]=l.useState(!1),[g,x]=l.useState(""),[f,h]=l.useState([]),[y,j]=l.useState(""),v=l.useRef(null),b=e=>{if(u&&!u.some(t=>t.id===e.id)){let a=[...u,e];h(a),t(a)}j(""),m(!1)},_=e=>{h(t=>t.filter(t=>t.id!==e))};return(0,r.jsxs)(n.AM,{open:p,onOpenChange:m,children:[(0,r.jsx)(n.Wv,{className:"w-full",asChild:!0,children:(0,r.jsxs)("div",{ref:v,className:"flex items-center flex-wrap gap-2 border rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500",onClick:()=>m(!0),children:[u&&u.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm",children:[(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("button",{onClick:r=>{r.stopPropagation(),_(e.id),a(t)},className:"text-gray-500 hover:text-gray-700",children:(0,r.jsx)(i.A,{className:"h-4 w-4"})})]},e.id)),(0,r.jsxs)("div",{className:"relative flex-1",children:[(0,r.jsx)("input",{placeholder:`${f.length<1?"Select Product Tag (s)":""}`,id:y,onChange:e=>j(e.target.id),className:"w-full text-sm text-inputname pr-6 border-none outline-none bg-transparent p-1"}),(0,r.jsx)(s.A,{size:15,color:"#796f6f",className:"absolute right-2 top-2"})]})]})}),(0,r.jsx)(n.hl,{style:{width:v.current?`${v.current.offsetWidth}px`:"auto"},className:"p-0",children:(0,r.jsxs)(o.uB,{children:[(0,r.jsx)(o.G7,{placeholder:"Search option..."}),(0,r.jsxs)(o.oI,{children:[(0,r.jsx)(o.xL,{children:"No option found."}),(0,r.jsx)(o.L$,{children:e.map(e=>(0,r.jsxs)(o.h_,{id:e.id,onSelect:t=>{x(t===g?"":t),m(!1),b(e)},children:[(0,r.jsx)(d.A,{className:(0,c.A)("mr-2 h-4 w-4",g===e.id?"opacity-100":"opacity-0")}),e.name]},e.id))})]})]})})]})}},69600:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\product-management\\\\product\\\\product-detail\\\\[productId]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\product-detail\\[productId]\\page.tsx","default")},29372:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(62740),l=a(8081);function i({children:e}){return(0,r.jsx)(l.A,{children:e})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[989,160,77,85,36,255,698,182,320,577],()=>a(83245));module.exports=r})();