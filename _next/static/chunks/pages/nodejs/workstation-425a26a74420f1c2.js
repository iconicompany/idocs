(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{9940:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nodejs/workstation",function(){return s(8322)}])},9400:function(e,n,s){"use strict";var o=s(1527);s(959);let t={logo:(0,o.jsx)("span",{children:"Iconicompany docs"}),project:{link:"https://github.com/iconicompany/idocs"},chat:{link:"https://t.me/iconicompany"},docsRepositoryBase:"https://github.com/iconicompany/idocs/blob/main",footer:{text:"Iconicompany docs"}};n.Z=t},8322:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l.Z}});var o=s(1527),t=s(5545),a=s(9236),d=s(9400);s(5420);var i=s(6736);s(787);var l=s(6363);function r(e){let n=Object.assign({p:"p",h2:"h2",ol:"ol",li:"li",a:"a",code:"code",pre:"pre",span:"span"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"import { Tab, Tabs } from 'nextra-theme-docs'"}),"\n",(0,o.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,o.jsx)(n.p,{children:"To start fullstack development on your PC, you have two options"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://ubuntu.com/download",children:"Ubuntu"}),"/",(0,o.jsx)(n.a,{href:"https://kubuntu.org/getkubuntu/",children:"Kubuntu"})," (if you prefer KDE) - recomended way"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://chocolatey.org/install",children:"Install chocolatley package manager"})," in Windows OS, or download and install all required packages manully"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-nodejs",children:"Install NodeJS"}),"\n",(0,o.jsxs)(n.p,{children:["<Tabs items={['Ubuntu', 'Windows']}>\n","\n",(0,o.jsx)(n.code,{children:"       curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -     sudo apt-get install -y nodejs    "}),"\n","\n","\n",(0,o.jsx)(n.code,{children:"    choco install nodejs    "}),"\n","\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-vscode",children:"Install VSCode"}),"\n",(0,o.jsx)(n.p,{children:"Build and debug modern web and cloud applications. Code is free and available on your favorite platform - Linux, Mac OSX, and Windows."}),"\n",(0,o.jsxs)(n.p,{children:["<Tabs items={['Ubuntu', 'Windows']}>\n","\n",(0,o.jsx)(n.code,{children:"    cd /tmp     wget -O vscode.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'     sudo apt install ./vscode.deb     rm -f vscode.deb    "}),"\n","\n","\n",(0,o.jsx)(n.code,{children:"    choco install vscode    "}),"\n","\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-postgresql",children:"Install PostgreSQL"}),"\n",(0,o.jsx)(n.p,{children:"PostgreSQL is an object-relational database management system."}),"\n",(0,o.jsxs)(n.p,{children:["<Tabs items={['Ubuntu', 'Windows']}>\n","\n",(0,o.jsx)(n.code,{children:"    sudo apt-get install -y postgresql postgresql-client    "}),"\n","\n","\n",(0,o.jsx)(n.code,{children:"    choco install postgresql -y --params '/Password:test'    "}),"\n","\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-dbeaver",children:"Install DBeaver"}),"\n",(0,o.jsx)(n.p,{children:"DBeaver is free and open source universal database tool for developers and database administrators."}),"\n",(0,o.jsxs)(n.p,{children:["<Tabs items={['Ubuntu', 'Windows']}>\n","\n",(0,o.jsx)(n.code,{children:"    sudo add-apt-repository ppa:serge-rider/dbeaver-ce -y     sudo apt-get install dbeaver-ce -y    "}),"\n","\n","\n",(0,o.jsx)(n.code,{children:"    choco install dbeaver -y    "}),"\n","\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-chromium",children:"Install Chromium"}),"\n",(0,o.jsx)(n.p,{children:"Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all Internet users to experience the web"}),"\n",(0,o.jsx)(n.p,{children:"<Tabs items={['Ubuntu', 'Windows']}>\n"}),"\n",(0,o.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo add-apt-repository ppa:savoury1/chromium -y"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt-get update"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt install chromium-browser -y"})})]})})]})}e=s.hmd(e),(0,t.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)},nextraLayout:a.ZP,hot:e.hot,pageOpts:{filePath:"pages/nodejs/workstation.md",route:"/nodejs/workstation",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Introduction",nodejs:"Nodejs docs",contact:{title:"Contact ↗",type:"page",href:"https://iconicompany.com/",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"nodejs",route:"/nodejs",children:[{kind:"Meta",data:{workstation:"How to setup Nodejs developer workstation",packages:"Snippets for packages"}},{kind:"MdxPage",name:"packages",route:"/nodejs/packages"},{kind:"MdxPage",name:"workstation",route:"/nodejs/workstation"}]}],headings:[{depth:2,value:"Before you begin",id:"before-you-begin"},{depth:2,value:"Install NodeJS",id:"install-nodejs"},{depth:2,value:"Install VSCode",id:"install-vscode"},{depth:2,value:"Install PostgreSQL",id:"install-postgresql"},{depth:2,value:"Install DBeaver",id:"install-dbeaver"},{depth:2,value:"Install Chromium",id:"install-chromium"}],flexsearch:{codeblocks:!0},title:"Workstation"},themeConfig:d.Z,pageNextRoute:"/nodejs/workstation",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[774,542,888,179],function(){return e(e.s=9940)}),_N_E=e.O()}]);