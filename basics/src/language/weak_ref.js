// A simple cache using WeakRef + FinalizationRegistry

const registry = new FinalizationRegistry((key) => {
  console.log(`Cleanup for key: ${key}`);
});

class WeakCache {
  constructor() {
    this.map = new Map(); // strong keys → WeakRef values
  }

  set(key, value) {
    const ref = new WeakRef(value); // weak reference
    this.map.set(key, ref);
    // register for cleanup, passing the key
    registry.register(value, key);
  }

  get(key) {
    const ref = this.map.get(key);
    if (!ref) return null;

    const value = ref.deref(); // might be gone
    if (!value) {
      this.map.delete(key); // clean map if object was GC’d
    }
    return value;
  }
}

// Usage
let obj = { name: 'data' };
const cache = new WeakCache();

cache.set('item1', obj);
console.log('From cache:', cache.get('item1'));
// -> { name: "data" }

// Remove last strong reference
obj = null;

// After GC runs (timing unpredictable)
// FinalizationRegistry callback might log:
// Cleanup for key: item1

// Eventually cache.get("item1") may return null
