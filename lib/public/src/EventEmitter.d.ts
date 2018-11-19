declare type EventCallback = (...args: any[]) => void;
export declare class EventEmitter {
    private listeners;
    constructor();
    on(event: string, clb: EventCallback): () => void;
    private unsubscribe;
    emit(event: string, data: any): void;
}
export {};
