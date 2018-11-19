import {createAction, IAction} from '../lib/public/src/Action';
import {Store} from '../lib/public/src/Store';
import {Dispatcher} from '../lib/public/src/Dispatcher';
import {EventEmitter} from '../lib/public/src/EventEmitter';

interface INameAction extends IAction {
  payload: {
    name: string;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const eventEmitter = new EventEmitter();
  const dispatcher = Dispatcher.getInstance();
  const initialStore = {name: 'Anna'};
  const rootReducer = (store, action) => {
    switch (action.type) {
      case 'newPerson':
        return {
          ...store,
          name: (action as INameAction).payload.name,
          age: 22,
        };
      default:
        return store;
    }
  };

  const store = new Store(initialStore, rootReducer, dispatcher, eventEmitter);

  console.log('class initial: ', store.getStore('name'));

  const actionOleg = createAction('newPerson', {name: 'Oleg'});
  const actionAnna = createAction('newPerson', {name: 'Anna'});

  const target = document.getElementById('root');

  if (target) {
    const render = (name, age) => {
      target.innerText = name + ' ' + age;
    };
    eventEmitter.on('storeUpdate', (data) => {
      switch (data.type) {
        case 'newPerson':
         render(data.store.name, data.store.age);
         break;
        default:
          break;
      }
    });

    setTimeout(() => {
      dispatcher.dispatch(actionOleg);
    }, 3000);

    setTimeout(() => {
      dispatcher.dispatch(actionAnna);
    }, 4000);
  }

});
