"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketTransport = void 0;
const ws_1 = __importDefault(require("ws"));
const WebSocket = ws_1.default;
class WebSocketTransport {
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
exports.WebSocketTransport = WebSocketTransport;
//# sourceMappingURL=WebSocketTransport.js.map