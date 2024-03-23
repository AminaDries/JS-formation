var chaine = "hello";

//reverse chaine

function inverse() {
  return chaine.split("").reverse().join(""); //chaine ---> tableau---> chaine
  // split : convertir une chaine de caractère en un tableau
  // reverse : inverser un tableau
  //join: convertir un tableau en une chaine de caractère
}
console.log(inverse());

function supprimer(str) {
  let result = "";
  for (var i = 0; i <= str.length - 1; i++) {
    if (str[i] !== " ") {
      result += str[i]; //result = result + str(i)
    }
  }
  return result;
}
console.log(supprimer("hello world"));

var myStr = "Java C# Ruby";
console.table(myStr);
console.log("2" == 2);
console.log("2" === 2);
console.log(myStr.charAt(2)); //récupérer l'élément à l'index n+1
console.log(myStr.slice(2)); //couper à partir de l'index 3
console.log(myStr.slice(2, 6)); //couper de l'index 3 à 6
console.log(myStr.slice(-2)); // + il commnce du début par 0 // - il commence de la fin par -1

var ch = "      hello world         ";
console.log(ch.trim());
console.log(ch.trimStart()); //supp les vides au début
console.log(ch.trimEnd()); //supp les vides à la fin

//ES6 2015
function test1() {
  for (var i = 0; i < 4; i++) {
    // var est de scope function
    console.log(i);
  }
  console.log(i); // 0 1 2 3 4 erreur
}
test1();

function test2() {
  for (let i = 0; i < 4; i++) {
    //let est de scope bloc
    console.log(i);
  }
  console.log(i);
}
test2();
