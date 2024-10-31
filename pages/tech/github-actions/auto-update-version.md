## Настройка автоматического обновления версии в package.json при пуше/мердже PR в ветку master

### Настройка Github Action
1. Создать новый `Github Action` (`Actions -> New workflow -> set up a workflow yourself`) с именем `update_version.yml` и следующим содержимым:
```yml
name: Update Version

on:
  push:
    branches:
      - master

jobs:
  update-version:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Get current date
        id: date
        run: echo "::set-output name=date::$(date +'%Y.%m.%d')"

      - name: Get current version
        id: current_version
        run: echo "::set-output name=version::$(node -e "console.log(require('./package.json').version)")"

      - name: Calculate new version
        id: new_version
        run: |
          CURRENT_VERSION=${{ steps.current_version.outputs.version }}
          CURRENT_DATE=${{ steps.date.outputs.date }}
          VERSION_DATE=$(echo $CURRENT_VERSION | cut -d'.' -f1-3)
          VERSION_NUMBER=$(echo $CURRENT_VERSION | cut -d'.' -f4)

          if [ "$CURRENT_DATE" == "$VERSION_DATE" ]; then
          NEW_VERSION_NUMBER=$((VERSION_NUMBER + 1))
          else
          NEW_VERSION_NUMBER=1
          fi

          NEW_VERSION="${CURRENT_DATE}.${NEW_VERSION_NUMBER}"
          echo "::set-output name=version::$NEW_VERSION"

      - name: Update package.json version
        run: |
          jq '.version = "${{ steps.new_version.outputs.version }}"' package.json > temp.json && mv temp.json package.json

      - name: Commit changes
        run: |
          git config --global user.name 'github-actions[bot]'
          git config --global user.email 'github-actions[bot]@users.noreply.github.com'
          git add package.json
          git commit -m "Update version to ${{ steps.new_version.outputs.version }}"
          git push
```

