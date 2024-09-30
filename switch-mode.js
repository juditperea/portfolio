/* this script will change styles when clicking the button in the menu,
creating the illusion of a dark/light mode button
*/

document.addEventListener('DOMContentLoaded', function() {
    const modoSwitch = document.querySelector('#modo-switch')

    modoSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode')
    })
})