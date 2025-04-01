(()=>{var e={};e.id=9627,e.ids=[9627],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},67525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var a=r(70260),n=r(28203),i=r(25155),l=r.n(i),s=r(67292),o={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);r.d(t,o);let d=["",{children:["inventory-management",{children:["stock-level-management",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,62080)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\inventory-management\\stock-level-management\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,12507)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\inventory-management\\stock-level-management\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\NextJS\\medical dashboard\\medical-clinic\\src\\app\\inventory-management\\stock-level-management\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/inventory-management/stock-level-management/page",pathname:"/inventory-management/stock-level-management",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},30221:(e,t,r)=>{Promise.resolve().then(r.bind(r,46766))},54189:(e,t,r)=>{Promise.resolve().then(r.bind(r,61865))},63689:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(41680).A)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},75002:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var a=r(45512),n=r(58009),i=r(44195);let l=n.forwardRef(({className:e,...t},r)=>(0,a.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...t}));l.displayName="Textarea"},99355:(e,t,r)=>{"use strict";r.d(t,{GW:()=>p,b:()=>s,ff:()=>o,gI:()=>i,kZ:()=>d,lm:()=>l,oY:()=>u,q:()=>c,xq:()=>n});var a=r(37713);let n=(0,a.J1)`
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
`,i=(0,a.J1)`
  mutation createProductTag($product_id: uuid, $tag_id: uuid) {
    insert_product_tags_one(
      object: { product_id: $product_id, tag_id: $tag_id }
    ) {
      id
      product_id
      tag_id
    }
  }
`,l=(0,a.J1)`
  mutation DeleteProductTag($product_id: uuid!, $tag_id: uuid!) {
    delete_product_tags(
      where: { product_id: { _eq: $product_id }, tag_id: { _eq: $tag_id } }
    ) {
      affected_rows
    }
  }
`,s=(0,a.J1)`
  mutation createImage($product_id: uuid, $image_url: String) {
    insert_images_one(
      object: { product_id: $product_id, image_url: $image_url }
    ) {
      id
      product_id
      image_url
    }
  }
`,o=(0,a.J1)`
  mutation createAdImage($ad_id: uuid, $url: String) {
    insert_ad_images_one(
      object: { ad_id: $ad_id, url: $url }
    ) {
      id
      ad_id
      url
    }
  }
`,d=(0,a.J1)`
  mutation deleteImage($id: uuid!) {
    delete_images_by_pk(id: $id) {
      id
      product_id
      image_url
    }
  }
`,c=(0,a.J1)`
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
`,u=(0,a.J1)`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
      name
    }
  }
`,p=(0,a.J1)`
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
`},25029:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,X:()=>l});var a=r(99355),n=r(35399);let i=()=>{let[e,{loading:t,error:r}]=(0,n.n)(a.q);return{updateProduct:async t=>{try{let r=await e({variables:t});return r?.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loadingUpdateProduct:t,errorUpdateProduct:r}},l=()=>{let[e,{loading:t,error:r,data:i}]=(0,n.n)(a.GW);return{handleUpdateProduct:async(t,r,a)=>{try{let n=await e({variables:{id:t,input:{quantity:a,default_stock_level:r}}});return n.data?.update_products_by_pk}catch(e){throw console.error("Error updating product:",e),e}},loading:t,error:r,data:i}}},65494:(e,t,r)=>{"use strict";r.d(t,{v:()=>l});var a=r(37713);let n=(0,a.J1)`
 mutation InsertShopActivity($input: [shop_activities_insert_input!]!) {
    insert_shop_activities(objects: $input) {
      affected_rows
    }
  }
`;var i=r(35399);let l=()=>{let[e,{loading:t,error:r}]=(0,i.n)(n);return{createShopActivity:async t=>{try{let r=await e({variables:{input:[t]}});return r?.data?.insert_shop_activities}catch(e){throw console.error("Error creating shop activity:",e),e}},loadingCreateShopActivity:t,errorCreateShopActivity:r}}},16596:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(45512),n=r(77722),i=r(52628);let l=({label:e,name:t,type:r,placeHolder:l,value:s,onChange:o,...d})=>(0,a.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,a.jsx)(i.J,{htmlFor:String(t),className:"text-inputlabel",children:e}),(0,a.jsx)(n.p,{id:String(t),name:String(t),type:r,placeholder:l,value:s,onChange:o,...d})]})},24414:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(45512),n=r(52628),i=r(75002);let l=({label:e,name:t,value:r,placeHolder:l,onChange:s,onFileUpload:o,...d})=>(0,a.jsxs)("div",{className:"w-full h-full flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"w-full flex flex-row justify-between",children:(0,a.jsx)(n.J,{htmlFor:t,className:"text-inputlabel",children:e})}),(0,a.jsx)(i.T,{id:t,className:"min-h-36",name:t,placeholder:l,value:r,onChange:s,...d})]})},32701:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var a=r(45512),n=r(58009),i=r(98755),l=r(24849),s=r(39400),o=r(69001),d=r(94577),c=r(82281);let u=({options:e,setCategory:t,label:r})=>{let[u,p]=n.useState(!1),[m,f]=n.useState(""),x=n.useRef(null);return(0,a.jsxs)(d.AM,{open:u,onOpenChange:p,children:[(0,a.jsx)(d.Wv,{className:"w-full",asChild:!0,children:(0,a.jsxs)(s.$,{ref:x,variant:"outline",role:"combobox","aria-expanded":u,className:"w-full justify-between text-inputname",children:[m?e.find(e=>e.id===m)?.name:r,(0,a.jsx)(i.A,{color:"#796f6f",size:20})]})}),(0,a.jsx)(d.hl,{style:{width:x.current?`${x.current.offsetWidth}px`:"auto"},className:"p-0",children:(0,a.jsxs)(o.uB,{children:[(0,a.jsx)(o.G7,{placeholder:"Search option..."}),(0,a.jsxs)(o.oI,{children:[(0,a.jsx)(o.xL,{children:"No option found."}),(0,a.jsx)(o.L$,{children:e.map(e=>(0,a.jsxs)(o.h_,{id:e.id,onSelect:()=>{f(e.id),p(!1),t(e.id)},children:[(0,a.jsx)(l.A,{className:(0,c.A)("mr-2 h-4 w-4",m===e.id?"opacity-100":"opacity-0")}),e.name]},e.id))})]})]})})]})}},61865:(e,t,r)=>{"use strict";r.d(t,{default:()=>eF});var a=r(45512),n=r(58009),i=r(91796),l=r(93793),s=r(16596),o=r(24414),d=r(48317),c=r(44165),u=r(55669),p=r(52628),m=r(32701);function f(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e?.(a),!1===r||!a.defaultPrevented)return t?.(a)}}function x(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function h(...e){return t=>{let r=!1,a=e.map(e=>{let a=x(e,t);return r||"function"!=typeof a||(r=!0),a});if(r)return()=>{for(let t=0;t<a.length;t++){let r=a[t];"function"==typeof r?r():x(e[t],null)}}}}function g(...e){return n.useCallback(h(...e),e)}var v=r(6004);r(55740);var y=n.forwardRef((e,t)=>{let{children:r,...i}=e,l=n.Children.toArray(r),s=l.find(j);if(s){let e=s.props.children,r=l.map(t=>t!==s?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(_,{...i,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,a.jsx)(_,{...i,ref:t,children:r})});y.displayName="Slot";var _=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r),i=function(e,t){let r={...t};for(let a in t){let n=e[a],i=t[a];/^on[A-Z]/.test(a)?n&&i?r[a]=(...e)=>{i(...e),n(...e)}:n&&(r[a]=n):"style"===a?r[a]={...n,...i}:"className"===a&&(r[a]=[n,i].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props);return r.type!==n.Fragment&&(i.ref=t?h(t,e):e),n.cloneElement(r,i)}return n.Children.count(r)>1?n.Children.only(null):null});_.displayName="SlotClone";var b=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function j(e){return n.isValidElement(e)&&e.type===b}var w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...i}=e,l=n?y:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(l,{...i,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),N=r(30096),k=r(92828),$=r(13024),S=r(59018),A="rovingFocusGroup.onEntryFocus",R={bubbles:!1,cancelable:!0},C="RovingFocusGroup",[E,I,P]=function(e){let t=e+"CollectionProvider",[r,i]=(0,v.A)(t),[l,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),o=e=>{let{scope:t,children:r}=e,i=n.useRef(null),s=n.useRef(new Map).current;return(0,a.jsx)(l,{scope:t,itemMap:s,collectionRef:i,children:r})};o.displayName=t;let d=e+"CollectionSlot",c=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,i=g(t,s(d,r).collectionRef);return(0,a.jsx)(y,{ref:i,children:n})});c.displayName=d;let u=e+"CollectionItemSlot",p="data-radix-collection-item",m=n.forwardRef((e,t)=>{let{scope:r,children:i,...l}=e,o=n.useRef(null),d=g(t,o),c=s(u,r);return n.useEffect(()=>(c.itemMap.set(o,{ref:o,...l}),()=>void c.itemMap.delete(o))),(0,a.jsx)(y,{[p]:"",ref:d,children:i})});return m.displayName=u,[{Provider:o,Slot:c,ItemSlot:m},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}(C),[q,D]=(0,v.A)(C,[P]),[T,M]=q(C),O=n.forwardRef((e,t)=>(0,a.jsx)(E.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(E.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(L,{...e,ref:t})})}));O.displayName=C;var L=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:i,loop:l=!1,dir:s,currentTabStopId:o,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:c,onEntryFocus:u,preventScrollOnEntryFocus:p=!1,...m}=e,x=n.useRef(null),h=g(t,x),v=(0,S.jH)(s),[y=null,_]=(0,$.i)({prop:o,defaultProp:d,onChange:c}),[b,j]=n.useState(!1),N=(0,k.c)(u),C=I(r),E=n.useRef(!1),[P,q]=n.useState(0);return n.useEffect(()=>{let e=x.current;if(e)return e.addEventListener(A,N),()=>e.removeEventListener(A,N)},[N]),(0,a.jsx)(T,{scope:r,orientation:i,dir:v,loop:l,currentTabStopId:y,onItemFocus:n.useCallback(e=>_(e),[_]),onItemShiftTab:n.useCallback(()=>j(!0),[]),onFocusableItemAdd:n.useCallback(()=>q(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>q(e=>e-1),[]),children:(0,a.jsx)(w.div,{tabIndex:b||0===P?-1:0,"data-orientation":i,...m,ref:h,style:{outline:"none",...e.style},onMouseDown:f(e.onMouseDown,()=>{E.current=!0}),onFocus:f(e.onFocus,e=>{let t=!E.current;if(e.target===e.currentTarget&&t&&!b){let t=new CustomEvent(A,R);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=C().filter(e=>e.focusable);U([e.find(e=>e.active),e.find(e=>e.id===y),...e].filter(Boolean).map(e=>e.ref.current),p)}}E.current=!1}),onBlur:f(e.onBlur,()=>j(!1))})})}),F="RovingFocusGroupItem",J=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:i=!0,active:l=!1,tabStopId:s,...o}=e,d=(0,N.B)(),c=s||d,u=M(F,r),p=u.currentTabStopId===c,m=I(r),{onFocusableItemAdd:x,onFocusableItemRemove:h}=u;return n.useEffect(()=>{if(i)return x(),()=>h()},[i,x,h]),(0,a.jsx)(E.ItemSlot,{scope:r,id:c,focusable:i,active:l,children:(0,a.jsx)(w.span,{tabIndex:p?0:-1,"data-orientation":u.orientation,...o,ref:t,onMouseDown:f(e.onMouseDown,e=>{i?u.onItemFocus(c):e.preventDefault()}),onFocus:f(e.onFocus,()=>u.onItemFocus(c)),onKeyDown:f(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){u.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var a;let n=(a=e.key,"rtl"!==r?a:"ArrowLeft"===a?"ArrowRight":"ArrowRight"===a?"ArrowLeft":a);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(n))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(n)))return G[n]}(e,u.orientation,u.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let a=r.indexOf(e.currentTarget);r=u.loop?function(e,t){return e.map((r,a)=>e[(t+a)%e.length])}(r,a+1):r.slice(a+1)}setTimeout(()=>U(r))}})})})});J.displayName=F;var G={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function U(e,t=!1){let r=document.activeElement;for(let a of e)if(a===r||(a.focus({preventScroll:t}),document.activeElement!==r))return}var H=r(38762),W=r(66582),K=r(49397),V=e=>{let{present:t,children:r}=e,a=function(e){var t,r;let[a,i]=n.useState(),l=n.useRef({}),s=n.useRef(e),o=n.useRef("none"),[d,c]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=z(l.current);o.current="mounted"===d?e:"none"},[d]),(0,K.N)(()=>{let t=l.current,r=s.current;if(r!==e){let a=o.current,n=z(t);e?c("MOUNT"):"none"===n||t?.display==="none"?c("UNMOUNT"):r&&a!==n?c("ANIMATION_OUT"):c("UNMOUNT"),s.current=e}},[e,c]),(0,K.N)(()=>{if(a){let e;let t=a.ownerDocument.defaultView??window,r=r=>{let n=z(l.current).includes(r.animationName);if(r.target===a&&n&&(c("ANIMATION_END"),!s.current)){let r=a.style.animationFillMode;a.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===a.style.animationFillMode&&(a.style.animationFillMode=r)})}},n=e=>{e.target===a&&(o.current=z(l.current))};return a.addEventListener("animationstart",n),a.addEventListener("animationcancel",r),a.addEventListener("animationend",r),()=>{t.clearTimeout(e),a.removeEventListener("animationstart",n),a.removeEventListener("animationcancel",r),a.removeEventListener("animationend",r)}}c("ANIMATION_END")},[a,c]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),i="function"==typeof r?r({present:a.isPresent}):n.Children.only(r),l=g(a.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof r||a.isPresent?n.cloneElement(i,{ref:l}):null};function z(e){return e?.animationName||"none"}V.displayName="Presence";var B="Radio",[X,Z]=(0,v.A)(B),[Q,Y]=X(B),ee=n.forwardRef((e,t)=>{let{__scopeRadio:r,name:i,checked:l=!1,required:s,disabled:o,value:d="on",onCheck:c,form:u,...p}=e,[m,x]=n.useState(null),h=g(t,e=>x(e)),v=n.useRef(!1),y=!m||u||!!m.closest("form");return(0,a.jsxs)(Q,{scope:r,checked:l,disabled:o,children:[(0,a.jsx)(w.button,{type:"button",role:"radio","aria-checked":l,"data-state":en(l),"data-disabled":o?"":void 0,disabled:o,value:d,...p,ref:h,onClick:f(e.onClick,e=>{l||c?.(),y&&(v.current=e.isPropagationStopped(),v.current||e.stopPropagation())})}),y&&(0,a.jsx)(ea,{control:m,bubbles:!v.current,name:i,value:d,checked:l,required:s,disabled:o,form:u,style:{transform:"translateX(-100%)"}})]})});ee.displayName=B;var et="RadioIndicator",er=n.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:n,...i}=e,l=Y(et,r);return(0,a.jsx)(V,{present:n||l.checked,children:(0,a.jsx)(w.span,{"data-state":en(l.checked),"data-disabled":l.disabled?"":void 0,...i,ref:t})})});er.displayName=et;var ea=e=>{let{control:t,checked:r,bubbles:i=!0,...l}=e,s=n.useRef(null),o=(0,W.Z)(r),d=(0,H.X)(t);return n.useEffect(()=>{let e=s.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(o!==r&&t){let a=new Event("click",{bubbles:i});t.call(e,r),e.dispatchEvent(a)}},[o,r,i]),(0,a.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...l,tabIndex:-1,ref:s,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function en(e){return e?"checked":"unchecked"}var ei=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],el="RadioGroup",[es,eo]=(0,v.A)(el,[D,Z]),ed=D(),ec=Z(),[eu,ep]=es(el),em=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:n,defaultValue:i,value:l,required:s=!1,disabled:o=!1,orientation:d,dir:c,loop:u=!0,onValueChange:p,...m}=e,f=ed(r),x=(0,S.jH)(c),[h,g]=(0,$.i)({prop:l,defaultProp:i,onChange:p});return(0,a.jsx)(eu,{scope:r,name:n,required:s,disabled:o,value:h,onValueChange:g,children:(0,a.jsx)(O,{asChild:!0,...f,orientation:d,dir:x,loop:u,children:(0,a.jsx)(w.div,{role:"radiogroup","aria-required":s,"aria-orientation":d,"data-disabled":o?"":void 0,dir:x,...m,ref:t})})})});em.displayName=el;var ef="RadioGroupItem",ex=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:i,...l}=e,s=ep(ef,r),o=s.disabled||i,d=ed(r),c=ec(r),u=n.useRef(null),p=g(t,u),m=s.value===l.value,x=n.useRef(!1);return n.useEffect(()=>{let e=e=>{ei.includes(e.key)&&(x.current=!0)},t=()=>x.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,a.jsx)(J,{asChild:!0,...d,focusable:!o,active:m,children:(0,a.jsx)(ee,{disabled:o,required:s.required,checked:m,...c,...l,name:s.name,ref:p,onCheck:()=>s.onValueChange(l.value),onKeyDown:f(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:f(l.onFocus,()=>{x.current&&u.current?.click()})})})});ex.displayName=ef;var eh=n.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...n}=e,i=ec(r);return(0,a.jsx)(er,{...i,...n,ref:t})});eh.displayName="RadioGroupIndicator";var eg=r(63689),ev=r(44195);let ey=n.forwardRef(({className:e,...t},r)=>(0,a.jsx)(em,{className:(0,ev.cn)("grid gap-2",e),...t,ref:r}));ey.displayName=em.displayName;let e_=n.forwardRef(({className:e,...t},r)=>(0,a.jsx)(ex,{ref:r,className:(0,ev.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,a.jsx)(eh,{className:"flex items-center justify-center",children:(0,a.jsx)(eg.A,{className:"h-2.5 w-2.5 fill-current text-current"})})}));e_.displayName=ex.displayName;let eb=({options:e,setOption:t})=>(0,a.jsx)(ey,{defaultValue:e.length>0?e[0].value:void 0,className:"flex flex-row items-center",onValueChange:e=>t?.(e),children:e.map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(e_,{value:e.value,id:e.id}),(0,a.jsx)(p.J,{htmlFor:e.id,children:e.label})]},e.id))});var ej=r(44162),ew=r(39400),eN=r(6766),ek=r(54716),e$=r(25029),eS=r(37713);let eA=(0,eS.J1)`
  mutation InsertStockHistories(
    $reason: String
    $type: String
    $product_id: uuid
    $shop_id: uuid
    $stock_available: Int
    $adjusted_quantity: Int
  ) {
    insert_stock_histories(
      objects: {
        reason: $reason
        type: $type
        product_id: $product_id
        shop_id: $shop_id
        stock_available: $stock_available
        adjusted_quantity: $adjusted_quantity
      }
    ) {
      affected_rows
      returning {
        reason
        type
        id
        product_id
        shop_id
        stock_available
        adjusted_quantity
      }
    }
  }
`;var eR=r(35399);let eC=()=>{let[e,{loading:t,error:r,data:a}]=(0,eR.n)(eA);return{handleCreateStockHistory:async t=>{try{let r=await e({variables:t});return r.data?.insert_stock_histories.returning}catch(e){throw console.error("Error creating stock history:",e),e}},loading:t,error:r,data:a}},eE=(0,eS.J1)`
  query GetStockHistories($shop_id: uuid!, $product_id: uuid) {
    stock_histories(
      where: { 
        shop_id: { _eq: $shop_id },
        product_id: { _eq: $product_id } 
      }
    ) {
      id
      shop_id
      type
      reason
      product_id
      created_at
      stock_available
      adjusted_quantity
      shop {
        name
        shop_admin_name
      }
    }
  }
`,eI=(e,t)=>{let{data:r,loading:a,error:n,refetch:i}=(0,d.IT)(eE,{variables:{shop_id:e,product_id:t},skip:!e});return{stockHistories:r?.stock_histories,loading:a,error:n,refetchStock:i}};var eP=r(82281),eq=r(79334),eD=r(43264),eT=r(86483),eM=r(44269);let eO=({isDialogOpen:e,setIsDialogOpen:t,adjustmentOption:r,quantity:i,product:l})=>((0,n.useEffect)(()=>{}),(0,a.jsxs)(eD.lG,{open:e,onOpenChange:e=>{},children:[(0,a.jsx)(eD.zM,{asChild:!0,children:(0,a.jsx)("div",{onClick:()=>t(!0),className:"border-none bg-transparent hover:cursor-pointer"})}),(0,a.jsxs)(eD.Cf,{className:" px-4 lg:py-12 md:py-12 py-10",children:[(0,a.jsx)(eD.L3,{}),(0,a.jsx)("div",{onClick:()=>{t(!1)},className:"absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full",children:(0,a.jsx)(eM.A,{size:20})}),(0,a.jsx)("div",{className:"w-full min-h-[15rem] p-4",children:(0,a.jsxs)("div",{className:"w-full h-full flex flex-col items-center",children:[(0,a.jsx)(eT.A,{width:"60",height:"60"}),(0,a.jsx)("div",{className:"flex lg:flex-row items-center md:flex-row flex-col gap-2 mt-2",children:(0,a.jsx)("span",{className:"font-semibold",children:"add"===r?"Stock Added Successfully!":"Stock Reduced Successfully!"})}),(0,a.jsxs)("div",{className:"mt-6 rounded-xl  flex flex-col items-center gap-4 p-4",children:[(0,a.jsx)("span",{className:"text-xs text-secondary_color",children:`The stock level for ${l} has been updated to ${i}.`}),(0,a.jsx)(ew.$,{onClick:()=>t(!1),className:"rounded-lg mt-10",children:"Ok"})]})]})})]})]}));var eL=r(65494);let eF=()=>{let[e,t]=(0,n.useState)(""),[r,f]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),{userId:g}=(0,c.F)(),v=(0,eq.useSearchParams)().get("productID"),{handleUpdateProduct:y}=(0,e$.X)(),[_,b]=(0,n.useState)("add"),{createShopActivity:j}=(0,eL.v)(),[w,N]=(0,n.useState)(0),{handleCreateStockHistory:k}=eC(),{data:$}=(0,d.IT)(u.TW,{variables:{id:g}}),S=(0,i.LG)(e),A=$?$.users?.[0]:[],{products:R,setFilters:C}=(0,i.Bo)(),[E,I]=(0,n.useState)(""),{stockHistories:P,refetchStock:q}=eI(A?.shop_id,e),[D,T]=(0,n.useState)({id:"",name:"",price:0,bulk_price:0,quantity:0,description:"",dosage:"",usage:"",storage:"",category_id:"",default_stock_level:0,category:{id:"",name:""}});(0,n.useEffect)(()=>{v&&t(v)},[v]),console.log(v),(0,n.useEffect)(()=>{S?.product&&S.product.id!==D.id&&(console.log("Setting productInfo:",S.product),T(S.product))},[S]),(0,n.useEffect)(()=>{C({shop_id:A.shop_id||""})},[C,$]);let M=async()=>{if(0===w){(0,ek.oR)({description:"Invalid Stock Quantity"});return}if(""===e){(0,ek.oR)({description:"Please select a product"});return}if(""===E){(0,ek.oR)({description:"Please add a reason"});return}try{f(!0);let t="add"===_?D.quantity+(w||0):D.quantity-(w||0),r=D.default_stock_level;await y(e,r,t)&&await k({reason:E,type:_,product_id:e,shop_id:A.shop_id||"",stock_available:D.quantity||0,adjusted_quantity:w||0})&&await j({shop_id:A.shop_id||"",activity:"Stock Level Updated",status:"-",note:`Stock Level Updated from ${D.quantity} to ${t}`})&&(h(!0),q())}catch(e){f(!1),(0,ek.oR)({description:"Failed to update stock",variant:"destructive"}),console.log("error updating stock",e)}finally{f(!1)}};return(0,a.jsxs)("section",{className:"w-full flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-row items-center gap-2",children:[(0,a.jsxs)("div",{className:"h-11 w-11",children:[(0,a.jsx)(l.A,{}),(0,a.jsx)(eO,{isDialogOpen:x,setIsDialogOpen:h,product:D.name,quantity:w||0,adjustmentOption:_})]}),(0,a.jsx)("div",{className:"flex flex-col gap-2",children:(0,a.jsx)("h1",{className:"text-headercolor font-bold text-xl",children:"Stock Level Management"})})]}),(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"w-full grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-1 md:gap-y-8 min-h-32",children:[(0,a.jsxs)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:[(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"Add/Reduce Stock Level"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:[(0,a.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,a.jsx)(p.J,{className:"text-inputlabel",children:"Product"}),(0,a.jsx)(m.A,{label:"Select Product",setCategory:t,options:R})]}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(s.A,{name:"name",label:"SKU",placeHolder:D.name,type:"text",value:D.name,onChange:e=>T(t=>({...t,[e.target.name]:e.target.value}))})}),(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(s.A,{name:"quantity",label:"Stock Available",placeHolder:D.quantity.toLocaleString()||"0",type:"number",value:D.quantity||"",onChange:e=>T(t=>({...t,[e.target.name]:e.target.value}))})}),(0,a.jsx)(eb,{setOption:b,options:ej.e}),(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(s.A,{name:"stock",label:"Adjustment Quantity",placeHolder:w?.toLocaleString()||"Enter adjustment quantity",type:"text",value:w||0,onChange:e=>N(parseInt(e.target.value))})}),(0,a.jsx)(o.A,{placeHolder:"Enter reason/note",label:"Reason/Note",name:"reason/note",value:E||"",onChange:e=>I(e.target.value)})]})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsxs)("h2",{className:"font-bold text-lg text-headercolor",children:["Default Stock Level"," ",(0,a.jsx)("span",{className:"text-sm font-medium",children:"(For stock alert)"})]}),(0,a.jsx)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 p-8",children:(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(s.A,{name:"default_stock_level",label:"Default Stock Level",placeHolder:D.default_stock_level?.toLocaleString()||"Enter adjustment quantity",type:"number",value:D.default_stock_level??"",onChange:e=>{T(t=>({...t,[e.target.name]:Number(e.target.value)}))}})})})]}),(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-row justify-between",children:[(0,a.jsx)("div",{children:(0,a.jsx)(ew.$,{disabled:r,type:"button",className:"bg-transparent border border-gray-300 rounded-md text-red-500 min-w-[5rem]",children:"Discard"})}),(0,a.jsx)("div",{className:"flex flex-row gap-3",children:(0,a.jsx)(ew.$,{type:"button",onClick:M,disabled:r,className:"rounded-md flex items-center justify-center text-white bg-inputlabel min-w-[7rem]",children:r?(0,a.jsx)(eN.A,{className:"animate-spin",size:25}):"Update Stock"})})]})]}),(0,a.jsx)("div",{className:"w-[30rem] h-full flex flex-col gap-8",children:(0,a.jsxs)("div",{className:"w-full min-h-20 flex flex-col gap-2",children:[(0,a.jsx)("h2",{className:"font-bold text-lg text-headercolor",children:"History"}),(0,a.jsxs)("div",{className:"w-full min-h-20 border border-gray-300 rounded-md flex flex-col gap-6 px-8 max-h-[72vh] overflow-y-auto scrollbar-thin",children:[P&&P.map((e,t)=>(0,a.jsxs)("div",{className:"w-full py-8 flex flex-col gap-4 border-b",children:[(0,a.jsx)("h2",{className:(0,eP.A)("font-semibold",{"text-muted-foreground":"add"===e.type,"text-red-500":"reduce"===e.type}),children:"add"===e.type?"Add Stock":"Reduce Stock"}),(0,a.jsxs)("div",{className:"w-full flex flex-col text-sm gap-2",children:[(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"w-full text-muted-foreground",children:(0,a.jsx)("span",{children:"Date"})}),(0,a.jsx)("div",{className:"w-full font-semibold",children:(0,a.jsx)("span",{children:new Date(e.created_at).toLocaleString()})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"w-full text-muted-foreground",children:(0,a.jsx)("span",{children:"Reason/Note"})}),(0,a.jsx)("div",{className:"w-full font-semibold",children:(0,a.jsx)("span",{children:e.reason})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"w-full text-muted-foreground",children:(0,a.jsx)("span",{children:"Stock Available"})}),(0,a.jsx)("div",{className:"w-full font-semibold",children:(0,a.jsx)("span",{children:e.stock_available})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"w-full text-muted-foreground",children:(0,a.jsx)("span",{children:"Adjustment Quantity"})}),(0,a.jsx)("div",{className:"w-full font-semibold",children:(0,a.jsx)("span",{children:e.adjusted_quantity})})]})]})]},t)),!P||P.length<1?(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center text-muted-foreground",children:"Select product first to the stock add/reduce history here"}):null]})]})})]})})]})}},12507:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(62740),n=r(8081);function i({children:e}){return(0,a.jsx)(n.A,{children:e})}},62080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(62740),n=r(46766),i=r(76301);let l=()=>(0,a.jsx)(i.Suspense,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(n.default,{})})})},46766:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\NextJS\\\\medical dashboard\\\\medical-clinic\\\\src\\\\modules\\\\components\\\\inventory-management\\\\product-edit-form\\\\index.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\NextJS\\medical dashboard\\medical-clinic\\src\\modules\\components\\inventory-management\\product-edit-form\\index.tsx","default")},59018:(e,t,r)=>{"use strict";r.d(t,{jH:()=>i});var a=r(58009);r(45512);var n=a.createContext(void 0);function i(e){let t=a.useContext(n);return e||t||"ltr"}},66582:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(58009);function n(e){let t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[1989,5160,8077,5085,7036,4562,7338,5144,2182,1373,6889],()=>r(67525));module.exports=a})();