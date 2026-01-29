// a helper that returns a promise resolving after a delay
function delay(value, ms, succeed = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (succeed) resolve(value);
      else reject(new Error(`Failed: ${value}`));
    }, ms);
  });
}

async function demoAsync() {
  console.log('Start');

  try {
    // await pauses until promise resolves
    let r1 = await delay('Step 1', 1000);
    console.log(r1);

    // awaiting another promise
    let r2 = await delay('Step 2', 500);
    console.log(r2);

    // simulate error
    await delay('Bad step', 700, false);
    // this line won’t run if error thrown
    console.log('This never logs');
  } catch (err) {
    // catch errors thrown by any awaited promise
    console.error('Caught error:', err.message);
  } finally {
    // runs regardless of success or failure
    console.log('Cleanup in finally');
  }

  console.log('End');
}

// call the async function
await demoAsync();
