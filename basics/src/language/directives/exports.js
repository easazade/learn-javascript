// Named exports (inline)
export function sayHi(name) {
  console.log(`Hi, ${name}`);
}

export const farewell = 'Goodbye!';

// Named export after declaration
function sayBye(name) {
  console.log(`Bye, ${name}`);
}
export { sayBye };

// Aliased export
export { sayHi as hello };

// Default export (one per file)
export default class User {
  constructor(name) {
    this.name = name;
  }
}
