import {IActionWithPayload, IAction} from './Action';

export type Reducer<S> = (state: S, action: IAction | IActionWithPayload) => S;

export interface IReducersMapObject {
  [key: string]: Reducer<any>;
}

export interface IStore {
  [key: string]: any;
}

export type TRenderable = (prevStore?: IStore) => void;

export class StateSingletonClass {

  private static instance: StateSingletonClass = new StateSingletonClass();

  private reducers: IReducersMapObject = {};

  private store: IStore = {};

  private listeners: any[] = [];

  private emitChangedEvent(prevStore: IStore) {
    this.listeners.forEach((clb: TRenderable) => {
      clb(prevStore);
    });
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

  public addReducers(reducers: IReducersMapObject): void {
    this.reducers = {...this.reducers, ...reducers};
  }

  public getStore() {
    return this.store;
  }

  public dispatch<T extends IAction>(action: T) {
    const prevStore = {...this.store};
    Object.keys(this.reducers).forEach((key) => {
      this.store[key] = this.reducers[key](this.store[key], action);
    });

    this.emitChangedEvent(prevStore);

    return this.store;
  }

  public addListener(listener: TRenderable) {
    this.listeners.push(listener);
  }

}
