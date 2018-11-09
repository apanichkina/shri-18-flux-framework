import { IAction, IActionWithPayload } from './Action';
export declare type Reducer<S> = (state: S, action: IAction | IActionWithPayload) => S;
export interface IReducersMapObject {
    [key: string]: Reducer<any>;
}
export interface IStore {
    [key: string]: any;
}
export declare type TRenderable = (prevStore?: IStore) => void;
export declare class StateSingletonClass {
    private static instance;
    private reducers;
    private store;
    private listeners;
    private emitChangedEvent;
    constructor();
    static getInstance(): StateSingletonClass;
    setInitialState(data: IStore): void;
    addReducers(reducers: IReducersMapObject): void;
    getStore(): IStore;
    dispatch<T extends IAction>(action: T): IStore;
    addListener(listener: TRenderable): void;
}
