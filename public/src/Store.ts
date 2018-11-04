import {IAction, IActionWithPayload} from './Action';

export interface IRenderable {
  render: () => void;
}

export interface IStore {
  [key: string]: any;
}

export interface IReducers {
  [key: string]: <T, P>(store: T | undefined, action: IAction | IActionWithPayload<P>) => T;
}

export interface IDictionary<T> {
  [key: string]: T;
}

export class StateSingletonClass {

  private static instance: StateSingletonClass = new StateSingletonClass();

  private reducers: IDictionary<any> = {};

  private store: IDictionary<any> = {};

  private listeners: any[] = [];

  private emitChangedEvent() {
    this.listeners.forEach((clb: IRenderable) => {
      clb.render();
    });
    console.log('changed');
  }

  constructor() {
    if (StateSingletonClass.instance) {
      throw new Error('Error: Instantiation failed: Use StateSingletonClass.getInstance() instead of new.');
    }
    StateSingletonClass.instance = this;
  }

  public static getInstance(): StateSingletonClass {
    return StateSingletonClass.instance;
  }

  public setInitialState(data: IStore): void {
    this.store = data;
  }

  public addReducers(reducers: IReducers): void {
    this.reducers = {...this.reducers, ...reducers};
  }

  public getStore() {
    return this.store;
  }

  public dispatch<T>(action: IAction | IActionWithPayload<T>) {
    console.log('get store');
    Object.keys(this.reducers).forEach((key) => {
      console.log(key);
      this.store[key] = this.reducers[key](this.store[key], action);
    });

    this.emitChangedEvent();

    return this.store;
  }

  public addListener(listener: IRenderable) {
    this.listeners.push(listener);
  }

}

export function dispatch<T>(evt: EventTarget, action: IAction | IActionWithPayload<T>) {
  const data = (action as IActionWithPayload<T>).payload || {};
  const event = new CustomEvent(action.type, data);
  evt.dispatchEvent(event);
}
