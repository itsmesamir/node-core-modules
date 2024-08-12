// os module provides a number of operating system-related utility methods.

// os module provides utilities for working with operating system-related tasks.

// os module provides a number of operating system-related utility methods.

// os module provides utilities for working with file and directory paths

const os = require("os");

// os.arch() method returns the CPU architecture of the operating system
console.log(os.arch()); // x64

// os.cpus() method returns information about each CPU/core installed
console.log(os.cpus());

// os.freemem() method returns the amount of free system memory in bytes
console.log(os.freemem());

// os.homedir() method returns the home directory of the current user
console.log(os.homedir());

// os.hostname() method returns the hostname of the operating system
console.log(os.hostname());

// os.loadavg() method returns an array containing the 1, 5, and 15-minute load averages
console.log(os.loadavg());
