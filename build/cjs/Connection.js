// colyseus.js@0.15.18
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WebSocketTransport = require('./transport/WebSocketTransport.js');

var Connection = /** @class */ (function () {
    function Connection(httpOptions) {
        if (httpOptions === void 0) { httpOptions = {}; }
        this.httpOptions = httpOptions;
        this.events = {};
        this.transport = new WebSocketTransport.WebSocketTransport(this.events, this.httpOptions);
    }
    Connection.prototype.send = function (data) {
        this.transport.send(data);
    };
    Connection.prototype.connect = function (url) {
        this.transport.connect(url);
    };
    Connection.prototype.close = function (code, reason) {
        this.transport.close(code, reason);
    };
    Object.defineProperty(Connection.prototype, "isOpen", {
        get: function () {
            return this.transport.isOpen;
        },
        enumerable: false,
        configurable: true
    });
    return Connection;
}());

exports.Connection = Connection;
//# sourceMappingURL=Connection.js.map
