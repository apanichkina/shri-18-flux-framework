export interface IAction {
  type: string;
}

export interface IActionWithPayload<T> extends IAction {
  payload: T;
}

export function createAction<T>(type: string, payload?: T): IAction | IActionWithPayload<T> {
  let result;

  if (payload) {
    result = {type, payload};
  } else {
    result = {type};
  }

  return result;
}
