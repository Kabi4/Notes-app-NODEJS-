// const fs = require('fs');
const notes = require('./notes.js');
// const validator = require('validator');
const log = require('./chalking');
// fs.writeFileSync("notes.txt", "This text is written with NODE JS!");
// fs.appendFileSync('notes.txt', 'By kushagra singh for note apps');
const getNotes = notes.getNotes();
console.log(getNotes);
// console.log(validator.isEmail('ksk@gmail.com'));
log('success', 'The app is running fine....');
log('warning', 'Found a vulnerability');
log('default', 'Working on it....');
log('error', 'Your app crashed shutting down......');