function doAsyncTask(arg, callback) {
  setTimeout(() => {
    if (arg > 0) {
      callback(null, `Success with ${arg}`);
    } else {
      callback(new Error('Invalid arg'));
    }
  }, 100);
}

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const doAsyncTaskPromise = promisify(doAsyncTask);

doAsyncTaskPromise(5)
  .then((res) => console.log('OK:', res))
  .catch((err) => console.error('Error:', err.message));

// And with async/await:
(async () => {
  try {
    let r = await doAsyncTaskPromise(5);
    console.log('Awaited:', r);
  } catch (err) {
    console.error('Awaited error:', err.message);
  }
})();
