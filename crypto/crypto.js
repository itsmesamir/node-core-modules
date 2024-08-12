// crypto module is used for encryption and decryption of data
// crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

// crypto module provides a way of handling encrypted data, using the OpenSSL library.

const crypto = require("crypto");

// Create a Hash object
const hash = crypto.createHash("sha256");

// Pass data to be hashed
hash.update("Hello, World!");

// Get the hashed data as output
console.log(hash.digest("hex"));

// encryption and decryption
const algorithm = "aes-192-cbc";
const password = "password";
const key = crypto.scryptSync(password, "salt", 24);
// Use `crypto.randomBytes` to generate a random iv instead of the static iv
// iv means initialization vector
// it is a random number that is used to ensure that the same plaintext does not encrypt to the same ciphertext
const iv = Buffer.alloc(16, 0);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("some data", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
