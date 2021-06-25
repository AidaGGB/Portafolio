
//conversion grados validacion formulario
/*document.addEventListener("DOMContentLoaded", function() { //mensaje no hay opcion valida
   document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

 const correcto=/^[A-Za-z]{5}\s[A-Za-záéíóú]{6}\s[A-Za-zñ]{4}/

function validarFormulario(e) {
  e.preventDefault();

  let opcion1=document.getElementById('optionde').value;
  let opcion2=document.getElementById('optiona').value;
  

  if(opcion1==="0") {
    alert('Seleccione una opcion');
    return;
  }

  if(opcion2==="0") {
    alert('Seleccione una opcion valida');
    return;
  }

  // this.submit();
}*/

//LImpiar en la calculadora el html y hacer el evento desde javas
//funcion que me trae objetos del dom para crear un evento y limpiar el HTML 
/*document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formulario").addEventListener('submit', realizar); 
});*/

//Segunda forma

/*document.addEventListener("DOMContentLoaded", function() { //cargar todo el contenido del objeto DOM y dento de este crear la funcion 
   const form=document.getElementById("formulario")//dentro creo la funcion que me llama el evento en este caso el submit, evento dentro de otro evento
   form.addEventListener('submit', realizar); 
});*/



function calcularLongitud(){
	let nombre=document.getElementById("nombre").value
	let text=nombre.length
	alert("La extension de la palabra "+nombre+"\n son "+text+" letras")
}

let convertirMay=function convertir(){
	let nombre=document.getElementById("nombre").value
	let mayuscula=nombre.toUpperCase()
	alert("En mayúscula "+mayuscula)
}

let convertirMin=function(){
	let nombre=document.getElementById("nombre").value
	let minuscula=nombre.toLowerCase()
	alert("En minuscula "+minuscula)
}

function extraerInicial(){
	let nombre=document.getElementById("nombre").value
	let inicial=nombre.substring(0,1)
	alert("Letra inicial "+inicial)
}

let unir=function(){
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let completo=nombre.concat(" ",apellido)
	alert("Nombre Completo "+completo)
}


let calcular=function(){
	let cantidad=document.getElementById("cantidad").value
	let opcion=document.getElementById("option").value
	
	let fijo=100
	let celular=200

	if(cantidad.length==0) {
    alert('Digite la cantidad de minutos');
    return;
	}

		if(opcion==="0") {
	    alert('Seleccione una opcion');
	    return;
	  	}

		if (opcion==="Fijo"){
			let resultado=cantidad*fijo
			alert("Total a pagar por su llamada a "+opcion+" es: "+resultado)
		}

			if(opcion==="Celular"){
				let resultado=cantidad*celular
				alert("Total a pagar por su llamada a "+opcion+" es: "+resultado)
			}
}




let convertir=function(){
	let grados=document.getElementById('grados').value
	grados=parseFloat(grados)
	let opcionde=document.getElementById('optionde').value
	let opciona=document.getElementById('optiona').value
	
	if (opcionde==="°C" && opciona==="°F") {
		conversion=(((9*grados)/5)+32)
		alert("Los "+grados+" grados de "+opcionde+" a "+opciona+" son "+conversion.toFixed(2))
		}

		if (opcionde==="°C" && opciona==="°K") {
			conversion=grados+273.15
			alert("Los "+grados+" grados de "+opcionde+" a "+opciona+" son "+conversion.toFixed(2))
			}

			if (opcionde==="°C" && opciona==="°C") {
				alert("Opcion no valida")
			}

				if (opcionde==="°F" && opciona==="°C") {
					conversion=((5*(grados-32))/9)
					alert("Los "+grados+" grados de "+opcionde+" a "+opciona+" son "+conversion.toFixed(2))
					}

					if (opcionde==="°F" && opciona==="°K") {
						conversion=((5*(grados-32))/9)+273.15
						alert("Los "+grados+" grados de "+opcionde+" a "+opciona+" son "+conversion.toFixed(2))
						}

						if (opcionde==="°F" && opciona==="°F") { 
							alert("Opcion no valida")
						}

							if (opcionde==="°K" && opciona==="°C") {
								conversion=grados-273.15
								alert("Los "+grados+" grados de "+opcionde+" a "+opciona+" son "+conversion.toFixed(2))
								}

								if (opcionde==="°K" && opciona==="°F") {
									conversion=((9*(grados-273.15))/5)+32
									alert("Los "+grados+" grados de "+opcionde+" a "+opciona+" son "+conversion.toFixed(2))
									}

									if (opcionde==="°K" && opciona==="°K") { 
										alert("Opcion no valida")
									}
									
}

//Primera forma de validar espacios vacios en un evento diferente en este caso tipo input
/*document.addEventListener("DOMContentLoaded", function() { //mensaje no hay opcion valida
   document.getElementById("form").addEventListener('input', validarDatos); 
});
	

 const valido=/^[0-9]{4}/

function validarDatos(e) {
  e.preventDefault();

 	let lado1=document.getElementById('lado1').value
	let lado2=document.getElementById('lado2').value
	let lado3=document.getElementById('lado3').value
  

  if(valido.test(lado1) || valido.test(lado2) || valido.test(lado3)){
		alert("el valor debe ser numerico y/o contener solo 4 caracteres")
		return;
	}
  this.input();
}*/

const form=document.querySelector('#form')
const cl1=document.querySelector('#campoLado1 .feedback')
const cl2=document.querySelector('#campoLado2 .feedback')
const cl3=document.querySelector('#campoLado3 .feedback')

const valido=/^[0-9]{4}/

form.lado1.addEventListener('input', e=>{
e.preventDefault();

if(valido.test(e.target.value)){
	form.lado1.setAttribute("class","error")	
	cl1.textContent="El valor debe ser numerico y/o contener solo 3 caracteres"
	cl1.style.setProperty("visibility","visible")
	cl1.style.setProperty("opacity","1")
}

else{
	form.lado1.setAttribute("class","success")
	cl1.textContent=""
	cl1.style.setProperty("visibility","hidden")
	cl1.style.setProperty("opacity","0")

}

})

form.lado2.addEventListener('input',e=>{
e.preventDefault();

if(valido.test(e.target.value)){
	form.lado2.setAttribute("class","error")	
	cl2.textContent="El valor debe ser numerico y/o contener solo 3 caracteres"
	cl2.style.setProperty("visibility","visible")
	cl2.style.setProperty("opacity","1")
}

else{
	form.lado2.setAttribute("class","success")
	cl2.textContent=""
	cl2.style.setProperty("visibility","hidden")
	cl2.style.setProperty("opacity","0")

}

})

form.lado3.addEventListener('input',e=>{
e.preventDefault();

if(valido.test(e.target.value)){
	form.lado3.setAttribute("class","error")	
	cl3.textContent="El valor debe ser numerico y/o contener solo 3 caracteres"
	cl3.style.setProperty("visibility","visible")
	cl3.style.setProperty("opacity","1")
}

else{
	form.lado3.setAttribute("class","success")
	cl3.textContent=""
	cl3.style.setProperty("visibility","hidden")
	cl3.style.setProperty("opacity","0")

}

})


let tipot=function(){

	let lado1=document.getElementById('lado1').value
	let lado2=document.getElementById('lado2').value
	let lado3=document.getElementById('lado3').value
	
	
	if((lado1.length==0) || (lado2.length==0) || (lado3.length==0)) {
		    alert('Digite un valor para calcular');
		 }

	
	else{

		if (lado1===lado2 && lado2===lado3 && lado3===lado1) {
				alert("Triangulo Equiltero")
			}

		if ((lado1===lado2 && lado2!==lado3)||(lado1!==lado2 && lado2===lado3)||(lado1!==lado2 && lado1===lado3)) {
					alert("Triangulo Isoceles")
				}

		if (lado1!==lado2 && lado2!==lado3) {
					alert("Triangulo Escaleno")
				}

	}
}


let realizar=function(){
	let num1=document.getElementById("num1").value
	num1=parseFloat(num1)
	let num2=document.getElementById("num2").value
	num2=parseFloat(num2)
	let opcion=document.getElementById("option").value
	
	let resultado

	if (opcion==="suma") {
		let resultado=num1+num2
		alert("la "+opcion+" entre "+num1+" y "+num2+" es "+resultado)
		}

		if (opcion==="resta") {
		let resultado=num1-num2
		alert("la "+opcion+" entre "+num1+" y "+num2+" es "+resultado)
		}

			if (opcion==="multiplicacion") {
			let resultado=num1*num2
			alert("la "+opcion+" entre "+num1+" y "+num2+" es "+resultado)
			}

				if (opcion==="division") {
				let resultado=num1/num2
				alert("la "+opcion+" entre "+num1+" y "+num2+" es "+resultado)
				}

				else{
					alert("No es una opcion valida")
				}
}