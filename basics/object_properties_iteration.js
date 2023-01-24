//TODO for in loop is for when we want to iterate over the properties of an object

let myObject = {
    name: "ali",
    age: 19,
    doSomething: function () {
        console.log("doing something");
    }
};

for (let key in myObject) {
    //remember functions in javascript are also objects
    if (typeof myObject[key] !== 'function') {
        console.log(key + " -> " + myObject[key]);
    }
}