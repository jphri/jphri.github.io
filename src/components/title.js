const titleName = 'jphri'

module.exports.titleComponent = () => {
    let root = document.createElement('div')
	let t = document.createElement('h1')

	t.textContent = titleName

	root.appendChild(t)
	return root
}