"use strict"

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
        }
    }

    getListOfBooks() {
        return this.books;
    }

}


let user = new User("ali","93u80d3h290ue",["math","literature","physics"]);
console.log(user.getListOfBooks());
console.log(user.getLocalVar());