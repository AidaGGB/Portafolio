boton.addEventListener("click", e=>{
	e.preventDefault()

	let nombre=document.getElementById("Nombre").value
	nombre=parseInt(nombre)
	let apellido=document.getElementById("Apellido").value
	apellido=parseInt(apellido)

	let correcto=document.getElementById("correcto")


	if (nombre===1 && apellido===3){
		texto=`<p> La respuesta es correcta <img src="imagenes/check.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility", "visible")
		correcto.style.setProperty("opacity", "1")
		correcto.style.setProperty("transition","3s ease")
	}

	else if(nombre===2 && apellido===1 ){
		texto=`<p> La respuesta es correcta <img src="imagenes/check.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility","visible")
		correcto.style.setProperty("opacity","1")
		correcto.style.setProperty("transition","3s ease")
	}

	else if(nombre===3 && apellido===2 ){
		texto=`<p> La respuesta es correcta <img src="imagenes/check.png"></p>`
		correcto.innerHTML=texto
		correcto.style.setProperty("visibility", "visible")
		correcto.style.setProperty("opacity", "1")
		correcto.style.setProperty("transition", "3s ease")
	}

	else{
		alert("No es una opcion valida")
	}

})

num3.addEventListener("click", e=>{
	e.preventDefault()

	let respuesta=document.getElementById("acertijo")

	texto=`<p> La respuesta es incorrecta <img src="imagenes/cancelar.png"></p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")
})

num1.addEventListener("click", e=>{
	e.preventDefault()

	let respuesta=document.getElementById("acertijo")
	texto=`<p> La respuesta es incorrecta <img src="imagenes/cancelar.png"></p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")
})

num4.addEventListener("click", e=>{
	e.preventDefault()

	let respuesta=document.getElementById("acertijo")
	texto=`<p> La respuesta es correcta <img src="imagenes/check.png"></p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("visibility", "visible")
		respuesta.style.setProperty("opacity", "1")
		respuesta.style.setProperty("transition", "3s ease")
})


refran.addEventListener("click", e=>{
	e.preventDefault()

	let opcion=document.querySelector("input[name='opcion']:checked").value
	opcion=parseInt(opcion)

	let respuesta=document.getElementById("respuesta")

	if (opcion===1) {
		texto=`<p> La respuesta es correcta <img src="imagenes/check.png"></p>`
		respuesta.innerHTML=texto
		respuesta.setAttribute("class","prueba")//2 forma llamando un atributo (class) e incluirlo en el HTML
		}

	else{
		texto=`<p> La respuesta es correcta <img src="imagenes/cancelar.png"></p>`
		respuesta.innerHTML=texto
		respuesta.classList("prueba")//3 forma creando el estilo e incluyo el class
	}

})




pista.addEventListener("click", e=>{
	e.preventDefault()

	let adivinanza=document.getElementById("adivinanza")
	let ocultar=document.getElementById("solucion")

	texto=`<p> S _ G _ N _ _ S <img src="imagenes/pista.png"></p>`
	adivinanza.innerHTML=texto
		adivinanza.style.setProperty("visibility", "visible")
		adivinanza.style.setProperty("opacity", "1")
		adivinanza.style.setProperty("transition", "3s ease")
		ocultar.style.setProperty("visibility", "hidden")

	})

solucion.addEventListener("click", e=>{
	e.preventDefault()

	let solucionado=document.getElementById("solucionado")
	let ocultar=document.getElementById("pista")
		
	texto=`<p> SEGUNDOS <img src="imagenes/correcto1.png"></p>`
	solucionado.innerHTML=texto
		solucionado.style.setProperty("visibility", "visible")
		solucionado.style.setProperty("opacity", "1")
		solucionado.style.setProperty("transition", "3s ease")
		ocultar.style.setProperty("visibility", "hidden")

			
	})


