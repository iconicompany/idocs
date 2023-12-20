# Рекомендации к написанию кода

## Функции

### Именование

1. Имя функции должно отражать действие, которое она выполняет.

Пример 1:
```js
// class DocumentService
async createError(error) {
  await this.errorRepository.create(error);
}
```
Функция добавляет к документу ошибку (в errorRepository создается запись в кросс таблице между документом и справочником).
Логичнее назвать функцию `addError` или `registerError`

Пример 2:
```js
<OfferCards
  offer={offerModel}
  formKey={currentFormKey}
  onClick={onClick}
  bail={currentBail}
  clientStatus={clientStatus}
  dealStatus={dealStatus}
/>
```

Компонент `OfferCards` содержит событие `onClick`, которое вызывается, когда пользователь нажимает на карточку. Обработчик этого события, в данном случае, тоже называется `onClick`, что неправильно, так как от `onClick` ожидается, что это обработчик нажатия на компонент, определенный в этом файле. 
Лучше переименовать ее в `handleOfferCardClick` или `onOfferCardClick`
