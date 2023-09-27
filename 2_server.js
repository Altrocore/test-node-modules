const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log that a request has been received
  console.log('Request received');

  // Check if the request is for the root path ("/")
  if (req.url === '/') {
    // Set the response header for HTML content
    res.setHeader('Content-Type', 'text/html');

    // Create a readable stream from a file
    const readableStream = fs.createReadStream('example.txt');

    // Start the HTML response
    res.write('<html><head><title>Streamed Text</title></head><body>');

    // Log that the response is being sent
    console.log('Sending response...');

    // Pipe the readable stream to the response object (writable stream)
    readableStream.pipe(res);

    // Handle errors, if any
    readableStream.on('error', (err) => {
      console.error('Stream error:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
  } else {
    // Handle other routes (e.g., 404 Not Found)
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
