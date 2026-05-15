// Main exports
export function greet(name) {
    return `Hello, ${name}!`;
}

// Re-export utils
export { capitalize } from './utils.js';


// Re-export src folder (if abc.js has exports)
export * from './src/abc.js';