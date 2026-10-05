const sideBar = document.getElementById('sidebar')
const hamburger = document.getElementById('open-menu')

function openMenu () {
    sideBar.style.display = 'block'
    hamburger.style.display = 'none'
}

function closeMenu () {
    sideBar.style.display = 'none'
    hamburger.style.display = 'block'

}