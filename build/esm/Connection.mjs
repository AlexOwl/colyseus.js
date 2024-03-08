// colyseus.js@0.15.18
import { WebSocketTransport } from './transport/WebSocketTransport.mjs';

class Connection {
    transport;
    events = {};
    httpOptions = {};
    constructor() {
        const webSocketTransport = new WebSocketTransport(this.events);
        webSocketTransport.httpOptions = this.httpOptions;
        this.transport = webSocketTransport;
    }
    send(data) {
        this.transport.send(data);
    }
    connect(url) {
        this.transport.connect(url);
    }
    close(code, reason) {
        this.transport.close(code, reason);
    }
    get isOpen() {
        return this.transport.isOpen;
    }
}

export { Connection };
//# sourceMappingURL=Connection.mjs.map
