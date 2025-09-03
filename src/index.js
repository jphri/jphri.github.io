const { blogPost } = require('./components/blog')
const { navbarComponent, navbarGroup, navbarLink } = require('./components/navbar')
const { router } = require('./components/router')

function helloWorld() {
	let t = document.createElement('p')
	t.textContent = 'Está meio vazio por aqui...'

	return t
}

document.addEventListener('DOMContentLoaded', () => {
	let rootContainer = document.getElementById("root")

	rootContainer.appendChild(navbarComponent([
		navbarLink("Home", "#/"),
		navbarGroup("Blog", [
			navbarLink("Test", "#/blog/test")
		])
	]))

	rootContainer.appendChild(router([
		{ hash: "#/", rootNode: helloWorld() },
		{ hash: "#/blog/test", rootNode: blogPost('/blog_teste.md') },
	]))
})

