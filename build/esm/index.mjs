// colyseus.js@0.15.18
import './legacy.mjs';
export { Client } from './Client.mjs';
export { ErrorCode, Protocol } from './Protocol.mjs';
export { Room } from './Room.mjs';
export { Auth } from './Auth.mjs';
export { Connection } from './Connection.mjs';
export { WebSocketTransport } from './transport/WebSocketTransport.mjs';
import { SchemaSerializer } from './serializer/SchemaSerializer.mjs';
export { SchemaSerializer } from './serializer/SchemaSerializer.mjs';
import { NoneSerializer } from './serializer/NoneSerializer.mjs';
import { registerSerializer } from './serializer/Serializer.mjs';
export { registerSerializer } from './serializer/Serializer.mjs';

registerSerializer('schema', SchemaSerializer);
registerSerializer('none', NoneSerializer);
//# sourceMappingURL=index.mjs.map
