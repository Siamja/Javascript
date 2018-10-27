let message;

    getRandomArbitrary = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
}

let finish = getRandomArbitrary(20, 80);
console.log(finish);
       
    justeprix = () => {
        let essai = prompt("Allez donne un nombre frère");
        for(let i=1; i < 50; i++) {
        if (essai < finish) {
            alert("C'est plus");
            essai = prompt("Allez donne un nombre frère");
          }
        else if (finish < essai) {
            alert("C'est moins");
            essai = prompt("Allez donne un nombre frère");
        }

        else if (finish == essai) {
            alert("Bravo tu as Gagné mais t'as fait " + i + " coups frère");
            break;
        }
        else {
            let message4 = alert("TG");
            essai = prompt("DONNE UN NOMBRE PAS UN MOT BORDEL !");
        }
    }
}    
      justeprix ();
