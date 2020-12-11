// const fs = require('fs');
// const notes = require('./notes.js');
const yargs = require('yargs');
// const validator = require('validator');
const log = require('./chalking');
const { addNote, removeNotes, getNote, listAllNotes } = require('./notes');
// fs.writeFileSync("notes.txt", "This text is written with NODE JS!");
// fs.appendFileSync('notes.txt', 'By kushagra singh for note apps');
//Customizing yargs version
yargs.version('1.1.0');
// const getNotes = notes.getNotes();
// console.log(getNotes);
// console.log(validator.isEmail('ksk@gmail.com'));
// log('The app is running fine....', 'success');
// log('Found a vulnerability', 'warning');
// log('Working on it....');
// log('Your app crashed shutting down......', 'error');
// const operationInfo = process.argv[2];
// log(
//     operationInfo ? operationInfo : 'Dont have any input from user',
//     operationInfo ? 'success' : 'error'
// );
// if (operationInfo) {
//     const [nodeLoc, fileloc, operation, ...inforargv] = process.argv;
//     switch (operationInfo.toLowerCase()) {
//         case 'add':
//             log('Adding note...', 'success');
//             log(inforargv, 'success');
//             break;
//         case 'remove':
//             log('removing the note...', 'warning');
//             log(inforargv, 'warning');
//             break;
//         default:
//             log('Invalid Operation!', 'error');
//             log(inforargv, 'error');
//     }
// }

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Title of the note to be added',
            demandOption: true,
            type: 'string',
        },
        noteBody: {
            describe: 'Note to be added',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        log('Adding a note.....', 'success');
        log(
            `Title: ${argv.title} with content ${argv.noteBody.slice(
                0,
                12
            )}...`,
            'success'
        );
        addNote(argv.title, argv.noteBody);
    },
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        log('Removing a note.....', 'warning');
        log(`Title: ${argv.title}`, 'warning');
        removeNotes(argv.title);
    },
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Title of note to be removed',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        log('Reading a note.....', 'success');
        log(`Title: ${argv.title}`, 'success');
        getNote(argv.title);
    },
});

yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function () {
        log('Listing out the notes.....', 'success');
        listAllNotes();
    },
});

yargs.parse();
