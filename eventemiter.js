const EventEmitter = require('events');

// Create an event emitter
const myEmitter = new EventEmitter();

// Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'John'); // Output: Hello, John!