const numbers = [5,15,66,1,61,6,51,5,13];

let sum = numbers.reduce((lastValue,currentValue) => lastValue += currentValue);

console.log(sum);