const names = ['ali', 'mohsen', 'nima', 'rahim'];
names.doSomething = function () {
  console.log(this);
};
// for-in loops iterates over all properties of the object unlike for-of loops which iterates over data
// for-of loop works only on collections. for-in loops works on all objects

console.log('Iterate using for-in loop:'); // will print function property as well
for (let index in names) {
  console.log(names[index]);
}

console.log('------------------------------------------------');
console.log('Iterate using for-of loop:'); // will not print function property
for (let name of names) {
  console.log(name);
}

console.log('------------------------------------------------');
console.log('Iterate using forEach loop:'); // will not print function property
names.forEach((name) => console.log(name));
