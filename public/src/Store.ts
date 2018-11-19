import {IAction, IActionWithPayload} from './Action';
import {Dispatcher} from './Dispatcher';
import {EventEmitter} from './EventEmitter';

export type Reducer<S> = (state: S, action: IAction | IActionWithPayload) => S;

export interface IStore {
  [key: string]: any;
}

export class Store {

  private reducers: Reducer<IStore>;

  private store: IStore = {};

  constructor(inital: IStore, rootReducer: Reducer<IStore>, dispatcher: Dispatcher, emitter: EventEmitter) {
    this.setInitialStore(inital);
    this.setReducers(rootReducer);

    dispatcher.add((action) => {
      this.updateStore(action);
      emitter.emit(
        'storeUpdate',
        {type: action.type, store: {...this.store}}, // TODO use deep copy
        );
    });

  }

  private setInitialStore(data: IStore): void {
    this.store = data;
  }

  private setReducers(reducer: Reducer<IStore>): void {
    this.reducers = reducer;
  }

  public getStore(field) {
    const value = this.store[field]; // TODO use deep copy

    return value;
  }

  private updateStore<T extends IAction>(action: T) {
    this.store = this.reducers(this.store, action);
  }

}
