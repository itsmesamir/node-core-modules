// querystring module provides utilities for parsing and formatting URL query strings.

const querystring = require("querystring");

// parse() method parses a URL query string and returns a JSON object
const query = "name=Samir&age=25";
const parsedQuery = querystring.parse(query);
console.log(parsedQuery); // { name: 'Samir', age: '25' }

// stringify() method converts a JSON object to a URL query string
const obj = { name: "Samir", age: 25 };

console.log(querystring.stringify(obj)); // name=Samir&age=25

// escape() method returns a URL-encoded version of a string
const str = "Hello, World!";
console.log(querystring.escape(str)); // Hello%2C%20World%21

// unescape() method returns a decoded version of a URL-encoded string
const encodedStr = "Hello%2C%20World%21";
console.log(querystring.unescape(encodedStr)); // Hello, World!
