//////////////////////////////////////////////////////////////
//
//  Zadání 1. cvičení, app.js
//
//////////////////////////////////////////////////////////////
//
// 1. Inicializujte projekt: 
//    Ujistěte se, že aktuální adresář v okně terminálu je totožný s adresářem, kde se nachází soubor app.js
//    V okně terminálu spusťtě příkaz npm init -y
//    
//    Výsledkem je popis projektu v souboru package.json
//
// 2. na stránkách npmjs.com najdete modul yargs a číslo jeho současné verze
// 3. v terminálu instalujte modul yargs příkazem npm i yargs@15.1.0
//    Výsledkem je nový podadresář node_modules a soubor package-lock.json, jakož i aktualizovaný package.json
//
// 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes')

/////////////////////////////////////////////////////////////////////////
//
// Aplikaci chceme pouštět příkazem node app.js add či node app.js remove a podobně
// Pro parsování vstup z konzole použijeme yargs
//
// 5. Pro argumenty příkazové řádky jako je add a remove vytvoříme pomocí příkazu yargs.command podporu:
//    Dopracujte podle vzoru pro příkaz add a podle komentářů podporu pro argumenty remove, read, list
//
// 6. po dopracování otestujte aplikaci s různými argumenty
//    - příkaz z příkazové řádky node app.js --help vypíše nápovědu k aplikaci
//    - příkaz z příkazové řádky node app.js add --title="seznam" --body="jedna, dva tři" má do souboru notes.json přidat objekt
//
//////////////////////////////////////////////////////////////////////////



// VZOR: podpora příkazu add
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
    
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }    
})

// podpora remove
// Poznámku vyhledáme podle názvu, tzn., příkaz remove budeme spouštět s jedním argumentem. Proto v části builder bude jen specifikace title
yargs.command({
    command: 'remove',
    describe: 'Smazání poznámky',
    builder: {
        title: {
            describe: 'název poznámky',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
         notes.removeNote(argv.title)
    } 
})

// podpora read
// Poznámku vyhledáme podle názvu
yargs.command({
    command: 'read',
    describe: 'cterni poznamky',
    builder: {
        title: {
            describe: 'název poznámky',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

// podpora list
// Tento příkaz nepotřebuje další argumenty
yargs.command({
    command: 'list',
    describe: 'seznam poznamek',
    builder: {},
    handler: function () {
        notes.listNotes()
    }
    // dopracovat části describe, builder, handler
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
