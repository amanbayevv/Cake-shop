const header = document.querySelector('header')


window.addEventListener('scroll', (e) => {
    header.classList.toggle('sticky', this.window.scrollY > 0)
})