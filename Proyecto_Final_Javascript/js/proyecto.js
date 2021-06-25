boton.addEventListener("click", e=>{
	e.preventDefault()

	let dia=document.getElementById("dia").value
	dia=parseInt(dia)
	let mes=document.getElementById("mes").value
	mes=parseInt(mes)

	let buscar=document.getElementById("buscar")


	if ((mes===3 && dia>=21) || (mes===4 && dia<=20)){
		texto=`<p> Su signo Zodiacal es ARIES </p>`
		buscar.innerHTML=texto
		buscar.style.setProperty("visibility", "visible")
		buscar.style.setProperty("opacity", "0.8")
		buscar.style.setProperty("transition","2s ease")
		}

		if((mes===4 && dia>=21) || (mes===5 && dia<=20)){
		texto=`<p> Su signo Zodiacal es TAURO </p>`
		buscar.innerHTML=texto
		buscar.style.setProperty("visibility", "visible")
		buscar.style.setProperty("opacity", "0.8")
		buscar.style.setProperty("transition","2s ease")
		}

			if((mes===5 && dia>=21) || (mes===6 && dia<=20)){
			texto=`<p> Su signo Zodiacal es GEMINIS </p>`
			buscar.innerHTML=texto
			buscar.style.setProperty("visibility", "visible")
			buscar.style.setProperty("opacity", "0.8")
			buscar.style.setProperty("transition","2s ease")
			}

				if((mes===6 && dia>=21) || (mes===7 && dia<=20)){
				texto=`<p> Su signo Zodiacal es CANCER </p>`
				buscar.innerHTML=texto
				buscar.style.setProperty("visibility", "visible")
				buscar.style.setProperty("opacity", "0.8")
				buscar.style.setProperty("transition","2s ease")
				}

					if((mes===7 && dia>=21) || (mes===8 && dia<=20)){
					texto=`<p> Su signo Zodiacal es LEO </p>`
					buscar.innerHTML=texto
					buscar.style.setProperty("visibility", "visible")
					buscar.style.setProperty("opacity", "0.8")
					buscar.style.setProperty("transition","2s ease")
					}

						if((mes===8 && dia>=21) || (mes===9 && dia<=20)){
						texto=`<p> Su signo Zodiacal es VIRGO </p>`
						buscar.innerHTML=texto
						buscar.style.setProperty("visibility", "visible")
						buscar.style.setProperty("opacity", "0.8")
						buscar.style.setProperty("transition","2s ease")
						}

							if((mes===9 && dia>=21) || (mes===10 && dia<=20)){
							texto=`<p> Su signo Zodiacal es LIBRA </p>`
							buscar.innerHTML=texto
							buscar.style.setProperty("visibility", "visible")
							buscar.style.setProperty("opacity", "0.8")
							buscar.style.setProperty("transition","2s ease")
							}

								if((mes===10 && dia>=21) || (mes===11 && dia<=20)){
									texto=`<p> Su signo Zodiacal es ESCORPIO</p>`
									buscar.innerHTML=texto
									buscar.style.setProperty("visibility", "visible")
									buscar.style.setProperty("opacity", "0.8")
									buscar.style.setProperty("transition","2s ease")
								}	

											if((mes===11 && dia>=21) || (mes===12 && dia<=20)){
											texto=`<p> Su signo Zodiacal es SAGITARIO</p>`
											buscar.innerHTML=texto
											buscar.style.setProperty("visibility", "visible")
											buscar.style.setProperty("opacity", "0.8")
											buscar.style.setProperty("transition","2s ease")
											
											}

											if((mes===12 && dia>=21) || (mes===1 && dia<=20)){
												texto=`<p> Su signo Zodiacal es CAPRICORNIO</p>`
												buscar.innerHTML=texto
												buscar.style.setProperty("visibility", "visible")
												buscar.style.setProperty("opacity", "0.8")
												buscar.style.setProperty("transition","2s ease")
											}

													if((mes===1 && dia>=21) || (mes===2 && dia<=19)){
														texto=`<p> Su signo Zodiacal es ACUARIO</p>`
														buscar.innerHTML=texto
														buscar.style.setProperty("visibility", "visible")
														buscar.style.setProperty("opacity", "0.8")
														buscar.style.setProperty("transition","2s ease")
														}

														if(((mes===2 && dia>=21) || (mes===2 && dia<=28)) || (mes===3 && dia<=19)){
															texto=`<p> Su signo Zodiacal es PISCIS</p>`
															buscar.innerHTML=texto
															buscar.style.setProperty("visibility", "visible")
															buscar.style.setProperty("opacity", "0.8")
															buscar.style.setProperty("transition","2s ease")
														}

})

