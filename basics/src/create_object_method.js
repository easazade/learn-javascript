//TODO Object.create() is another method to create object
//this is a dynamic way of creating objects which we should pass the prototype object and parameters as arguments
//this way we can create objects at runtime dynamically

let prototypeObject = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

let person = Object.create(prototypeObject, {
  firstName: {
    value: 'alireza',
    writable: true,
    enumerable: true,
  },
  lastName: {
    value: 'easazade',
    writable: true,
    enumerable: true,
  },
});

console.log(person.fullName());
