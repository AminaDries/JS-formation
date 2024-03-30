/* Créer une fonction format text qui a une chaine de caractères comme argument et effectue les opérations suivantes:
    1-Remplace tous les espaces par des -.
    2-transforme toute la chaine en miniscule.
    3-Supprime tous les caractères indésirables: ex(Hello, devs we are in 2024 --> hellodevs-we-are-in-)
    indice: utiliser les expressions régulières 
*/

function formatText(varchar) {

    let remplacer = varchar.replace(/ /g, '-');
  
    let min = remplacer.toLowerCase();
  
    let supp = min.replace(/[^-a-z]/g, '');
  
    return supp;
  }
  
  let Text = "Hello, devs we are in 2024";
  let updatedText = formatText(Text);
  console.log(updatedText); 
  