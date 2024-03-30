const age=[2, 15 , 8 , 65, 47 , 74]

let result = age.filter(function(item){
    return item >18
})
console.log(result);

document.writeln(result)

let somme = age.reduce(function(total, value){
    return total + value

}, 5)
document.writeln(somme)

let majeur= age.every(function(value, index, array){
    return value >1
})
console.log(majeur)

let names= ["Amina" , "Massiz"]
let names2 = [...names]  //Créer une copie d'un tableau val tab1= val tab2 : destructuring
names2.push("Tesnim")

console.log(names, "names");
console.log(names2, "names2");
