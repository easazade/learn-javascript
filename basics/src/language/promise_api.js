// Promise.all(iterable) returns a promise that resolves with an array of resolved values
// once every promise succeeds; if any rejects, it rejects immediately with that error.
//
// Promise.allSettled(iterable) always waits for every promise to finish and returns an array
// of objects describing each outcome ({status:"fulfilled", value} or {status:"rejected", reason}).
//
// Promise.race(iterable) settles as soon as any promise settles (fulfill or reject);
// its result or error comes from the first one.
//
// Promise.any(iterable) waits for the first fulfilled promise; if all reject,
// it rejects with an AggregateError.

// Helper: create a promise that resolves or rejects after a delay
function delay(name, ms, succeed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed) {
        resolve(`${name} done`);
      } else {
        reject(new Error(`${name} failed`));
      }
    }, ms);
  });
}

const tasks = [
  delay('task1', 300),
  delay('task2', 200),
  delay('task3', 100, false), // this one will reject
];

// Promise.all — all must succeed
Promise.all(tasks)
  .then((results) => console.log('all: results', results))
  .catch((err) => console.error('all: failed because', err.message));

// Promise.allSettled — wait for all, success and failure
Promise.allSettled(tasks).then((results) => {
  console.log('allSettled: results');
  results.forEach((r) => {
    console.log(r.status, r.value ?? r.reason.message);
  });
});

// Promise.race — whoever settles first (fulfill or reject)
Promise.race([delay('fast', 50), delay('slow', 100)]).then((r) => console.log('race: winner:', r));

// Promise.any — first fulfilled (ignores rejections unless all fail)
Promise.any(tasks)
  .then((r) => console.log('any: first fulfilled:', r))
  .catch((err) => console.error('any: error (all failed):', err.errors));
