var CreationTableauLangages = function () {
    let tab = ["Html", "CSS", "Java", "PHP"];
    return tab
    }
    
    var CreationTableauNombres = function () {
    let nombres = [0, 1, 2, 3, 4, 5];
    return nombres;
    }
    
    var RemplacementElement = function (langages) {
    langages.splice(2, 1, "Javascript");
    return langages;
    }
    
    var AjoutElementLangages = function (langages) {
    langages.push("Ruby", "Python");
    return langages;
    }
    
    var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2, -1);
    return nombres;
    }
    
    var SuppressionPremierElement = function (langages) {
    langages.splice(0, 1);
    return langages;
    }
    
    var SuppressionDernierElement = function (langages) {
    langages.splice(4, 1);
    return langages;
    }
    
    var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    
    return reseaux_sociaux = ["Facebook", "Twitter", "Google +", "Viadeo", "LinkedIn"];
    
    }
    
    var ConversionTableauChaine = function (langages) {
    return langages.toString();
    }
    
    var TriTableau = function (reseaux_sociaux) {
    
    reseaux_sociaux.sort();
    return reseaux_sociaux;
    }
    
    var InversionTableau = function (reseaux_sociaux){
    return reseaux_sociaux.reverse();
    }