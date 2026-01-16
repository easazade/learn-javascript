const threshold = {
    min: 4
};

const numbers = [1,2,3,4,5,6,7,8,9];

const result1 = numbers.find(function (item) {
    return item > this.min; // object passed as thisArg.
}, thiz = threshold); // threshold is passed as this argument.


const result2 = numbers.find(n=> n > this.min, threshold);

console.log(result1); // prints 5
console.log(result2); // prints undefined  since this arg is ignored in arrow functions