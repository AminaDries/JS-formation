// function test(){
//     for(var i=0; i<4; i++){
//         console.log(i)
//     }
//     console.log(i) //java erreur (la variable est à l'interieur de la boucle) (var en js est de scope fontion)
// }
// test()

// function test2(){
//     for(let i=0; i<4; i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// test2()

/* Créer une fonction format text qui a une chaine de caractères comme argument et effectue les opérations suivantes:
    1-Remplace tout les espaces par des -.
    2-transforme toute la chaine en miniscule.
    3-Supprime tout les caractères indésirables: ex(Hello, devs we are in 2024 --> hellodevs-we-are-in-)
    indice: utiliser les expressions régulières 
*/

// function formatText(varchar) {

//     let remplacer = varchar.replace(/ /g, '-');
  
//     let min = remplacer.toLowerCase();
  
//     let supp = min.replace(/[^-a-z]/g, '');
  
//     return supp;
//   }
  
//   let Text = "Hello, devs we are in 2024";
//   let updatedText = formatText(Text);
//   console.log(updatedText); 
  

let fruits= ["Banane" , "Fraise" , "Cerise" , "Poire"]
const quelFruit = prompt("Vous désirez acheter quel fruit?")

let existe = false
let t = 0 
  for (let i in fruits){
    if(quelFruit ==fruits[i]){
      fruits[t] = '';

      alert('il existe')
      existe = true
    }
  }

  if(existe == false){
    document.writeln("le fruit que vous avez choisi n'existe pas")
  }

  let i = 0 
  for(i in fruits){
    document.write(fruits[i] + "<br/>")
  }

    
     
 