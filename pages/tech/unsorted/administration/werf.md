# Выкладка через werf

Сборка werf запускается при push в репозиторий, результат смотреть в разделе [Actions](https://github.com/iconicompany/projecttemplate/actions). При успешном завершении проект выкладывается в kubernetes.
Если проект не стартует, можно смотреть логи через [openlens](https://github.com/MuhammedKalkan/OpenLens/releases).

1. Настроить у проекта переменные

Settings -> Secrets and variables -> Actions, например https://github.com/iconicompany/projecttemplate/settings/secrets/actions

- KUBE_CONFIG - конфиг доступа kubernetes в base64
- WERF_SECRET_KEY - ключ для шифрованных значений. **Не нужно если нет шифрованных файлов**
- REGISTRY_USERNAME - пользователь для доступа к docker registry. **Не нужно для ghcr.io**
- REGISTRY_PASSWORD - пароль для доступа к docker registry. **Не нужно для ghcr.io**

В переменную KUBE_CONFIG нужно грузить сертификат для отдельной учетки, скрипт для генерации
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

4. Создать пустой проект в gitlab для docker registry. **Не нужно для ghcr.io**
New project -> Create blank project.
Заполнить
- Project name - имя проекта такое же как на github
- Project URL - выбрать группу такую же, как организацию на github
- Initialize repository with a README - снять галочку 

5. Локальный запуск docker для отладки/изучения

- Сборка: `docker build -t projecttemplate . $*`
- Запуск

```
docker run \
  -it \
  --rm \
  --env-file .env \
  -p 3000:3000 \
  --add-host=host.docker.internal:host-gateway \
  projecttemplate $*
```

Важно: `--env-file .env` - в таком варианте в .env файле не должно быть ковычек в значениях (")
Иначе ковычки попадают в значение переменной. Пример ошибки:  Error validating datasource `db`: the URL must start with the protocol `postgresql://` or `postgres://`.

6. Локальный запуск werf для отладки/изучения

Прописать переменные:

```
WERF_ENV=sandbox
WERF_VALUES_ENV=.helm/values-sandbox.yaml
WERF_REPO=registry.gitlab.com/iconicompany/projecttemplate
```

Запустить сборку командой `werf converge`

## Не решенные проблемы

1. Настроить перезапуск проекта при обновлении secret.yaml
2. Сервис для публикации и просмотра логов
3. Создание БД при первом запуске / для ветки
4. Чистка docker registry через `werf cleanup`
