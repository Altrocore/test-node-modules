// Import the 'readFile' function from 'fs' module.
let { readFile } = require("fs");

// Read "file.txt" in UTF-8 and handle the result or errors.
readFile("file.txt", "utf8", (error, text) => {
  // If error, throw it; otherwise, log the file contents.
  if (error) throw error;
  console.log("File contains:", text);
});
