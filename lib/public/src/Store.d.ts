import { IAction, IActionWithPayload } from './Action';
import { Dispatcher } from './Dispatcher';
import { EventEmitter } from './EventEmitter';
export declare type Reducer<S> = (state: S, action: IAction | IActionWithPayload) => S;
export interface IStore {
    [key: string]: any;
}
export declare class Store {
    private reducers;
    private store;
    constructor(inital: IStore, rootReducer: Reducer<IStore>, dispatcher: Dispatcher, emitter: EventEmitter);
    private setInitialStore;
    private setReducers;
    getStore(field: any): any;
    private updateStore;
}
