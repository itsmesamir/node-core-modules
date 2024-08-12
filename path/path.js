// path module provides utilities for working with file and directory paths

const path = require("path");

// basename() method returns the last portion of a path
const filePath = "/home/samir/Documents/file.txt";
console.log(path.basename(filePath)); // file.txt

// dirname() method returns the directory name of a path
console.log(path.dirname(filePath)); // /home/samir/Documents

// extname() method returns the extension of a file
console.log(path.extname(filePath)); // .txt

// parse() method returns an object whose properties represent the path
console.log(path.parse(filePath));

// join() method joins all given path segments together using the platform-specific separator as a delimiter
const parentDir = "home";
const fileName = "file.txt";
console.log(path.join(parentDir, fileName)); // home/file.txt

// resolve() method resolves a sequence of paths or path segments into an absolute path
console.log(path.resolve("home", "samir", "Documents")); // /home/samir/Documents
