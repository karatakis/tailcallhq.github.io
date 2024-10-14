/*! For license information please see a6aa9e1f.1321cdbf.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{47713:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(21312),l=a(71720),s=a(74848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,s.jsx)(l.A,{permalink:a,title:(0,s.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,s.jsx)(l.A,{permalink:r,title:(0,s.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},7131:(e,t,a)=>{a.d(t,{e:()=>o,i:()=>i});var n=a(96540),l=a(89532),s=a(74848);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return(0,s.jsx)(r.Provider,{value:i,children:t})}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.dV("BlogPostProvider");return e}},6676:(e,t,a)=>{a.d(t,{k:()=>d,J:()=>m});var n=a(86025),l=a(44586),s=a(36803);var r=a(7131);const i=e=>new Date(e).toISOString();function o(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:x({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,l.A)(),{withBaseUrl:a}=(0,n.hH)(),{metadata:{blogDescription:s,blogTitle:r,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:r,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:l,metadata:s}=e,{date:r,title:d,description:m,lastUpdatedAt:u}=s,x=n.image??l.image,g=l.keywords??[],h=`${t.url}${s.permalink}`,p=u?i(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:m,datePublished:r,...p?{dateModified:p}:{},...o(s.authors),...c(x,a,d),...g?{keywords:g}:{}}}(e.content,t,a)))}}function m(){const e=function(){const e=(0,s.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,r.e)(),{siteConfig:d}=(0,l.A)(),{withBaseUrl:m}=(0,n.hH)(),{date:u,title:x,description:g,frontMatter:h,lastUpdatedAt:p}=a,f=t.image??h.image,b=h.keywords??[],j=p?i(p):void 0,v=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:x,name:x,description:g,datePublished:u,...j?{dateModified:j}:{},...o(a.authors),...c(f,m,x),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function x(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},19575:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(96540),l=a(34164),s=a(79556),r=a(28774),i=a(56347),o=a(22375),c=a(74848);function d(e){let{sidebar:t}=e;const[a,l]=n.useState(!1),s=(0,i.zy)();return(0,n.useEffect)((()=>{l((0,o.N7)())}),[s.pathname]),a?(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row justify-center",children:(0,c.jsxs)("div",{className:"col col--7",children:[(0,c.jsx)("hr",{className:"h-[1px] !bg-tailCall-light-300"}),(0,c.jsx)("h1",{className:" text-title-medium",children:"Recent Blog Posts"}),(0,c.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:t?.items.map((e=>(0,c.jsxs)(r.A,{to:e.permalink,className:"w-full my-4 !no-underline",children:[(0,c.jsx)("img",{src:`/images/${e.permalink}.png`,className:"w-full rounded-xl aspect-[1.88] object-cover",alt:""}),(0,c.jsx)("h1",{className:" text-title-medium text-black",children:e.title})]})))})]})})}):(0,c.jsx)(c.Fragment,{})}function m(e){const{sidebar:t,toc:a,children:r,...m}=e,[u,x]=(0,n.useState)(!1),g=(0,i.zy)();return(0,n.useEffect)((()=>{x((0,o.N7)())}),[g.pathname]),(0,c.jsxs)(s.A,{...m,children:[(0,c.jsx)("div",{className:"container mx-auto my-8 px-4",children:(0,c.jsxs)("div",{className:"flex flex-row",children:[u&&(0,c.jsx)("div",{className:"hidden lg:block lg:w-[20.83%]"}),(0,c.jsx)("div",{className:(0,l.A)("w-full",u&&"lg:w-[58.33%]"),children:r}),a&&(0,c.jsx)("div",{className:"hidden lg:block lg:w-[20.83%] pl-8 mt-12",children:(0,c.jsx)("div",{className:"sticky top-28",children:(0,c.jsx)("div",{className:"border-l-solid border-gray-200 pl-4",children:a})})})]})}),(0,c.jsx)(d,{sidebar:t})]})}},45056:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(96540),l=a(34164),s=a(44586),r=a(45500),i=a(17559),o=a(19575),c=a(47713),d=a(41463),m=a(5260),u=a(6676),x=a(74848);function g(e){const t=(0,u.k)(e);return(0,x.jsx)(m.A,{children:(0,x.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}var h=a(28774);const p=e=>{let{author:t}=e;return(0,x.jsxs)("div",{className:"mt-4 flex items-center",children:[(0,x.jsx)("img",{src:t.imageURL,alt:t.name,className:"mr-2 size-6 rounded-full"}),(0,x.jsx)("span",{className:"font-medium text-black",children:t.name})]})};const f=function(e){let{items:t}=e;return(0,x.jsxs)("div",{className:"space-y-4",children:[(0,x.jsx)("h2",{className:"text-2xl mb-4 font-bold",children:"Featured Posts"}),t.map(((e,t)=>(0,x.jsxs)(h.A,{to:e.content.metadata.permalink,className:"flex flex-col gap-4 text-black !no-underline hover:text-black",children:[(0,x.jsx)("div",{className:"flex items-center gap-2",children:e.content.metadata.authors[0]&&(0,x.jsx)(p,{author:e.content.metadata.authors[0]})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"text-lg font-semibold",children:e.content.metadata.title}),(0,x.jsx)("p",{className:"text-sm mt-1 text-tailCall-light-600",children:e.content.metadata.description})]})]},t)))]})},b=e=>{let{item:t}=e;return(0,x.jsxs)(h.A,{to:t.content.metadata.permalink,className:"md:col-span-2 lg:col-span-3 flex flex-col overflow-hidden !text-black !no-underline",children:[(0,x.jsx)("img",{src:t.content.metadata.frontMatter.image,alt:t.content.metadata.title,className:"w-full object-contain aspect-video"}),(0,x.jsx)(v,{item:t,isFeatured:!0})]})},j=e=>{let{item:t}=e;return(0,x.jsxs)(h.A,{to:t.content.metadata.permalink,className:"p-4 md:p-0 md:my-2 flex flex-col overflow-hidden border border-solid border-tailCall-light-400 md:border-none !text-black !no-underline rounded-xl md:rounded-none",children:[(0,x.jsx)("img",{src:t.content.metadata.frontMatter.image,alt:t.content.metadata.title,className:"w-full object-contain aspect-video hidden md:block"}),(0,x.jsx)(v,{item:t})]})},v=e=>{let{item:t,isFeatured:a=!1}=e;return(0,x.jsx)("div",{className:(0,l.A)("flex flex-grow flex-col justify-between",{"md:mt-5":!a}),children:(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"text-[12px] text-black",children:new Date(t.content.metadata.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}),(0,x.jsx)("h2",{className:(0,l.A)("mb-2 line-clamp-2 font-bold",a?"text-3xl":"text-xl"),children:t.content.metadata.title}),(0,x.jsx)("span",{className:"text-sm line-clamp-2 text-tailCall-light-600",children:t.content.metadata.frontMatter.description}),t.content.metadata.authors[0]&&(0,x.jsx)(p,{author:t.content.metadata.authors[0]})]})})};const N=function(e){let{items:t}=e;const[a,...n]=t;return(0,x.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3",children:[(0,x.jsx)(b,{item:a}),n.map((e=>(0,x.jsx)(j,{item:e},e.content.metadata.permalink)))]})};function k(e){let{items:t,onCategoryClick:a,activeCategory:s}=e;const r=(0,n.useMemo)((()=>{const e={All:t.length};return t.map((t=>{const a=t.content.metadata.frontMatter.category;"string"==typeof a&&(e[a]=(e[a]||0)+1)})),e}),[t]);return(0,x.jsx)("div",{className:"mb-4 flex items-center space-x-4 border-b border-gray-200",children:Object.entries(r).map((e=>{let[t,n]=e;return(0,x.jsx)("div",{"aria-role":"button","aria-label":`${t} (${n})`,onClick:()=>a(t===s?"All":t),className:(0,l.A)("text-sm cursor-pointer appearance-none border-none bg-transparent px-1 font-medium",s===t?"font-medium text-gray-900 border-b-solid border-b-2 border-black":"text-gray-500 hover:text-gray-700"),children:t},t)}))})}const y="All";function w(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:l,permalink:i}=t,o="/"===i?a:l;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.be,{title:o,description:n}),(0,x.jsx)(d.A,{tag:"blog_posts_list"})]})}function A(e){let{handleLoadMore:t}=e;return(0,x.jsx)("div",{className:"flex justify-center",children:(0,x.jsx)("button",{onClick:t,className:"mt-4 h-12 cursor-pointer rounded-lg border-2 border-solid border-tailCall-border-dark-100 bg-transparent px-4 py-2 font-space-grotesk text-title-tiny font-bold text-black",children:"Load more blogs"})})}function C(e){let{metadata:t,items:a,sidebar:s}=e;const{activeCategory:r,visibleItems:i,filteredItems:d,handleCategoryClick:m,handleLoadMore:u}=function(e){const[t,a]=(0,n.useState)(y),[l,s]=(0,n.useState)(7),r=(0,n.useMemo)((()=>t===y?e:e.filter((e=>e.content.metadata.frontMatter.category===t))),[e,t]);return{activeCategory:t,visibleItems:l,filteredItems:r,handleCategoryClick:e=>{a(e),s(7)},handleLoadMore:()=>{s((e=>Math.min(e+6,r.length)))}}}(a),g=a.filter((e=>e.content.frontMatter.featured));return(0,x.jsx)(o.A,{sidebar:s,children:(0,x.jsxs)("div",{className:"flex flex-col md:flex-row items-start w-full",children:[(0,x.jsxs)("div",{className:(0,l.A)("w-full md:w-9/12 md:pr-6",0==g.length?"md:w-full":"border-right"),children:[(0,x.jsx)(k,{items:a,onCategoryClick:m,activeCategory:r}),(0,x.jsx)(N,{items:d.slice(0,i)}),i<d.length&&(0,x.jsx)(A,{handleLoadMore:u}),(0,x.jsx)(c.A,{metadata:t})]}),g.length>0?(0,x.jsx)("div",{className:"w-full md:w-3/12 hidden md:block md:pl-6",children:(0,x.jsx)(f,{items:g})}):null]})})}function P(e){return(0,x.jsxs)(r.e3,{className:(0,l.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,x.jsx)(w,{...e}),(0,x.jsx)(g,{...e}),(0,x.jsx)(C,{...e})]})}},71720:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(28774),l=a(48635),s=a(90232),r=a(74848);function i(e){let{isNext:t}=e;return(0,r.jsx)("div",{className:"w-10 h-10 p-2 bg-tailCall-yellow flex justify-center items-center rounded-full",children:t?(0,r.jsx)(l.A,{size:24,color:"black"}):(0,r.jsx)(s.A,{size:24,color:"black"})})}function o(e){const{permalink:t,title:a,subLabel:l,isNext:s}=e;return(0,r.jsxs)(n.A,{className:"!no-underline flex gap-3 items-center",to:t,children:[!s&&(0,r.jsx)(i,{isNext:s}),(0,r.jsxs)("div",{className:"hidden md:block",children:[l&&(0,r.jsx)("div",{className:"text-tailCall-dark-100 text-[12px] font-medium",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label text-black text-content-small font-medium",children:a})]}),s&&(0,r.jsx)(i,{isNext:s})]})}},84722:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540);const l=(...e)=>e.filter(((e,t,a)=>Boolean(e)&&a.indexOf(e)===t)).join(" ");var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const r=(0,n.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:c,...d},m)=>(0,n.createElement)("svg",{ref:m,...s,width:t,height:t,stroke:e,strokeWidth:r?24*Number(a)/Number(t):a,className:l("lucide",i),...d},[...c.map((([e,t])=>(0,n.createElement)(e,t))),...Array.isArray(o)?o:[o]]))),i=(e,t)=>{const a=(0,n.forwardRef)((({className:a,...s},i)=>{return(0,n.createElement)(r,{ref:i,iconNode:t,className:l(`lucide-${o=e,o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,a),...s});var o}));return a.displayName=`${e}`,a}},90232:(e,t,a)=>{a.d(t,{A:()=>n});const n=(0,a(84722).A)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},48635:(e,t,a)=>{a.d(t,{A:()=>n});const n=(0,a(84722).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])}}]);