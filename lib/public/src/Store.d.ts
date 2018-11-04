import { IAction, IActionWithPayload } from './Action';
export declare type TRenderable = (prevStore?: IDictionary<any>) => void;
export interface IStore {
    [key: string]: any;
}
export interface IReducers {
    [key: string]: <T, P>(store: T | undefined, action: IAction | IActionWithPayload<P>) => T;
}
export interface IDictionary<T> {
    [key: string]: T;
}
export declare class StateSingletonClass {
    private static instance;
    private reducers;
    private store;
    private listeners;
    private emitChangedEvent;
    constructor();
    static getInstance(): StateSingletonClass;
    setInitialState(data: IStore): void;
    addReducers(reducers: IReducers): void;
    getStore(): IDictionary<any>;
    dispatch<T>(action: IAction | IActionWithPayload<T>): IDictionary<any>;
    addListener(listener: TRenderable): void;
}
export declare function dispatch<T>(evt: EventTarget, action: IAction | IActionWithPayload<T>): void;
