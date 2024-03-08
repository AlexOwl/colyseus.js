/// <reference types="node" />
import { ClientRequestArgs } from "http";
import { ITransport, ITransportEventMap } from "./transport/ITransport";
export declare class Connection implements ITransport {
    httpOptions: ClientRequestArgs;
    transport: ITransport;
    events: ITransportEventMap;
    constructor(httpOptions?: ClientRequestArgs);
    send(data: ArrayBuffer | Array<number>): void;
    connect(url: string): void;
    close(code?: number, reason?: string): void;
    get isOpen(): boolean;
}
