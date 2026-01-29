// A Promise is an object representing the eventual result of an asynchronous task — it starts pending,
// then becomes either fulfilled (resolved) with a value or rejected with an error; you attach.
// then for success, .catch for failure, chain multiple actions by returning new values or promises,
// and can wait for several promises in parallel with Promise.all.

// A function that returns a promise that resolves or rejects after a delay
function waitAndReturnPromise(ms, succeed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed) {
        resolve(`Done after ${ms}ms`);
      } else {
        reject(new Error(`Failed after ${ms}ms`));
      }
    }, ms);
  });
}

// 1) Basic chaining
waitAndReturnPromise(500)
  .then((result) => {
    console.log('1) Success:', result);
    return waitAndReturnPromise(300); // return another promise to continue chain
  })
  .then((result) => {
    console.log('2) Chained:', result);
    return 'Finished chain';
  })
  .then((finalValue) => {
    console.log('3) Value at end:', finalValue);
  })
  .catch((err) => {
    console.error('Caught error:', err.message);
  });

// 2) Error example (with reject)
waitAndReturnPromise(400, false)
  .then((r) => console.log(r))
  .catch((err) => console.error('Handled reject:', err.message));

// 3) Parallel waits with Promise.all
Promise.all([waitAndReturnPromise(100), waitAndReturnPromise(200), waitAndReturnPromise(150)])
  .then((results) => {
    console.log('Parallel results:', results);
  })
  .catch((err) => {
    console.error('Parallel failed:', err.message);
  });

new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, () => {
    resolve('success');
  });
}).then((resolve) => {
  console.log('awaited 1000 milliseconds');
});
