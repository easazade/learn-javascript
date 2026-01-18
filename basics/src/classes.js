'use strict';

//setting value for the Window object
self.name = 'window_property_name';

class User {
  constructor(name, id, books) {
    //we can define private properties but if we want to use them in a function we have to use them in
    //a function that is a property of the object not the prototype like below
    let localVar = 2;
    this.id = id;
    this.name = name;
    this.books = books;
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
    //TODO if we return just name instead of this.name the name of the window's name property
    //TODO will be returned note that window has a name property
    //TODO by default which does not have a name in the
    //TODO code above we're just giving it a value in above for the sake of the test
    return this.name;
  }
}

let user = new User('ali', '93u80d3h290ue', ['math', 'literature', 'physics']);

console.log(user.getListOfBooks());
console.log(user.getLocalVar());
