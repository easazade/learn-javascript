let numbers = [9, 68, -9, 63, 0];

let filtered1 = numbers.filter(function (value) {
  return value > 0;
});

// This is called an arrow function
let filtered2 = numbers.filter((value) => value > 0);

let filtered3 = numbers.map((value) => value + 10);

console.log(filtered1);
console.log(filtered2);
console.log(filtered3);
