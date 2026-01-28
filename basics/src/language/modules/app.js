// NOTE: since greet is default export in config.js there is no need to use curly braces for it
// It can just be imported as import greet from './config.js';
import greet, { version, settings, changeTheme } from './config.js';

console.log('Module app.js loaded and imported functions and objects from config.js');
console.log(greet('Ali')); // Hello, Ali
console.log(version); // 1.0
console.log(settings.theme); // light

changeTheme('dark');

console.log(settings.theme); // dark
