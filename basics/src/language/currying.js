// I think currying is a bit stupid or unsafe. I said it. But then the whole JS is unsafe since
// It is not statically typed.

// A normal function taking 3 arguments
function volume(length, width, height) {
  return length * width * height;
}

// 1) Manual Currying: transform into functions returning functions
function curryVolume(a) {
  return function (b) {
    return function (c) {
      return volume(a, b, c);
    };
  };
}

const v1 = curryVolume(2)(3)(4);
console.log('Curried result:', v1); // 24

// 2) Generic curry helper
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...rest) => curried(...args, ...rest);
  };
}

const curriedVolume = curry(volume);

console.log(curriedVolume(2)(3)(4)); // 24
console.log(curriedVolume(2, 3)(4)); // 24
console.log(curriedVolume(2)(3, 4)); // 24

// 3) Partial application: fix some arguments and get a specialized function
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

const volumeWithLength2 = partial(volume, 2);

console.log('Partial result:', volumeWithLength2(3, 4)); // 24
