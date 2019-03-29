'use strict';

console.log('')
console.log('')
console.log('Updating package version to ...')
// update package json versions
const versiony = require('versiony');
// const $TRAVIS_BUILD_ID = 0;
versiony.with('./package.json').patch($TRAVIS_BUILD_ID).to('./package.json')
const version = versiony.get('./package.json');
console.log('version: ' + version)


const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('README.md', './dist/README.md', (err) => {
  if (err) throw err;
});
fs.copyFile('package.json', './dist/package.json', (err) => {
  if (err) throw err;
});
