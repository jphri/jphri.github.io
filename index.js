function title() {
	let root = document.createElement('div')
	let t = document.createElement('h1')

	t.textContent = 'jphri'

	root.appendChild(t)
	return root
}

function helloWorld() {
	let t = document.createElement('p')
	t.textContent = 'Está meio vazio por aqui...'

	return t
}

function text(txt) {
	let t = document.createElement('p')
	t.textContent = txt
	return t
}

function route() {
	let root = document.createElement('div')

	const loadPage = () => {
		let hash = window.location.hash || '#/'

		root.innerHTML = ''
		if(hash === '#/') {
			root.appendChild(title())
			root.appendChild(helloWorld())
		}

		if(hash === '#/teste') {
			root.appendChild(title())
			root.appendChild(text('Jesus Cristo...'))
		}
	}
	
	window.addEventListener('hashchange', loadPage)
	window.addEventListener('load', loadPage)

	return root
}

document.addEventListener('DOMContentLoaded', () => {
	let rootContainer = document.getElementById("root")
	rootContainer.classList.add('content')

	rootContainer.appendChild(route())
})

