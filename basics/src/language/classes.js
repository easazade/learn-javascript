'use strict';

// Setting a value on the global object (browser: window, Node: globalThis)
globalThis.name = 'global_property_name';
console.log(globalThis);
console.log(`Checking: ${globalThis.name}`);
// If you specifically want to access `window`, only do it in a browser:
// if (typeof window !== 'undefined') window.name = 'window_property_name';

class User {
  constructor(name, id, books) {
    //we can define private properties but if we want to use them in a function we have to use them in
    //a function that is a property of the object not the prototype like below
    let localVar = 2;
    this.id = id;
    this.name = name;
    this.books = books;
    // Instance-specific method created per object
    // Uses closure to access private constructor-local variables
    // Constructor methods are private closures; class methods are shared behavior.
    this.getLocalVar = function () {
      return localVar;
    };
  }

  getListOfBooks() {
    //however there is no point to write getters and setters for public variables
    //just wanted to write a function
    return this.books;
  }

  getName() {
    // NOTE: In a browser, `window` has a built-in `name` property.
    // But in modern JS (and especially in strict mode), returning `name` (without `this.`)
    // does NOT read from the global object; it throws ReferenceError unless a local `name` exists.
    // Always use `this.name` here.
    return this.name;
  }
}

let user = new User('ali', '93u80d3h290ue', ['math', 'literature', 'physics']);

console.log(user.getListOfBooks());
console.log(user.getLocalVar());
