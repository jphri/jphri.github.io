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
		{ name: 'Blog Test', link: '#/teste/blog' },
	]

	let root = document.createElement('div')
	let list = document.createElement('ul')

	let updateSelected = () => {
		const hash = window.location.hash || '#/';
		
		list.childNodes.forEach((item) => {
			let anchor = item.childNodes[0]

			anchor.classList.remove('selected')
			if(anchor.hash === hash) {
				anchor.classList.add('selected')
			}
		})
	}

	root.appendChild(title())
	root.appendChild(list)

	for(i in linkList) {
		let anchor = document.createElement('a')
		anchor.textContent = linkList[i].name
		anchor.href = linkList[i].link

		let listItem = document.createElement('li')
		listItem.appendChild(anchor)

		list.appendChild(listItem)
	}

	window.addEventListener('hashchange', updateSelected)

	updateSelected()
	root.classList.add('navbar')

	return root
}

function route() {
	let routes = [
		{ hash: "#/", rootNode: helloWorld() },
		{ hash: "#/teste", rootNode: text('Jesus Cristo...') },
		{ hash: "#/teste/blog", rootNode: blogPost('/blog_teste.md') },
	]

	let root = document.createElement('div')
	root.classList.add('content')

	const loadPage = () => {
		let hash = window.location.hash || '#/'

		root.innerHTML = ''
		routes.forEach((r) => {
			if(r.hash === hash) {
				root.appendChild(r.rootNode)
				r.rootNode.dispatchEvent(new CustomEvent('routerSelect'))
			}
		})
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

