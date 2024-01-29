"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[736],{5843:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=i(5893),t=i(1151);const o={sidebar_position:1},a="Prerequisites - Part 1",l={id:"palworld-modding-kit/install-part-1",title:"Prerequisites - Part 1",description:".NET 6",source:"@site/docs/palworld-modding-kit/install-part-1.md",sourceDirName:"palworld-modding-kit",slug:"/palworld-modding-kit/install-part-1",permalink:"/docs/palworld-modding-kit/install-part-1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/palworld-modding-kit/install-part-1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Palworld Modding Kit",permalink:"/docs/category/palworld-modding-kit"},next:{title:"PDK Setup & Config - Part 2",permalink:"/docs/palworld-modding-kit/install-part-2"}},r={},d=[{value:".NET 6",id:"net-6",level:3},{value:"Visual Studio 2022",id:"visual-studio-2022",level:3},{value:"Unreal Engine 5.1",id:"unreal-engine-51",level:3},{value:"Wwise",id:"wwise",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"prerequisites---part-1",children:"Prerequisites - Part 1"}),"\n",(0,n.jsx)(s.h3,{id:"net-6",children:".NET 6"}),"\n",(0,n.jsxs)(s.p,{children:["For unreal build tools to function correctly, you will need to have .NET 6 installed on your system, head over to ",(0,n.jsx)(s.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0/runtime?cid=getdotnetcore&os=windows&arch=x64",children:"this link"}),". Here, click on the ",(0,n.jsx)(s.code,{children:"Download x64"})," button to download the runtime:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Dotnet download",src:i(9115).Z+"",width:"1288",height:"728"})}),"\n",(0,n.jsx)(s.p,{children:"Afterwards, open the installer, and install the runtime."}),"\n",(0,n.jsx)(s.h3,{id:"visual-studio-2022",children:"Visual Studio 2022"}),"\n",(0,n.jsxs)(s.p,{children:["To compile the sdk you will need Visual Studio 2022 installed, you can grab it from ",(0,n.jsx)(s.a,{href:"https://visualstudio.microsoft.com/vs/",children:"this"})," link. A community edition version will suffice. While installing it, make sure to check the following components in the installer:"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Visual Studio Installer Options",src:i(8524).Z+"",width:"883",height:"376"}),"\r\n",(0,n.jsx)(s.img,{alt:"Visual Studio Installer Options 2",src:i(7893).Z+"",width:"435",height:"127"})]}),"\n",(0,n.jsx)(s.p,{children:"Then press continue, and wait for visual studio to install."}),"\n",(0,n.jsx)(s.h3,{id:"unreal-engine-51",children:"Unreal Engine 5.1"}),"\n",(0,n.jsxs)(s.p,{children:["After installing Visual Studio, we need to install Unreal Engine. To do so, open Epic Games Launcher, and head over to the ",(0,n.jsx)(s.code,{children:"Unreal Engine"})," tab. Here, go to the ",(0,n.jsx)(s.code,{children:"Library"})," tab, and press on the little yellow plus button to add a new version:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add new Unreal Engine version",src:i(8451).Z+"",width:"587",height:"165"})}),"\n",(0,n.jsxs)(s.p,{children:["After this, you should see a new card appear with the ability to select an engine version, open the dropdown and select ",(0,n.jsx)(s.code,{children:"5.1"}),", like this:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"5.1 Version",src:i(9612).Z+"",width:"226",height:"355"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"[!NOTE]\r\nAny 5.1 version will work, it doesn't matter if it's 5.1 or 5.1.1"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"wwise",children:"Wwise"}),"\n",(0,n.jsx)(s.p,{children:"Palworld uses Wwise for it's sounds, so we will need to install this too."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"[!IMPORTANT]\r\nEven if you are not planning on making sounds, you still need wwise, otherwise the project will not compile"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["To install wwise, go to ",(0,n.jsx)(s.a,{href:"https://audiokinetic.com/",children:"this"})," website, and press ",(0,n.jsx)(s.code,{children:"Download Audiokinetic Launcher"}),":"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Download Audiokinetic Launcher",src:i(5551).Z+"",width:"450",height:"111"})}),"\n",(0,n.jsxs)(s.p,{children:["This will require you to make an account. After downloading the launcher, install it and log in. Head over to the ",(0,n.jsx)(s.code,{children:"Wwise"})," tab. On the bottom of your screen you should see an ",(0,n.jsx)(s.code,{children:"Install A New Version"})," header. Select ",(0,n.jsx)(s.code,{children:"2021.1.11"})," as your wwise version and press install:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Install A New Version",src:i(9550).Z+"",width:"842",height:"130"})}),"\n",(0,n.jsx)(s.p,{children:"On the next page, select:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"SDK (C++)"}),"\n",(0,n.jsx)(s.li,{children:"Microsoft -> Windows -> Visual Studio 2022"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The selection should look like so:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Install Options",src:i(9539).Z+"",width:"1086",height:"1104"})}),"\n",(0,n.jsx)(s.p,{children:"Now press next, on the plugins page you don't need to add any plugins, so hit install!"}),"\n",(0,n.jsxs)(s.p,{children:["After installing the Wwise sdk, head over to the ",(0,n.jsx)(s.code,{children:"Unreal Engine"})," tab, there press on the ",(0,n.jsx)(s.code,{children:"Download"})," button, and select ",(0,n.jsx)(s.code,{children:"Offline integration files"}),":"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Offline integration files",src:i(7634).Z+"",width:"327",height:"111"})}),"\n",(0,n.jsx)(s.p,{children:"In the integration version, choose the same wwise version you chose when installing the sdk, and remember the download directory, now hit install!"})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9115:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/Dotnet-c8fa99f1e5c0f4bdb1e979fec2eaeefa.png"},8451:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/EpicUnrealVersion-c0b3529aac4548f0c02f3b27c0b4cb71.png"},9612:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/Versions-4c941f5a64e8a24b9d22d4567587aaa4.png"},8524:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/VisualStudioInstaller-4a39c3643ede8c00b58c239863b17c69.png"},7893:(e,s,i)=>{i.d(s,{Z:()=>n});const n="data:image/png;base64,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JpMp7AFUA11Y5WXRaDTIz8+XtiElJQUTJ06EwWAI+e5ddOa4kYSV3pqamqQLeENDg2L/h1J+4Ou8WiKQhVo2f3nO5PN7PB6/TamNjY1BBwwOtlxxLsoZDAbFfhDbLm7GRJ4tb+K5nTwZqlarVTzLZDCjWGDNLMpEsAAg5fQSOb6EUJulAo0QLoLajRA1HnGx807EGIyoKYXC36j4osYTClEDmDhxIgoKCnqtnckzXkeDv/KbzWYpCzOAPukIITISRJK0U6PRhP2My1+eLe9WBSE1NVVKkUIUK6yZBRFJTq+GhgZkZWVJF3un04mioiLp4h1qjrJgOZCC5V7y5p3bLCMjQ1ErMRgM0Gg0IV8gLRYLNBpNSMHYOyec0NDQID0fC0Z0NnE4HLBardBoNL3mk/LevwaDIeJBYwOVPzU1VTq+BoMhrJuLcPOcyYnUPnKi92ew5YpzUM7hcCAjI0OxP3NzcxU3Gd55tnJzc/02RYtUP4L83Aj02ghRtLFmFkQkOb1E5wpR03E4HNDr9VIACSdHWaAcSMFyL3nzeDwoKiqSyiqec8jL2lt3d/m2NjU1hZwNOFBOOO99IGqgojzyjjDyWoDoJCI6m1RVVfkEgUD7N5JgFqj8VVVVKC0tlbIjezwen3mDZa8OJ8+Z97yimU8Qxy7Ycr2nifPI+/yqr6+XzkN/60hJSfF5PlheXg6r1ar4W2EHEIoFDjQcwK2S60mt22mxWPp1inmz2RxyUk+iWxUHGqaoCCUFfX8UrY4gN5NOp2MgI+pDbGa8RYkmslCbDPsTNdR41LhfidSMwSwANTa9heObvn1EdGthMyMREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREakegxkREaleSMEsLi7uZpeDiIgoYqyZERGR6jGYERGR6jGYERGR6jGYERFRzESrT0bchAkTekL5YU9Pj99/ExERRUIeyG40qIVcM/NeKXs4EhFRpKIdQ+LDXbm8VsaARkRENyoasSTsZ2YMYEREFA3RbOULq2YmLwAREVF/wd6MRESkegxmRESkegxmRESkegxmRESkev8PEJGBjD2/qMQAAAAASUVORK5CYII="},9550:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/WwiseInstallNewVersion-bd36112c9f5c6629a70a4aecf8612d46.png"},9539:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/WwiseInstallSelection-0b5198fd64aa69b8321b4837d8cb1fe3.png"},7634:(e,s,i)=>{i.d(s,{Z:()=>n});const n="data:image/png;base64,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"},5551:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/WwiseWebsiteDownload-c8f5c5f703abb2836b0b70104193c4fb.png"},1151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>a});var n=i(7294);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);