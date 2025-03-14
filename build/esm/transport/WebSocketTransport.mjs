// colyseus.js@0.15.18
import NodeWebSocket from 'ws';

const WebSocket = NodeWebSocket;
class WebSocketTransport {
    events;
    httpOptions;
    ws;
    protocols;
    constructor(events, httpOptions = {}) {
        this.events = events;
        this.httpOptions = httpOptions;
    }
    send(data) {
        if (data instanceof ArrayBuffer) {
            this.ws.send(data);
        }
        else if (Array.isArray(data)) {
            this.ws.send((new Uint8Array(data)).buffer);
        }
    }
    connect(url) {
        this.ws = new WebSocket(url, /*this.protocols || [],*/ this.httpOptions);
        this.ws.binaryType = 'arraybuffer';
        this.ws.onopen = this.events.onopen;
        this.ws.onmessage = this.events.onmessage;
        this.ws.onclose = this.events.onclose;
        this.ws.onerror = this.events.onerror;
    }
    close(code, reason) {
        this.ws.close(code, reason);
    }
    get isOpen() {
        return this.ws.readyState === WebSocket.OPEN;
    }
}

export { WebSocketTransport };
//# sourceMappingURL=WebSocketTransport.mjs.map
