const $form=document.querySelector('#frmvalidacion')
const $fe1=document.querySelector('#camponoDoc .feedback')
const $nom2=document.querySelector('#campoNombre .feedback')
const $ape2=document.querySelector('#campoApellido .feedback')
const $correo2=document.querySelector('#campoCorreo .feedback')
const $telefono2=document.querySelector('#campoTelefono .feedback')



const numero=/^[0-9]{5,15}/
const $name=/^[A-Za-zñÑáÁ ]{10,50}/
const lastname=/^[a-zA-Z ]{3,20}\s/
const email=/^[a-zA-Z0-9_.-]+@\w+/
const tel=/^\d{3}[ -]?\d[7]/

$form.Nombre.addEventListener('input',e=>{
e.preventDefault();

if($name.test(e.target.value)){
	$nom2.textContent="prueba"
	$form.Nombre.setAttribute("class","success")
	$nom2.style.setProperty("visibility","hidden")
	$nom2.style.setProperty("opacity","0")

}
else{
	$form.Nombre.setAttribute("class","error")	
	$nom2.textContent="No se admiten números y/o la longitud debe ser mínimo de 10 caracteres"
	$nom2.style.setProperty("visibility","visible")
	$nom2.style.setProperty("opacity","1")
}

})

$form.noDoc.addEventListener('input', e =>{
	e.preventDefault()


	if(numero.test(e.target.value)){
	$form.noDoc.setAttribute("class","success")
	$fe1.textContent=""
	$fe1.style.setProperty("visibility","hidden")
	$fe1.style.setProperty("opacity","0")

	}

	else{
	$form.noDoc.setAttribute("class","error")
	$fe1.textContent="El valor no es numérico y/o no tiene entre 5 y 15 caracteres"
	$fe1.style.setProperty("visibility","visible")
	$fe1.style.setProperty("opacity","1")
	}


})

$form.Apellido.addEventListener('input', e =>{
	e.preventDefault()

	if(lastname.test(e.target.value)){
	$form.Apellido.setAttribute("class","success")
	$ape2.textContent=""
	$ape2.setProperty("visibility","hidden")
	$ape2.setProperty("opacity","0")

	}

	else{
	$form.Apellido.setAttribute("class","error")
	$ape2.textContent="No es un valor valido"
	$ape2.style.setProperty("visibility","visible")
	$ape2.style.setProperty("opacity","1")
	}
})

$form.Correo.addEventListener('input', e =>{
	e.preventDefault()


	if(email.test(e.target.value)){
	$form.Correo.setAttribute("class","success")
	$correo2.textContent=""
	$correo2.setProperty("visibility","hidden")
	$correo2.setProperty("opacity","0")

	}

	else{
	$form.Correo.setAttribute("class","error")
	$correo2.textContent="No es un valor valido"
	$correo2.style.setProperty("visibility","visible")
	$correo2.style.setProperty("opacity","1")
	}


})

$form.telefono.addEventListener('input', e =>{
	e.preventDefault()


	if(tel.test(e.target.value)){
	$form.telefono.setAttribute("class","success")
	$telefono2.textContent=""
	$telefono2.style.setProperty("visibility","hidden")
	$telefono2.style.setProperty("opacity","0")

	}

	else{
	$form.telefono.setAttribute("class","error")
	$telefono2.textContent="El valor no es numérico y/o no tiene entre 5 y 15 caracteres"
	$telefono2.style.setProperty("visibility","visible")
	$telefono2.style.setProperty("opacity","1")
	}


})