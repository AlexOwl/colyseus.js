// colyseus.js@0.15.18
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var schema = require('@colyseus/schema');

var SchemaSerializer = /** @class */ (function () {
    function SchemaSerializer() {
    }
    SchemaSerializer.prototype.setState = function (rawState) {
        return this.state.decode(rawState);
    };
    SchemaSerializer.prototype.getState = function () {
        return this.state;
    };
    SchemaSerializer.prototype.patch = function (patches) {
        return this.state.decode(patches);
    };
    SchemaSerializer.prototype.teardown = function () {
        var _a, _b;
        (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a['$changes']) === null || _b === void 0 ? void 0 : _b.root.clearRefs();
    };
    SchemaSerializer.prototype.handshake = function (bytes, it) {
        if (this.state) {
            // TODO: validate client/server definitinos
            var reflection = new schema.Reflection();
            reflection.decode(bytes, it);
        }
        else {
            // initialize reflected state from server
            this.state = schema.Reflection.decode(bytes, it);
        }
    };
    return SchemaSerializer;
}());

exports.SchemaSerializer = SchemaSerializer;
//# sourceMappingURL=SchemaSerializer.js.map
