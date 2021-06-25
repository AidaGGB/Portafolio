let form=document.querySelector('#frmvalidacion')

//PARA nombres
let feedback1=document.querySelector('#campoNombres .feedback')
//PARA correo
let feedback2=document.querySelector('#campoCorreo .feedback')

//PRIMERA VALIDACIÓN CON EXPRESIÓN REGULAR PARA CORREO
let expresionnombre=/^[a-zA-ZÀ-ÿ\s]{1,40}$/
let expresioncorreo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO
//El add event listener es un oyente como en html no hice el onclick, aquí hago la función
// mi funcion  evento, funcion y flujo
form.nombres.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresionnombre.test(e.target.value)){
	form.nombres.setAttribute("class","success")
	feedback1.style.setProperty("visibility","hidden")
	feedback1.style.setProperty("opacity","0")
}
else{
	form.nombres.setAttribute("class","error")
	feedback1.textContent="La estructura del nombre no es válida"
	feedback1.style.setProperty("visibility","visible")
	feedback1.style.setProperty("opacity","1")

}
})

//SEGUNDA VALIDACIÓN PARA TELEFONO


form.correo.addEventListener('input',e =>{
	e.preventDefault()
if(expresioncorreo.test(e.target.value)){
	form.correo.setAttribute("class","success")
	feedback2.style.setProperty("visibility","hidden")
	feedback2.style.setProperty("opacity","0")
}
else{
	form.correo.setAttribute("class","error")
	feedback2.textContent="La estructura del correo electrónico no es válida"
	feedback2.style.setProperty("visibility","visible")
	feedback2.style.setProperty("opacity","1")
}
})


//EVENTO SOBRE EL SUBMIT, esto se hace porque no tengo en html la función definida

form.addEventListener('submit',e =>{
	e.preventDefault()
	let nombres=document.getElementById('nombres').value
	let correo=document.getElementById('correo').value
	let asunto=document.getElementById('asunto').value
	let mensaje=document.getElementById('mensaje').value


	if(nombres==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El nombre no ha sido diligenciado")
		document.formulario.nombrecito.focus()
	}
	else if(correo==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El correo no ha sido diligenciado")
		document.formulario.emailcito.focus()
	}
	else if(asunto==0){
		alert("No ha escrito el asunto")
		document.formulario.quierohablar.focus()
	}
	else if(mensaje==0){
		alert("El mensaje no ha sido diligenciado")
		document.formulario.hablemos.focus()
	}

	else{
		//COMO HAY UN PREVENT DEFAULT, DEBO RETOMAR EL ENVÍO DEL FORMULARIO con el form submit
		form.submit()
		alert("Gracias por enviar su mensaje")
	}


})