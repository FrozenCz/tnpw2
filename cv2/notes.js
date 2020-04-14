//////////////////////////////////////////////////////////////
//
//  Zadání 2. cvičení, notes.js
//
//  Dopracovat funkci pro načtení a výpis jedné poznámky (soubor notes.js), přičemž funkce bude poznámku hledat podle zadaného názvu
//  Dopracovat funkci pro výpis všech poznámek do konzole (soubor notes.js)
//  Dopracovat všechny funkce tak, aby v případě chyby (poznámku se zadaným názvem nelze vytvořit/smazat/vypsat) byl uživatel informován 
//  Přepsat definice funkcí do arrow zápisu
//
//////////////////////////////////////////////////////////////

const fs = require('fs')

// 1. přepište do arrow notace
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// 2. přepište do arrow notace
const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

// 3. přepište do arrow notace
const addNote = (title, body) => {
    const notes = loadNotes()
	
				// přepište do arrow notace
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({title, body})
        saveNotes(notes)
    }else{
        alert('zadaná název již existuje')
    }
}

// 5. přepište do arrow notace
const removeNote = (title) => {
    const notes = loadNotes()

				// přepište do arrow notace
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
    // 6. přidat chybovou hlášku
    }
}

// 7. přepište do arrow notace
const readNote = (title) => {
    const notes = loadNotes();
    const nalezenaPoznamka = notes.filter((note) => note.title === title)

    if(nalezenaPoznamka) {
        // 8. dopracovat nalezení poznámky s uvedeným názvem, použít arrow notaci, uvést i chybovou hlášku
        console.log('Vypisuji poznámku s názvem', title)
    } else {
        console.log('nenalezena poznámka')
    }
}

// 9. přepište do arrow notace
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => console.log(note));
    // 10.  dopracovat výpis všech poznámek do konzole, použít arrow notaci 
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}
