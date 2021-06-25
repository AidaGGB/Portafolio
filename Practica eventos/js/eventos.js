function mensaje(){
	alert('La pagina se cargo completamente')
}

function muestraMensaje(){
	console.log("Gracias por pulsar el boton")
}

//document.getElementById('miboton').onclick=muestraMensaje //Evento semantico//

/*Es lo mismo si yo escribiera 
let buttom=document.getElementById("miboton")
buttom.onclick=muestraMensaje*/


//document.getElementById("mydiv").addEventListener("click", another_clic,false)
//document.getElementById("miboton").addEventListener("click",clic,true)

//function clic(){
		//alert("Ejecutado por la funcion boton")
//}

/*function another_clic(){
		alert("Bienvenido")
}*/


/*const buttom=document.getElementById("buttom")
	buttom.addEventListener('click',()=>{
	console.log("CLICK")
})*/

/*const button=document.getElementById("button")
	button.addEventListener('dblclick',()=>{
	console.log(" DOBLECLICK");
})*/

/*function pulsar(){
		alert("Bienvenido")
}
document.getElementById("pulsar").addEventListener("click", pulsar,false)



const button=document.getElementById("doble")
	button.addEventListener('dblclick',()=>{
	console.log("Ya se pueden retirar");
})*/


//evento mouse
/*const caja=document.getElementById('caja')
const button=document.getElementById("button")
const input=document.getElementById("input")

caja.addEventListener("mouseenter", ()=> {
	caja.style.background="green"
})

caja.addEventListener("mouseleave", ()=> {
	caja.style.background="red"
})*/


/*caja.addEventListener("mouseleave", ()=> {
	caja.classList.remove=("green")
	caja.classList.add=("red")
}) //otra forma de hacerlo llamando la clase del css todas las clases//

caja.addEventListener("mouseleave", ()=> {
	caja.classList.replace=("green" , "red")*/ //Hace un add y un remove al tiempo//
	
/*caja.addEventListener("mousedown",()=> {
	console.log("Usted pulso en la caja")
})

caja.addEventListener("mouseup",()=> {
	console.log("Usted pulso en la caja y la solto")
})

caja.addEventListener("mousemove",()=> {
	console.log("Usted esta moviendo el mouse")
})

input.addEventListener("keydown",()=> {
	console.log("Usted esta pulsando una letra")
})

input.addEventListener("keyup",()=> {
	console.log("Usted solto una tecla")
})

input.addEventListener("keypress",()=> {
	console.log("Usted esta pulsando una tecla")
})*/

const form=document.getElementById("form")
const input=document.getElementById("input")
const button=document.getElementById("button")
const link=document.getElementById('link')

input.addEventListener("keyup",(e)=>{
	console.log(input.value)
	console.log(e);// (e) no funciona en todos los navegadores, se usa event completo
	console.log(e.target.attributes[0].name)
})

/*window.addEventListener("click",(e)=>{
	console.log(e.key)//muestra la letra que pulse y lo eventos de esa tecla
	})*/

button.addEventListener("click",(e)=>{
	console.log(e)
})

const gallery=document.getElementById("gallery")

gallery.addEventListener("click",(e)=>{
	console.log(e.target.textContent);
	e.target.classList.add("red");

	})

link.addEventListener("click", (e) =>{
	console.log("prueba")
	e.preventDefault()
	})

form.addEventListener("submit", (e)=>{
	console.log("Se envio la informacion")
})



