const fs = require('fs');
const log = require('./chalking');

loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync(`${__dirname}/notes.json`);
        const notesjson = JSON.parse(notesBuffer.toString());
        return notesjson;
    } catch (error) {
        log(error, 'error');
        return [];
    }
};

const saveNotes = (newNotes) => {
    const notesUpdated = JSON.stringify(newNotes);
    fs.writeFileSync(`${__dirname}/notes.json`, notesUpdated);
    console.log('Notes updated!');
};

exports.getNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.findIndex(
        (ele) => ele.title.toLowerCase() === title.toLowerCase()
    );
    if (findNote !== -1) {
        log(
            `Task ${notes[findNote].title}: ${notes[findNote].body}`,
            'success'
        );
    } else {
        log('No notes of specific title', 'error');
    }
};

exports.addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.findIndex(
        (ele) => ele.title.toLowerCase() === title.toLowerCase()
    );
    if (duplicateNotes === -1) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
    } else {
        log(
            'Note of this title already exists.Updating that notes...',
            'warning'
        );

        notes[duplicateNotes].body = body;
        saveNotes(notes);
    }
};

exports.removeNotes = (title) => {
    const notes = loadNotes();
    const findNote = notes.findIndex(
        (ele) => ele.title.toLowerCase() === title.toLowerCase()
    );
    if (findNote !== -1) {
        notes.splice(findNote, 1);
        saveNotes(notes);
    } else {
        log('No notes of specific title', 'error');
    }
};

exports.listAllNotes = () => {
    const notes = loadNotes();
    notes.forEach((ele, index) => {
        log(`Task(${index + 1}) (${ele.title}): ${ele.body}`);
    });
    if (notes.length === 0) {
        log('Your notebar is empty', 'warning');
    }
};
