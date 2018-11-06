export interface IAction {
    type: string;
}
export interface IActionWithPayload extends IAction {
    payload: any;
}
export declare function createAction(type: string, payload?: any): IAction | IActionWithPayload;
