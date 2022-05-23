
const menuButton = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

menuButton.addEventListener("touchstart", () => {
    menu.classList.toggle('active')
    menuButton.classList.toggle('open')
    document.body.classList.toggle('open-menu')
})

const navLinks = document.getElementsByClassName('menu-item')

// for (let i = 0; i < navLinks.length; i++) {
//     const link = navLinks[i]

//     link.addEventListener("touchstart", () => {
//         menu.classList.remove('active')
//         document.body.classList.remove('open-menu')
        
        
        
//     })
// }

function menuOff() {
    menu.classList.remove('active')
    document.body.classList.remove('open-menu')
    menuButton.classList.remove('open')
}