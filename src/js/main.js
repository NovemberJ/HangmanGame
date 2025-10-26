import '../css/style.css'

const darkModeSwitcher = document.getElementById('toggleDarkMode')
darkModeSwitcher.addEventListener('input', () => {
    const htmlElement = document.documentElement
    htmlElement.classList.toggle('dark')
})