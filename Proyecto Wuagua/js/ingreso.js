let form=document.querySelector('#ingreso')

//PARA Usuario
let feedback1=document.querySelector('#campoUsuario .feedback')
//PARA contraseña
let feedback2=document.querySelector('#campoContrasena .feedback')

//PRIMERA VALIDACIÓN CON EXPRESIÓN REGULAR PARA CORREO
let expresionusuario=/^[a-zA-ZÀ-ÿ\s]{1,40}$/
let expresioncontrasena=/^[a-zA-ZÀ-ÿ\s]{1,40}$/

// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO
//El add event listener es un oyente como en html no hice el onclick, aquí hago la función
// mi funcion  evento, funcion y flujo
form.usuario.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresionusuario.test(e.target.value)){
	form.usuario.setAttribute("class","success")
	feedback1.style.setProperty("visibility","hidden")
	feedback1.style.setProperty("opacity","0")
}
else{
	form.usuario.setAttribute("class","error")
	feedback1.textContent="El usuario no es válido"
	feedback1.style.setProperty("visibility","visible")
	feedback1.style.setProperty("opacity","1")

}
})

//SEGUNDA VALIDACIÓN PARA contrasena


form.contrasena.addEventListener('input',e =>{
	e.preventDefault()
if(expresioncontrasena.test(e.target.value)){
	form.contrasena.setAttribute("class","success")
	feedback2.style.setProperty("visibility","hidden")
	feedback2.style.setProperty("opacity","0")
}
else{
	form.contrasena.setAttribute("class","error")
	feedback2.textContent="La estructura de la contraseña no es válida"
	feedback2.style.setProperty("visibility","visible")
	feedback2.style.setProperty("opacity","1")
}
})


//EVENTO SOBRE EL SUBMIT, esto se hace porque no tengo en html la función definida

form.addEventListener('submit',e =>{
	e.preventDefault()
	let usuario=document.getElementById('usuario').value
	let contrasena=document.getElementById('contrasena').value
	


	if(usuario==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El usuario no ha sido diligenciado")
		document.formulario.nombrecito.focus()
	}
	else if(contrasena==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("La contraseña no ha sido diligenciada")
		document.formulario.passwordcito.focus()
	}

	else{
		//COMO HAY UN PREVENT DEFAULT, DEBO RETOMAR EL ENVÍO DEL FORMULARIO con el form submit
		form.submit()
		alert("Gracias por enviar sus datos")
	}


})