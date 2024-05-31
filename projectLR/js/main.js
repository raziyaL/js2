// RANDOM COLOR GENERATOR

const winterBtn = document.querySelector('.winter-btn');
const summerBtn = document.querySelector('.summer-btn');
const autumnBtn = document.querySelector('.autumn-btn');
const springBtn = document.querySelector('.spring-btn');
const javaScript = document.querySelector('#js-color')
const mainBlock = document.querySelector('.main_block')
winterBtn.style.color = 'skyblue'
summerBtn.style.color = 'yellow'
springBtn.style.color = 'purple'
autumnBtn.style.color = 'orange'
winterBtn.addEventListener('click', (e) => {
    mainBlock.style.backgroundImage = 'url(../image/image_processing20181011-4-3hqx1i.jpeg)';
})
summerBtn.addEventListener('click', (e) => {
    mainBlock.style.backgroundImage = 'url(../image/3866C9E87F00010100CFA2275BB60AE2.jpeg)';
})
springBtn.addEventListener('click', (e) => {
    mainBlock.style.backgroundImage = 'url(../image/_methode_times_prod_web_bin_f02a1220-3acf-403d-891e-fbfb99ad297c.jpeg)';
})
autumnBtn.addEventListener('click', (e) => {
    mainBlock.style.backgroundImage = 'url(../image/Autumn-in-Hunza-1.jpeg)';
})

// const generateRandomColor = () => {
//     const hexCodes = '0123456789ABCDEF'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
//     }
//     return '#' + color
// }
//
// const setRandomColors = () => {
//     buttonsColor.forEach((buttonColor) => {
//         buttonColor.innerHTML = generateRandomColor()
//         buttonColor.onclick = (event) => {
//             javaScript.style.color = event.target.innerHTML
//         }
//     })
// }
//
// window.onload = () => setRandomColors()
// window.onkeydown = (event) => {
//     if (event.code.toLowerCase() === 'space') {
//         event.preventDefault()
//         setRandomColors()
//     }
// }

// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}

hideSlide()
showSlide(index)


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}



next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)
