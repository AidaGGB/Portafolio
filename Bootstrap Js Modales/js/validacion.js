document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

 usuarioc=/^[a-zA-Z0-9]{6}?/

 


function validarFormulario(e) {
  e.preventDefault();

  let usuario = document.getElementById('usuario').value;
  let clave = document.getElementById('clave').value;
  let correcto="aida"
  let contrasena=12345

  /*if(usuarioc.test(e.target.value)) {
    alert('No cumple con las caracteristicas');
    return;
  }*/

  if(usuario===correcto && clave===contrasena){
    alert('Bienvenido');
    return;
  }

  else{
    alert("Datos Invalidos");
    return;
  }


  /*if(usuario.length===6)
  let clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }*/

  /* 1. validar contraseña que tenga una mayuscula una minuscula y numeros y 
  de tamaño mayor a 6 caracteres.
  2. ingresar un usuario y contraseña predeterminada y realizar validación
  a. si es correcto que muestre la pagina.
  b. si es incorrecto que aperezca mensaje de datos errados ya sea usuario 
  o clase o los dos*/
 

  this.submit();
}