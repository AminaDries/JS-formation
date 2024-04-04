function changetext(){
    const text=document.getElementById("Bonjour")
    console.log(text);
    text.innerHTML="Hello everybody"  //récupère toute la balise
}

function add(){
    const div=document.getElementById("new")
    let paragraphe=document.createElement("p")
    let text = document.createTextNode("this is me")
    paragraphe.appendChild(text)
    div.appendChild(paragraphe)

}

function changestyle(){
    const paragraph = document.getElementById("changerstyle")
    paragraph.className ="para"
}

function changecolor(){
    const txt = document.querySelector(".changercolor").style.backgroundColor="purple"
}

function changeimage(){
    const image = document.querySelector(".changerimage").src="./chat.jpg"

}