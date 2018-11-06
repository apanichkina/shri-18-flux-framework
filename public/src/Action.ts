export interface IAction {
  type: string;
}

export interface IActionWithPayload extends IAction {
  payload: any;
}

export function createAction(type: string, payload?: any): IAction | IActionWithPayload {
  let result;

  if (payload) {
    result = {type, payload};
  } else {
    result = {type};
  }

  return result;
}
