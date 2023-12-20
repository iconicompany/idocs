# Выкладка проекта на avclick

---

- Вместо project_name подствить название проекта
- Вместо xxxxx подствить номер первого незанятого порта начиная с 30000

Проверить занят ли порт можно командой:
```
sudo lsof -i:xxxxx
```
---

1. Перейти в home:
```
cd /home
```
2. Создать папку проекта:
```
sudo mkdir project_name
```
3. Перейти в созданную папку:
```
cd project_name
```
4. Добавить в проект на гитхабе бота avclickbot с правами админа
5. Выкачать проект:
```
sudo git clone git@github.com:ilb/project_name.git .
```
6. Создать пользователя linux для этого проекта с тем же именем что и проект:
```
sudo useradd project_name
```
7. Добавить пользователя в группу users
```
sudo usermod -a -G users project_name
```
8. Создать .env:
```
sudo cp .env.example .env
```
9. Отредактировать .env
```
sudo nano .env
```
10. Создать БД и пользователя к ней:
```
cat scripts/schema.pg.sql | sudo -u postgres psql
```
11. Создать папку для pm2:
```
sudo mkdir .pm2
```
12. Создать в ней файл processes.json:
```
sudo nano .pm2/processes.json
```
12. И добавить в него обьект:
```json
{
    "apps" : [{
        "cwd"  : "/home/project_name",
        "script" : "npm",
        "args"   : "start -- -H 127.0.0.1 -p xxxxx",
        "interpreter": "/bin/bash",
        "ignore_watch": ["[\\/\\\\]\\./", "node_modules" ],
        "log_file"    : "/var/log/pm2.project_name/project_name.log",
        "error_file"  : "/var/log/pm2.project_name/project_name-err.log",
        "out_file"    : "/var/log/pm2.project_name/project_name-out.log",
        "merge_logs"  : true,
        "max_memory_restart": "512M",
        "log_date_format" : "YYYY-MM-DD HH:mm:ss Z",
        "env": {
            "NODE_EXTRA_CA_CERTS": "/etc/ssl/ourCAbundle.crt"
        }
    }]
}
```

13. Создать папку для логов pm2:
```
sudo mkdir /var/log/pm2.project_name
```
14. Дать пользователю права на проект 
```
sudo chown -R project_name /home/project_name
```
15. Дать пользователю права на логи:
```
sudo chown -R project_name /var/log/pm2.project_name
```
15. Добавить в блок `scripts` в файле `package.json` строки
```
"ilb-build": "ldapenv prisma generate && ldapenv next build",
"ilb-deploy": "ldapenv prisma migrate deploy",
```
(если их там нет).
16. Запустить скрипт выкладки:
```
sudo /opt/bin/npmdeploygit project_name
```
16.1 Если ругается на eslint, то можно отключить его при сборке, добавив следующий код в next.config.js:
```js
  eslint: {
    ignoreDuringBuilds: true
  }
```
После чего запустить выкладку заново.
17. Перейти в папку /etc/apache2/apps.d
```
cd /etc/apache2/apps.d
```
18. Создать конфиг проекта:
```
sudo nano project_name.conf
```
19. И заполнить его:
```
<Location /project_name>
    ProxyPass http://127.0.0.1:xxxxx/project_name retry=1
    ProxyPassReverse http://127.0.0.1:xxxxx/project_name
</Location>
```
20. Перейти в папку хостов apache2:
```
cd /etc/apache2/vhosts.d
```
21. Открыть необходимый конфиг. К примеру, для выкладки под avclick.ru это файл 01-ssl-avclick.ru.conf:
```
sudo nano 01-ssl-avclick.ru.conf
```
22. И добавить в него строку
```
Include /etc/apache2/apps.d/project_name.conf
```
23. Перезапустить сервер:
```
sudo service apache2 restart
```
24. Опционально: запустить сиды:
```
npm run db:seed
```
