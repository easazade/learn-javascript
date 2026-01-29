// The point of this example is all async tasks will run after all synchronous code has been run
// Microtasks have higher priority than macrotasks: everything in the microtask queue runs before
// any macrotask (like timers or UI events) once the current code finishes.
// Promises use the microtask queue internally: promise callbacks are not executed immediately,
// but queued as microtasks.

console.log('start');

// schedule a macrotask (lower priority)
setTimeout(() => console.log('timeout (macrotask)'), 0);

// schedule promise microtasks (higher priority)
Promise.resolve()
  .then(() => console.log('promise microtask 1'))
  .then(() => console.log('promise microtask 2'));

// schedule a microtask explicitly
queueMicrotask(() => console.log('queueMicrotask microtask'));

console.log('end'); // will be logged just after start has been logged.
