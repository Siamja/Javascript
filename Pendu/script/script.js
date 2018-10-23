let mot = ['B','O','N','J','O','U','R'], Lettres = [], Deviner = ['_','_','_','_','_','_','_',];
let k= 0, trouverLettre = 0;


function ComparMot(dev) {
    let trouver = 0;
    for (let i = 0; i < mot.length; i++) {
            if(dev == mot[i]){
                Deviner[i] = dev;
                trouver++;
                trouverLettre++;
            }
    }
    return trouver;
}
function guessLetter() {
    const Essai = 6 ;
    let dev = 0 ,trouver, trouverMot = 0, Erreur = 0;
        do{
                dev = prompt(`Entrez une lettre : (Essai = ${Essai - Erreur}) \n ${Deviner}`);
                console.log(dev);
                trouver = ComparMot(dev.toUpperCase());
                
                if (trouver > 0){
                    k++;
                    if(trouverLettre == mot.length){
                        trouverMot = 1;
                    }
                }else {
                    Erreur++;
                switch (Erreur) {
                    case 1:Tete();
                        break;
                    case 2 :Corps();
                        break;
                    case 3 : BrasG();
                        break;
                    case 4 : BrasD();
                        break;
                    case 5 : JambeG();
                        break;
                    case 6:JambeD();
                        break;
                
                    default:
                        break;
                }}
        }while(Erreur <= 6 && trouverMot == 0);
        
    if(Erreur > 6){
        alert("Fais un effort frère t'es gênant là. t'as trouvé que ${k} lettres.");
    }else {
        alert("Félicitations, tu as trouvé le mot recherché par le pendu du 6200 !!!!!")
    }
    
    console.log(Deviner);
} 

const c = document.getElementById("MonCanva");
ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(150,0);
ctx.lineTo(150,30);
ctx.stroke();
ctx.closePath();
function Tete() {
    ctx.beginPath();
    ctx.arc(150, 60, 30,0, 2*Math.PI), true;
    ctx.stroke();
    ctx.closePath();   
}
function Corps() {
    ctx.beginPath();
    ctx.moveTo(150,90);
    ctx.lineTo(150,200);
    ctx.stroke();
    ctx.closePath();   
}
function BrasG() {
    ctx.beginPath();
    ctx.moveTo(150,120);
    ctx.lineTo(120,180);
    ctx.stroke();
    ctx.closePath();   
}
function BrasD() {
    ctx.beginPath();
    ctx.moveTo(150,120);
    ctx.lineTo(180,180);
    ctx.stroke();
    ctx.closePath();   
}function JambeG() {
    ctx.beginPath();
    ctx.moveTo(150,200);
    ctx.lineTo(120,260);
    ctx.stroke();
    ctx.closePath();   
}
function JambeD() {
    ctx.beginPath();
    ctx.moveTo(150,200);
    ctx.lineTo(180,260);
    ctx.stroke();
    ctx.closePath();   
}