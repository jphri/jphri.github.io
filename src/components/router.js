module.exports.router = (routes) => {
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