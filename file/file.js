const fs = require("fs");

// read file
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// write file

fs.writeFile("file.txt", "Hello, World!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Hello samir, I am writing to a file");
});

// Asynchronous read
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("This is an example of Asynchronous read");

// Synchronous read
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);

console.log("This is an example of Asynchronous read");

// Other Operations:

// Appending data to a file: fs.appendFile() and fs.appendFileSync().
// Deleting a file: fs.unlink() and fs.unlinkSync().
// Creating directories: fs.mkdir() and fs.mkdirSync().
// Watching file changes: fs.watch().
