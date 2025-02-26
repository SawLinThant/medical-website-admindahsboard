(()=>{var e={};e.id=201,e.ids=[201],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},2925:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>o,routeModule:()=>p,tree:()=>n});var r=a(70260),i=a(28203),s=a(25155),l=a.n(s),d=a(67292),c={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>d[e]);a.d(t,c);let n=["",{children:["product-management",{children:["product",{children:["create-product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,41418)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\create-product\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,29397)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\create-product\\layout.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\create-product\\page.tsx"],u={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/product-management/product/create-product/page",pathname:"/product-management/product/create-product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},99420:(e,t,a)=>{Promise.resolve().then(a.bind(a,41418))},9148:(e,t,a)=>{Promise.resolve().then(a.bind(a,45686))},31393:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(41680).A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},45686:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>D});var r=a(45512),i=a(55669),s=a(44165),l=a(39400),d=a(52628),c=a(37239),n=a(54716),o=a(99355),u=a(1475),p=a(58190),m=a(77722),x=a(31393);let g=({label:e,name:t,placeHolder:a,register:i,...s})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(d.J,{className:"text-inputlabel",children:e}),(0,r.jsxs)("div",{className:"w-full relative",children:[(0,r.jsx)(m.p,{type:"number",placeholder:a,...i?i(t,{required:`${String(t)} is required`}):{},...s,className:"py-2 pl-12 pr-2 rounded-lg border border-gray-300"}),(0,r.jsx)("div",{className:"absolute top-2 left-3.5 ",children:(0,r.jsx)("div",{className:"w-[25px] h-[25px] rounded-lg text-center bg-[#c5bfc7] flex items-center justify-center",children:(0,r.jsx)(x.A,{size:15,color:"#211d22"})})})]})]});var h=a(68502),f=a(48682),_=a(88404),b=a(17466),j=a(32701),y=a(62004),v=a(53837),w=a(95631),N=a(44269),$=a(6766),S=a(45103),P=a(58009),k=a(6868);let A=({shop_id:e})=>{let[t,a]=(0,P.useState)(0),[i,s]=(0,P.useState)([]),[m,x]=(0,P.useState)([]),[A,q]=(0,P.useState)(),[D,I]=(0,P.useState)(""),[C,J]=(0,P.useState)(!1),{uploadToS3:T}=(0,u.w)(),{tags:E}=(0,p.jt)(),{categories:R}=(0,p.E5)(),{handleSubmit:U,register:H,reset:G}=(0,k.mN)(),{toast:L}=(0,n.dj)(),[M]=(0,w.n)(o.xq),[z]=(0,w.n)(o.gI),[F]=(0,w.n)(o.b);console.log("shop_id:",e);let O=e=>{s(t=>t.filter((t,a)=>a!==e))},W=async e=>{let t=[];for(let a of i){let r=await T(a);r&&(t.push(r),await F({variables:{product_id:e,image_url:r}}))}console.log("Uploaded image URLs:",t)},B=async e=>{for(let t of m)await z({variables:{product_id:e,tag_id:t.id}})},V=U(async t=>{if(!i.length)return L({title:"Invalid Data",description:"Please choose at least one photo."});if(!D)return L({title:"Invalid Data",description:"Please choose category."});if(!A)return L({title:"Invalid Data",description:"Please choose a date."});if(m.length<1)return L({title:"Invalid Data",description:"Please choose at least one tag."});try{J(!0);let a=await M({variables:{name:t.name,price:t.price,bulk_price:t.bulk_price,quantity:1,description:t.description,dosage:t.dosage,usage:t.usage,storage:t.storage,created_at:new Date(A||Date.now()).toISOString(),shop_id:e,category_id:D}}),r=a.data?.insert_products_one?.id;r&&await Promise.all([W(r),B(r)]),L({description:"Product created"})}catch(e){console.log("Error creating product:",e),L({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem while creating product.",action:(0,r.jsx)(c.Qg,{altText:"Try again",children:"Try again"})})}finally{J(!1)}});return console.log(m),(0,r.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,r.jsx)("div",{className:"h-11 w-11",children:(0,r.jsx)(h.o,{})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"text-sm text-muted-foreground",children:"Back to product list"}),(0,r.jsx)("h1",{className:"text-headercolor font-bold text-xl",children:"Add New Product"})]})]}),(0,r.jsx)("form",{onSubmit:V,children:(0,r.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Description"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsx)("div",{className:"w-1/2",children:(0,r.jsx)(_.A,{name:"name",label:"Product Name",placeHolder:"Enter product name",type:"text",register:H})}),(0,r.jsx)(b.A,{placeHolder:"Enter Porduct Description Here",label:"Product Description",name:"description",register:H}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(_.A,{name:"dosage",label:"Dosage",placeHolder:"Enter Dosage",type:"text",register:H})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(_.A,{name:"usage",label:"Usage",placeHolder:"Enter Usage",type:"text",register:H})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(_.A,{name:"storage",label:"Storage",placeHolder:"Enter Storage",type:"text",register:H})})]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Category & Tag"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(d.J,{className:"text-inputlabel",children:"Product Category"}),(0,r.jsx)(j.A,{label:"Select Category",setCategory:I,options:R})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,r.jsx)(d.J,{className:"text-inputlabel",children:"Tags"}),(0,r.jsx)(v.A,{removeTag:e=>{x(t=>t.filter((t,a)=>a!==e))},setTag:x,options:E,selectedTag:m})]})]})]})]}),(0,r.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Product Images"}),(0,r.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-wrap items-center justify-center gap-6 p-8",children:[(0,r.jsx)(y.A,{className:"w-[10rem]",onFileSelect:e=>{s(t=>[...t,...Array.from(e)])},multiple:!0}),i.map((e,t)=>(0,r.jsxs)("div",{className:"w-[10rem] h-[10rem] relative",children:[(0,r.jsx)(S.default,{src:URL.createObjectURL(e),width:100,height:100,className:"w-full h-full object-cover rounded-md border",alt:`Uploaded image ${t+1}`}),(0,r.jsx)("div",{onClick:()=>O(t),className:"absolute top-1 right-2 hover:cursor-pointer",children:(0,r.jsx)(N.A,{size:30,color:"black"})})]},t))]})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Pricing"}),(0,r.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex items-center justify-center gap-6 p-8",children:(0,r.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[(0,r.jsx)(g,{register:H,label:"Price",name:"price",placeHolder:"000.00"}),(0,r.jsx)(g,{register:H,label:"Bulk Price",name:"bulk_price",placeHolder:"000.00"})]})})]}),(0,r.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l.$,{type:"button",onClick:()=>{G(),s([]),i.forEach(e=>URL.revokeObjectURL(URL.createObjectURL(e))),a(e=>e+1)},className:"bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]",children:"Discard"})}),(0,r.jsxs)("div",{className:"flex flex-row gap-3",children:[(0,r.jsx)(f.G,{loading:C,setSelectedDate:q}),(0,r.jsx)(l.$,{type:"submit",disabled:C,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:C?(0,r.jsx)($.A,{className:"animate-spin",size:25}):"Add Product"})]})]})]})]})},t)]})};var q=a(58184);let D=()=>{let{userId:e}=(0,s.F)(),{data:t}=(0,q.IT)(i.TW,{variables:{id:e}}),a=t?t.users?.[0]:[];return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(A,{shop_id:a.shop_id})})}},79438:(e,t,a)=>{"use strict";a.d(t,{V:()=>n});var r=a(45512);a(58009);var i=a(52706),s=a(99905),l=a(13155),d=a(44195),c=a(39400);function n({className:e,classNames:t,showOutsideDays:a=!0,...n}){return(0,r.jsx)(l.hv,{showOutsideDays:a,className:(0,d.cn)("p-3",e),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,d.cn)((0,c.r)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,d.cn)((0,c.r)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...t},components:{IconLeft:({className:e,...t})=>(0,r.jsx)(i.A,{className:(0,d.cn)("h-4 w-4",e),...t}),IconRight:({className:e,...t})=>(0,r.jsx)(s.A,{className:(0,d.cn)("h-4 w-4",e),...t})},...n})}n.displayName="Calendar"},99355:(e,t,a)=>{"use strict";a.d(t,{GW:()=>p,b:()=>d,ff:()=>c,gI:()=>s,kZ:()=>n,lm:()=>l,oY:()=>u,q:()=>o,xq:()=>i});var r=a(37713);let i=(0,r.J1)`
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
`,s=(0,r.J1)`
  mutation createProductTag($product_id: uuid, $tag_id: uuid) {
    insert_product_tags_one(
      object: { product_id: $product_id, tag_id: $tag_id }
    ) {
      id
      product_id
      tag_id
    }
  }
`,l=(0,r.J1)`
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
`,c=(0,r.J1)`
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
`,o=(0,r.J1)`
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
`},68502:(e,t,a)=>{"use strict";a.d(t,{o:()=>r.A});var r=a(93793)},48682:(e,t,a)=>{"use strict";a.d(t,{G:()=>c});var r=a(45512),i=a(58009),s=a(39400),l=a(79438),d=a(94577);function c({setSelectedDate:e,loading:t=!1}){let[a,c]=i.useState();return(0,r.jsxs)(d.AM,{children:[(0,r.jsx)(d.Wv,{asChild:!0,children:(0,r.jsx)(s.$,{disabled:t,className:"bg-slate-200 text-inputlabel rounded-md min-w-[7rem] hover:text-white",children:"Shcedule"})}),(0,r.jsx)(d.hl,{className:"w-auto p-0",children:(0,r.jsx)(l.V,{mode:"single",selected:a,onSelect:t=>{c(t),e(t)},initialFocus:!0})})]})}},88404:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(45512),i=a(77722),s=a(52628);let l=({label:e,name:t,type:a,placeHolder:l,register:d,...c})=>(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsx)(s.J,{htmlFor:String(t),className:"text-inputlabel",children:e}),(0,r.jsx)(i.p,{id:String(t),type:a,placeholder:l,...d?d(t,{required:`${String(t)} is required`}):{},..."file"!==a?c:{}})]})},17466:(e,t,a)=>{"use strict";a.d(t,{A:()=>c});var r=a(45512),i=a(52628),s=a(75002);let l=(0,a(41680).A)("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);var d=a(58009);let c=({label:e,name:t,placeHolder:a,register:c,...n})=>{let[o,u]=(0,d.useState)("");return(0,r.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"w-full flex flex-row justify-between",children:[(0,r.jsx)(i.J,{htmlFor:t,className:"text-inputlabel",children:e}),(0,r.jsxs)("label",{className:"no-underline text-inputlabel text-sm cursor-pointer",children:[(0,r.jsxs)("div",{className:"text-inputlabel text-sm flex items-center gap-1",children:[(0,r.jsx)(l,{size:20,color:"#796f6f"})," Upload text file"]}),(0,r.jsx)("input",{type:"file",accept:".txt",className:"hidden",onChange:e=>{let t=e.target.files?.[0];if(t){let e=new FileReader;e.onload=()=>{u(e.result)},e.readAsText(t)}}})]})]}),(0,r.jsx)(s.T,{...c?c(t,{required:`${String(t)} is required`}):{},id:t,className:"min-h-36",name:t,placeholder:a,value:o,onChange:e=>u(e.target.value),...n})]})}},53837:(e,t,a)=>{"use strict";a.d(t,{A:()=>u});var r=a(45512),i=a(58009),s=a(44269),l=a(98755),d=a(24849),c=a(62383),n=a(94577),o=a(82281);let u=({options:e,setTag:t,removeTag:a,selectedTag:u})=>{let[p,m]=i.useState(!1),[x,g]=i.useState(""),[h,f]=i.useState([]),[_,b]=i.useState(""),j=i.useRef(null),y=e=>{if(u&&!u.some(t=>t.id===e.id)){let a=[...u,e];f(a),t(a)}b(""),m(!1)},v=e=>{f(t=>t.filter(t=>t.id!==e))};return(0,r.jsxs)(n.AM,{open:p,onOpenChange:m,children:[(0,r.jsx)(n.Wv,{className:"w-full",asChild:!0,children:(0,r.jsxs)("div",{ref:j,className:"flex items-center flex-wrap gap-2 border rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500",onClick:()=>m(!0),children:[u&&u.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm",children:[(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("button",{onClick:r=>{r.stopPropagation(),v(e.id),a(t)},className:"text-gray-500 hover:text-gray-700",children:(0,r.jsx)(s.A,{className:"h-4 w-4"})})]},e.id)),(0,r.jsxs)("div",{className:"relative flex-1",children:[(0,r.jsx)("input",{placeholder:`${h.length<1?"Select Product Tag (s)":""}`,id:_,onChange:e=>b(e.target.id),className:"w-full text-sm text-inputname pr-6 border-none outline-none bg-transparent p-1"}),(0,r.jsx)(l.A,{size:15,color:"#796f6f",className:"absolute right-2 top-2"})]})]})}),(0,r.jsx)(n.hl,{style:{width:j.current?`${j.current.offsetWidth}px`:"auto"},className:"p-0",children:(0,r.jsxs)(c.uB,{children:[(0,r.jsx)(c.G7,{placeholder:"Search option..."}),(0,r.jsxs)(c.oI,{children:[(0,r.jsx)(c.xL,{children:"No option found."}),(0,r.jsx)(c.L$,{children:e.map(e=>(0,r.jsxs)(c.h_,{id:e.id,onSelect:t=>{g(t===x?"":t),m(!1),y(e)},children:[(0,r.jsx)(d.A,{className:(0,o.A)("mr-2 h-4 w-4",x===e.id?"opacity-100":"opacity-0")}),e.name]},e.id))})]})]})})]})}},29397:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(62740),i=a(8081);function s({children:e}){return(0,r.jsx)(i.A,{children:e})}a(76301)},41418:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\app\\\\product-management\\\\product\\\\create-product\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\product-management\\product\\create-product\\page.tsx","default")}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[989,160,77,85,36,255,698,563,376,182,320,577],()=>a(2925));module.exports=r})();