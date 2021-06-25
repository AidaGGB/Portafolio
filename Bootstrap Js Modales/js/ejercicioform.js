/*function calcularedad(){
	let edad=document.getElementById('edad').value
	if (edad>=18) {
			alert("Usted tiene"+edad+" años" +" \n Bienvenido")

	}
	else{
		alert("Usted tiene"+edad+" años" +" \n No puede ingresar")
	}
}*/



function validar(){
	let usuario=document.getElementById("usuario").value
	let contraseña=document.getElementById("contraseña").value
	let correcto="aidag"
	let correctoc="12345"
	console.log("El usuario es ",usuario)
	console.log("La contraseña es ",contraseña)
	
	if (usuario===correcto && contraseña===correctoc) {
		alert("Bienvenido")
	}

	else{
		alert("Ingreso Invalido")
	}

}
	


	