//////////////////////////////////////////////////////////////
//
//  Zadání 2. cvičení, app.js
//
//  Přepis definice funkcí do arrow zápisu
//
//////////////////////////////////////////////////////////////


const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Přidání poznámky',
    builder: {
        title: {
            describe: 'název poznámky',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'text poznámky',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Vymazání poznámky',
    builder: {
        title: {
            describe: 'název poznámky',
            demandOption: true,
            type: 'string'
        }
    },
    // 2. přepište do arrow notace
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'read',
    describe: 'Výpis poznámky podle názvu',
    builder: {
        title: {
            describe: 'název poznámky',
            demandOption: true,
            type: 'string'
        }
    },
    // 3. přepište do arrow notace
    handler: (argv) => notes.readNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'Výpis všech poznámek',
    //builder: {},
    // 4. přepište do arrow notace
    handler: () => notes.listNotes()
})


// TESTOVÁNÍ:
// příkaz z příkazové řádky:
//    node app.js add --title="seznam" --body="jedna, dva tři" 
//    node app.js add --title="mujSeznam" --body="čtyři, pět, šest" 
//    node app.js read --title="seznam"
//    node app.js list                                                                 
//    node app.js remove --title="mujSeznam"
//    node app.js list                                                                 


yargs.parse()
