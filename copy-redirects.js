const ncp = require('ncp').ncp;
const fs = require('fs');

// Source and destination paths
const source = '_redirects';
const destination = 'build/_redirects'; // Ensure the path matches your build directory structure

// Copy the _redirects file
ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('_redirects file copied successfully');
});
