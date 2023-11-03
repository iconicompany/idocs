(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{4668:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/administration/werf",function(){return t(9892)}])},9892:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var i=t(5893),a=t(2673),r=t(3058),s=t(8426);t(9128);var o=t(2643);let l=[{depth:2,value:"Не решенные проблемы",id:"не-решенные-проблемы"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",a:"a",ol:"ol",li:"li",ul:"ul",code:"code",pre:"pre",span:"span",h2:"h2"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Выкладка через werf"}),"\n",(0,i.jsxs)(n.p,{children:["Сборка werf запускается при push в репозиторий, результат смотреть в разделе ",(0,i.jsx)(n.a,{href:"https://github.com/iconicompany/projecttemplate/actions",children:"Actions"}),". При успешном завершении проект выкладывается в kubernetes.\nЕсли проект не стартует, можно смотреть логи через ",(0,i.jsx)(n.a,{href:"https://github.com/MuhammedKalkan/OpenLens/releases",children:"openlens"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Настроить у проекта переменные"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Settings -> Secrets and variables -> Actions, например ",(0,i.jsx)(n.a,{href:"https://github.com/iconicompany/projecttemplate/settings/secrets/actions",children:"https://github.com/iconicompany/projecttemplate/settings/secrets/actions"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"KUBE_CONFIG_BASE64_DATA - конфиг k3s для прода в base64"}),"\n",(0,i.jsx)(n.li,{children:"REGISTRY_USERNAME - пользователь для доступа к docker registry (deploy token в gitlab) = iconibot"}),"\n",(0,i.jsx)(n.li,{children:"REGISTRY_PASSWORD - пароль для доступа к docker registry"}),"\n",(0,i.jsx)(n.li,{children:"WERF_SECRET_KEY - ключ для шифрованных значений для прода"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["В переменные KUBE_CONFIG_BASE64* нужно грузить сертификат для отдельной учетки, скрипт для генерации\n",(0,i.jsx)(n.a,{href:"https://github.com/iconicompany/icluster/blob/master/apicerts/generate-user.sh",children:"generate-user.sh"})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Настроить проект"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Каталоги:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"werf.yaml - описание проекта"}),"\n",(0,i.jsx)(n.li,{children:".helm - шаблоны и переменные helm"}),"\n",(0,i.jsx)(n.li,{children:".github - настройки github actions"}),"\n",(0,i.jsx)(n.li,{children:"Dockerfile - настройка сборки проекта"}),"\n",(0,i.jsx)(n.li,{children:".dockerignore - исключамые пути"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Первичная настройка делается поиском и заменой названия эталонного проекта в данных каталогах."}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Редактирование секретов"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Ключ шифрования положить в файл $HOME/.werf/global_secret_key или в переменную ",(0,i.jsx)(n.code,{children:"WERF_SECRET_KEY"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"werf helm secret file edit"})," - редактирование прозвольного файла"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"werf helm secret values edit"})," - редактирование yaml файла values"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Секреты через ",(0,i.jsx)(n.code,{children:"werf helm secret values"})," грузятся в deployment в открытом виде. Вместо этого лучше делать отдельные секреты ",(0,i.jsx)(n.a,{href:"https://github.com/iconicompany/projecttemplate/blob/master/.helm/templates/secret.yaml",children:"secret.yaml"})]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Создать пустой проект в gitlab для docker registry\nNew project -> Create blank project.\nЗаполнить"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Project name - имя проекта такое же как на github"}),"\n",(0,i.jsx)(n.li,{children:"Project URL - выбрать группу такую же, как организацию на github"}),"\n",(0,i.jsx)(n.li,{children:"Initialize repository with a README - снять галочку"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Локальный запуск docker для отладки/изучения"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Сборка: ",(0,i.jsx)(n.code,{children:"docker build -t projecttemplate . $*"})]}),"\n",(0,i.jsx)(n.li,{children:"Запуск"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"docker run \\"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  -it \\"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  --rm \\"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  --env-file .env \\"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  -p 3000:3000 \\"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  --add-host=host.docker.internal:host-gateway \\"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  projecttemplate $*"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["Важно: ",(0,i.jsx)(n.code,{children:"--env-file .env"}),' - в таком варианте в .env файле не должно быть ковычек в значениях (")\nИначе ковычки попадают в значение переменной. Пример ошибки:  Error validating datasource ',(0,i.jsx)(n.code,{children:"db"}),": the URL must start with the protocol ",(0,i.jsx)(n.code,{children:"postgresql://"})," or ",(0,i.jsx)(n.code,{children:"postgres://"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Локальный запуск werf для отладки/изучения"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Прописать переменные:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"WERF_ENV=sandbox"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"WERF_VALUES_ENV=.helm/values-sandbox.yaml"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"WERF_REPO=registry.gitlab.com/iconicompany/projecttemplate"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["Запустить сборку командой ",(0,i.jsx)(n.code,{children:"werf converge"})]}),"\n",(0,i.jsx)(n.h2,{id:"не-решенные-проблемы",children:"Не решенные проблемы"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Настроить перезапуск проекта при обновлении secret.yaml"}),"\n",(0,i.jsx)(n.li,{children:"Настройка планировщика cron для запуска заданий из проекта"}),"\n",(0,i.jsx)(n.li,{children:"Сервис для публикации и просмотра логов"}),"\n",(0,i.jsx)(n.li,{children:"Создание БД при первом запуске / для ветки"}),"\n",(0,i.jsxs)(n.li,{children:["Чистка docker registry через ",(0,i.jsx)(n.code,{children:"werf cleanup"})]}),"\n"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/administration/werf.md",route:"/administration/werf",timestamp:1697624741e3,pageMap:[{kind:"Meta",data:{index:"Introduction",development:"Разработка",administration:"Servers, databases, clusters","project-catalogue":"Каталог проектов",onboarding:"Onboarding for DEVELOPER","project-managment":"Управление проектами",posts:"Статьи, заметки, посты",contact:{title:"Contact ↗",type:"page",href:"https://iconicompany.ru/",newWindow:!0}}},{kind:"Folder",name:"administration",route:"/administration",children:[{kind:"Meta",data:{server:"Как создать и настроить сервер на Ubuntu",k3s:"Установка k3s",ldap:"Ldap",putting:"Putting",werf:"Werf"}},{kind:"MdxPage",name:"k3s",route:"/administration/k3s"},{kind:"MdxPage",name:"ldap",route:"/administration/ldap"},{kind:"MdxPage",name:"putting",route:"/administration/putting"},{kind:"MdxPage",name:"server",route:"/administration/server"},{kind:"MdxPage",name:"werf",route:"/administration/werf"}]},{kind:"Folder",name:"development",route:"/development",children:[{kind:"Meta",data:{guidelines:"Гайдлайны",nodejs:"Nodejs docs",telegram:"Telegram"}},{kind:"Folder",name:"guidelines",route:"/development/guidelines",children:[{kind:"Meta",data:{dod:"Definition of Done",recommendations:"Recommendations"}},{kind:"MdxPage",name:"dod",route:"/development/guidelines/dod"},{kind:"MdxPage",name:"recommendations",route:"/development/guidelines/recommendations"}]},{kind:"Folder",name:"nodejs",route:"/development/nodejs",children:[{kind:"Meta",data:{workstation:"How to setup Nodejs developer workstation",packages:"Snippets for packages"}},{kind:"MdxPage",name:"packages",route:"/development/nodejs/packages"},{kind:"MdxPage",name:"workstation",route:"/development/nodejs/workstation"}]},{kind:"MdxPage",name:"telegram",route:"/development/telegram"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"onboarding",route:"/onboarding"},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"Meta",data:{werfactions:"Kubernetes для развертывания веток и Pull Request"}},{kind:"MdxPage",name:"werfactions",route:"/posts/werfactions"}]},{kind:"Folder",name:"project-catalogue",route:"/project-catalogue",children:[{kind:"Meta",data:{bystrobank:"БыстроБанк"}},{kind:"Folder",name:"bystrobank",route:"/project-catalogue/bystrobank",children:[{kind:"Meta",data:{guidelines:"Гайдлайны",stubs:"Написание заглушек"}},{kind:"MdxPage",name:"guidelines",route:"/project-catalogue/bystrobank/guidelines"},{kind:"MdxPage",name:"stubs",route:"/project-catalogue/bystrobank/stubs"}]}]},{kind:"Folder",name:"project-managment",route:"/project-managment",children:[{kind:"Folder",name:"NUPP_p3express",route:"/project-managment/NUPP_p3express",children:[{kind:"MdxPage",name:"NUPP-principles",route:"/project-managment/NUPP_p3express/NUPP-principles"},{kind:"Meta",data:{"NUPP-principles":"Nupp Principles"}}]},{kind:"MdxPage",name:"PMBOK6",route:"/project-managment/PMBOK6"},{kind:"Meta",data:{onboarding_pm:"База",work:"Управление проектом",issue:"Постановка issue",escalation:"Эскалация на проекте",requirements:"Оформление задач и требований",integration:"Управление интеграцией",developmentprocess:"Developmentprocess",PMBOK6:"Pmbok6",productmanagement:"Productmanagement"}},{kind:"MdxPage",name:"developmentprocess",route:"/project-managment/developmentprocess"},{kind:"MdxPage",name:"escalation",route:"/project-managment/escalation"},{kind:"MdxPage",name:"integration",route:"/project-managment/integration"},{kind:"MdxPage",name:"issue",route:"/project-managment/issue"},{kind:"MdxPage",name:"onboarding_pm",route:"/project-managment/onboarding_pm"},{kind:"MdxPage",name:"productmanagement",route:"/project-managment/productmanagement"},{kind:"MdxPage",name:"work",route:"/project-managment/work"}]}],flexsearch:{codeblocks:!0},title:"Выкладка через werf",headings:l},pageNextRoute:"/administration/werf",nextraLayout:r.ZP,themeConfig:s.Z};n.default=(0,a.j)(d)},8426:function(e,n,t){"use strict";var i=t(5893);t(7294);let a={logo:(0,i.jsx)("span",{children:"Iconicompany docs"}),project:{link:"https://github.com/iconicompany/idocs"},chat:{link:"https://t.me/iconicompany"},docsRepositoryBase:"https://github.com/iconicompany/idocs/blob/main",footer:{text:"Iconicompany docs"}};n.Z=a}},function(e){e.O(0,[774,59,888,179],function(){return e(e.s=4668)}),_N_E=e.O()}]);