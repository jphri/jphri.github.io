function title() {
	let root = document.createElement('div')
	let t = document.createElement('h1')

	t.textContent = 'jphri'

	root.appendChild(t)
	return root
}

function surpriseButton() {
	let root = document.createElement('div')
	let button = document.createElement('button')

	button.textContent = 'Clica aqui'
	button.addEventListener('click', function() {
		root.innerHTML = ''

		let t = document.createElement('p')
		t.textContent = 'SCADUSH!'

		root.appendChild(t)
	})
	root.appendChild(button)

	return root
}

function helloWorld() {
	let t = document.createElement('p')
	t.textContent = 'Está meio vazio por aqui...'

	return t
}

document.addEventListener('DOMContentLoaded', () => {
	let rootContainer = document.getElementById("root")
	rootContainer.classList.add('content')

	rootContainer.appendChild(title())
	rootContainer.appendChild(helloWorld())
	rootContainer.appendChild(surpriseButton())
})

