"use strict"

class User {

    constructor(name, id, books) {
        this.id = id;
        this.name = name;
        this.books = books;
    }

    getListOfBooks() {
        return this.books;
    }

}


let user = new User("ali","93u80d3h290ue",["math","literature","physics"]);
console.log(user.getListOfBooks());