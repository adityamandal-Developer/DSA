const EventEmitter = require('events');

// Create an event emitter
const myEmitter = new EventEmitter();

// Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'John'); // Output: Hello, John!

// http://localhost:3000/api/tasks?status=IN_PROGRESS&priority=HIGH&dueDateBefore=2024-12-31&dueDateAfter=2024-01-01&search=project
