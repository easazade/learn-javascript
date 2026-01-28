// Use case of symbols:
// 1:
// Used when you want to attach hidden/internal data to objects without risking name conflicts.
// common use cases are library internals, privacy (maybe), avoiding conflict between ecosystems and frameworks
//
// 2:
// Overriding built-in symbols of JavaScript for specific objects, telling the engine how to handle
// that objects in certain situation. eg: Symbol.toPrimitive tells the JS how to convert it to a
// primitive value in different situations.
//
// Other symbols that can be overridden

// Symbol.iterator
// Makes your object work with for...of.
//
// Symbol.toPrimitive
// Controls how object converts to number/string.
//
// Symbol.toStringTag
// Changes what shows in Object.prototype.toString.
//
// Symbol.hasInstance
// Customizes how instanceof works.

// 1Unique symbols (always different)
const localId1 = Symbol('id');
const localId2 = Symbol('id');

console.log(localId1 === localId2); // false

// Global registry (shared symbol)
const globalId1 = Symbol.for('app.id');
const globalId2 = Symbol.for('app.id');

console.log(globalId1 === globalId2); // true
console.log(Symbol.keyFor(globalId1)); // "app.id"

// Using symbols as hidden object keys
const user = {
  name: 'Ali',
  age: 25,
  [localId1]: 12345, // hidden internal id
  [globalId1]: 'shared', // globally shared id

  //  Well-known symbol to control behavior
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return `${this.name} (${this.age})`;
    if (hint === 'number') return `${this.age}`;
    // in case of default
    return this.age;
  },
};

// Normal enumeration skips symbol keys
for (let key in user) {
  console.log(key);
}
// name
// age

console.log(Object.keys(user));
// ["name", "age"]

// But symbols are still there
console.log(Object.getOwnPropertySymbols(user));
// [Symbol(id), Symbol(app.id)]

console.log(user[localId1]); // 12345

//  Well-known symbol behavior
console.log(String(user)); // "Ali (25)"
console.log(+user); // 25
console.log(user + 5); // 30
