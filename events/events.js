// events module provides utilities for working with events.

// non-blocking I/O : Node.js is a single-threaded application, but it can support concurrency via
// the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded,
// they use async function calls to maintain concurrency. Node uses observer pattern.
// Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event
// which signals the event listener function to execute.

// EventEmitter class: events module provides an EventEmitter class which can be used to raise and handle custom events.
// EventEmitter class is defined and exposed by the events module.
// EventEmitter class is used to bind events and event handlers.
// EventEmitter class is used to raise events.
// EventEmitter class is used to handle events.
// EventEmitter class is used to remove events.

// EventEmitter class methods:
// addListener(event, listener): Adds a listener at the end of the listeners array for the specified event.
// on(event, listener): Adds a listener at the end of the listeners array for the specified event.
// once(event, listener): Adds a one-time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
// removeListener(event, listener): Removes a listener from the listener array for the specified event.
// removeAllListeners([event]): Removes all listeners, or those of the specified event.
// setMaxListeners(n): Sets the maximum number of listeners for the EventEmitter instance.

const EventEmitter = require("events");

// Create an object of EventEmitter class
const emitter = new EventEmitter();

// Register a listener for the connection event
emitter.on("connection", () => {
  console.log("Connection event is raised.");
});

// Register a listener for the data_received event
emitter.on("data_received", () => {
  console.log("Data received successfully.");
});

// Raise the connection event
emitter.emit("connection");

// Raise the data_received event
emitter.emit("data_received");
