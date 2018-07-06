//TODO inheritance
//in javascript inheritance is done like very awful
//we get inherit instance properties differently and prototype functions and properties differently
//we make our prototype an instance of the super object instead of a new fresh object with no properties and
//behaviors , and for the properties of the superType we inherit them differently when we are defining
//our subType constructor
function SuperType(firstName, lastName) {
    this.firstName = "Virat";
    this.lastName = "Kohli";
    this.friends = ["Ashwin", "Jadeja"];
}

//SuperType prototype
SuperType.prototype.getSuperName = function () {
    return this.firstName + " " + this.lastName;
};

//SubType prototype function
function SubType(firstName, lastName, age) {
    //Inherit instance properties
    SuperType.call(this, firstName, lastName);
    this.age = age;
}

//Inherit methods and shared properties
SubType.prototype = new SuperType();

//Add new property to SubType prototype
SubType.prototype.getSubAge = function () {
    return this.age;
};

//Create SubType objects
let subTypeObj1 = new SubType("Virat", "Kohli", 26);
let subTypeObj2 = new SubType("Sachin", "Tendulkar", 39);

//Modify the friends property using the subTypeObj1
subTypeObj1.friends.push("Amit");

console.log(subTypeObj1.friends);//["Ahswin", "Jadega", "Amit"]
console.log(subTypeObj2.friends);//["Ashwin", "Jadega"]

//subTypeObj1
console.log(subTypeObj1.firstName); //Output: Virat
console.log(subTypeObj1.age); //Output: 26
console.log(subTypeObj1.getSuperName()); //Output: Virat Kohli
console.log(subTypeObj1.getSubAge()); //Output: 26

//subTypeObj2
console.log(subTypeObj2.firstName); //Output: Sachin
console.log(subTypeObj2.age); //Output: 39
console.log(subTypeObj2.getSuperName()); //Output: Sachin Tendulkar
console.log(subTypeObj2.getSubAge()); //Output: 39



