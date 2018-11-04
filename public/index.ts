import {createAction, IActionWithPayload, IAction} from '../lib/public/src/Action';
import {StateSingletonClass} from '../lib/public/src/Store';

interface INameAction extends IActionWithPayload<{name: string}> {}

document.addEventListener('DOMContentLoaded', () => {
  const store = StateSingletonClass.getInstance();
  store.setInitialState({name: 'Anna'});
  store.addReducers({
    name: (store: string = 'some body', action: INameAction): string => {
      switch (action.type) {
        case 'nevPerson':
          return action.payload.name;
        default:
          return store;
      }
    },
    age: (store: number = 0, action: IAction): number => {
      switch (action.type) {
        case 'nevPerson':
          return 22;
        default:
          return store;
      }
    },
  });

  console.log('class initial: ', store.getStore());

  const action = createAction('nevPerson', {name: 'Oleg'});

  const target = document.getElementById('root');
  if (target) {
    const render = () => {
      console.log('render');
      const state = store.getStore();
      target.innerText = state.name + state.age;
    };
    render();

    store.addListener({render});
    setTimeout(() => {
      console.log('timeout');
      store.dispatch(action);
    }, 3000);
  }

});
