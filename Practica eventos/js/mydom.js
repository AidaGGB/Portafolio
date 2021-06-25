//Formas de llamar un elemento en el DOM//


console.log(document.getElementById("mydom"))
console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelectorAll("p")[1])
console.log(document.querySelector(".miclase"))

//Accedera atributos//
console.log(document.querySelector("a").getAttribute("href"))
console.log(document.querySelector("a").setAttribute("href","www.google.com"))


const my=document.querySelector("#mydom")
my.style.setProperty("background-color","#0000FF")
my.style.setProperty("color","#FFFFFF")
my.style.setProperty("width","500px")

const mic=document.querySelector(".miclase")

let=text=`
	<h1>Esto es el DOM</h1>
	<p>El dom es .....></p>
	<p>El dom es .....></p>
`
mic.innerHTML=text

const perro=document.createElement("img")
perro.src="https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg"
document.body.appendChild(perro)
perro.style.setProperty("width","200px")

const div=document.createElement("div")
div.innerHTML="<img src='imagenes/perro.png' width='200px'>"
mic.appendChild(div)

div.remove