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

##### Есть стор, который один на проект

1.Создаем
```javascript
import {StateSingletonClass} from 'shri-18-flux-framework/lib/public/src/Store';
const store = StateSingletonClass.getInstance();
```
2.Добавляем правила обновления стора
```javascript
store.addReducers({
    age: (store: number, action: IAction): number => {
      switch (action.type) {
        case 'SOME_ACTION':
          return 22;
        default:
          return store;
      }
    },
  });
```
3.Создаем action
```javascript
import {createAction, IAction} from 'shri-18-flux-framework/lib/public/src/Action';
const action = createAction('SOME_ACTION');
```
4.Стор предоставляет метод dispatch, который вызывает все редьюсеры:
```javascript
store.dispatch(action);
```
5.Получить текущее состояние стора:
```javascript
const values = store.getStore()
```
6.Подписаться на изменение стора (например перерендерить страницу):
```javascript
const render = (prevState) => {
  const state = store.getStore();
  if (!prevState || prevState.age !== state.age) {
    target.innerText = state.age;
  }
};
store.addListener(render);
```
