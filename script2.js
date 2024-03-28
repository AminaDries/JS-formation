function test(){
    for(var i=0; i<4; i++){
        console.log(i)
    }
    console.log(i) //java erreur (la variable est à l'interieur de la boucle) (var en js est de scope fontion)
}
test()

function test2(){
    for(let i=0; i<4; i++){
        console.log(i)
    }
    console.log(i)
}
test2()