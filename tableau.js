let t=["banane" , "pomme" , "cerise" , "fraise" ,"poire" ,  4]

console.log(typeof(t));
console.log (t.toString())
console.log(t.join(", "))

const cars = new Array ("mercedes" , "dacia" , "hunday")
let voiture = cars.pop()

console.log(cars , voiture);

let fruits = t.push("kiwi")
console.log(t);

t[0] = "pomme"
console.log(t); 

const women = ["Massiz" , "Amina" , "Tesmin"]
const men = ["Abdenour" , "Tarek"]
const multiple = women.concat(men) //concaténation
console.log(multiple);

// for (let i = 0 ; i<multiple.length; i++){
//     console.log("Bonjour " ,multiple[i])
// }

let result = multiple.forEach( function(item , index){
    console.log("Bonjour" ,item ,index)
})  //itération sur un tableau , une fonction callback est une fonction qui n'a pas de nom et qu'on déclare comme paramètre d'une fonction


let resultat = multiple.map(function(item){
   return "Bonjour " +item   // return
} )
console.log(resultat)

//exercice : Créer une fonction qui prend en paramètre un tableau en entier et qui return un tableau qui a uniquement les nombres pairs

let tab= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pair=tab.map(function(item){
   if(item % 2 ==0){
    return item
   }
   return 
})
console.log(pair)

let tableau=["hello" , "Algeria" , 213]

tableau.splice( 2 , 1 , "gateau" , "plat") //le premier parametre: à partir de quelle index , 2ème: combien d'elements à supprimer , 3ème et 4ème: element à ajouter
console.log(tableau)                       //toSpliced : créer une copie et la modifier
console.log(tableau.slice(2));
console.log(tableau.slice(1,3))
