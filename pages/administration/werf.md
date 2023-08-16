# Выкладка через werf

1. Настроить у проекта переменные

Settings -> Secrets and variables -> Actions, например https://github.com/iconicompany/icompany/settings/secrets/actions

- KUBE_CONFIG_BASE64_DATA - конфиг k3s для прода в base64
- KUBE_CONFIG_BASE64_SANDBOX - конфиг k3s для sandbox в base64
- REGISTRY_USERNAME - пользователь для доступа к docker registry (deploy token в gitlab)
- REGISTRY_PASSWORD - пароль для доступа к docker registry
- WERF_SECRET_KEY - ключ для шифрованных значений для прода
- WERF_SECRET_KEY_SANDBOX - ключ для шифрованных значений для sandbox

2. Настроить проект

Каталоги:

- werf.yaml - описание проекта
- .helm - шаблоны и переменные helm
- .github - настройки github actions
- Dockerfile - настройка сборки проекта
- .dockerignore - исключамые пути

Первичная настройка делается поиском и заменой названия эталонного проекта в данных каталогах.

3. Локальный запуск werf для отладки/изучения

Прописать переменные:

```
WERF_ENV=sandbox
WERF_VALUES_ENV=.helm/values-sandbox.yaml
WERF_REPO=registry.gitlab.com/iconicompany/icompany
```

Запустить сборку командой `werf converge`