"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[876],{7091:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=s(5893),o=s(1151);const i={sidebar_position:3},d="Exporting & Modifying 3D Assets",r={id:"asset-swapping/ExportingModifying3DAssets",title:"Exporting & Modifying 3D Assets",description:"This guide is written by KURAMAAA0",source:"@site/docs/asset-swapping/ExportingModifying3DAssets.md",sourceDirName:"asset-swapping",slug:"/asset-swapping/ExportingModifying3DAssets",permalink:"/docs/asset-swapping/ExportingModifying3DAssets",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/asset-swapping/ExportingModifying3DAssets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Starting out",permalink:"/docs/asset-swapping/StartingOut"},next:{title:"Exporting & Replacing 3D Assets",permalink:"/docs/asset-swapping/ExportingReplacing3DAssets"}},a={},l=[{value:"Finding and exporting 3D models of Pals",id:"finding-and-exporting-3d-models-of-pals",level:2},{value:"To find the Code Name of any Pal, click <strong>HERE</strong> and search for your wanted pal.",id:"to-find-the-code-name-of-any-pal-click-here-and-search-for-your-wanted-pal",level:4},{value:"Importing the 3D models in Blender",id:"importing-the-3d-models-in-blender",level:2},{value:"Modifying the 3D models in Blender",id:"modifying-the-3d-models-in-blender",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"exporting--modifying-3d-assets",children:"Exporting & Modifying 3D Assets"}),"\n",(0,t.jsxs)(n.p,{children:["This guide is written by ",(0,t.jsx)(n.a,{href:"https://github.com/KURAMAAA0/PalModding",children:"KURAMAAA0"})]}),"\n",(0,t.jsx)(n.p,{children:"In this section, you'll learn how to find the right files to export in order to modify 3D assets. You will not be taught how to use Blender."}),"\n",(0,t.jsx)(n.h2,{id:"finding-and-exporting-3d-models-of-pals",children:"Finding and exporting 3D models of Pals"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to find a Pal 3D model, press ",(0,t.jsx)(n.code,{children:"Control + Shift + F"})," in FModel, or click ",(0,t.jsx)(n.code,{children:"Package -> Search"}),", then search for ",(0,t.jsx)(n.code,{children:"SK_<PalCodeName>"})," (Replace <PalCodeName> Being your Pals name)"]}),"\n",(0,t.jsxs)(n.h4,{id:"to-find-the-code-name-of-any-pal-click-here-and-search-for-your-wanted-pal",children:["To find the Code Name of any Pal, click ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/KURAMAAA0/PalModding/blob/main/PalNamesCodeNames.txt",title:"HERE",children:"HERE"})})," and search for your wanted pal."]}),"\n",(0,t.jsxs)(n.p,{children:["Double-click on the first result, should be the one ",(0,t.jsx)(n.strong,{children:"without"})," _",(0,t.jsx)(n.code,{children:"Skeleton"})," at the end."]}),"\n",(0,t.jsxs)(n.p,{children:["Then go up one folder, meaning you shoud click on ",(0,t.jsx)(n.code,{children:"Folders"})," at the top."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/6c0d144c-5a52-465b-8d76-f404d6ab3474",alt:"FMODEL2"})}),"\n",(0,t.jsxs)(n.p,{children:["Right click on your Pal's folder, click save Folder's Packages ",(0,t.jsx)(n.strong,{children:"Textures"})," (.png)\r\nRight click on your Pal's folder, click save Folder's Packages ",(0,t.jsx)(n.strong,{children:"Models"})," (.psk)\r\nNow you can go ahead and open ",(0,t.jsx)(n.strong,{children:"Blender"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"importing-the-3d-models-in-blender",children:"Importing the 3D models in Blender"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Make sure you either scale the armature and model down by 0.01 after import, or while exporting, scale should be set 0.1.\r\nMake sure you are also disabling ",(0,t.jsx)(n.code,{children:"Add Leaf Bones"})," on export."]})}),"\n",(0,t.jsxs)(n.p,{children:["In Blender, click on ",(0,t.jsx)(n.code,{children:"File -> Import -> Unreal PSK (.psk/.pskx)"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/98e6e332-75d2-4c60-ad49-d557459ce8d4",alt:"BLENDER1"})}),"\n",(0,t.jsxs)(n.p,{children:["Go to the output folder you set when changing FModel's settings, ",(0,t.jsx)(n.code,{children:"Output -> Exports"})," go through the folders until you find the ",(0,t.jsx)(n.code,{children:"SK_***PalCodeName*.psk**"})," file and import it.\r\nThe textures should be in the same folder as the .psk, apply them to the Pal model if you don't want to replace it, otherwise ignore.\r\nWe'll make ",(0,t.jsx)(n.code,{children:"Depresso"})," (code name: ",(0,t.jsx)(n.code,{children:"NegativeKoala"}),") into a completely sleep-deprived ",(0,t.jsx)(n.code,{children:"Depresso"})," by editing his model.\r\nWe will also change his textures, go to ",(0,t.jsx)(n.strong,{children:"this section"})," if you want to learn how to replace/edit images (same process as replacing/editing textures)."]}),"\n",(0,t.jsx)(n.h2,{id:"modifying-the-3d-models-in-blender",children:"Modifying the 3D models in Blender"}),"\n",(0,t.jsxs)(n.p,{children:["If you only want to modify your Pal 3D model, you can keep the model present in the viewport and do the modifications directly on it.\r\nIf your model has a black background for his eyes and mouth, select the texture(s) with the issue, go to the ",(0,t.jsx)(n.strong,{children:"Shader Editor"}),", plug the ",(0,t.jsx)(n.strong,{children:"Alpha"})," channel of the texture into the ",(0,t.jsx)(n.strong,{children:"Alpha"})," property of the Principled BSDF."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/c988b8db-3d1a-48ed-b597-8beda449cfb8",alt:"BLENDERSHADER1"})}),"\n",(0,t.jsxs)(n.p,{children:["Then in the Material Properties tab change the ",(0,t.jsx)(n.code,{children:"Blend Mode"})," to ",(0,t.jsx)(n.code,{children:"Alpha Blend"})," and the ",(0,t.jsx)(n.code,{children:"Shadow Mode"})," to ",(0,t.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/41e5a112-f107-468d-b69b-e38b9a36bfce",alt:"BLENDERSHADER2"})}),"\n",(0,t.jsx)(n.p,{children:"Your Pal should now be fixed and working!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/d0b93d38-ea6d-4a27-9ac4-14beab123f1f",alt:"BLENDERSHADER3"})}),"\n",(0,t.jsxs)(n.p,{children:["Here's the poorly made ",(0,t.jsx)(n.code,{children:"Sleep Deprived Depresso"}),", as well as his textures changed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/KURAMAAA0/PalModding/assets/58988462/3cd4b1f6-17d9-4160-8c04-d0acc640ce92",alt:"BLENDER3"})}),"\n",(0,t.jsxs)(n.p,{children:["To export, simply go to ",(0,t.jsx)(n.code,{children:"File > Export > FBX (.fbx)"})," and choose where you want to export it."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's proceed with the final step, ",(0,t.jsx)(n.a,{href:"https://github.com/KURAMAAA0/PalModding/blob/main/Assset%20Swap%20Guide/PackagingInUE5.md",children:"packaging the file in UE5 to get a mod file!"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var t=s(7294);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);