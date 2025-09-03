function blogPost(postPath) {
	let root = document.createElement('div')
	
	root.addEventListener('routerSelect', () => {
		root.innerHTML = ''
		fetch(postPath)
			.then((response) => {
				return response.text()
			})
			.then((postMark) => {
				root.innerHTML = marked.parse(postMark)
			})
	})

	return root
}
