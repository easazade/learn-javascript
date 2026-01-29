// How a generator function works. Whenever you yield a value it will emit a value
// A generator can be iterated like a collection.

function* sequence() {
  yield 1;
  yield 2;
  yield 3;
}

for (let value of sequence()) {
  console.log(value);
}

// If inside the generator function we write something like
// let myVar = yield something // here yield expects a result
// first time we call iterator.next() something will be returned
// next time we call iterator.next() we should pass the value of myVar, so should be iterator.next("my-var-value")
// In other words the argument passed to the next iterator.next() call becomes the result of the previous yield

// A simple sequence generator
function* complexSequence() {
  console.log('Generator started');

  // Yields 1st value
  let x = yield 1;
  console.log('Received input for x:', x);

  // Yields 2nd value
  let y = yield x + 2;
  console.log('Received input for y:', y);

  // Final yield and then function ends
  return y * 3;
}

// Create the iterator
const iterator = complexSequence();

// First .next(): starts generator and runs until first yield
let step1 = iterator.next();
console.log('step 1:', step1); // { value: 1, done: false }

// You can send data back into the generator
// That value becomes the result of the previous yield expression
let step2 = iterator.next(10);
console.log('step 2:', step2); // { value: 12, done: false }
// Internally: x = 10, so yield x+2 yields 12

let step3 = iterator.next(7);
console.log('step 3:', step3);
// { value: 21, done: true }
// Internally: y = 7, return y*3 = 21
