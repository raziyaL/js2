let gmailInput = document.querySelector("#gmail_input");
let gmailBtn = document.querySelector("#gmail_button");
let gmailRes = document.querySelector("#gmail_result");
const regExp = /^[0-9a-zA-Z._%+-]+@gmail\.com$/

gmailBtn.onclick = ()=>{
    if(regExp.test(gmailInput.value)){
        gmailRes.innerHTML = 'ok'
        gmailRes.style.color= 'green'
    }else{
        gmailRes.innerHTML='not ok'
        gmailRes.style.color= 'red'
    }
}
// window.onclick = function () {
//     recursiveMovingBoxRight();
// };
//
// const recursiveMovingBoxRight = () => {
//     let box = document.getElementById('inner-box');
//     let parentWidth = document.getElementById('border-box').offsetWidth;
//
//     let newLeftForBox = (parseInt(box.style.left) || 0) + 5;
//
//     if (newLeftForBox + box.offsetWidth < parentWidth) {
//         box.style.left = newLeftForBox + 'px';
//         requestAnimationFrame(recursiveMovingBoxRight);
//     }
// }

// move block
const parent = document.querySelector('.parent_block')
const child = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const maxParWidth = parent.offsetWidth - child.offsetWidth
const maxParHeight = parent.offsetHeight - child.offsetHeight
const moveBlock = () => {
    if(positionX < maxParWidth && positionY === 0) {
        positionX++
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if(positionX >= maxParWidth && positionY < maxParHeight){
        positionY++
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if(positionY >= maxParHeight && positionX > 0){
        positionX--
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if(positionX === 0 && positionY > 0){
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

// startBtn.addEventListener("click", startFunc)
// stopBtn.addEventListener("click", ()=>{
//     clearInterval(interval)
// })
// resetBtn.addEventListener("click", ()=>{
//     clearInterval(interval)
//     start = 0
//     document.querySelector("#seconds").innerHTML = start
// })