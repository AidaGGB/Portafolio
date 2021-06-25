/*const $form=document.querySelector('#formulario')
const $pal=document.querySelector('#campoPalabra .feedback')

$correcto=/^[a-zA-ZáéíóúÁÉÍÓÚ]{5,10}/

$form.palabra.addEventListener('input',e=>{
e.preventDefault();
if($correcto.test(e.target.value)){
  $form.palabra.setAttribute("class","success")
  $pal.textContent="prueba"
  $pal.style.setProperty("visibility","hidden")
  $pal.style.setProperty("opacity","0")

}
else{
  $form.palabra.setAttribute("class","error")  
  $pal.textContent="No se admiten números y/o la longitud debe ser mínimo 5 y maximo de 10 caracteres"
  $pal.style.setProperty("visibility","visible")
  $pal.style.setProperty("opacity","1")
}

})*/


/*document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

 const correcto=/^[a-zA-ZáéíóúÁÉÍÓÚ]{5,10}/

function validarFormulario(e) {
  e.preventDefault();

  let palabra= document.getElementById('palabra').value;
  

  if(correcto.test(palabra)) {
    alert('Cumple con las caracteristicas');
    return;
  }

  else{
    alert("Datos Invalidos");
    return;
  }

  this.submit();
}*/

/*document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

 const correcto=/^[A-Za-z]{5}\s[A-Za-záéíóú]{6}\s[A-Za-zñ]{4}/

function validarFormulario(e) {
  e.preventDefault();

  let palabra= document.getElementById('palabra').value;
  

  if(correcto.test(palabra)) {
    alert('Cumple con las caracteristicas');
    return;
  }

  else{
    alert("Datos Invalidos");
    return;
  }

  this.submit();
}*/

document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formulario").addEventListener('submit', validarDireccion); 
});

 const correcto=/^[A-Za-z\s0-9#]+$/

function validarDireccion(e) {
  e.preventDefault();

  let direccion= document.getElementById('direccion').value;
  

  if(correcto.test(direccion)) {
    alert('Cumple con las caracteristicas');
    return;
  }

  else{
    alert("No cumple con las caracteristicas de una direccion");
    return;
  }

  this.submit();
}