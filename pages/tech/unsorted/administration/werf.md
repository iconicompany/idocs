# Выкладка через werf

Сборка werf запускается при push в репозиторий, результат смотреть в разделе [Actions](https://github.com/iconicompany/projecttemplate/actions). При успешном завершении проект выкладывается в kubernetes.
Если проект не стартует, можно смотреть логи через [openlens](https://github.com/MuhammedKalkan/OpenLens/releases).

1. Настроить проект

Каталоги:

- werf.yaml - описание проекта
- .helm - шаблоны и переменные helm
- .github - настройки github actions
- Dockerfile - настройка сборки проекта
- .dockerignore - исключамые пути

Первичная настройка делается поиском и заменой названия эталонного проекта [iconicactions](https://github.com/iconicompany/iconicactions) в данных каталогах.

2. Редактирование секретов

Ключ шифрования положить в файл $HOME/.werf/global_secret_key или в переменную `WERF_SECRET_KEY`

- `werf helm secret file edit` - редактирование прозвольного файла
- `werf helm secret values edit` - редактирование yaml файла values

Секреты через `werf helm secret values` грузятся в deployment в открытом виде. Вместо этого лучше делать отдельные секреты [secret.yaml](https://github.com/iconicompany/iconicactions/blob/master/.helm/templates/secret.yaml)

3. Локальный запуск docker для отладки/изучения

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
DOCKER_BUILDKIT=true \
WERF_ENV=testing \
WERF_SET_DOMAIN=env.DOMAIN=iconicactions-main.iconicompany.icncd.ru \
WERF_REPO=ghcr.io/iconicompany/iconicactions/iconicactions \
werf $*
```

Запустить сборку командой `werf converge`

## Не решенные проблемы

1. Настроить перезапуск проекта при обновлении secret.yaml
2. Сервис для публикации и просмотра логов
3. Создание БД при первом запуске / для ветки
4. Чистка docker registry через `werf cleanup`
