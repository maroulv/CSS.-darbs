const header = document.querySelector('.js-header')

header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'white'
})

header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = ''
})

const Reklāma = document.querySelector('.js-reklama')

Reklāma.addEventListener('mouseenter', () => {
    Reklāma.style.backgroundColor = 'yellow'
})

Reklāma.addEventListener('mouseleave', () => {
    Reklāma.style.backgroundColor = ''
})

const images = document.querySelectorAll('.js-image')
const back = document.querySelector('.js-back')
const forward = document.querySelector('.js-forward')
let activeIndex = 0

forward.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })
 
    if(activeIndex === images.length - 1) {
        activeIndex = 0
    } else {
        activeIndex = activeIndex + 1
    }

    images[activeIndex].classList.add('active')
})

back.addEventListener('click', () => {
    images.forEach((image) => {
        image.classList.remove('active')
    })
 
    if(activeIndex === 0) {
        activeIndex = images.length -1
    } else {
        activeIndex = activeIndex -1
    }

    images[activeIndex].classList.add('active')
})

const viens = document.querySelector('.js-viens')
        viens.addEventListener('mouseenter', () => {
    viens.style.backgroundColor = 'yellow'
})

viens.addEventListener('mouseleave', () => {
    viens.style.backgroundColor = ''
})

const divi = document.querySelector('.js-divi')
        divi.addEventListener('mouseenter', () => {
    divi.style.backgroundColor = 'red'
})

divi.addEventListener('mouseleave', () => {
    divi.style.backgroundColor = ''
})
const trīs = document.querySelector('.js-trīs')
    trīs.addEventListener('mouseenter', () => {
    trīs.style.backgroundColor = 'violet'
})

trīs.addEventListener('mouseleave', () => {
    trīs.style.backgroundColor = ''
})

const četri = document.querySelector('.js-četri')
četri.addEventListener('mouseenter', () => {
    četri.style.backgroundColor = 'blue'
})

četri.addEventListener('mouseleave', () => {
    četri.style.backgroundColor = ''
})

    const pieci = document.querySelector('.js-pieci')
    pieci.addEventListener('mouseenter', () => {
    pieci.style.backgroundColor = 'orange'
})

    pieci.addEventListener('mouseleave', () => {
    pieci.style.backgroundColor = ''
})

const seši = document.querySelector('.js-seši')
seši.addEventListener('mouseenter', () => {
    seši.style.backgroundColor = 'green'
})

seši.addEventListener('mouseleave', () => {
    seši.style.backgroundColor = ''
})
