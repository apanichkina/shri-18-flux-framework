export declare class Dispatcher {
    private callbacks;
    private static instance;
    constructor();
    static getInstance(): Dispatcher;
    add(clb: any): void;
    dispatch(action: any): void;
}
