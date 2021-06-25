let form=document.querySelector("#formDatos")
let fedb1=document.querySelector("#campoNombre .feedback")
let fedb2=document.querySelector("#campoApellido .feedback")
let fedb3=document.querySelector("#campoIdentificacion .feedback")
let fedb4=document.querySelector("#campoTelefono .feedback")
let fedb5=document.querySelector("#campoCorreo .feedback")



let nombrec=/^[a-zA-Z]+/
let apec=/^[a-zA-Z]+/
let idcorrecto=/^[0-9]+/
let telc=/^[0-9\s]+/
let correoc=/^[a-zA-Z0-9._-]+@\w+\.[a-zA-Z]+\.?\w+/

form.nombres.addEventListener("input", e =>{

	if (nombrec.test(e.target.value)) {
		form.nombres.setAttribute("class","success")
		fedb1.textContent=""
		fedb1.style.setProperty("visibility","hidden")
		fedb1.style.setProperty("opacity","0")
	}

	else{
		form.nombres.setAttribute("class","error")	
		fedb1.textContent="Solo se admiten letras"
		fedb1.style.setProperty("visibility","visible")
		fedb1.style.setProperty("opacity","1")
		}   
})

form.apellidos.addEventListener("input", e =>{

	if (apec.test(e.target.value)) {
		form.apellidos.setAttribute("class","success")
		fedb2.textContent=""
		fe2db.style.setProperty("visibility","hidden")
		fe2db.style.setProperty("opacity","0")
	}

	else{
		form.apellidos.setAttribute("class","error")	
		fedb2.textContent="Solo se admiten letras"
		fedb2.style.setProperty("visibility","visible")
		fedb2.style.setProperty("opacity","1")
		}   
})


form.identificacion.addEventListener("input", e =>{

	if (idcorrecto.test(e.target.value)) {
		form.identificacion.setAttribute("class","success")
		fedb3.textContent=""
		fedb3.style.setProperty("visibility","hidden")
		fedb3.style.setProperty("opacity","0")
	}

	else{
		form.identificacion.setAttribute("class","error")	
		fedb3.textContent="Solo se admiten numeros"
		fedb3.style.setProperty("visibility","visible")
		fedb3.style.setProperty("opacity","1")
		}   
})


form.telefono.addEventListener("input", e =>{
	e.preventDefault()

	if (telc.test(e.target.value)) {
		form.telefono.setAttribute("class","success")
		fedb4.textContent=""
		fedb4.style.setProperty("visibility","hidden")
		fedb4.style.setProperty("opacity","0")
	}

	else{
		form.telefono.setAttribute("class","error")	
		fedb4.textContent="Solo numeros"
		fedb4.style.setProperty("visibility","visible")
		fedb4.style.setProperty("opacity","1")
		}
})

form.correo.addEventListener("input", e =>{

	if (correoc.test(e.target.value)) {
		form.correo.setAttribute("class","success")
		fedb5.textContent=""
		fedb5.style.setProperty("visibility","hidden")
		fedb5.style.setProperty("opacity","0")
	}

	else{
		form.correo.setAttribute("class","error")	
		fedb5.textContent="La estructura del correo no es valida"
		fedb5.style.setProperty("visibility","visible")
		fedb5.style.setProperty("opacity","1")
		}   
})



form.addEventListener("submit", e => {
	e.preventDefault()

	let nombres=document.getElementById("nombres").value
	let apellidos=document.getElementById("apellidos").value
	let identificacion=document.getElementById("identificacion").value
	let correo=document.getElementById("correo").value
	let telefono=document.getElementById("telefono").value
	let opcion=document.getElementById("opcion").value

	if (nombres==0) {
		alert("El nombre no ha sido diligenciado")
		document.formulario.nombres.focus()
	}

	else if (apellidos==0) {
		alert("El apellido no ha sido diligenciado")
		document.formulario.apellidos.focus()
	}

	else if (opcion==0) {
		alert("Digite una opcion")
		document.formulario.tipoid.focus()
	}

	else if (identificacion==0) {
		alert("La identificacion no ha sido diligenciado")
		document.formulario.identificacion.focus()
	}

	else if (telefono==0) {
		alert("El telefono no ha sido diligenciado")
		document.formulario.telefono.focus()
	}
	else if (correo==0) {
		alert("El correo no ha sido diligenciado")
		document.formulario.correo.focus()
	}
	
	else{
		form.submit()
		alert("Gracias por enviar sus datos")
	}

})
