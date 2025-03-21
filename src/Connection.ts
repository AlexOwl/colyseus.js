import { ClientRequestArgs } from "http";

import { ITransport, ITransportEventMap } from "./transport/ITransport";
import { WebSocketTransport } from "./transport/WebSocketTransport";

export class Connection implements ITransport {
    transport: ITransport;
    events: ITransportEventMap = {};

    constructor(public httpOptions: ClientRequestArgs = {}) {
        this.transport = new WebSocketTransport(this.events, this.httpOptions);
    }

    send(data: ArrayBuffer | Array<number>): void {
        this.transport.send(data);
    }


    connect(url: string): void {
        this.transport.connect(url);
    }

    close(code?: number, reason?: string): void {
        this.transport.close(code, reason);
    }

    get isOpen() {
        return this.transport.isOpen;
    }

}
