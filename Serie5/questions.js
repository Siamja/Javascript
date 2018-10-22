/**
 * Exercice sur les chaines de caractÃ¨res.
 * Trouvez la faÃ§on de faire la plus optimal.
 * Il peut y avoir plusieur faÃ§on de faire.
 */
var tailleString = function (texte) {
    return texte.length;
    }
    var remplaceECar = function (texte) {
    return texte.replace('e',' ');
    }
    var concatString = function (texte1, texte2) {
    return texte1+texte2;
    }
    var afficherCar5 = function (texte) {
        return texte[4];
    }
    var afficher9Car = function (texte) {
        return   texte.substring(0,9);
    }
    var majusculeString = function (texte) {
     return   texte.toUpperCase();
    }
    var minusculeString = function (texte) {
    return texte.toLowerCase();
    }
    var SupprEspaceString = function (texte) {
    return texte.trim();
    }
    var IsString = function (texte) {
        return typeof texte.valueOf() === 'string'
    }
    var AfficherExtensionString = function (texte) {
        let re = /(?:.([^.]+))?$/;
        let AfficherExtensionString = re.exec(texte)[1];
        return AfficherExtensionString;
    }
    var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
    }
    var InverseString = function (texte) {
        return texte.split('').reverse().join('');
    }
    
    /**
     * Exercices sur les nombres et les caluls mathématiques
     */
    var calculPuissance = function (x, y) {
        return Math.pow(x, y);
    }
    var valeurAbsolue = function (nombre) {
     return Math.abs(nombre);
    }
    var valeurAbsolueArray = function (array) {
    //     let result =[]
    //     for (i=0; i<array.length; i++){
    //     let abs = Math.abs(array[i]);
    //     result.push(abs);
    //     }
    //     return result
    // }
    return array.map(Math.abs);
    }
    var sufaceCercle = function (rayon) {
        return Math.round(Math.PI * (rayon *rayon))
    }
    var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);
    }
    var calculIMC = function (poids, taille) {
    let IMC = (poids/(taille*taille)).toFixed(2);
    return Number(IMC)
    }