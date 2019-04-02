var textPrincipale = prompt(" veuillez inserer votre text: "), mot = prompt("le mot a recherché"),
resultat = 0,
textInseré = document.createElement('p'),
textAffiché = document.createTextNode(textPrincipale);
textInseré.id='text';
textInseré.appendChild(textAffiché);
document.body.appendChild(textInseré);
var textDansUnTableau = textPrincipale.split(' ');
textDansUnTableau = textDansUnTableau.filter(Boolean);
console.log(textDansUnTableau);
for(let i=0;i<textDansUnTableau.length;i++){
    if (mot===textDansUnTableau[i]) {
        resultat++;
        
    }
};   console.log(resultat);
var resultatAffiché = document.createElement('p'),
 resultatécrit=document.createTextNode("votre resultat: "+resultat);
 resultatAffiché.appendChild(resultatécrit);
 resultatAffiché.id="resultat";
 document.body.appendChild(resultatAffiché);

