let form=document.querySelector('#ingreso')


//PARA Nombre
let feedback2=document.querySelector('#campoNombre .feedback')

//PARA APELLIDO
let feedback3=document.querySelector('#campoApellido .feedback')

//PARA Documento
let feedback4=document.querySelector('#campoDocumento .feedback')

//PARA teléfono
let feedback5=document.querySelector('#campoTel .feedback')

//PARA Dirección
let feedback6=document.querySelector('#campoDireccion .feedback')

//PARA Edad
let feedback7=document.querySelector('#campoEdad .feedback')

//PARA Perfil
let feedback9=document.querySelector('#campoPerfil .feedback')

//PARA Tarifa
let feedback10=document.querySelector('#campoTarifa .feedback')


//PRIMERA VALIDACIÓN CON EXPRESIÓN REGULAR PARA CORREO
let expresionnombre=/^(?!.* (?: |$))[A-Z][a-z ]{1,40}$/
let expresionapellido=/^[a-zA-ZÀ-ÿ\s]{1,43}$/
let expresiondocumento=/^\d{4,14}$/
let expresiontelefono=/^\d{7,14}$/
let expresiondireccion=/^[a-zA-Z0-9\s#-]+$/
let expresionedad=/^\d{2}$/
let expresionperfil=/^[a-zA-ZÀ-ÿ\s]{1,150}$/
let expresiontarifa=/^\d{1,10}$/


// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO
//El add event listener es un oyente como en html no hice el onclick, aquí hago la función
// mi funcion  evento, funcion y flujo
form.nombre.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresionnombre.test(e.target.value)){
	form.nombre.setAttribute("class","success")
	feedback2.style.setProperty("visibility","hidden")
	feedback2.style.setProperty("opacity","0")
}
else{
	form.nombre.setAttribute("class","error")
	feedback2.textContent="La estructura del nombre no es válida"
	feedback2.style.setProperty("visibility","visible")
	feedback2.style.setProperty("opacity","1")

}
})

//SEGUNDA VALIDACIÓN PARA apellido


form.apellido.addEventListener('input',e =>{
	e.preventDefault()
if(expresionapellido.test(e.target.value)){
	form.apellido.setAttribute("class","success")
	feedback3.style.setProperty("visibility","hidden")
	feedback3.style.setProperty("opacity","0")
}
else{
	form.apellido.setAttribute("class","error")
	feedback3.textContent="El apellido no es válido"
	feedback3.style.setProperty("visibility","visible")
	feedback3.style.setProperty("opacity","1")
}
})
//Tercera validación para Documento
// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO

form.documento.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresiondocumento.test(e.target.value)){
	form.documento.setAttribute("class","success")
	feedback4.style.setProperty("visibility","hidden")
	feedback4.style.setProperty("opacity","0")
}
else{
	form.documento.setAttribute("class","error")
	feedback4.textContent="La estructura del documento no es válida"
	feedback4.style.setProperty("visibility","visible")
	feedback4.style.setProperty("opacity","1")

}
})


//Cuarta validación para Teléfono
// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO

form.telefono.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresiontelefono.test(e.target.value)){
	form.telefono.setAttribute("class","success")
	feedback5.style.setProperty("visibility","hidden")
	feedback5.style.setProperty("opacity","0")
}
else{
	form.telefono.setAttribute("class","error")
	feedback5.textContent="La estructura del teléfono no es válida"
	feedback5.style.setProperty("visibility","visible")
	feedback5.style.setProperty("opacity","1")

}
})
//Quinta validación para Dirección
// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO

form.direccion.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresiondireccion.test(e.target.value)){
	form.direccion.setAttribute("class","success")
	feedback6.style.setProperty("visibility","hidden")
	feedback6.style.setProperty("opacity","0")
}
else{
	form.direccion.setAttribute("class","error")
	feedback6.textContent="La estructura de la dirección no es válida"
	feedback6.style.setProperty("visibility","visible")
	feedback6.style.setProperty("opacity","1")

}
})
//Sexta validación para Edad
// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO

form.edad.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresionedad.test(e.target.value)){
	form.edad.setAttribute("class","success")
	feedback7.style.setProperty("visibility","hidden")
	feedback7.style.setProperty("opacity","0")
}
else{
	form.edad.setAttribute("class","error")
	feedback7.textContent="La edad ingresada no es válida"
	feedback7.style.setProperty("visibility","visible")
	feedback7.style.setProperty("opacity","1")

}
})
//Séptima validación para perfil
// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO

form.perfil.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresionperfil.test(e.target.value)){
	form.perfil.setAttribute("class","success")
	feedback9.style.setProperty("visibility","hidden")
	feedback9.style.setProperty("opacity","0")
}
else{
	form.perfil.setAttribute("class","error")
	feedback9.textContent="La infomación ingresada no es válida, un máximo de 150 caracteres"
	feedback9.style.setProperty("visibility","visible")
	feedback9.style.setProperty("opacity","1")

}
})

//octava validación para Tarifa
// ACCEDO A FORM Y LUEGO AL ID DEL INPUT, OSEA AL QUE LE VOY A HACER EL EVENTO

form.valor.addEventListener('input',e =>{
	e.preventDefault()
//Empiezo a validar la expresión regular
if(expresiontarifa.test(e.target.value)){
	form.valor.setAttribute("class","success")
	feedback10.style.setProperty("visibility","hidden")
	feedback10.style.setProperty("opacity","0")
}
else{
	form.valor.setAttribute("class","error")
	feedback10.textContent="La infomación ingresada no es válida"
	feedback10.style.setProperty("visibility","visible")
	feedback10.style.setProperty("opacity","1")

}
})

//EVENTO SOBRE EL SUBMIT, esto se hace porque no tengo en html la función definida

form.addEventListener('submit',e =>{
	e.preventDefault()
	let foto=document.getElementById('pic').value
	let nombre=document.getElementById('nombre').value
	let apellido=document.getElementById('apellido').value
	let documento=document.getElementById('tipodoc')


/*(!document.querySelector('input[name="gender"]:checked'))*/
	


	if(foto==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("La foto no ha sido subida")
		document.formulario.nombrecito.focus()
	}
	else if(nombre==0){
		// Voy a traer los NAMES, no los ID DE LOS FORMULARIO Y CORREO PARA QUE HAGA FOCUs
		alert("El nombre no ha sido diligenciado")
		document.formulario.emailcito.focus()
	}
	else if(apellido==0){
		alert("El apellido no ha sido diligenciado")
		document.formulario.quierohablar.focus()
	}
	else if(documento==0){
		alert("No ha escogido el tipo de documento")
		document.formulario.hablemos.focus()
	}

	else{
		//COMO HAY UN PREVENT DEFAULT, DEBO RETOMAR EL ENVÍO DEL FORMULARIO con el form submit
		form.submit()
		alert("Gracias por enviar su mensaje")
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