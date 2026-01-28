// Dynamic imports is used for lazy-loading, conditional-loading or code splitting
// NOTE: import() is not a function. it is a built-in syntax that returns a Promise

// Dynamic import inside an event handler (or anywhere)
async function loadAndUseMath() {
  try {
    // Load the module only when needed
    const module = await import('./math.js');

    // Use named export
    console.log(module.add(3, 4)); // 7

    // Use default export
    const greetFn = module.default;
    console.log(greetFn('Alex')); // "Greetings, Alex!"
  } catch (error) {
    console.error('Failed to load module:', error);
  }
}

// Conditional import
if (Math.random() > 0.5) {
  loadAndUseMath();
} else {
  console.log('Nope!');
}
