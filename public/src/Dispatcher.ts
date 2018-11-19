export class Dispatcher {
  private callbacks;

  private static instance: Dispatcher = new Dispatcher();

  constructor() {
    if (Dispatcher.instance) {
      throw new Error('Error: Instantiation failed: Use Dispatcher.getInstance() instead of new.');
    }
    Dispatcher.instance = this;
    this.callbacks = [];
  }

  public static getInstance(): Dispatcher {
    return Dispatcher.instance;
  }

  public add(clb) {
    this.callbacks.push(clb);
  }

  public dispatch(action) {
    this.callbacks.forEach((clb) => {
      clb(action);
    });
  }

}
