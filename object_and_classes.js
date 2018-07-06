//here we demonstrate different ways of creating objects in javascript

//TODO create objects using new Object()

let backRoomClerk = new Object();
//now we can add any property or function we want to it
backRoomClerk.name = "gholam";
backRoomClerk.doWork = function (when) {
    console.log("doing work at " + when);
};
// but for the sake of simplicity we use object literals like below

//TODO object literals
//we create an object literally thats why they are called object literals
//with object literals we directly create our object these object are defined literally without any class
//note that we are creating an object not a class so the fields have values
let deskClerk = {
    name: "ali",
    age: 19,
    phone: "09117158746",
    getName: function () {
        return this.name;
    }
};

//adding more stuff to our object
deskClerk.lastName = "isazade";
deskClerk.getLastName = function () {
    return this.lastName;
};

//TODO create objects using constructor functions
//this is like creating objects from classes in java , c# , php and etc
//but we don't use classes we just define a function takes some arguments any constructor would take and
//then we assign those arguments to the fields we define, even functions are a property of our constructor
//function because of that creating objecs like that each function is stored as a property inside of the object
//for each object we create so there will be a lot of memory wasted for nothing
//which we will solve this problem by prototypes
//TODO note that in javascript they kind of call classes constructors

function Animal(name, size) {
    this.name = name;
    this.size = size;
    this.getName = function () {
        return this.name;
    }
}

let panda = new Animal("panda","big");
console.log(panda);
console.log(deskClerk);
console.log(backRoomClerk);

//TODO creating objects using prototypes in their constructor functions
//checkout prototypes page

