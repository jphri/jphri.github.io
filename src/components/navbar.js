const { titleComponent } = require('./title')

module.exports.navbarGroup = function(name, elementList) {
    let root = document.createElement('span')
    let list = document.createElement('ul')

    let anchor = document.createElement('a')
    anchor.textContent = name + '/'
    
    let state = false
    let updateShowList = () => {
        if(!state) {
            list.remove()
        } else {
            root.appendChild(list)
        }
    }

    anchor.addEventListener('click', () => {
        state = !state
        updateShowList()
    })
    root.appendChild(anchor)

    for(i in elementList) {
        let listItem = document.createElement('li')
        listItem.appendChild(elementList[i])
        list.appendChild(listItem)
    }

    return root
}

module.exports.navbarLink = (name, href) => {
    let anchor = document.createElement('a')

    let updateSelected = () => {
        const hash = window.location.hash || '#/';
        anchor.classList.remove('selected')
        if(anchor.hash === hash) {
            anchor.classList.add('selected')
        }
    }

    window.addEventListener('hashchange', updateSelected)

    anchor.textContent = name
    anchor.href = href

    updateSelected()

    return anchor
}

module.exports.navbarComponent = (linkList) => {
    let root = document.createElement('div')
    let list = document.createElement('ul')

    root.appendChild(titleComponent())
    root.appendChild(list)

    for(i in linkList) {
        let listItem = document.createElement('li')
        listItem.appendChild(linkList[i])
        list.appendChild(listItem)
    }

    root.classList.add('navbar')

    return root
}
