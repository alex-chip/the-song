const toggleMenu = (navId, toggleB) => {
    let nav = navId,
        toggleButton = toggleB

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('is-active')
    })
}

const navId = document.getElementById('navId'),
    toggleB = document.getElementById('navId-toggle')
toggleMenu(navId, toggleB)
