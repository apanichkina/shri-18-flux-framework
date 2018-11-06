import {createAction, IAction} from '../lib/public/src/Action';
import {StateSingletonClass} from '../lib/public/src/Store';

interface INameAction extends IAction {
  payload: {
    name: string;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const store = StateSingletonClass.getInstance();
  store.setInitialState({name: 'Anna'});
  store.addReducers({
    name: (store: string = 'some body', action: INameAction): string => {
      switch (action.type) {
        case 'newPerson':
          return (action as INameAction).payload.name;
        default:
          return store;
      }
    },
    age: (store: number, action: IAction): number => {
      switch (action.type) {
        case 'newPerson':
          return 22;
        default:
          return store;
      }
    },
  });

  console.log('class initial: ', store.getStore());

  const actionOleg = createAction('newPerson', {name: 'Oleg'});
  const actionAnna = createAction('newPerson', {name: 'Anna'});

  const target = document.getElementById('root');
  if (target) {
    const render = (prev?: any) => {
      console.log('render');
      const state = store.getStore();
      if (!prev || prev.age !== state.age) {
        target.innerText = state.name + state.age;
      }
    };
    render();

    store.addListener(render);
    setTimeout(() => {
      console.log('timeout');
      store.dispatch(actionOleg);
    }, 3000);

    setTimeout(() => {
      console.log('timeout');
      store.dispatch(actionAnna);
    }, 4000);
  }

});
