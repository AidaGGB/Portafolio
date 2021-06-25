let form=document.querySelector('#registro')


//PARA Nombre
let feedback1=document.querySelector('#campoNombre .feedback')

//PARA Apellido
let feedback2=document.querySelector('#campoApellido .feedback')

//PARA correo
let feedback3=document.querySelector('#campoCorreo .feedback')

//PARA contraseña
let feedback4=document.querySelector('#campoContrasena .feedback')

//PRIMERA VALIDACIÓN CON EXPRESIÓN REGULAR PARA CORREO
let expresionnombre=/^[a-zA-ZÀ-ÿ\s]{1,43}$/ 
let expresionapellido=/^[a-zA-ZÀ-ÿ\s]{1,43}$/
let expresioncorreo=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
let expresioncontrasena=/^(?!.(?:$))[A-Za-z0-9]{1,40}$/

// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO
//El add event listener es un oyente como en html no hice el onclick, aquí hago la función
// mi funcion  evento, funcion y flujo

//nombre//

form.nombre.addEventListener('input',event =>{
	event.preventDefault()
//Empiezo a validar la expresión regular Nombre
if(expresionnombre.test(event.target.value)){
	form.nombre.setAttribute("class","success")
	feedback1.style.setProperty("visibility","hidden")
	feedback1.style.setProperty("opacity","0")
}
else{
	form.nombre.setAttribute("class","error")
	feedback1.textContent="El nombre no es válido"
	feedback1.style.setProperty("visibility","visible")
	feedback1.style.setProperty("opacity","1")

}
})

//apellido//

form.apellido.addEventListener('input',event =>{
	event.preventDefault()

//Empiezo a validar la expresión regular Nombre

if(expresionapellido.test(event.target.value)){
	form.apellido.setAttribute("class","success")
	feedback2.style.setProperty("visibility","hidden")
	feedback2.style.setProperty("opacity","0")
}
else{
	form.apellido.setAttribute("class","error")
	feedback2.textContent="El apellido no es válido"
	feedback2.style.setProperty("visibility","visible")
	feedback2.style.setProperty("opacity","1")
}
})

//Correo//

form.correo.addEventListener('input',event =>{
	event.preventDefault()
if(expresioncorreo.test(event.target.value)){
	form.correo.setAttribute("class","success")
	feedback3.style.setProperty("visibility","hidden")
	feedback3.style.setProperty("opacity","0")
}
else{
	form.correo.setAttribute("class","error")
	feedback3.textContent="La estructura del correo no es válida"
	feedback3.style.setProperty("visibility","visible")
	feedback3.style.setProperty("opacity","1")
}
})

//SEGUNDA VALIDACIÓN contraseña//

form.contrasena.addEventListener('input',event =>{
	event.preventDefault()
if(expresioncontrasena.test(event.target.value)){
	form.contrasena.setAttribute("class","success")
	feedback4.style.setProperty("visibility","hidden")
	feedback4.style.setProperty("opacity","0")
}
else{
	form.contrasena.setAttribute("class","error")
	feedback4.textContent="La estructura de la contraseña no es válida"
	feedback4.style.setProperty("visibility","visible")
	feedback4.style.setProperty("opacity","1")
}
})

//EVENTO SOBRE EL SUBMIT, esto se hace porque no tengo en html la función definida

form.addEventListener('submit',event =>{
	event.preventDefault()
	let nombre=document.getElementById('nombre').value
	let apellido=document.getElementById('apellido').value
	let correo=document.getElementById('correo').value
	let contrasena=document.getElementById('contrasena').value


	if(nombre==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El nombre no ha sido diligenciado")
		document.formulario.nombrecito.focus()
	}

    if(apellido==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El apellido no ha sido diligenciado")
		document.formulario.apellidito.focus()
	}
    if(correo==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El correo no ha sido diligenciado")
		document.formulario.emailcito.focus()
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