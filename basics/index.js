//this is ,y first javascript code
//object
let person = {
    name: "ali",
    age: 19,
    phoneNumber:"09117158746",
    changePhone : function (newPhoneNumber) {
        this.phoneNumber = newPhoneNumber;
    }
};

person.prototype.makeRich = function () {
    //object oriented my ass
};


//array
let list = ["ali", 24, "09117158746"];

//functions
function sayHelloTo(name = "user") {
    console.log("Hello "+name);
}


