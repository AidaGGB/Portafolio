let form=document.querySelector("#formularioEventos")
let fe1=document.querySelector("#correoElec .feedback")
let fe2=document.querySelector("#numTel .feedback")

let correoc=/^[a-zA-Z0-9._-]+@\w+\.[a-zA-Z]+\.?\w+/
let telc=/^[0-9\s]+/

form.correo.addEventListener("input", e =>{

	if (correoc.test(e.target.value)) {
		form.correo.setAttribute("class","success")
		fe1.textContent=""
		fe1.style.setProperty("visibility","hidden")
		fe1.style.setProperty("opacity","0")
	}

	else{
		form.correo.setAttribute("class","error")	
		fe1.textContent="La estructura del correo no es valida"
		fe1.style.setProperty("visibility","visible")
		fe1.style.setProperty("opacity","1")
		}   
})


form.telefono.addEventListener("input", e =>{
	e.preventDefault()

	if (telc.test(e.target)) {
		form.telefono.setAttribute("class","success")
		fe2.textContent=""
		fe2.style.setProperty("visibility","hidden")
		fe2.style.setProperty("opacity","0")
	}

	else{
		form.telefono.setAttribute("class","error")	
		fe2.textContent="Numero mal ingresado"
		fe2.style.setProperty("visibility","visible")
		fe2.style.setProperty("opacity","1")
		}
})
	

form.addEventListener("submit", e => {
	e.preventDefault()

	let correo=document.getElementById("correo").value
	let telefono=document.getElementById("telefono").value
	let opcion=document.getElementById("opcion").value

	if (correo==0) {
		alert("El correo no ha sido diligenciado")
		document.formulario.mail.focus()
	}

	else if (telefono==0) {
		alert("El telefono no ha sido diligenciado")
		document.formulario.contacto.focus()
	}

	else if (opcion==0) {
		alert("Digite una opcion")
		document.formulario.contacto.focus()
	}

	else{
		form.submit()
		alert("Datos Enviados")
	}

})


