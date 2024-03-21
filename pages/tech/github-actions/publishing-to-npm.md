## Публикация в NPM

### Настройка Github Action
1. Создать новый `Github Action` (`Actions -> New workflow -> set up a workflow yourself`) с именем `publish.yml` и следующим содержимым:
```yml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish-gpr:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          registry-url: https://registry.npmjs.org/
      - run: npm i
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_AUTH_TOKEN}}
```
2. Получить токен `npmjs.com` (если его еще нет) (`Profile -> Edit profile -> Access tokens -> Generate new token -> Classic token`). Выбрать вариант `Automation`.
3. Указать токен в переменной `NPM_AUTH_TOKEN` в настройках репозитория (`Settings -> Secrets and variables -> Actions -> New repository secret`).

### Создание релиза на `Github`:
1. С главной страницы репозитория перейти в `Releases` (в сайдбаре справа). 
2. Перейти на страницу создания релиза `Draft a new release`.
3. Создать новый тег через выпадающий список `Choose a tag` по соглашению `v[текущая версия библиотеки]`. К примеру `v1.0.15`.
4. Сгенерировать заметки к релизу (`Generate release notes`).
5. Опубликовать релиз (`Publish release`).
6. Через несколько секунд новая версия библиотеки будет выложена в `NPM`
