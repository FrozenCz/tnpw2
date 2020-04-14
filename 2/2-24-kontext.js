//////////////////////////////////////////////////////////////
//
//  Ukázky z 2. přednášky, 2-24-kontext.js
// 
//////////////////////////////////////////////////////////////
const osoba = {
    jmeno: 'Petr', 
    vek: 22, 
    obor: 'ai',
    predmety: ['tnpw2', 'osw', 'pjkt2'],

    // ANO - preferovaná zkrácená verze
    vypisJmeno() {	
	    console.log(this.jmeno)},

    // ANO - plná verze
    vypisVek: function(){
        console.log(this.vek)},

    // NE - this = undefined
    vypisObor: () => {	
        console.log(this.obor)},

    vypisPredmety() {
        console.log(this.jmeno, ' a jeho studium: ')
        // ANO - this = objekt osoba; hodnotu this potřebujeme v procházení pole zachovat
        this.predmety.forEach((predmet) => {
            console.log(this.jmeno, 'studuje', predmet)
        })
    
        // NE - plná verze nebude fungovat správně 
        this.predmety.forEach(function (predmet) {
            console.log(this.jmeno, 'studuje', predmet)
        })
    }
}

osoba.vypisJmeno()
osoba.vypisVek()
osoba.vypisObor()
osoba.vypisPredmety()
