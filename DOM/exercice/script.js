function ajouter() {
    const titreInput = document.getElementById("titre");
    const contenuInput = document.getElementById("contenu");
    
    const titre = titreInput.value.trim(); // Utilisation de trim() pour supprimer les espaces vides
    const contenu = contenuInput.value.trim();

    if (titre === '' || contenu === '') {
        alert('Veuillez remplir tous les champs.');
        return; // Sortie de la fonction si un champ est vide
    }

    const resultDiv = document.getElementById("result");
    const divContainer = document.createElement("div");

    const paragraphe = document.createElement("p");
    const boutonSupprimer = document.createElement("button");

    paragraphe.textContent = `Titre: ${titre} - Contenu: ${contenu}`;
    boutonSupprimer.textContent = "Supprimer";

    boutonSupprimer.addEventListener("click", function() {
        resultDiv.removeChild(divContainer);
    });

    divContainer.appendChild(paragraphe);
    divContainer.appendChild(boutonSupprimer);
    resultDiv.appendChild(divContainer);

    titreInput.value = "";
    contenuInput.value = "";
}


//exo2

function calculeAge(dateN){
    const date = new Date();
    const année = date.getFullYear()
    const mois = date.getMonth()+1
    const jour = date.getDay()

    const [anneeN, moisN, jourN] = dateN.split('-').map(Number);

    let age = année - anneeN
   
    if (mois < moisN || mois == moisN && jour < jourN ){
        return age-1
    }else{
        return age 
    }
} 

const dateN = "2002-03-25"
const age = calculeAge(dateN)
console.log(age)