# Выкладка через werf

Сборка werf запускается при push в репозиторий, результат смотреть в разделе [Actions](https://github.com/iconicompany/projecttemplate/actions). При успешном завершении проект выкладывается в kubernetes.
Если проект не стартует, можно смотреть логи через [openlens](https://github.com/MuhammedKalkan/OpenLens/releases).

1. Настроить у проекта переменные

Settings -> Secrets and variables -> Actions, например https://github.com/iconicompany/projecttemplate/settings/secrets/actions

- KUBE_CONFIG_BASE64_DATA - конфиг k3s для прода в base64
- KUBE_CONFIG_BASE64_SANDBOX - конфиг k3s для sandbox в base64
- REGISTRY_USERNAME - пользователь для доступа к docker registry (deploy token в gitlab) = iconibot
- REGISTRY_PASSWORD - пароль для доступа к docker registry
- WERF_SECRET_KEY - ключ для шифрованных значений для прода
- WERF_SECRET_KEY_SANDBOX - ключ для шифрованных значений для sandbox

В переменные KUBE_CONFIG_BASE64* нужно грузить сертификат для отдельной учетки, скрипт для генерации
[generate-user.sh](https://github.com/iconicompany/icluster/blob/master/apicerts/generate-user.sh)

2. Настроить проект

Каталоги:

- werf.yaml - описание проекта
- .helm - шаблоны и переменные helm
- .github - настройки github actions
- Dockerfile - настройка сборки проекта
- .dockerignore - исключамые пути

Первичная настройка делается поиском и заменой названия эталонного проекта в данных каталогах.

3. Редактирование секретов

Ключ шифрования положить в файл $HOME/.werf/global_secret_key или в переменную `WERF_SECRET_KEY`

- `werf helm secret file edit` - редактирование прозвольного файла
- `werf helm secret values edit` - редактирование yaml файла values

Секреты через `werf helm secret values` грузятся в deployment в открытом виде. Вместо этого лучше делать отдельные секреты [secret.yaml](https://github.com/iconicompany/projecttemplate/blob/master/.helm/templates/secret.yaml)

4. Создать пустой проект в gitlab для docker registry
New project -> Create blank project.
Заполнить
- Project name - имя проекта такое же как на github
- Project URL - выбрать группу такую же, как организацию на github
- Initialize repository with a README - снять галочку 

5. Локальный запуск werf для отладки/изучения

Прописать переменные:

```
WERF_ENV=sandbox
WERF_VALUES_ENV=.helm/values-sandbox.yaml
WERF_REPO=registry.gitlab.com/iconicompany/projecttemplate
```

Запустить сборку командой `werf converge`

## Не решенные проблемы

1. Настроить перезапуск проекта при обновлении secret.yaml
2. Настройка планировщика cron для запуска заданий из проекта
3. Сервис для публикации и просмотра логов
4. Создание БД при первом запуске
5. Чистка docker registry через `werf cleanup`