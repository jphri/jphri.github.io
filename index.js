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

function navBar() {
	const linkList = [
		{ name: 'Home', link: '#/' },
		{ name: 'Teste', link: '#/teste' },
	]

	let root = document.createElement('div')
	let list = document.createElement('ul')

	root.appendChild(list)

	for(i in linkList) {
		let anchor = document.createElement('a')
		anchor.textContent = linkList[i].name
		anchor.href = linkList[i].link

		let listItem = document.createElement('li')
		listItem.appendChild(anchor)

		list.appendChild(listItem)
	}
	root.classList.add('navbar')

	return root
}

function route() {
	let root = document.createElement('div')
	root.classList.add('content')

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

	rootContainer.appendChild(navBar())
	rootContainer.appendChild(route())
})

