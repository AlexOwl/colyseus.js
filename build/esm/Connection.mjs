// colyseus.js@0.15.18
import { WebSocketTransport } from './transport/WebSocketTransport.mjs';

class Connection {
    httpOptions;
    transport;
    events = {};
    constructor(httpOptions = {}) {
        this.httpOptions = httpOptions;
        this.transport = new WebSocketTransport(this.events, this.httpOptions);
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
