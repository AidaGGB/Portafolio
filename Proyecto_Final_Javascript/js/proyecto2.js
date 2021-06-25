botonjuntos.addEventListener("click", e=>{
	e.preventDefault()

	let signo1=document.getElementById("signo1").value
	let signo2=document.getElementById("signo2").value
	

	let compatible=document.getElementById("compatible")


	if (signo1==="aries" && signo2==="aries"){
		texto=`<p> Aries es un signo cardinal, y dos personas nacidas bajo este signo comparten esa característica en común; con ello, no es muy difícil deducir que presentan, más o menos, los mismos rasgos, para bien y para mal. Generalmente, aborrecen y aprecian las mismas cosas, así que, en principio, suelen congeniar estupendamente. En el ámbito profesional tienen talento para el mando, aunque cuando tienen que trabajar conjuntamente deben intentar no imponer su voluntad a la otra parte, pues si lo hacen se perderán en unas luchas de poder improductivas. No obstante, si se disponen a colaborar, resultará prácticamente imposible pararles los pies. </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","2s ease")
		}

		if ((signo1==="aries" && signo2==="tauro")  || (signo1==="tauro" && signo2==="aries")){
		texto=`<p> Aries y Tauro son un signo cardinal y fijo por ese orden, lo que supone que se encuentran en posiciones relativamente opuestas para todo. En general, si aprenden a ser complementos mutuos, su unión puede resultar muy provechosa, ya que lo que le falta a una parte, la otra lo suple completamente. En el ámbito profesional su actitud suele ser diferente; Aries es quien propone y Tauro quien dispone, por eso, y especialmente en este caso, su relación tiende a ser muy fructífera. Si Aries representa la fuerza y a las ideas renovadoras </p>`
		compatible.innerHTML=texto
		compatible.style.setProperty("visibility", "visible")
		compatible.style.setProperty("opacity", "1")
		compatible.style.setProperty("transition","2s ease")
		}

			if ((signo1==='aries' && signo2==='geminis') || (signo1==='geminis' && signo2==='aries')){
			texto=`<p> Aries y Géminis son un signo fijo con un signo mutable respectivamente, y aunque son bien diferentes, cada cual suele suponer una suerte para la otra parte. Generalmente se entienden, ya que comparten una cualidad innata a su personalidad: no abandonan la niñez, por muchos años que cumplan. En el momento en el que estas dos personas deciden poner toda su voluntad y esfuerzo para conseguir una empresa en común, son una de las mejores asociaciones que pueden darse, pues poseen esas dosis de talento y pasión necesarias para alcanzar el éxito más clamoroso.</p>`
			compatible.innerHTML=texto
			compatible.style.setProperty("visibility", "visible")
			compatible.style.setProperty("opacity", "1")
			compatible.style.setProperty("transition","2s ease")
			}

				if ((signo1==='aries' && signo2==='cancer') || (signo1==='cancer' && signo2==='aries')){
				texto=`<p> Aries es un signo cardinal y Cáncer también, así que en su relación suelen existir algunas tiranteces. Generalmente son como polos paralelos que, en cuanto se ponen uno enfrente del otro, se repelen; parece que siguen una ley de naturaleza dispar, aunque también es susceptible de excepciones. Si es necesario que trabajen conjuntamente, -ya que si tienen la opción de decidir, posiblemente la rechacen-, la competencia se convertirá en su caballo de batalla, y nunca mejor dicho Son personas muy dominantes que no suelen ceder a favor de nadie, pero también adoran el éxito, así que puede existir una pequeña posibilidad de colaboración entre ambas.</p>`
				compatible.innerHTML=texto
				compatible.style.setProperty("visibility", "visible")
				compatible.style.setProperty("opacity", "1")
				compatible.style.setProperty("transition","2s ease")
				}

					if ((signo1==='aries'&& signo2==='leo') || (signo1==='leo' && signo2==='aries')){
					texto=`<p> Aries y Leo forman una unión en la que se combina un signo cardinal, Aries, y un signo fijo, como Leo. En este caso, sus relaciones serán esencialmente buenas la mayoría de las veces, pues la tolerancia y consideración suelen estar presentes en su relación, a pesar de tener personalidades bastante diferentes. En el ámbito profesional, sus asociaciones suelen ser convenientes, pues a sus capacidades se une un fabuloso talento creativo que dará sus frutos. El punto negro de su relación es la tendencia que presentan a mandar, pero como son personas sensatas, acostumbran a solucionar esta cuestión de la mejor manera para las dos partes.</p>`
					compatible.innerHTML=texto
					compatible.style.setProperty("visibility", "visible")
					compatible.style.setProperty("opacity", "1")
					compatible.style.setProperty("transition","2s ease")
					}

						if ((signo1==='aries' && signo2==='virgo') || (signo1==='virgo' && signo2==='aries')){
						texto=`<p> Aries y Virgo pertenecen a un signo cardinal, Aries, y mutable, Virgo. Generalmente, sus expectativas de un futuro en común suelen ser buenas, aunque dependiendo del terreno en el que se relacionen; es decir, en el terreno profesional forman una alianza casi perfecta. Cuando Aries y Virgo se deciden a realizar un trabajo en común, los resultados, en la mayoría de los casos, son muy positivos, pues son personas de probada valía en su actividad laboral, además, cada cual aporta las cualidades necesarias y que complementan a la otra parte a la hora del trabajo.</p>`
						compatible.innerHTML=texto
						compatible.style.setProperty("visibility", "visible")
						compatible.style.setProperty("opacity", "1")
						compatible.style.setProperty("transition","2s ease")
						}

							if ((signo1==='aries' && signo2==='libra') || (signo1==='libra' && signo2==='aries')){
							texto=`<p> Aries y Libra son dos signos cardinales juntos, así que sus relaciones serán algo enredadas, pero no por ello malas ni incompatibles. Generalmente suelen ser personas muy razonables que saben reconocer lo bueno de alguien que merece la pena cuando lo tienen delante. En el terreno profesional puede que se produzca cierta oposición, sobre todo al principio, puesto que adoran mandar sobre todas las cosas. De todas maneras, rápidamente se darán cuenta de que si siguen así, lo único que conseguirán será un estrepitoso fracaso. Además, estos dos signos pronto aprenderán que la colaboración es la alternativa más beneficiosa para ambos.</p>`
							compatible.innerHTML=texto
							compatible.style.setProperty("visibility", "visible")
							compatible.style.setProperty("opacity", "1")
							compatible.style.setProperty("transition","2s ease")
							}

								if ((signo1==='aries' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='aries')){
								texto=`<p> Aries se encuentra dentro de los signos cardinales y Escorpio hace lo mismo dentro de los signos fijos; con esta situación, sus relaciones serán buenas, pero con matices; es decir, no son personas discordantes, pero se llevarán mejor o peor dependiendo de sus ascendentes y de su voluntad. Si se encuentran en el ámbito profesional, conocen perfectamente las cualidades de la otra parte a la hora de desempeñar una labor en común, por eso se suele desarrollar una relación de colaboración muy fuerte. Consciente o inconscientemente saben que necesitan prestarse ayuda; además, nunca lo olvidarán. </p>`
								compatible.innerHTML=texto
								compatible.style.setProperty("visibility", "visible")
								compatible.style.setProperty("opacity", "1")
								compatible.style.setProperty("transition","2s ease")
								}

									if ((signo1==='aries' && signo2==='sagitario') ||  (signo1==='sagitario' && signo2==='aries')){
									texto=`<p> Aries y Sagitario forman una combinación de un signo cardinal y un signo fijo respectivamente. En general, sus relaciones suelen ser satisfactorias en cualquiera de los ámbitos en que se relacionen, ya que suelen presentar unas cualidades y maneras muy parecidas. En el terreno profesional comparten dos características que hacen que su asociación sea muy positiva: un idealismo conductor a la hora de convertir en realidad aquello en lo que creen, y una sinceridad transparente. No serán capaces de traicionar a la persona con quien trabajen.</p>`
									compatible.innerHTML=texto
									compatible.style.setProperty("visibility", "visible")
									compatible.style.setProperty("opacity", "1")
									compatible.style.setProperty("transition","2s ease")
									}

										if ((signo1==='aries' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='aries')){
										texto=`<p> Aries con Capricornio presenta una combinación en la que comparten el mismo rasgo: ambos son signos cardinales. Esto suele suponer que, en sus relaciones, casi siempre existirá alguna que otra tensión, aunque comparten algo en común que resulta muy alentador: adoran el éxito. En el mundo del trabajo, su unión suele ser productiva, siempre y cuando persigan el mismo fin; es decir, que su asociación sea para conseguir bienes materiales. Con esta premisa serán capaces de hacer los mayores esfuerzos de respeto y comprensión, con tal de no fracasar. </p>`
										compatible.innerHTML=texto
										compatible.style.setProperty("visibility", "visible")
										compatible.style.setProperty("opacity", "1")
										compatible.style.setProperty("transition","2s ease")
										}

											if ((signo1==='aries' && signo2==='acuario') || (signo1==='acuario' && signo2==='aries')){
											texto=`<p> En el plano sentimental, el signo de Aries y el de Acuario forman una pareja fuera de serie, tal vez en ocasiones se comporten como si se odiasen, pero en el fondo, se comprenden, y mucho. Saben quererse, perdonarse, disfrutar en común, perder, ganar, reír, llorar, etc. Además, Aries y Acuario son tan amantes de la acción que más que dos, parecen diez, o cien personas a la vez. Su relación está rodeada de un halo de excentricidad que, a todas luces, ¡es genial!</p>`
											compatible.innerHTML=texto
											compatible.style.setProperty("visibility", "visible")
											compatible.style.setProperty("opacity", "1")
											compatible.style.setProperty("transition","2s ease")
											}

												if ((signo1==='aries' && signo2==='piscis') || (signo1==='piscis' && signo2==='aries')){
												texto=`<p> Aries es un signo comprendido dentro de los signos cardinales y Piscis es un signo incluido en los mutables; en esta relación en concreto, aunque son personas bastante opuestas en sus respectivas personalidades y gustos, comparten un respeto mutuo digno de alabanzas. Si coinciden en el ámbito laboral o cuando deciden unirse para un proyecto en común, la situación suele liarse un poco, ya que no aceptan órdenes, y además, tampoco tienen demasiada prudencia a la hora de hacer gastos. Precisamente por eso, es frecuente que discutan por dinero, y que su seguridad económica esté constantemente pendiendo de un hilo.</p>`
												compatible.innerHTML=texto
												compatible.style.setProperty("visibility", "visible")
												compatible.style.setProperty("opacity", "1")
												compatible.style.setProperty("transition","2s ease")
												}

													if (signo1==='tauro' && signo2==='tauro'){
													texto=`<p> Dos Tauro son dos signos fijos unidos, y en este caso concreto, sus relaciones suelen ser agradables, ya que, cuando se miran, es como mirar su reflejo, más o menos. Además, sus caracteres suelen ser muy semejantes, así que no importa demasiado que sus gustos sean parejos. Si dos personas Tauro deciden poner en común sus planes de futuro profesional, el resultado puede ser muy positivo o muy negativo; ya que por sus características personales, son personas bastante moderadas y poco entusiastas del riesgo. Debido a esto, a pesar de trabajar lo que sea necesario, si se equivocan en sus proyectos, les cuesta a más no poder dar marcha atrás o rehacer lo hecho.</p>`
													compatible.innerHTML=texto
													compatible.style.setProperty("visibility", "visible")
													compatible.style.setProperty("opacity", "1")
													compatible.style.setProperty("transition","2s ease")
													}

														if ((signo1==='tauro' && signo2==='geminis') || (signo1==='geminis' && signo2==='tauro')){
														texto=`<p> Tauro y Géminis forman una unión en la que se mezcla un signo fijo, Tauro, con un signo mutable, Géminis. En general, sus relaciones son beneficiosas en la mayoría de los casos, ya que aunque son personas diferentes, suelen coincidir en sus planteamientos vitales. Si tienen que trabajar codo con codo o si deciden emprender un proyecto de colaboración, los efectos suelen ser bastante buenos en general. A Tauro le falta ese punto de inventiva que a Géminis le sobra, además del ánimo que también caracteriza a este último signo. También a Géminis le falta ese toque de reflexión y de seguridad que Tauro posee. En esta situación, sus personalidades suelen resultar muy complementarias</p>`
														compatible.innerHTML=texto
														compatible.style.setProperty("visibility", "visible")
														compatible.style.setProperty("opacity", "1")
														compatible.style.setProperty("transition","2s ease")
														}

															if ((signo1==='tauro' && signo2==='cancer') || (signo1==='cancer' && signo2==='tauro')){
															texto=`<p> Tauro y Cáncer forman una pareja en la que se mezclan un signo fijo, Tauro, y un signo cardinal, Cáncer. Generalmente sus relaciones son muy buenas, ya que son personas que por su personalidad no tienen demasiados problemas de compatibilidad, casi al contrario. Su asociación en el ámbito profesional suele ser muy positiva, pues poseen cualidades notables a la hora de desempeñar sus labores. Además, se compenetran con una facilidad sorprendente, pues no suelen pisarse los pies. Si Tauro se encarga de la parte administradora, Cáncer se encarga de la organizadora, y así con todo lo que hacen.</p>`
															compatible.innerHTML=texto
															compatible.style.setProperty("visibility", "visible")
															compatible.style.setProperty("opacity", "1")
															compatible.style.setProperty("transition","2s ease")
															}

																if ((signo1==='tauro' && signo2==='leo') || (signo1==='leo' && signo2==='tauro')){
																texto=`<p> Tauro y Leo son dos signos que pertenecen al grupo de los llamados fijos; en este caso, sus relaciones suelen ser más o menos complicadas dependiendo de sus respectivos ascendentes, pues generalmente tienen que poner mucha voluntad para conseguir llevarse medianamente bien. En el plano laboral sus relaciones son tensas, por eso, y si no queda otra alternativa, trabajarán conjuntamente, pero si pueden elegir, preferirán mantenerse a distancia. El signo de Leo es capaz de agotar la paciencia de Tauro, y Tauro a su vez, puede sacar de sus casillas a Leo con su obstinación innata. De todas maneras, son personas inteligentes.</p>`
																compatible.innerHTML=texto
																compatible.style.setProperty("visibility", "visible")
																compatible.style.setProperty("opacity", "1")
																compatible.style.setProperty("transition","2s ease")
																}

																	if ((signo1==='tauro' && signo2==='virgo') || (signo1==='virgo' && signo2==='tauro')){
																	texto=`<p> Tauro forma parte de los signos llamados fijos y Virgo de los signos llamados mutables, pero aunque en apariencia parezca que esa fijeza y esa mutabilidad resultan discordantes, en realidad no es así. De todas maneras, sus ascendentes y voluntad representan un papel importante a favor o en contra de su unión. Sus relaciones en el ámbito laboral suelen ser poco propicias debido, sobre todo, a su excesiva precaución; algo que puede hacerles perder las oportunidades que se presenten. Sin embargo, la mayor parte de las personas Tauro y Virgo son muy laboriosas </p>`
																	compatible.innerHTML=texto
																	compatible.style.setProperty("visibility", "visible")
																	compatible.style.setProperty("opacity", "1")
																	compatible.style.setProperty("transition","2s ease")
																	}

																		if ((signo1==='tauro'&& signo2==='libra') || (signo1==='libra' || signo2==='tauro')){
																		texto=`<p> Tauro es uno de los signos llamados fijos del zodíaco, y Libra forma parte de los signos cardinales. Generalmente sus relaciones serán controvertidas en la mayoría de los casos, aunque tampoco se puede negar que la atracción que sienten suele ser muy potente, les guste o no. Su unión en el ámbito laboral resulta normalmente beneficiosa, ya que se esfuerzan lo que sea necesario para conseguir las metas fijadas. Por el contrario, el rasgo más negativo de su asociación es la tendencia que presenta el signo de Libra a ejercer el mando, algo que a veces da al traste con todos los esfuerzos.</p>`
																		compatible.innerHTML=texto
																		compatible.style.setProperty("visibility", "visible")
																		compatible.style.setProperty("opacity", "1")
																		compatible.style.setProperty("transition","2s ease")
																		}

																			if ((signo1==='tauro' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='tauro')){
																			texto=`<p> Tauro y Escorpio se encuadran dentro de los signos fijos en la rueda zodiacal, y generalmente se profesan una admiración mutua formidable. Se conocen casi a la perfección y saben que, cuando creen en algo, nada ni nadie puede hacer que cambien de opinión. Si se encuentran en el trabajo o si deciden unir sus fuerzas para un proyecto en común, el resultado suele ser muy provechoso en diferentes sentidos; tanto Tauro como Escorpio trabajan duro para alcanzar sus metas, y unido a ellas viene el éxito económico.</p>`
																			compatible.innerHTML=texto
																			compatible.style.setProperty("visibility", "visible")
																			compatible.style.setProperty("opacity", "1")
																			compatible.style.setProperty("transition","2s ease")
																			}

																				if ((signo1==='tauro' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='tauro')){
																				texto=`<p> Tauro es un signo de los que se llaman fijos, y Sagitario es uno de los mutables dentro de la rueda del zodíaco; particularmente con esta combinación, sus relaciones serán bastante positivas en la mayoría de los casos, a pesar de o gracias a lo diferentes que son en general. Sus relaciones profesionales suelen ser prósperas, ya que tanto Sagitario como Tauro se esfuerzan constantemente para conseguir alcanzar aquello que se proponen, sobre todo, si se trata de capital. </p>`
																				compatible.innerHTML=texto
																				compatible.style.setProperty("visibility", "visible")
																				compatible.style.setProperty("opacity", "1")
																				compatible.style.setProperty("transition","2s ease")
																				}

																					if ((signo1==='tauro' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='tauro')){
																					texto=`<p> Tauro forma parte de los signos fijos del zodíaco, y Capricornio de los cardinales; generalmente, suelen ser personalidades muy compatibles en cualquiera de los aspectos en que se relacionen. Además, sienten una simpatía innata que hace que mantengan una comunicación espléndida. En el ámbito profesional, sus relaciones suelen ser de las mejores, pues tanto Tauro como Capricornio tienen un sentido del trabajo muy desarrollado, y unido a él, ¿cómo no?, se encuentra el económico. Estos dos signos tienen muy clara la meta desde el principio y no dejarán que nada ni nadie les impida llegar a ella.  </p>`
																					compatible.innerHTML=texto
																					compatible.style.setProperty("visibility", "visible")
																					compatible.style.setProperty("opacity", "1")
																					compatible.style.setProperty("transition","2s ease")
																					}

																						if ((signo1==='tauro' && signo2==='acuario') || (signo1==='acuario' && signo2==='tauro')){
																						texto=`<p> Tauro y Acuario son signos que se encuadran dentro de los llamados fijos en la rueda zodiacal. Sus relaciones en esta combinación suelen ser complejas, sobre todo debido a que tienen personalidades muy distintas, aunque sus propios ascendentes y voluntad representan un rol determinante. Sus relaciones profesionales pueden ser bastante buenas, siempre y cuando se propongan una finalidad determinada y corta. Generalmente, cada cual tiene unas características que puede enriquecer sus objetivos y relaciones.</p>`
																						compatible.innerHTML=texto
																						compatible.style.setProperty("visibility", "visible")
																						compatible.style.setProperty("opacity", "1")
																						compatible.style.setProperty("transition","2s ease")
																						}

																							if ((signo1==='tauro' && signo2==='piscis') || (signo1==='piscis' && signo2==='tauro')){
																							texto=`<p> Tauro es un signo fijo, y Piscis es un signo de carácter mutable; aunque a pesar de este antagonismo, sus relaciones serán buenas la mayoría de las veces y casos. Inexplicablemente son personas que hagan lo que hagan, de algún modo, se entienden y aprueban. Cuando coinciden en el ámbito profesional, sus relaciones son algo peores que en el resto de las posibles relaciones. De todos modos, los resultados son positivos, puesto que sus cualidades resultan complementarias. </p>`
																							compatible.innerHTML=texto
																							compatible.style.setProperty("visibility", "visible")
																							compatible.style.setProperty("opacity", "1")
																							compatible.style.setProperty("transition","2s ease")
																							}

																								if (signo1==='geminis' && signo2==='geminis'){
																								texto=`<p> Dos signos de Géminis conforman una relación en la que se une el mismo rasgo: la mutabilidad. Precisamente por eso, y por pertenecer al mismo signo, son muy compatibles, ya que en general tendrán las mismas particularidades personales, y por tanto, un comportamiento semejante. En la esfera de profesional, sus relaciones se desarrollarán dentro de un clima de autonomía que reconforta y a la vez resulta muy productivo. Además, una de las características del signo de Géminis es su capacidad para elaborar nuevos proyectos innovadores, pues suelen ser personas con cualidades innatas para el desempeño de labores en que se necesite facilidad para formar nuevas ideas y proyectos.</p>`
																								compatible.innerHTML=texto
																								compatible.style.setProperty("visibility", "visible")
																								compatible.style.setProperty("opacity", "1")
																								compatible.style.setProperty("transition","2s ease")
																								}

																									if ((signo1==='geminis' && signo2==='cancer') || (signo1==='cancer' && signo2==='geminis')){
																									texto=`<p> Géminis forma parte de los signos mutables y Cáncer de los cardinales; así que la relación entre uno y otro propenderá a ser un tanto difícil. Aparentemente, puede parecer que son personas bastante afines, pero a la hora de la verdad no es así, aunque comparten algunas pautas en la vida. Sus relaciones en el ámbito laboral suelen ser fructíferas, ya que se complementan con cierta facilidad. Géminis se caracteriza por tener una capacidad para generar ideas realmente sorprendente, algo que a Cáncer le falta. Este último signo posee una capacidad planificadora y organizativa inédita para Géminis, quien sigue a su aire y ni se entera.</p>`
																									compatible.innerHTML=texto
																									compatible.style.setProperty("visibility", "visible")
																									compatible.style.setProperty("opacity", "1")
																									compatible.style.setProperty("transition","2s ease")
																									}

																										if ((signo1==='geminis' && signo2==='leo') || (signo1==='leo' && signo2==='geminis')){
																										texto=`<p> Géminis se incluye dentro de los signos llamados mutables y Leo de los signos de carácter fijo; a pesar de ello, su compatibilidad generalmente es alta. Las relaciones que desarrollan suelen caracterizarse por su fuerte espíritu de colaboración, aunque sus enfrentamientos, cuando se dan, resultan estrepitosos. En el ámbito profesional, si estos dos signos se organizan para llevar a cabo un proyecto en común, los resultados suelen ser beneficiosos. El signo de Leo tiende a ejercer sus acciones dentro de la esfera administrativa y planificadora, algo perfecto para Géminis, quien por su parte, prefiere dedicarse a otras labores menos materiales y más ideales e intelectuales.</p>`
																										compatible.innerHTML=texto
																										compatible.style.setProperty("visibility", "visible")
																										compatible.style.setProperty("opacity", "1")
																										compatible.style.setProperty("transition","2s ease")
																										}

																											if ((signo1==='geminis' && signo2==='virgo') || (signo1==='virgo' && signo2==='geminis')){
																											texto=`<p> Géminis y Virgo forman una unión en la que se suma la misma característica: ambos son signos mutables en la rueda zodiacal. Generalmente, sus uniones serán tornadizas y resultarán más o menos compatibles dependiendo del ámbito en que se desenvuelvan sus relaciones. Sus relaciones laborales suelen ser mejores que el resto de las que se pueden dar. Cuando Géminis y Virgo trabajan codo con codo, no resulta nada raro que establezcan unos lazos de lealtad realmente admirables. Además, no competirán entre sí, muy al contrario, suelen trabajar mano a mano para conseguir sus objetivos.</p>`
																											compatible.innerHTML=texto
																											compatible.style.setProperty("visibility", "visible")
																											compatible.style.setProperty("opacity", "1")
																											compatible.style.setProperty("transition","2s ease")
																											}

																												if ((signo1==='geminis'&& signo2==='libra') || (signo1==='libra' && signo2==='geminis')){
																												texto=`<p> Géminis se encuadra dentro de los signos mutables del zodíaco, Libra hace lo mismo dentro de los cardinales, y su compatibilidad en la mayoría de los casos resulta muy alta. Son personas de características heterogéneas, pero sus relaciones suelen estar envueltas dentro de un equilibrio enriquecedor para ambos signos. Cuando se unen en el ámbito laboral, sus relaciones suelen ser admirables, pues tienen una mente muy creativa que les ayuda a conseguir los fines marcados. Además, Géminis tiene una notable capacidad para la creación de proyectos de cara al futuro, pero materializarlos ya es otro cantar, de eso se encarga Libra.</p>`
																												compatible.innerHTML=texto
																												compatible.style.setProperty("visibility", "visible")
																												compatible.style.setProperty("opacity", "1")
																												compatible.style.setProperty("transition","2s ease")
																												}

																													if ((signo1==='geminis' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='geminis')){
																													texto=`<p> Géminis forma parte de los signos mutables de la rueda del zodiaco, y Escorpio, en cambio, forma parte de los fijos. Generalmente sus relaciones son un tanto complicadas, aunque precisamente por ello, también muy interesantes. De todas maneras, sus ascendentes tendrán mucho que ver en este sentido. En el terreno profesional, si Géminis y Escorpio se unen para llevar a cabo un proyecto, el resultado normalmente es imprevisible. Escorpio no suele soportar de buen grado que Géminis pase tanto de las actividades propias de la organización, quien, a su vez, ve su libertad pendiendo de un hilo con alguien como Escorpio al lado.</p>`
																													compatible.innerHTML=texto
																													compatible.style.setProperty("visibility", "visible")
																													compatible.style.setProperty("opacity", "1")
																													compatible.style.setProperty("transition","2s ease")
																													}

																														if ((signo1==='geminis' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='geminis')){
																														texto=`<p> Géminis con Sagitario conforman una relación en la que se unen dos signos pertenecientes a los llamados mutables en la rueda zodiacal. Concretamente en este caso, su compatibilidad suele ser alta, pero no exenta de problemas que la puedan hacer peligrar. Sus relaciones profesionales resultan positivas, aunque por a su carácter voluble será posible que no perduren en el tiempo; en cualquier caso, mientras tanto serán satisfactorias, ya que tanto una parte como la otra poseen una inteligencia notable que, cuando se suma, el resultado es doblemente mejor, incluso extraordinario. </p>`
																														compatible.innerHTML=texto
																														compatible.style.setProperty("visibility", "visible")
																														compatible.style.setProperty("opacity", "1")
																														compatible.style.setProperty("transition","2s ease")
																														}

																															if ((signo1==='geminis' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='geminis')){
																															texto=`<p> Géminis y Capricornio forman una unión en la que confluyen un signo mutable como Géminis y un signo cardinal como Capricornio. Sus relaciones resultan, en general, bastante compatibles a pesar de las características tan personales y diversas de cada uno de los signos. En el terreno del trabajo sus relaciones suelen ser provechosas para ambos signos. Géminis aporta unas características fundamentales a la hora de desarrollar proyectos, como su capacidad para dar a luz nuevas ideas, pero lo que es ejecutarlos no se le da demasiado bien; es ahí donde entra en juego Capricornio, quien se encarga de organizar.</p>`
																															compatible.innerHTML=texto
																															compatible.style.setProperty("visibility", "visible")
																															compatible.style.setProperty("opacity", "1")
																															compatible.style.setProperty("transition","2s ease")
																															}

																																if ((signo1==='geminis' && signo2==='acuario') || (signo1==='acuario' && signo2==='geminis')){
																																texto=`<p> Géminis con Acuario forma una relación en que se combina un signo mutable, en el caso de Géminis, con un signo fijo, como es Acuario. Aunque aparentemente exista oposición entre esa mutabilidad y esa fijeza, en realidad no es para tanto y suelen equilibrarse con sus diferencias. Cuando se relacionan en el ámbito laboral pueden conseguir unos magníficos resultados dependiendo del campo al que se dediquen, pues son personas con cualidades innatas para la creación, pero la administración no es uno de sus fuertes. Si se dedican al mundo del arte y la cultura, la educación o de la investigación, les irá muy bien.</p>`
																																compatible.innerHTML=texto
																																compatible.style.setProperty("visibility", "visible")
																																compatible.style.setProperty("opacity", "1")
																																compatible.style.setProperty("transition","2s ease")
																																}

																																	if ((signo1==='geminis' && signo2==='piscis') || (signo1==='piscis' && signo2==='geminis')){
																																	texto=`<p> Géminis y Piscis conforman una relación en que se mezclan dos signos mutables, por eso comparten algunas virtudes y bastantes defectos; su compatibilidad depende en buena medida del terreno en que se relacionen, y en cualquier caso, necesitan prestarse mutuamente mucha comprensión, tiempo y esfuerzo para llegar a cierto equilibrio. En el ámbito laboral se complementan bastante bien, pues tanto una parte como la otra son personas muy dinámicas que no paran. Además, comparten una intensa capacidad para la innovación, capacidad que se potencia muchísimo cuando se unen.</p>`
																																	compatible.innerHTML=texto
																																	compatible.style.setProperty("visibility", "visible")
																																	compatible.style.setProperty("opacity", "1")
																																	compatible.style.setProperty("transition","2s ease")
																																	}

																																		if (signo1==='cancer' && signo2==='cancer'){
																																		texto=`<p> Cáncer con Cáncer constituyen una combinación en la que se unen dos signos que comparten un mismo rasgo: la cardinalidad, característica que hace que, generalmente, su compatibilidad sea muy alta en los diferentes terrenos en que se relacionen, ya que tienen una personalidad semejante. En el terreno laboral sus relaciones suelen resultar provechosas, no importa lo que tengan que esforzarse para conseguir alcanzar sus metas, harán todo lo posible para lograrlas. Son dos personas muy pertinaces, y cualquiera que las conozca podrá asegurar que, cuando desean algo, la palabra imposible no existe en su vocabulario.</p>`
																																		compatible.innerHTML=texto
																																		compatible.style.setProperty("visibility", "visible")
																																		compatible.style.setProperty("opacity", "1")
																																		compatible.style.setProperty("transition","2s ease")
																																		}

																																			if ((signo1==='cancer' && signo2==='leo') || (signo1==='leo' && signo2==='cancer')){
																																			texto=`<p> El signo de Cáncer pertenece a los reunidos dentro de los signos cardinales y el de Leo es uno de los signos fijos del zodiaco. Generalmente, las relaciones que se establezcan entre los dos no serán demasiado afables; tendrán que poner mucho de su parte para lograr cierto entendimiento mutuo. En el terreno profesional tienden a repelerse, es poco probable que quieran relacionarse para conseguir algo en concreto. El mayor problema existente para Cáncer y Leo en el trabajo es que su manía por la autoridad, por eso sus luchas serán frecuentes... </p>`
																																			compatible.innerHTML=texto
																																			compatible.style.setProperty("visibility", "visible")
																																			compatible.style.setProperty("opacity", "1")
																																			compatible.style.setProperty("transition","2s ease")
																																			}

																																				if ((signo1==='cancer' && signo2==='virgo') || (signo1==='virgo' && signo2==='cancer')){
																																				texto=`<p> Cáncer es un signo perteneciente a los llamados signos cardinales del zodiaco y Virgo a los signos que se encuadran dentro de los mutables. Y así, generalmente, sus relaciones suelen ser agradables en cualquiera de los terrenos en que se relacionen, ya que comparten bastantes características. Sus relaciones laborales resultan beneficiosas, y no solamente en términos económicos, también en los demás. Son dos personas hacendosas, y juntas, todavía más; del mismo modo, suelen disfrutar trabajando codo con codo, pues comparten criterios y maneras de ser. </p>`
																																				compatible.innerHTML=texto
																																				compatible.style.setProperty("visibility", "visible")
																																				compatible.style.setProperty("opacity", "1")
																																				compatible.style.setProperty("transition","2s ease")
																																				}

																																					if ((signo1==='cancer' && signo2==='libra') || (signo1==='libra' && signo2==='cancer')){
																																					texto=`<p> Cáncer y Libra son signos que confluyen en una misma característica zodiacal: son cardinales. Incluso así, las diferencias que mantienen, aunque no son profundas, se notan en unos ámbitos más que en otros, aunque siempre cabe la posibilidad de llegar a un equilibrio satisfactorio y mutuo. Sus relaciones profesionales son esencialmente buenas, puesto que son dos personas a quienes no les importa tener que emplear lo que tienen, sea tangible o no, en la conquista de sus objetivos. Cáncer y Libra tendrán muy claro los objetivos a alcanzar; las dudas se quedan a un lado. Al mismo tiempo, Libra sabe adecuarse al esquivo signo de Cáncer sin demasiadas dificultades</p>`
																																					compatible.innerHTML=texto
																																					compatible.style.setProperty("visibility", "visible")
																																					compatible.style.setProperty("opacity", "1")
																																					compatible.style.setProperty("transition","2s ease")
																																					}

																																						if ((signo1==='cancer' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='cancer')){
																																						texto=`<p> Cáncer y Escorpio forman una relación en que se une un signo cardinal, Cáncer, con un signo fijo, Escorpio. En general y en este caso en particular, su unión resulta positiva, pues sienten una fuerte atracción que les impulsa a permanecer cerca, aunque sea circunstancialmente. En el terreno profesional su asociación suele resultar muy productiva en el sentido más amplio de la palabra. Cuando Cáncer y Escorpio se proponen un fin común, ciertamente será económico, y lo conseguirán, cueste lo que cueste. Cáncer se comportará con suma prudencia a la hora de gastar, y Escorpio hará algo parecido, pero de otra manera: ganando.</p>`
																																						compatible.innerHTML=texto
																																						compatible.style.setProperty("visibility", "visible")
																																						compatible.style.setProperty("opacity", "1")
																																						compatible.style.setProperty("transition","2s ease")
																																						}

																																							if ((signo1==='cancer' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='cancer')){
																																							texto=`<p> Cáncer forma parte de los llamados signos cardinales del zodíaco y Sagitario de los mutables del mismo. Generalmente, su compatibilidad es arriesgada y depende en buena manera del terreno en que se desarrollen sus relaciones; si lo intentan decididamente, podrán conseguir llevarse bien, pero a priori no las tienen todas consigo. En el ámbito profesional tienen estrella, puesto que la cooperación es una constante en sus relaciones; saben que conjuntamente tendrán mayores posibilidades de éxito que por separado, así que no dudarán en aunar esfuerzos por un bien común.</p>`
																																							compatible.innerHTML=texto
																																							compatible.style.setProperty("visibility", "visible")
																																							compatible.style.setProperty("opacity", "1")
																																							compatible.style.setProperty("transition","2s ease")
																																							}

																																								if ((signo1==='cancer' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='cancer')){
																																								texto=`<p> Cáncer y Capricornio son dos signos cardinales unidos, y en este caso en concreto, sus relaciones suelen ser atractivas para ambos, aunque no exentas de peligro: comparten formas de ser y gustos, aunque las tonalidades que les caracterizan son bien distintas, y complementarias también. Sus relaciones profesionales resultan provechosas, pues los dos signos tienen claro lo que quieren conseguir desde el principio, por eso no escatimarán esfuerzos para alcanzarlo.</p>`
																																								compatible.innerHTML=texto
																																								compatible.style.setProperty("visibility", "visible")
																																								compatible.style.setProperty("opacity", "1")
																																								compatible.style.setProperty("transition","2s ease")
																																								}

																																									if ((signo1==='cancer' && signo2==='acuario') || (signo1==='acuario' && signo2==='cancer')){
																																									texto=`<p> Cáncer y Acuario forman una unión en la que coinciden dos signos con particulares bien distintas: Cáncer es cardinal y Acuario es un signo que pertenece a los llamados fijos del zodíaco; precisamente por eso, su compatibilidad resulta en general una rareza extraordinaria y maravillosa. En el terreno laboral sus relaciones suelen ser demasiado tensas, pues son personas con pocos intereses en común. Tampoco coinciden en sus capacidades y actitud, así que de darse una relación de trabajo, los enfrentamientos serán constantes y pondrán en peligro su futuro. </p>`
																																									compatible.innerHTML=texto
																																									compatible.style.setProperty("visibility", "visible")
																																									compatible.style.setProperty("opacity", "1")
																																									compatible.style.setProperty("transition","2s ease")
																																									}

																																										if ((signo1==='cancer' && signo2==='piscis') || (signo1==='piscis' && signo2==='cancer')){
																																										texto=`<p> Cáncer es un signo cardinal y Piscis es un signo mutable dentro de la rueda del zodíaco, a pesar de ello, sus relaciones suelen ser bastante agradables en general. No es extraño que se sientan bien cerca (inexplicablemente, ya que son dos personalidades distintas en varios aspectos). Sus relaciones laborales suelen ser muy buenas, lo que pasa es que no coinciden demasiado en sus intereses; Cáncer se interesa casi exclusivamente por el objetivo económico, y Piscis, aunque tiene en cuenta ese criterio, no es primordial; necesita tener otros estímulos añadidos.</p>`
																																										compatible.innerHTML=texto
																																										compatible.style.setProperty("visibility", "visible")
																																										compatible.style.setProperty("opacity", "1")
																																										compatible.style.setProperty("transition","2s ease")
																																										}

																																											if (signo1==='leo' && signo2==='leo'){
																																											texto=`<p> Leo es un signo fijo del zodiaco, y al unirse dos, es fácil concluir que, más o menos, van a compartir muchas de sus características sean de la naturaleza que sean. En general, su compatibilidad suele ser alta, pues Leo es un signo que se distingue por su elevado sentido del respeto. Si trabajan a la par los resultados podrán ser muy fructíferos, lo difícil será que se pongan de acuerdo en la dirección de su proyecto. Si no lo hacen, se perderán en crueles luchas por alcanzar un poder que al final no serviría para nada.</p>`
																																											compatible.innerHTML=texto
																																											compatible.style.setProperty("visibility", "visible")
																																											compatible.style.setProperty("opacity", "1")
																																											compatible.style.setProperty("transition","2s ease")
																																											}

																																												if ((signo1==='leo' && signo2==='virgo') || (signo1==='virgo' && signo2==='leo')){
																																												texto=`<p> Leo es un signo fijo y Virgo es otro mutable en la rueda del zodiaco; en este caso en particular, sus relaciones suelen estar teñidas de una tensión poco alentadora para ambas partes; normalmente, necesitan poner mucho de su parte para poder comprenderse y apoyarse uno a otro. Sus relaciones en el terreno del trabajo suelen ser positivas, pues cada signo tiene unas aptitudes y actitudes bien diferentes que pueden resultar óptimas a la hora de relacionarse en el trabajo. El signo de Leo siente predilección por la organización, el de Virgo se inclina más hacia el análisis y la organización.</p>`
																																												compatible.innerHTML=texto
																																												compatible.style.setProperty("visibility", "visible")
																																												compatible.style.setProperty("opacity", "1")
																																												compatible.style.setProperty("transition","2s ease")
																																												}

																																													if ((signo1==='leo' && signo2==='libra') || (signo1==='libra' && signo2==='leo')){
																																													texto=`<p> Leo es un signo que se encuadra dentro de los llamados fijos y Libra se encuentra dentro de los signos cardinales en la rueda zodiacal. En este caso en concreto, su compatibilidad es evidente en la mayoría de los casos, pues presentan muchas y variadas afinidades. Cuando trabajan juntas, suelen ser personas que mantienen un contacto estrecho y que no tienen dificultades para comunicarse, al contrario. Comprenden que la unión hace la fuerza, por eso trabajarán todo lo que sea necesario en pos las metas que se marquen.</p>`
																																													compatible.innerHTML=texto
																																													compatible.style.setProperty("visibility", "visible")
																																													compatible.style.setProperty("opacity", "1")
																																													compatible.style.setProperty("transition","2s ease")
																																													}

																																														if ((signo1==='leo' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='leo')){
																																														texto=`<p> El signo de Leo y el de Escorpio forman parte de los signos que se encuentran dentro de los signos fijos, precisamente por eso, sus relaciones serán complicadas en la mayoría de los casos. De todas maneras, también dependerán en buena medida de sus respectivos ascendentes. Profesionalmente sus expectativas de futuro pueden ser positivas si ponen voluntad en olvidar sus diferencias; tienen la capacidad de hacerlo, otra cosa es que quieran. Además, tendrán que poner un cuidado especial para no caer en la competitividad y aprender a confiarse. </p>`
																																														compatible.innerHTML=texto
																																														compatible.style.setProperty("visibility", "visible")
																																														compatible.style.setProperty("opacity", "1")
																																														compatible.style.setProperty("transition","2s ease")
																																														}

																																															if ((signo1==='leo' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='leo')){
																																															texto=`<p> Leo es uno de los signos fijos en la rueda del zodíaco, Sagitario por su parte, se encuadra dentro de los mutables. A grandes rasgos, su compatibilidad es elevada, ya que en general tienden a apartar las diferencias que pueden surgir para dejar paso a las semejanzas. Sus relaciones en el terreno del trabajo esencialmente son buenas, pues son dos personas que se caracterizan por un espíritu emprendedor y constructivo acentuado. Leo y Sagitario buscarán solucionar sus problemas de la forma más inteligente posible; sin embargo, el punto más negativo de su relación suele ser la tendencia por parte de Leo a tomar todas las decisiones</p>`
																																															compatible.innerHTML=texto
																																															compatible.style.setProperty("visibility", "visible")
																																															compatible.style.setProperty("opacity", "1")
																																															compatible.style.setProperty("transition","2s ease")
																																															}

																																																if ((signo1==='leo' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='leo')){
																																																texto=`<p> El signo de Leo forma parte de los llamados fijos y Capricornio hace lo mismo dentro de los signos cardinales, así y en este caso en concreto, sus relaciones serán un poco tensas en general. Si bien esto es cierto, también lo es que existe una fuerte atracción mutua que les lleva a juntarse, aunque sea circunstancialmente. Sus relaciones en el ámbito laboral suelen ser productivas; el signo de Leo siente inclinación por la planificación, cuando Capricornio prefiere dedicarse a labores más precisas, como puede ser la organización de recursos.</p>`
																																																compatible.innerHTML=texto
																																																compatible.style.setProperty("visibility", "visible")
																																																compatible.style.setProperty("opacity", "1")
																																																compatible.style.setProperty("transition","2s ease")
																																																}

																																																	if ((signo1==='leo' && signo2==='acuario') || (signo1==='acuario' && signo2==='leo')){
																																																	texto=`<p> Leo y Acuario están contenidos dentro de los signos fijos en la rueda zodiacal; generalmente, sus relaciones serán algo turbulentas en la mayoría de los casos. De todas maneras, es necesario aclarar que dependerán en buena medida del ámbito en el que se desarrollen y de la voluntad que pongan. En el terreno profesional se complementan bastante bien, ya que Leo y Acuario son personas inteligentes que no titubean a la hora de dejar sus discrepancias a un lado para poder trabajar bien juntas. Asimismo, el sentimiento de respeto y admiración suele ser una tendencia en su relación; además, tienen una capacidad de producción muy efectiva</p>`
																																																	compatible.innerHTML=texto
																																																	compatible.style.setProperty("visibility", "visible")
																																																	compatible.style.setProperty("opacity", "1")
																																																	compatible.style.setProperty("transition","2s ease")
																																																	}

																																																		if ((signo1==='leo' && signo2==='piscis') || (signo1==='piscis' && signo2==='leo')){
																																																		texto=`<p> Leo y Acuario están contenidos dentro de los signos fijos en la rueda zodiacal; generalmente, sus relaciones serán algo turbulentas en la mayoría de los casos. De todas maneras, es necesario aclarar que dependerán en buena medida del ámbito en el que se desarrollen y de la voluntad que pongan. En el terreno profesional se complementan bastante bien, ya que Leo y Acuario son personas inteligentes que no titubean a la hora de dejar sus discrepancias a un lado para poder trabajar bien juntas. Asimismo, el sentimiento de respeto y admiración suele ser una tendencia en su relación; además, tienen una capacidad de producción muy efectiva</p>`
																																																		compatible.innerHTML=texto
																																																		compatible.style.setProperty("visibility", "visible")
																																																		compatible.style.setProperty("opacity", "1")
																																																		compatible.style.setProperty("transition","2s ease")
																																																		}

																																																			if (signo1==='virgo' && signo2==='virgo'){
																																																			texto=`<p> Virgo es un signo mutable del zodiaco, y así, dos personas nacidas bajo el mismo aspecto suelen llevarse bastante bien, pues comparten bastantes características. En general, su compatibilidad es alta, ya que comparten muchas particularidades personales, para bien y para mal. Suelen compenetrarse perfectamente en el ámbito laboral, pues tienen los mismos o parecidos objetivos y maneras de actuar. Además, uno de los rasgos más característicos de Virgo es su búsqueda de la perfección, y al ser por partida doble, se pasarán horas y horas revisando sus proyectos para que no tengan fallos. </p>`
																																																			compatible.innerHTML=texto
																																																			compatible.style.setProperty("visibility", "visible")
																																																			compatible.style.setProperty("opacity", "1")
																																																			compatible.style.setProperty("transition","2s ease")
																																																			}

																																																				if ((signo1==='virgo' && signo2==='libra') && (signo1==='libra' && signo2==='virgo')){
																																																				texto=`<p> Virgo forma parte de los signos mutables y Libra es uno de los cardinales dentro del zodíaco; en general, sus relaciones suelen ser enriquecedoras la mayoría de las veces, ya que consciente o inconscientemente, saben que tienen muchas cosas que enseñar y aprender uno del otro. La colaboración suele ser una constante cuando se trata de estos dos signos trabajando juntos. Puede que con frecuencia a Virgo le toque ser quien tire del carro, pero Libra no tardará en reaccionar y en ponerse a trabajar con todas sus fuerzas. Lo más destacado de sus unión suele ser el contraste que cada cual representa para la otra parte. </p>`
																																																				compatible.innerHTML=texto
																																																				compatible.style.setProperty("visibility", "visible")
																																																				compatible.style.setProperty("opacity", "1")
																																																				compatible.style.setProperty("transition","2s ease")
																																																				}

																																																					if ((signo1==='virgo' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='virgo')){
																																																					texto=`<p> El signo de Virgo es mutable en la rueda zodiacal y Escorpio es uno de los llamados fijos dentro de la misma rueda. En general y en la mayoría de los casos, sus relaciones forman el catalizador perfecto que cada cual necesita para mejorar en los diferentes aspectos de la vida. Sus relaciones son muy productivas en el terreno profesional, además, consciente o inconscientemente, saben que pueden alcanzar muchas cosas colaborando sin entorpecer la labor de la otra parte. Además, la lealtad también entra a formar parte de su relación; puede pasar de todo en sus relaciones, pero evitarán mentir. </p>`
																																																					compatible.innerHTML=texto
																																																					compatible.style.setProperty("visibility", "visible")
																																																					compatible.style.setProperty("opacity", "1")
																																																					compatible.style.setProperty("transition","2s ease")
																																																					}

																																																						if ((signo1==='virgo' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='virgo')){
																																																						texto=`<p> Virgo y Sagitario son dos signos que pertenecen a los que se encuadran dentro de los signos mutables en el zodíaco. Sin embargo, en contra de lo que cabría esperar, sus relaciones no son demasiado buenas en general, pues las diferencias resultan abismales. De todas maneras, es necesario tener en cuenta sus ascendentes para saber si se llevarán mejor o peor. En el ámbito del trabajo sus relaciones serán poco habituales, ya que sus campos de actividad e intereses suelen ser diferentes; además, la experiencia puede resultar fatal. Virgo se caracteriza por una estricta ética de trabajo que, con frecuencia, Sagitario se salta a la torera. Asimismo, el espíritu de perfección propio de Virgo se estrella con la volubilidad de Sagitario. </p>`
																																																						compatible.innerHTML=texto
																																																						compatible.style.setProperty("visibility", "visible")
																																																						compatible.style.setProperty("opacity", "1")
																																																						compatible.style.setProperty("transition","2s ease")
																																																						}

																																																							if ((signo1==='virgo' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='virgo')){
																																																							texto=`<p> Virgo se encuadra dentro de los llamados signos mutables del zodiaco y Capricornio es uno de los cardinales; en general, su compatibilidad suele ser bastante alta, puesto que presentan varios aspectos armoniosos en común. En el ámbito del trabajo sus relaciones suelen ser un ejercicio de colaboración constante. Tanto un signo como el otro muestran mucho respecto por la labor de la otra parte, y además, son personas con un sentido de la responsabilidad notable. Al mismo tiempo comparten los parecidos criterios económicos, así que no tendrán disputas en ese sentido.</p>`
																																																							compatible.innerHTML=texto
																																																							compatible.style.setProperty("visibility", "visible")
																																																							compatible.style.setProperty("opacity", "1")
																																																							compatible.style.setProperty("transition","2s ease")
																																																							}

																																																								if ((signo1==='virgo' && signo2==='acuario') || (signo1==='acuario' && signo2==='virgo')){
																																																								texto=`<p> Virgo forma parte de los signos mutables en la rueda del zodíaco y el signo de Acuario es uno de los pertenecientes a los signos fijos. Sus relaciones, en la mayoría de los casos, no son malas, ya que comparten una buena comunicación pese a los contrastes que les caracterizan. Sus relaciones son beneficiosas en el terreno del trabajo, puesto que tienen aptitudes distintas que resultan o pueden resultar muy complementarias. Acuario tiene mucho talento para generar nuevas ideas, y Virgo posee el talento de la planificación y organización, esto es: de la materialización en un proyecto puntual de toda esa capacidad de creación de Acuario.</p>`
																																																								compatible.innerHTML=texto
																																																								compatible.style.setProperty("visibility", "visible")
																																																								compatible.style.setProperty("opacity", "1")
																																																								compatible.style.setProperty("transition","2s ease")
																																																								}

																																																									if (signo1==='libra' && signo2==='libra'){
																																																									texto=`<p> El signo de Libra se engloba dentro de los signos cardinales del zodíaco, y cuando se unen dos, todavía más. Generalmente se comprenden bastante bien, algo bastante normal, dado que comparten varias características personales, unas positivas y otras es posible que no tanto. En el terreno laboral los resultados de sus relaciones suelen ser notorios, ya que son dos personas con un sentido del deber y afán de superación que hacen que consigan cualquier meta que se pongan. Si hay algo que tiene Libra es la tenacidad, por eso hasta que no logra lo que quiere, no para.</p>`
																																																									compatible.innerHTML=texto
																																																									compatible.style.setProperty("visibility", "visible")
																																																									compatible.style.setProperty("opacity", "1")
																																																									compatible.style.setProperty("transition","2s ease")
																																																									}

																																																										if ((signo1==='libra' && signo2==='escorpio') || (signo1==='escorpio' && signo2==='libra')){
																																																										texto=`<p> El signo de Libra es cardinal en la rueda zodiacal y Escorpio es uno de los signos fijos dentro de la misma rueda. Sus relaciones, en general, son complejas, y dependen en buena medida de los ascendentes y voluntad de cada uno para mejorarlas, o todo lo contrario. Cuando se trata de relaciones laborales, si consiguen entenderse y ponerse de acuerdo, el resultado puede ser muy bueno, incluso sobresaliente. Lo que pasa es que, si bien son personas con mucha capacidad de trabajo, también son demasiado independientes como para permanecer juntas en el tiempo. </p>`
																																																										compatible.innerHTML=texto
																																																										compatible.style.setProperty("visibility", "visible")
																																																										compatible.style.setProperty("opacity", "1")
																																																										compatible.style.setProperty("transition","2s ease")
																																																										}

																																																											if ((signo1==='libra' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='libra')){
																																																											texto=`<p> El signo de Libra es un signo cardinal y el de Sagitario es uno de los que forman parte de los signos mutables dentro de la rueda del zodiaco. Con todo, sus relaciones suelen ser esencialmente buenas en los diferentes ámbitos en que se desarrollen: sentimental, familiar, laboral, etc. Cuando se trata de sus relaciones de trabajo son dos personas capaces de conseguir lo que quieran, sobre todo en aquellas áreas relacionadas con la metafísica y en aquellas que estén relacionadas con los viajes y con otras culturas, especialmente gracias al signo de Sagitario. </p>`
																																																											compatible.innerHTML=texto
																																																											compatible.style.setProperty("visibility", "visible")
																																																											compatible.style.setProperty("opacity", "1")
																																																											compatible.style.setProperty("transition","2s ease")
																																																											}

																																																												if ((signo1==='libra' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='libra')){
																																																												texto=`<p> Libra y Capricornio se encuentran dentro de los signos llamados cardinales en la rueda del zodíaco. Generalmente su compatibilidad es un poco compleja, aunque si se disponen a ceder un poco, pueden conseguir un equilibrio muy beneficioso para las dos partes. En el ámbito laboral sus relaciones tienden a ser difíciles, pero no por falta de aptitud, sino por falta de actitud. Libra y Capricornio tienen el mal hábito de luchar por el poder, perdiendo unas energías y tiempo precioso en ello. En cambio, si se disponen a mejorar este aspecto, podrán conseguir lo que se propongan.</p>`
																																																												compatible.innerHTML=texto
																																																												compatible.style.setProperty("visibility", "visible")
																																																												compatible.style.setProperty("opacity", "1")
																																																												compatible.style.setProperty("transition","2s ease")
																																																												}

																																																													if ((signo1==='libra' && signo2==='acuario') || (signo1==='acuario' && signo2==='libra')){
																																																													texto=`<p> Libra es un signo que se encuadra dentro de los signos cardinales y Acuario forma parte de los signos fijos del zodiaco. Generalmente presentan algunas diferencias que pueden resultar complementarias, si se deciden a suavizar sus diferencias en las relaciones que puedan desarrollar. En el ámbito profesional no será extraño que, de buenas a primeras no sientan atracción ante la idea de trabajar codo con codo. Libra suele resultar demasiado mandón para el otro signo, quien odia las órdenes casi por encima de todas las cosas. De todos modos, pueden formar una asociación productiva en este campo.</p>`
																																																													compatible.innerHTML=texto
																																																													compatible.style.setProperty("visibility", "visible")
																																																													compatible.style.setProperty("opacity", "1")
																																																													compatible.style.setProperty("transition","2s ease")
																																																													}

																																																														if ((signo1==='libra' && signo2==='piscis') || (signo1==='piscis' && signo2==='libra')){
																																																														texto=`<p> Libra pertenece a los llamados cardinales del zodiaco y Piscis hace lo mismo dentro de los mutables. Su compatibilidad suele ser bastante alta, a pesar de las disparidades existentes en sus formas de ser, pues esas diferencias, en vez de suponer un distanciamiento, supondrán todo un complemento. A la hora de trabajar en común, los resultados suelen ser muy productivos y duraderos, pues ninguna de las partes se entromete en el campo de acción de la otra, consiguiendo así una alianza casi perfecta. Si el signo de Libra prefiere las actividades de planificación y organización, Piscis se lo agradecerá, puesto que tiende a evitar esas labores.</p>`
																																																														compatible.innerHTML=texto
																																																														compatible.style.setProperty("visibility", "visible")
																																																														compatible.style.setProperty("opacity", "1")
																																																														compatible.style.setProperty("transition","2s ease")
																																																														}

																																																															if (signo1==='escorpio' && signo2==='escorpio'){
																																																															texto=`<p> Escorpio se incluye dentro de los signos fijos del zodiaco, y al ser dos en este caso, sus relaciones serán más o menos difíciles dependiendo del ámbito en que se desarrollen. De todos modos, comparten varias características en común; unas resultarán positivas, otras no tanto. Cuando trabajan en común, pueden llegar a conseguir lo que quieran; las personas nacidas en este signo suelen poseer una inteligencia notable y unas dotes innatas para todo aquello que esté relacionado de alguna manera con la investigación. Además, son muy perseverantes, y hasta que alcanzan sus objetivos, no paran. </p>`
																																																															compatible.innerHTML=texto
																																																															compatible.style.setProperty("visibility", "visible")
																																																															compatible.style.setProperty("opacity", "1")
																																																															compatible.style.setProperty("transition","2s ease")
																																																															}

																																																																if ((signo1==='escorpio' && signo2==='sagitario') || (signo1==='sagitario' && signo2==='escorpio')){
																																																																texto=`<p> Escorpio forma parte de los signos fijos en la rueda zodiacal; Sagitario es uno de los llamados mutables dentro de la misma. Generalmente su compatibilidad es bastante alta; consciente o inconscientemente, aprenden de las cualidades de cada cual, algo que les ayuda a madurar. Tienen muchas expectativas de futuro y de éxito en el plano laboral, se complementan casi a la perfección. Escorpio se caracteriza por poseer unas energías potentes y por saberlas encauzar en la dirección adecuada. </p>`
																																																																compatible.innerHTML=texto
																																																																compatible.style.setProperty("visibility", "visible")
																																																																compatible.style.setProperty("opacity", "1")
																																																																compatible.style.setProperty("transition","2s ease")
																																																																}

																																																																	if ((signo1==='escorpio' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='escorpio')){
																																																																	texto=`<p> Escorpio forma parte de los fijos del zodíaco y Capricornio es uno de los signos cardinales dentro del mismo. En este caso particular, generalmente sus relaciones suelen estar rodeadas de un halo de complicidad estimulante gracias a la buena comunicación que comparten. En el terreno laboral los resultados de sus relaciones suelen ser muy fructíferos y estables, pues son dos personas con un espíritu de colaboración y capacidad de trabajo enormes, así que el éxito no tardará en presentarse. </p>`
																																																																	compatible.innerHTML=texto
																																																																	compatible.style.setProperty("visibility", "visible")
																																																																	compatible.style.setProperty("opacity", "1")
																																																																	compatible.style.setProperty("transition","2s ease")
																																																																	}

																																																																		if ((signo1==='escorpio' && signo2==='acuario') || (signo1==='acuario' && signo2==='escorpio')){
																																																																		texto=`<p> El signo de Escorpio y el de Acuario comparten su carácter fijo dentro de la rueda del zodiaco; y en este caso en particular, lo anterior se traduce en unas relaciones complejas que, en principio, suelen conllevar muchos riesgos, puesto que a priori no resultan demasiado compatibles. En el ámbito profesional sus relaciones no son habituales, Escorpio y Acuario tienden a evitarse; sus maneras de ser y de ver la vida no son las mismas, y eso pesa en demasiadas ocasiones. De todas maneras, tienen una inteligencia notable, así que es posible que sean capaces de llegar acuerdos favorables. </p>`
																																																																		compatible.innerHTML=texto
																																																																		compatible.style.setProperty("visibility", "visible")
																																																																		compatible.style.setProperty("opacity", "1")
																																																																		compatible.style.setProperty("transition","2s ease")
																																																																		}

																																																																			if ((signo1==='escorpio' && signo2==='piscis') || (signo1==='piscis' && signo2==='escorpio')){
																																																																			texto=`<p> Escorpio forma parte de los signos fijos de la rueda zodiacal y el signo de Piscis hace lo mismo dentro de los llamados mutables de la misma. Generalmente su compatibilidad es muy alta, puesto que resultan afines en varios aspectos de sus respectivas personalidades. Cuando trabajan codo con codo suelen ser capaces de conseguir cualquier cosa que se propongan; Escorpio y Piscis no dudan, ni un instante, a la hora de invertir su tiempo y energías para alcanzar sus objetivos. Además, cada cual se dedica a una actividad distinta y a la vez complementaria a la de la otra parte.</p>`
																																																																			compatible.innerHTML=texto
																																																																			compatible.style.setProperty("visibility", "visible")
																																																																			compatible.style.setProperty("opacity", "1")
																																																																			compatible.style.setProperty("transition","2s ease")
																																																																			}

																																																																				if (signo1==='sagitario' && signo2==='sagitario'){
																																																																				texto=`<p> Dos Sagitario juntos son dos signos que comparten la misma característica en común: la mutabilidad. Precisamente por eso, congeniarán en la mayor parte de los casos; además, si no fuera así, sería como negarse a sí mismas, pues son dos personas muy, muy afines. Sus relaciones laborales resultan excelentes, puesto que disfrutan haciendo lo que les gusta y tienen un espíritu de colaboración y de tolerancia enormes. Las áreas que más les van son aquellas relacionadas de alguna manera con los viajes; no hay que olvidar que este signo rige los viajes, así que podrán hacer grandes cosas en común.</p>`
																																																																				compatible.innerHTML=texto
																																																																				compatible.style.setProperty("visibility", "visible")
																																																																				compatible.style.setProperty("opacity", "1")
																																																																				compatible.style.setProperty("transition","2s ease")
																																																																				}

																																																																					if ((signo1==='sagitario' && signo2==='capricornio') || (signo1==='capricornio' && signo2==='sagitario')){
																																																																					texto=`<p>Sagitario forma parte de los signos mutables del zodíaco, Capricornio pertenece a los signos cardinales dentro del mismo; y en general, sus relaciones serán con frecuencia un poco complicadas, aunque al mismo tiempo, también inmensamente estimulantes y sugerentes. Pueden llegar a conseguir muchas cosas en el terreno del trabajo, siempre y cuando demuestren interés en aprender mutuamente. El signo de Capricornio será quien se encargue de proporcionar la prudencia necesaria para no levantar castillos en el aire</p>`
																																																																					compatible.innerHTML=texto
																																																																					compatible.style.setProperty("visibility", "visible")
																																																																					compatible.style.setProperty("opacity", "1")
																																																																					compatible.style.setProperty("transition","2s ease")
																																																																					}

																																																																						if ((signo1==='sagitario' && signo2==='acuario') || (signo1==='acuario' && signo2==='sagitario')){
																																																																						texto=`<p>Sagitario se encuadra dentro de los llamados signos mutables y Acuario forma parte de los signos fijos del zodíaco. Generalmente sus relaciones suelen ser muy positivas la mayor parte de las veces, aunque las discusiones, cuando se dan, pueden escucharse a kilómetros a la redonda. En el terreno profesional sus relaciones tienden a ser constructivas y productivas, lo malo es la poca prudencia que demuestran a la hora de manejar el dinero; este es el mayor peligro de su relación, porque en el resto, se avendrán sin problemas; tanto un signo como el otro se caracterizan por tener una inteligencia notable que no para de dar a luz ideas nuevas.</p>`
																																																																						compatible.innerHTML=texto
																																																																						compatible.style.setProperty("visibility", "visible")
																																																																						compatible.style.setProperty("opacity", "1")
																																																																						compatible.style.setProperty("transition","2s ease")
																																																																						}

																																																																							if ((signo1==='sagitario' && signo2==='piscis') || (signo1==='piscis' && signo2==='sagitario')){
																																																																							texto=`<p>El signo de Piscis y el de Sagitario se corresponden con el mismo rasgo en la rueda zodiacal: ambos son signos mutables. Aparentemente puede parecer que tienen bastante en común, pero no es así; sus relaciones suelen resultar nefastas, a no ser que lo intenten hasta más no poder. Si se relacionan en el terreno laboral, luchan lo que haga falta para lograr las metas que se hayan fijado; y pueden lograrlas, a pesar de sus discrepancias. Lo que pasa es que no son personas a quienes guste pasarse demasiado tiempo en la misma actividad.</p>`
																																																																							compatible.innerHTML=texto
																																																																							compatible.style.setProperty("visibility", "visible")
																																																																							compatible.style.setProperty("opacity", "1")
																																																																							compatible.style.setProperty("transition","2s ease")
																																																																							}

																																																																								if (signo1==='capricornio' && signo2==='capricornio'){
																																																																								texto=`<p>Capricornio se encuentra dentro de los llamados signos cardinales en la rueda del zodíaco, por eso las relaciones de dos Capricornio tenderán a ser agradables y fraternas; no en vano pertenecen al mismo signo, y eso se nota, incluso cuando mantienen sus diferencias. Si deciden trabajar en común para alcanzar un proyecto profesional concreto, el resultado será próspero, pues son dos personas con un sentido del trabajo y de la responsabilidad grandes; además, calculan cuidadosamente cualquier decisión susceptible de ser tomada.</p>`
																																																																								compatible.innerHTML=texto
																																																																								compatible.style.setProperty("visibility", "visible")
																																																																								compatible.style.setProperty("opacity", "1")
																																																																								compatible.style.setProperty("transition","2s ease")
																																																																								}

																																																																									if ((signo1==='capricornio' && signo2==='acuario') || (signo1==='acuario' && signo2==='capricornio')){
																																																																									texto=`<p>Capricornio es un signo de carácter cardinal y Acuario es un signo de carácter fijo, así que, en general y en este caso en concreto, tendrán algunas dificultades, dependiendo en buena medida de la voluntad que pongan para llevarse bien y de los ámbitos en que se relacionen. Cuando coinciden en el terreno laboral, el resultado puede ser muy provechoso para las dos partes, pues que se complementan. Aunque Capricornio tiene la mala costumbre de intentar mandar a todo el mundo, en este caso su mando se inhibe hacia Acuario, y hace muy bien con esa actitud.</p>`
																																																																									compatible.innerHTML=texto
																																																																									compatible.style.setProperty("visibility", "visible")
																																																																									compatible.style.setProperty("opacity", "1")
																																																																									compatible.style.setProperty("transition","2s ease")
																																																																									}

																																																																										if ((signo1==='capricornio' && signo2==='piscis') || (signo1==='piscis' && signo2==='capricornio')){
																																																																										texto=`<p>El signo de Capricornio pertenece a los signos cardinales del zodiaco y el signo de Piscis es uno de los mutables dentro del mismo. En general, suelen ser personas que desarrollan unas buenas relaciones, incluso excelentes en muchos casos, pues se equilibran recíprocamente. Capricornio y Piscis saben cómo colaborar en el terreno laboral para ser capaces de alcanzar lo que se propongan, y tampoco les cuesta demasiado trabajo hacerlo, a pesar de que sus diferencias abundan, resultan asombrosamente compatibles.</p>`
																																																																										compatible.innerHTML=texto
																																																																										compatible.style.setProperty("visibility", "visible")
																																																																										compatible.style.setProperty("opacity", "1")
																																																																										compatible.style.setProperty("transition","2s ease")
																																																																										}

																																																																											if (signo1==='acuario' && signo2==='acuario'){
																																																																											texto=`<p>Acuario es uno de los signos fijos del zodiaco, y cuando se relacionan dos personas pertenecientes al mismo, la compatibilidad entre ellas será muy posible, puesto que tienen personalidades parecidas y se comprenderán como nadie; además, compartirán muchas y buenas cosas en común. Es posible que dos Acuario trabajando conjuntamente no consigan una fortuna, pero tampoco perderán el sueño por ello. Si hay algo que caracteriza a este signo es la falta de interés en los asuntos materiales y la necesidad de estar innovando continuamente.</p>`
																																																																											compatible.innerHTML=texto
																																																																											compatible.style.setProperty("visibility", "visible")
																																																																											compatible.style.setProperty("opacity", "1")
																																																																											compatible.style.setProperty("transition","2s ease")
																																																																											}

																																																																												if ((signo1==='acuario' && signo2==='piscis') || (signo1==='piscis' && signo2==='acuario')){
																																																																												texto=`<p>Acuario es uno de los signos fijos dentro del zodiaco y Piscis es uno de los mutables dentro del mismo. De esta suerte, sus relaciones suelen ser o pueden ser bastante positivas, aunque tendrán que hacer algunos esfuerzos en ese sentido. En el terreno laboral sus relaciones que serán fructíferas en general, pues se unen dos personas con muchas y variadas inquietudes intelectuales, y con ganas de satisfacerlas, por eso no será extraño que se conozcan en el campo de la investigación. También es necesario recalcar que cuando se apasionan por alcanzar algo, no paran hasta ver realizados su deseo.</p>`
																																																																												compatible.innerHTML=texto
																																																																												compatible.style.setProperty("visibility", "visible")
																																																																												compatible.style.setProperty("opacity", "1")
																																																																												compatible.style.setProperty("transition","2s ease")
																																																																												}

																																																																													if (signo1==='piscis' && signo2==='piscis'){
																																																																													texto=`<p>El signo de Piscis se encuentra incluido dentro de los signos mutables del zodíaco, y en general, una relación formada por dos personas pertenecientes a este signo se desarrollará entre las bases de la comprensión y la tolerancia más beneficiosas para ambas. En el trabajo disfrutarán de una relación provechosa y estimulante, puesto que aportan todo lo que tienen para conseguir alcanzar sus sueños en este terreno. Precisamente por eso, no escatimarán esfuerzos, y por eso también, alcanzarán lo que se propongan.</p>`
																																																																													compatible.innerHTML=texto
																																																																													compatible.style.setProperty("visibility", "visible")
																																																																													compatible.style.setProperty("opacity", "1")
																																																																													compatible.style.setProperty("transition","2s ease")
																																																																													}












































																																																									



















	})