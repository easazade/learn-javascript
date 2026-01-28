export { stuff } from './other.js';
export * from './more.js'; // re-exports all named exports
export { default as Thing } from './thing.js'; // re-export default with a name
