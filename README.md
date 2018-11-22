# shri-18-flux-framework
simple framework with flux data flow

Код фреймфорка описан в `public/src/Action.ts` и `public/src/Store.ts`
Пример использования в `public/index.ts`

**Методика подключения**

Готовый к использованию код библиотеки транспилится в js и кладется в `lib` командой `npm run build` 
Чтобы установить в своем проекте нужно: 
1. `npm i "git+https://github.com/apanichkina/shri-18-flux-framework.git"
` 
2. подключается так: `import {StateSingletonClass} from 'shri-18-flux-framework/lib/public/src/Store';`
`

**API**
___
##### EventEmitter:

1.Подписка на событие возвращает метод для отписки
 ```javascript
import {EventEmitter} from 'shri-18-flux-framework/lib/public/src/EventEmitter';
const eventEmitter = new EventEmitter();
const unsubscribe = eventEmitter.on('storeUpdate', clb);
 ```
2.Триггер событий
  ```javascript
eventEmitter.emmit('storeUpdate', data);
  ```
##### Есть два вида action: 

1.С нагрузкой
```javascript
{
  type: string;
  payload: {
    somekey: any
  }
}
```
2.Без нагрузки 
```javascript
{
  type: string;
}
```

##### Есть стор, которых может быть много на одно приложение

1.Импортим
```javascript
import {Store} from 'shri-18-flux-framework/lib/public/src/Store';
```
2.Объявляем правила обновления стора
```javascript
const rootReducer = (store: IStore, action: IPageAction) => {
    switch (action.type) {
      case 'ROUTE':
        return {
          ...store,
          page: action.payload.page,
        };
      default:
        return store;
    }
};
```
3.Объявляем начальное состояние стора
```javascript
const initialStore = {page: 'events'};
```
4.Заводим стор
```javascript
const store = new Store(initialStore, rootReducer, dispatcher, eventEmitter);
```

##### Связывем логику приложения со стором

1.Создаем action
```javascript
import {createAction, IAction} from 'shri-18-flux-framework/lib/public/src/Action';
const action = createAction('SOME_ACTION');
```
2.Инициируем изменение стора
```javascript
dispatcher.dispatch(action);
```
3.Получить текущее состояние поля из стора:
```javascript
store.getStore('fieldName')
```
4.Подписаться на изменение стора (например перерендерить страницу):
```javascript
const eventsManager = (data: any) => {
      const { type, store: {page} } = data;

      if (page === 'events') {
        renderEventsPage();
      }
};
eventEmitter.on('storeUpdate', eventsManager)

```
