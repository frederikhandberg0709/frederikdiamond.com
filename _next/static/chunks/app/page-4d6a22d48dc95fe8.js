(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8233:function(e,t,s){Promise.resolve().then(s.bind(s,8501))},8501:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var r=s(7437),l=s(1439),o=s(1396),n=s.n(o),a=s(2265),i=e=>{let{homeRef:t,projectsRef:s,blogRef:l,contactRef:o}=e,[i,c]=(0,a.useState)(0),[x,d]=(0,a.useState)(0),[p,h]=(0,a.useState)("");(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY/(.3*window.innerHeight)*100;c(Math.min(.75,e/100));let r=.05*document.body.clientHeight,n=Math.min(15,window.scrollY/r*15);d(n);let a=[{id:"home",ref:t},{id:"projects",ref:s},{id:"blog",ref:l},{id:"contact",ref:o}],i=a.find(e=>{let t=e.ref.current;if(t){let e=t.getBoundingClientRect();return e.top<=0&&e.bottom>0}return!1});h(i?i.id:"")};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t,s,l,o]);let u=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},m=e=>"text-[15px] font-medium px-[15px] ".concat(p===e?"text-white":"text-gray-400"," hover:text-white transition ease-in-out"),[f,b]=(0,a.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:"navbar w-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0)] backdrop-blur-0",style:{backgroundColor:"rgba(0, 0, 0, ".concat(i,")"),backdropFilter:"blur(".concat(x,"px)")},children:(0,r.jsxs)("div",{className:"flex justify-between w-[90%] mt-[15px] mb-[15px]",children:[(0,r.jsxs)(n(),{href:"#home",onClick:e=>{e.preventDefault(),u("home")},className:"text-center leading-[25px] group",children:[(0,r.jsx)("p",{className:"text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200",children:"FREDERIK"}),(0,r.jsx)("p",{className:"text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200",children:"DIAMOND"})]}),(0,r.jsxs)("div",{className:" hidden sm:flex items-center",children:[(0,r.jsx)(n(),{href:"#home",onClick:e=>{e.preventDefault(),u("home")},className:m("home"),children:"HOME"}),(0,r.jsx)(n(),{href:"#projects",onClick:e=>{e.preventDefault(),u("projects")},className:m("projects"),children:"PROJECTS"}),(0,r.jsx)(n(),{href:"#blog",onClick:e=>{e.preventDefault(),u("blog")},className:m("blog"),children:"BLOG"}),(0,r.jsx)(n(),{href:"#about",onClick:e=>{e.preventDefault(),u("about")},className:m("about"),children:"ABOUT"}),(0,r.jsx)(n(),{href:"#contact",onClick:e=>{e.preventDefault(),u("contact")},className:m("contact"),children:"CONTACT"})]}),(0,r.jsx)("div",{onClick:()=>{b(!f)},id:"mobile-menu",className:"flex sm:hidden h-full items-center justify-center cursor-pointer",children:(0,r.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"#ffffff",d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"})})})]})}),f?(0,r.jsx)("div",{className:"fixed z-[49] w-full h-full flex items-center justify-center bg-black/75 backdrop-blur-md",children:(0,r.jsxs)("div",{className:"flex flex-col w-full",children:[(0,r.jsx)(n(),{href:"#home",onClick:e=>{b(!f),e.preventDefault(),u("home")},className:"text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60",children:"HOME"}),(0,r.jsx)(n(),{href:"#projects",onClick:e=>{b(!f),e.preventDefault(),u("projects")},className:"text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60",children:"PROJECTS"}),(0,r.jsx)(n(),{href:"#blog",onClick:e=>{b(!f),e.preventDefault(),u("blog")},className:"text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60",children:"BLOG"}),(0,r.jsx)(n(),{href:"#about",onClick:e=>{b(!f),e.preventDefault(),u("about")},className:"text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60",children:"ABOUT"}),(0,r.jsx)(n(),{href:"#contact",onClick:e=>{b(!f),e.preventDefault(),u("contact")},className:"text-[25px] text-center font-bold w-full py-[20px] transition hover:bg-[#1a1a1a]/60",children:"CONTACT"})]})}):null]})},c=s(6691),x=s.n(c);function d(){let[e,t]=(0,a.useState)(!1),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{var r;(null===(r=s.current)||void 0===r?void 0:r.contains(e.target))||(t(!1),console.log(s.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),(0,r.jsxs)("div",{ref:s,children:[(0,r.jsx)("button",{onClick:()=>{t(!e)},className:"p-[5px] rounded-full hover:bg-gray-700/40 cursor-pointer group transition ease-in-out",children:(0,r.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 128 128",fill:"#6B7280",xmlns:"http://www.w3.org/2000/svg",className:"group-hover:fill-white",children:(0,r.jsx)("path",{d:"M63.9999 21.3333C62.5854 21.3333 61.2289 21.8952 60.2287 22.8953C59.2285 23.8955 58.6666 25.2521 58.6666 26.6666C58.6666 28.0811 59.2285 29.4376 60.2287 30.4378C61.2289 31.438 62.5854 31.9999 63.9999 31.9999C65.4144 31.9999 66.771 31.438 67.7712 30.4378C68.7713 29.4376 69.3333 28.0811 69.3333 26.6666C69.3333 25.2521 68.7713 23.8955 67.7712 22.8954C66.771 21.8952 65.4144 21.3333 63.9999 21.3333ZM63.9999 58.6666C62.5854 58.6666 61.2289 59.2285 60.2287 60.2287C59.2285 61.2289 58.6666 62.5854 58.6666 63.9999C58.6666 65.4144 59.2285 66.771 60.2287 67.7712C61.2289 68.7713 62.5854 69.3333 63.9999 69.3333C65.4144 69.3333 66.771 68.7713 67.7712 67.7712C68.7713 66.771 69.3333 65.4144 69.3333 63.9999C69.3333 62.5854 68.7713 61.2289 67.7712 60.2287C66.771 59.2285 65.4144 58.6666 63.9999 58.6666ZM63.9999 95.9999C62.5854 95.9999 61.2289 96.5618 60.2287 97.562C59.2285 98.5622 58.6666 99.9188 58.6666 101.333C58.6666 102.748 59.2285 104.104 60.2287 105.104C61.2289 106.105 62.5854 106.667 63.9999 106.667C65.4144 106.667 66.771 106.105 67.7712 105.104C68.7713 104.104 69.3332 102.748 69.3332 101.333C69.3332 99.9188 68.7713 98.5622 67.7712 97.562C66.771 96.5618 65.4144 95.9999 63.9999 95.9999Z",stroke:"#6B7280",strokeWidth:15,strokeLinecap:"round",strokeLinejoin:"round",className:"group-hover:stroke-white transition ease-in-out"})})}),(0,r.jsx)("div",{className:"absolute z-50 mt-[10px] rounded-[10px] w-[200px] bg-veryDarkGray border border-darkPurple hover:border-selectedPurple transition ease-in-out duration-200 dropdown-menu ".concat(e?"block":"hidden"),children:(0,r.jsx)(p,{})})]})}function p(){return(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)(n(),{href:"#",className:"px-[20px] py-[10px] rounded-t-[9px] hover:bg-hoverGray transition ease-in-out duration-200",children:"View post"}),(0,r.jsx)(n(),{href:"#",className:"px-[20px] py-[10px] rounded-b-[9px] hover:bg-hoverGray transition ease-in-out duration-200",children:"Visit profile"})]})}let h=e=>{let{text:t,children:s,topStyle:l}=e,[o,n]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e;return i?e=setTimeout(()=>n(!0),650):n(!1),()=>{clearTimeout(e)}},[i]),(0,r.jsxs)("div",{className:"relative",onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:[s,(0,r.jsx)("div",{className:"absolute z-10 px-[10px] py-[5px] ".concat(null!=l?l:"top-[-40px]"," text-center select-none pointer-events-none left-1/2 transform -translate-x-1/2 bg-[#171717] bg-opacity-95 text-white text-[15px] rounded transition-opacity ease-in-out duration-300 ").concat(o?"opacity-95":"opacity-0"),children:t})]})};var u=e=>{let{tooltipText:t,count:s,children:l,bgColorOnHover:o,bgColorOnActive:n}=e,[i,c]=(0,a.useState)({}),x=(e,t)=>{let s=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16);return"rgba(".concat(s,", ").concat(r,", ").concat(l,", ").concat(t,")")};return(0,r.jsx)(h,{text:t,children:(0,r.jsxs)("div",{className:"flex items-center justify-center gap-[5px] w-[90px] py-[3px] rounded-full cursor-pointer transition-colors duration-200",style:i,onMouseEnter:()=>{c({backgroundColor:x(o,.25)})},onMouseLeave:()=>{c({})},onMouseDown:()=>{c({backgroundColor:x(n,.5)})},onMouseUp:()=>{c({backgroundColor:x(o,.25)})},children:[l,(0,r.jsx)("span",{className:"select-none",children:s})," "]})})};function m(e){return e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}var f=e=>{let{likeCount:t,commentCount:s,shareCount:l,zapCount:o}=e;return(0,r.jsxs)("div",{className:"flex gap-[15px]",children:[(0,r.jsx)(u,{tooltipText:"Like",count:m(t),bgColorOnHover:"#DE2654",bgColorOnActive:"#DE2654",children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"#ef4444",d:"M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"})})}),(0,r.jsx)(u,{tooltipText:"Comment",count:m(s),bgColorOnHover:"#3B82F6",bgColorOnActive:"#3B82F6",children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"#3b82f6",d:"M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"})})}),(0,r.jsx)(u,{tooltipText:"Share",count:m(l),bgColorOnHover:"#10B981",bgColorOnActive:"#10B981",children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"#10B981",d:"M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8c4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"})})}),(0,r.jsx)(u,{tooltipText:"Zap",count:m(o),bgColorOnHover:"#EAB308",bgColorOnActive:"#EAB308",children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fill:"#fbb11c",d:"M43.4.159L12.06 28.492l24.31 7.538L18.12 64l35.26-33.426l-18.978-8.464z"})})})]})};function b(){let e=(0,a.useRef)(null),t=(0,a.useRef)(null),s=(0,a.useRef)(null),o=(0,a.useRef)(null),[c,p]=(0,a.useState)(!0);return(0,r.jsxs)("main",{children:[(0,r.jsx)(i,{homeRef:e,projectsRef:t,blogRef:s,contactRef:o}),(0,r.jsxs)("div",{ref:e,id:"home",className:"relative w-full",children:[(0,r.jsxs)("header",{className:"flex flex-col items-center gap-[20px] h-[100vh] w-full z-10",children:[(0,r.jsxs)("h1",{className:"mt-[250px] z-10 text-[50px] font-black text-center leading-[60px]",children:["UPCOMING",(0,r.jsx)("br",{}),"WEB / APP DEVELOPER"]}),(0,r.jsx)("p",{className:"text-[20px] text-amber-400 font-bold",children:"\uD83D\uDEA7 WEBSITE UNDER CONSTRUCTION \uD83D\uDEA7"})]}),(0,r.jsx)("div",{className:"flex justify-center py-[200px] w-full z-10",children:(0,r.jsxs)("div",{className:"flex w-[90%] flex-col md:flex-row md:max-w-[800px] md:justify-center gap-[50px]",children:[(0,r.jsxs)("h1",{className:"font-montserrat text-[50px] font-black leading-[70px]",children:["PRIVACY.",(0,r.jsx)("br",{}),"FREEDOM.",(0,r.jsx)("br",{}),"ANONYMITY."]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[15px] mt-[50px] text-[16px]",children:[(0,r.jsx)("p",{className:"font-semibold",children:"I believe privacy is a human right."}),(0,r.jsxs)("div",{className:"flex flex-col gap-[15px] opacity-80",children:[(0,r.jsx)("p",{children:"Without the freedom to use technology that empowers anonymity, we don’t have any privacy."}),(0,r.jsx)("p",{children:"We see laws being proposed and passed that are in direct conflict with the right to privacy."}),(0,r.jsx)("p",{children:"For example, the British government has proposed a bill that would make end-to-end encrypted messaging illegal."}),(0,r.jsx)("p",{children:"Governments around the world are at war with our rights to privacy. We must not let them win! Otherwise, we risk being on a path towards a tyrannical state, from which reversing course will not be easy."})]})]})]})})]}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{id:"projects",ref:t,className:"flex flex-col items-center gap-[50px] pb-[100px] w-[90%] md:max-w-[800px]",children:[(0,r.jsx)("h1",{className:"font-bold text-[50px] mt-[100px]",children:"MY PROJECTS"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[150px]",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-[50px]",children:[(0,r.jsxs)("div",{className:"flex flex-col items-start",children:[(0,r.jsx)("h2",{className:"text-[35px] font-bold",children:"BLOPstr!"}),(0,r.jsxs)("p",{className:"text-[15px] opacity-50 mt-[10px]",children:["BLOPstr is a beautiful and easy-to-use social media built on the open-protocol called Nostr.",(0,r.jsx)("br",{}),"Nostr is a decentralized global communications protocol that truly enables freedom and anti-censorship. Nostr has many great use-cases, like building marketplaces, messaging apps, social medias, and much more!"]}),(0,r.jsxs)("div",{className:"flex items-center gap-[30px] mt-[20px]",children:[(0,r.jsx)(n(),{href:"blopstr.com",className:"bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out",children:"VISIT"}),(0,r.jsx)(n(),{href:"/projects/blopstr",className:"text-[15px] text-white font-semibold hover:text-blue-500 hover:underline underline-offset-4",children:"Read more"})]})]}),(0,r.jsx)("div",{className:"rounded-[15px] h-[500px] w-full relative bottom-0 hover:bottom-[10px] ease-in-out duration-300",children:(0,r.jsx)("img",{src:"https://imgproxy.iris.to/insecure/plain/https://image.nostr.build/07270fb2796c41f0168f5940cc6de38a6b5472fc1879683c7ebd31de8e46ebc9.png",alt:"Blopstr Preview",className:"object-cover rounded-[15px]"})})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[50px]",children:[(0,r.jsxs)("div",{className:"flex flex-col items-start",children:[(0,r.jsx)("h2",{className:"text-[35px] font-bold",children:"CRYPTOWITHOUTKYC"}),(0,r.jsx)("p",{className:"text-[15px] opacity-50 mt-[10px]",children:"An open-source, decentralized, and peer-to-peer crypto trading platform where users can buy and sell bitcoin and monero without any KYC-verification. The platform is running on the Nostr protocol using NIP-15 (the Nostr marketplace)."}),(0,r.jsxs)("div",{className:"flex items-center gap-[30px] mt-[20px]",children:[(0,r.jsx)(n(),{href:"cryptowithoutkyc.com",className:"bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out",children:"VISIT"}),(0,r.jsx)(n(),{href:"/projects/cryptowithoutkyc",className:"text-[15px] text-white font-semibold hover:text-blue-500 hover:underline underline-offset-4",children:"Read more"})]})]}),(0,r.jsx)("div",{className:"rounded-[15px] h-[500px] w-full relative bottom-0 hover:bottom-[10px] ease-in-out duration-300",children:(0,r.jsx)("img",{src:"https://imgproxy.iris.to/insecure/plain/https://image.nostr.build/07270fb2796c41f0168f5940cc6de38a6b5472fc1879683c7ebd31de8e46ebc9.png",alt:"Blopstr Preview",className:"object-cover rounded-[15px]"})})]})]})]})}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{id:"blog",ref:s,className:"flex flex-col items-center gap-[50px] w-[800px] py-[100px]",children:[(0,r.jsx)("h1",{className:"font-bold text-[50px]",children:"MY NOSTR BLOG"}),(0,r.jsx)("div",{className:"w-[600px]",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[10px] border border-gray-800 bg-black/50 backdrop-blur-md p-[15px] rounded-[15px]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)(n(),{href:"/profile",className:"flex gap-[10px] group",children:[(0,r.jsx)(x(),{src:"/fd-profile-pic.jpg",alt:"Frederik Diamond",width:40,height:40,className:"rounded-full h-[40px] w-[40px] object-cover"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[1px]",children:[(0,r.jsx)("p",{className:"font-bold text-[13px] group-hover:text-[#8E30EB]",children:"FREDERIK DIAMOND"}),(0,r.jsx)("p",{className:"text-[13px] text-gray-500",children:"@frederikdiamond"})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-[15px]",children:[(0,r.jsx)("p",{className:"text-[15px] text-right text-textGray",children:"3 min ago"}),(0,r.jsx)(d,{})]})]}),(0,r.jsx)("p",{className:"text-[15px] leading-normal",children:"Lorem ipsum dolor sit amet consectetur. Pellentesque nulla libero neque sapien facilisi tincidunt proin. Convallis turpis a in nec nisl hendrerit volutpat sit vestibulum."}),(0,r.jsx)("img",{src:"https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",alt:"Post image",className:"rounded-[10px]"}),(0,r.jsx)(f,{likeCount:3,commentCount:7,shareCount:5,zapCount:21})]})}),(0,r.jsx)(n(),{href:"#",className:"bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer mt-[10px] relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out",children:"SHOW ALL"})]})}),(0,r.jsx)("div",{ref:o,children:(0,r.jsx)(l.Z,{contactVisibility:c})})]})}s(5257)}},function(e){e.O(0,[20,439,971,472,744],function(){return e(e.s=8233)}),_N_E=e.O()}]);