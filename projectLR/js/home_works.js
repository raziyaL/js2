let gmailInput = document.querySelector("#gmail_input");
let gmailBtn = document.querySelector("#gmail_button");
let gmailRes = document.querySelector("#gmail_result");
const regExp = /^[0-9a-zA-Z._%+-]+@gmail\.com$/
let inner_gmail_block = document.querySelector("#gmail_box");
let gmailCont = document.querySelector("#gmail_container");
const div = document.querySelector('.world')
const text = document.querySelector('p')

gmailBtn.onclick = ()=>{
    if(regExp.test(gmailInput.value)){
          inner_gmail_block.style.backgroundImage = 'url("https://i.pinimg.com/originals/07/1a/ac/071aacd463811e85a24ed63658e1b10c.gif")'
        inner_gmail_block.style.backgroundPosition='center'
        inner_gmail_block.style.backgroundRepeat='no-repeat'
        inner_gmail_block.style.backgroundSize='cover'
        inner_gmail_block.style.height='600px'
        text.style.display = 'none'
        div.style.display= 'none'
        gmailInput.style.display='none'
        gmailBtn.style.display='none'


    }else{
        inner_gmail_block.style.backgroundImage = 'url("https://66.media.tumblr.com/d01ccf0385d6a930b12b8a8b12d99196/3a445339555c8f0a-ed/s500x750/a39b5547ffc9db89b12c9d81d409223e57b8e0f2.gif")'
        inner_gmail_block.style.backgroundPosition='center'
        inner_gmail_block.style.backgroundRepeat='no-repeat'
        inner_gmail_block.style.backgroundSize = 'cover'
        inner_gmail_block.style.height='600px'
        div.style.display= 'none'


    }
}


// move block
const parent = document.querySelector('.parent_block')
const child = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxParWidth = parent.offsetWidth - child.offsetWidth
const maxParHeight = parent.offsetHeight - child.offsetHeight

const moveBlock = () => {
    if(positionX < maxParWidth && positionY === 0) {
        // child.style.transition = 'transform 0.1s ease'
        // child.style.transform = 'rotate(0deg)'
        child.style.backgroundImage = 'url("https://cdn.dribbble.com/users/2126653/screenshots/4248049/plane.gif")'
        child.style.backgroundPosition='center'
        child.style.backgroundSize='cover'
        child.style.backgroundRepeat='no-repeat'
        positionX++
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)

    }else if(positionX >= maxParWidth && positionY < maxParHeight){
        // child.style.transition = 'transform 0.5s ease'
        // child.style.transform = 'rotate(90deg)'
        child.style.backgroundImage='url("https://media.baamboozle.com/uploads/images/304871/1617786879_23685_gif-url.gif")'
        positionY++
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if(positionY >= maxParHeight && positionX > 0){
        // child.style.transition = 'transform 0.1s ease'
        // child.style.transform = 'rotate(0deg)'
        // child.style.transform = 'scaleX(-1)'
        child.style.backgroundImage='url("https://ugokawaii.com/wp-content/uploads/2023/06/ship.gif")'
        positionX--
        child.style.left = `${positionX}px`

        requestAnimationFrame(moveBlock)
    }else if(positionX === 0 && positionY > 0){
        // child.style.transition = 'transform 0.5s ease'
        // child.style.transform = 'rotate(270deg)'
        child.style.backgroundImage='url("https://ugokawaii.com/wp-content/uploads/2023/12/rocket.gif")'
        positionY--
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)

    }
}
moveBlock()

let startBtn = document.querySelector("#start");
let start = 0
let interval
const startFunc = ()=>{
    interval = setInterval(()=>{
        start++
        document.querySelector("#seconds").innerHTML = start
    }, 1000)
    startBtn.disabled = true
}
const stopFunc = ()=>{
    clearInterval(interval)
    startBtn.disabled = false
}
const resetFunc = ()=>{
    clearInterval(interval)
    start = 0
    document.querySelector("#seconds").innerHTML = start
    startBtn.disabled = false
}



