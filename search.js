const lunr = require('lunr');

// Create a lunr.js search index
const index = lunr(function () {
  // Define the fields to index in your documents
  this.field('title');
  this.field('body');
  this.field('tags');

  // Add documents to the index
  this.add({
    title: 'Document 1',
    body: 'This is the content of document 1. It talks about Node.js.',
    tags: 'nodejs, programming',
    id: 1, // Unique identifier for the document
  });

  this.add({
    title: 'Document 2',
    body: 'Document 2 is about web development and JavaScript.',
    tags: 'web development, javascript',
    id: 2,
  });
});

// Define a data structure to store documents
const documents = {
  1: {
    title: 'Document 1',
    body: 'This is the content of document 1. It talks about Node.js.',
    tags: 'nodejs, programming',
  },
  2: {
    title: 'Document 2',
    body: 'Document 2 is about web development and JavaScript.',
    tags: 'web development, javascript',
  },
};

// Perform a search
const searchResults = index.search('Node.js');

// Display search results
console.log('Search Results:');
searchResults.forEach((result) => {
  const document = documents[result.ref]; // Retrieve the document from the data structure
  console.log(`Document ID: ${result.ref}`);
  console.log(`Title: ${document.title}`);
  console.log(`Match Score: ${result.score}`);
  console.log('---');
});
