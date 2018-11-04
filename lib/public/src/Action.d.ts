export interface IAction {
    type: string;
}
export interface IActionWithPayload<T> extends IAction {
    payload: T;
}
export declare function createAction<T>(type: string, payload?: T): IAction | IActionWithPayload<T>;
