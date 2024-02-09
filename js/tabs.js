const opcion = document.querySelectorAll('.opcion')
const contenido = document.querySelectorAll('.contenido')

opcion.forEach((cadaOpcion, i) => {
	opcion[i].addEventListener('click', () => {
		opcion.forEach((cadaOpcion, i) => {
			opcion[i].classList.remove('activoTabs')
			contenido[i].classList.remove('activoTabs')
		})
		opcion[i].classList.add('activoTabs')
		contenido[i].classList.add('activoTabs')
	})
})