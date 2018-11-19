declare type EventCallback = (...args) => void;

interface IListener {
  [key: string]: EventCallback[];
}

export class EventEmitter {
  private listeners: IListener;

  constructor() {
    this.listeners = {};
  }

  public on(event: string, clb: EventCallback): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(clb);

    const positionClb = this.listeners[event].length - 1;

    return () => {
      this.unsubscribe(event, positionClb);
    };
  }

  private unsubscribe(event, position) {
    this.listeners[event].splice(position, 1);
  }

  public emit(event: string, data: any) {
    this.listeners[event].forEach((clb) => {
      clb(data);
    });
  }
}
