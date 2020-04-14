//////////////////////////////////////////////////////////////
//
//  Zadání 1. cvičení, notes.js
//
//////////////////////////////////////////////////////////////
const fs = require('fs')

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const existuje = (notes, title) => {
        return !notes.some((note) => {
            note.title == title
        });
    }

    if (title.length > 0 && existuje(notes, title)) {
        notes.push({title, body})
        saveNotes(notes)   
    }     
}

// 8. přepracovat simulaci na řádnou funkci podle komentáře
const removeNote = function (title) {
    const notes = loadNotes();
    const deletedIndex = notes.findIndex(
        (array) => {
            return array.title == title;
        }
    );
    const editedNotes = notes.filter((note) => note.title !== title);
    saveNotes(editedNotes);
}

// 9. dopracovat simulaci funkce pro čtení a výpis do konzole jedné poznámky 
const readNote = function(title) {
    const notes = loadNotes();
    const note = (notes, title) => {
        return notes.find((note) => note.title == title);
    }
    console.log(note(notes, title));
}

// 10. dopracujte simulaci funkci pro čtení a výpis do konzole všech poznámek
const listNotes = function() {
    const notes = loadNotes();
    notes.forEach((note) => {
       console.log('Title: ' + note.title + 'Body: ' + note.body);
    });
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote,

    // 11. doplnit export potřebných funkcí (bez ukládání a načítání ze souboru)
}
