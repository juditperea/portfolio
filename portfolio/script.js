document.addEventListener('DOMContentLoaded', function() {
    const modoSwitch = document.querySelector('#modo-switch')

    modoSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode')
    })
})