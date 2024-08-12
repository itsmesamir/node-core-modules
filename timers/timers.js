// timers module provides a way to schedule functions to be called after a certain period of time. It is similar to the setTimeout() and setInterval() functions in the browser environment. The timers module is useful for executing code after a delay or at regular intervals.

// The timers module provides the following functions:

// setTimeout(callback, delay, [arg], [...]): Schedules a callback function to be called after a delay in milliseconds. Optionally, you can pass arguments to the callback function.

// setInterval(callback, delay, [arg], [...]): Schedules a callback function to be called repeatedly after a delay in milliseconds. Optionally, you can pass arguments to the callback function.

// setImmediate(callback, [arg], [...]): Schedules a callback function to be called in the next iteration of the event loop. Optionally, you can pass arguments to the callback function.

// clearTimeout(timeout): Cancels a timeout previously established by setTimeout().

// clearInterval(interval): Cancels an interval previously established by setInterval().

// clearImmediate(immediate): Cancels an immediate previously established by setImmediate().

// The following example demonstrates the use of the timers module:

// Import the timers module
const {
  setTimeout,
  setInterval,
  setImmediate,
  clearTimeout,
  clearInterval,
  clearImmediate,
} = require("timers");

// Define a callback function
function callback(arg1, arg2) {
  console.log(`Callback function called with arguments: ${arg1} ${arg2}`);
}

// Schedule a callback function to be called after 2 seconds
const timeout = setTimeout(callback, 2000, "Hello", "World");

// Schedule a callback function to be called every 1 second
const interval = setInterval(callback, 1000, "Hello", "Node.js");

// Schedule a callback function to be called in the next iteration of the event loop
const immediate = setImmediate(callback, "Hello", "Timers");

// Cancel the timeout after 1 second
setTimeout(() => {
  clearTimeout(timeout);
}, 3000);

// Cancel the interval after 5 seconds
setTimeout(() => {
  clearInterval(interval);
}, 5000);

// Cancel the immediate after 3 seconds
setTimeout(() => {
  clearImmediate(immediate);
}, 3000);

// explaining more on setimmediate
// The setImmediate() function is used to execute a callback function in the next iteration of the event loop. It is similar to setTimeout() with a delay of 0 milliseconds, but setImmediate() has higher priority than setTimeout().
// The setImmediate() function is useful when you want to execute a callback function asynchronously but as soon as possible. It allows you to defer the execution of a function until the current event loop completes.
