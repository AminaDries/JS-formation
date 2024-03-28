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
