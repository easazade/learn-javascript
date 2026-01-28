// 📁 main.js

// Import specific named exports
import { sayHi, sayBye } from './exports.js';
sayHi('Ali');
sayBye('Ali');

// Import everything as namespace
import * as msgs from './exports.js';
console.log(msgs.farewell);

// Alias imports locally
import { sayHi as greet } from './exports.js';
greet('Sara');

// Import default export
import User from './exports.js';
const u = new User('Ben');
