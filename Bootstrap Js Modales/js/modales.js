function areaCirculo(){
	let radio=document.getElementById('radio').value
	let resultado=document.getElementById('resultado')

	let area=3.14*radio*radio
	resultado.innerHTML=`El area del Circulo es: ${area.toFixed(2)}`

}

function areaCuadrado(){
	let lado=document.getElementById('lado').value
	let resultado2=document.getElementById('resultado2')

	let area=lado*lado
	resultado2.innerHTML=`El area del Cuadrado es: ${area.toFixed(2)}`

}

function areaRectangulo(){
	let ancho=document.getElementById('ancho').value
	let alto=document.getElementById('alto').value
	
	let resultado3=document.getElementById('resultado3')

	let area=ancho*alto
	resultado3.innerHTML=`El area del Rectangulo es: ${area.toFixed(2)}`

}

function areaTriangulo(){
	let base=document.getElementById('base').value
	let altura=document.getElementById('altura').value
	
	let resultado4=document.getElementById('resultado4')

	let area=base*altura/2
	resultado4.innerHTML=`El area del Triangulo es: ${area.toFixed(2)}`

}