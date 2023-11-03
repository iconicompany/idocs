(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{7812:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/development/nodejs/workstation",function(){return a(6851)}])},6851:function(e,n,a){"use strict";a.r(n),a.d(n,{__toc:function(){return l}});var t=a(5893),s=a(2673),o=a(3058),d=a(8426);a(9128);var i=a(2643),r=a(9013);let l=[{depth:2,value:"Before you begin",id:"before-you-begin"},{depth:2,value:"Install NodeJS",id:"install-nodejs"},{depth:2,value:"Install VSCode",id:"install-vscode"},{depth:2,value:"Install PostgreSQL",id:"install-postgresql"},{depth:2,value:"Install DBeaver",id:"install-dbeaver"},{depth:2,value:"Install Chromium",id:"install-chromium"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",ol:"ol",li:"li",a:"a",pre:"pre",code:"code",span:"span"},(0,i.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsx)(n.p,{children:"To start fullstack development on your PC, you have two options"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.a,{href:"https://ubuntu.com/download",children:"Ubuntu"}),"/",(0,t.jsx)(n.a,{href:"https://kubuntu.org/getkubuntu/",children:"Kubuntu"})," (if you prefer KDE) - recomended way"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://chocolatey.org/install",children:"Install chocolatley package manager"})," in Windows OS, or download and install all required packages manully"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-nodejs",children:"Install NodeJS"}),"\n",(0,t.jsxs)(r.mQ,{items:["Ubuntu","Windows"],children:[(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt-get install -y nodejs"})})]})})}),(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"choco install nodejs"})})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"install-vscode",children:"Install VSCode"}),"\n",(0,t.jsx)(n.p,{children:"Build and debug modern web and cloud applications. Code is free and available on your favorite platform - Linux, Mac OSX, and Windows."}),"\n",(0,t.jsxs)(r.mQ,{items:["Ubuntu","Windows"],children:[(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"cd /tmp"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"wget -O vscode.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt install ./vscode.deb"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"rm -f vscode.deb"})})]})})}),(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"choco install vscode"})})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"install-postgresql",children:"Install PostgreSQL"}),"\n",(0,t.jsx)(n.p,{children:"PostgreSQL is an object-relational database management system."}),"\n",(0,t.jsxs)(r.mQ,{items:["Ubuntu","Windows"],children:[(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt-get install -y postgresql postgresql-client"})})})})}),(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"choco install postgresql -y --params '/Password:test'"})})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"install-dbeaver",children:"Install DBeaver"}),"\n",(0,t.jsx)(n.p,{children:"DBeaver is free and open source universal database tool for developers and database administrators."}),"\n",(0,t.jsxs)(r.mQ,{items:["Ubuntu","Windows"],children:[(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo add-apt-repository ppa:serge-rider/dbeaver-ce -y"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"sudo apt-get install dbeaver-ce -y"})})]})})}),(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"choco install dbeaver -y"})})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"install-chromium",children:"Install Chromium"}),"\n",(0,t.jsx)(n.p,{children:"Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all Internet users to experience the web"}),"\n",(0,t.jsxs)(r.mQ,{items:["Ubuntu","Windows"],children:[(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.p,{children:"sudo add-apt-repository ppa:savoury1/chromium -y\nsudo apt-get update\nsudo apt install chromium-browser -y"})}),(0,t.jsx)(r.OK,{children:(0,t.jsx)(n.p,{children:"choco install chromium -y"})})]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/development/nodejs/workstation.mdx",route:"/development/nodejs/workstation",timestamp:1682665668e3,pageMap:[{kind:"Meta",data:{index:"Introduction",development:"Разработка",administration:"Servers, databases, clusters","project-catalogue":"Каталог проектов",onboarding:"Onboarding for DEVELOPER","project-managment":"Управление проектами",posts:"Статьи, заметки, посты",contact:{title:"Contact ↗",type:"page",href:"https://iconicompany.ru/",newWindow:!0}}},{kind:"Folder",name:"administration",route:"/administration",children:[{kind:"Meta",data:{server:"Как создать и настроить сервер на Ubuntu",k3s:"Установка k3s",ldap:"Ldap",putting:"Putting",werf:"Werf"}},{kind:"MdxPage",name:"k3s",route:"/administration/k3s"},{kind:"MdxPage",name:"ldap",route:"/administration/ldap"},{kind:"MdxPage",name:"putting",route:"/administration/putting"},{kind:"MdxPage",name:"server",route:"/administration/server"},{kind:"MdxPage",name:"werf",route:"/administration/werf"}]},{kind:"Folder",name:"development",route:"/development",children:[{kind:"Meta",data:{guidelines:"Гайдлайны",nodejs:"Nodejs docs",telegram:"Telegram"}},{kind:"Folder",name:"guidelines",route:"/development/guidelines",children:[{kind:"Meta",data:{dod:"Definition of Done",recommendations:"Recommendations"}},{kind:"MdxPage",name:"dod",route:"/development/guidelines/dod"},{kind:"MdxPage",name:"recommendations",route:"/development/guidelines/recommendations"}]},{kind:"Folder",name:"nodejs",route:"/development/nodejs",children:[{kind:"Meta",data:{workstation:"How to setup Nodejs developer workstation",packages:"Snippets for packages"}},{kind:"MdxPage",name:"packages",route:"/development/nodejs/packages"},{kind:"MdxPage",name:"workstation",route:"/development/nodejs/workstation"}]},{kind:"MdxPage",name:"telegram",route:"/development/telegram"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"onboarding",route:"/onboarding"},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"Meta",data:{werfactions:"Kubernetes для развертывания веток и Pull Request"}},{kind:"MdxPage",name:"werfactions",route:"/posts/werfactions"}]},{kind:"Folder",name:"project-catalogue",route:"/project-catalogue",children:[{kind:"Meta",data:{bystrobank:"БыстроБанк"}},{kind:"Folder",name:"bystrobank",route:"/project-catalogue/bystrobank",children:[{kind:"Meta",data:{guidelines:"Гайдлайны",stubs:"Написание заглушек"}},{kind:"MdxPage",name:"guidelines",route:"/project-catalogue/bystrobank/guidelines"},{kind:"MdxPage",name:"stubs",route:"/project-catalogue/bystrobank/stubs"}]}]},{kind:"Folder",name:"project-managment",route:"/project-managment",children:[{kind:"Folder",name:"NUPP_p3express",route:"/project-managment/NUPP_p3express",children:[{kind:"MdxPage",name:"NUPP-principles",route:"/project-managment/NUPP_p3express/NUPP-principles"},{kind:"Meta",data:{"NUPP-principles":"Nupp Principles"}}]},{kind:"MdxPage",name:"PMBOK6",route:"/project-managment/PMBOK6"},{kind:"Meta",data:{onboarding_pm:"База",work:"Управление проектом",issue:"Постановка issue",escalation:"Эскалация на проекте",requirements:"Оформление задач и требований",integration:"Управление интеграцией",developmentprocess:"Developmentprocess",PMBOK6:"Pmbok6",productmanagement:"Productmanagement"}},{kind:"MdxPage",name:"developmentprocess",route:"/project-managment/developmentprocess"},{kind:"MdxPage",name:"escalation",route:"/project-managment/escalation"},{kind:"MdxPage",name:"integration",route:"/project-managment/integration"},{kind:"MdxPage",name:"issue",route:"/project-managment/issue"},{kind:"MdxPage",name:"onboarding_pm",route:"/project-managment/onboarding_pm"},{kind:"MdxPage",name:"productmanagement",route:"/project-managment/productmanagement"},{kind:"MdxPage",name:"work",route:"/project-managment/work"}]}],flexsearch:{codeblocks:!0},title:"Workstation",headings:l},pageNextRoute:"/development/nodejs/workstation",nextraLayout:o.ZP,themeConfig:d.Z};n.default=(0,s.j)(c)},8426:function(e,n,a){"use strict";var t=a(5893);a(7294);let s={logo:(0,t.jsx)("span",{children:"Iconicompany docs"}),project:{link:"https://github.com/iconicompany/idocs"},chat:{link:"https://t.me/iconicompany"},docsRepositoryBase:"https://github.com/iconicompany/idocs/blob/main",footer:{text:"Iconicompany docs"}};n.Z=s}},function(e){e.O(0,[774,59,888,179],function(){return e(e.s=7812)}),_N_E=e.O()}]);