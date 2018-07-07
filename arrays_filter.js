let numbers = [9, 68, -9, 63, 0];

let filtered = numbers.filter(function (value) {
    return value > 0;
});

//TODO this is called an arrow function
let filtered2 = numbers.filter(value => value > 0);

console.log(filtered);
console.log(filtered2);