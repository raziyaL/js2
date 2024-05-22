let phoneInput = document.querySelector("#phone_input");
let phoneButton = document.querySelector("#phone_button");
let phoneResult = document.querySelector("#phone_result");
const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$///^$ ogranichenie dlya lishnih znachenii
phoneButton.onclick = ()=>{
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color= 'green'
    }else{
        phoneResult.innerHTML='not ok'
        phoneResult.style.color= 'red'
    }
}


const tabContBlo= document.querySelectorAll('.tab_content_block')
const tabContItem = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const tabSlider = document.querySelector('.tab_slider')
let tabIndex = 0
const hideTabCont =()=>{
    tabContBlo.forEach((item)=>{
        item.style.display = 'none'
    })
    tabContItem.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabCont = (index = 0)=>{

    tabContBlo[index].style.display = 'block'
    tabContItem[index].classList.add('tab_content_item_active')
    tabIndex = index
}


hideTabCont()
showTabCont()

tabParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabContItem.forEach((item, index)=>{
            if(event.target === item){
                hideTabCont()
                showTabCont(index)
            }
        })
    }
}


const func = ()=>{
    setInterval(()=>{
        tabIndex++
        if(tabIndex > tabContBlo.length-1){
            tabIndex = 0
        }
        hideTabCont()
        showTabCont(tabIndex)
    }, 3000)
}
func()


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#eur')
// somInput.oninput=()=>{
//
//         const request = new XMLHttpRequest()
//         request.open('GET','../data/converter.json')
//         request.setRequestHeader('Content-type', 'application/json')
//         request.send()
//         console.log(request)
//         request.onload = ()=> {
//             const data = JSON.parse(request.response)
//             usdInput.value = (somInput.value / data.usd).toFixed(2)
//         }
// }
//
// usdInput.oninput=()=>{
//     const request = new XMLHttpRequest()
//     request.open('GET','../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//     console.log(request)
//     request.onload = ()=> {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }
//DRY-dont repeat yourself
//KISS-keep it simple stupid

const converter = (element, targetElement, el) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = ()=> {
            const data = JSON.parse(request.response)
            if(element.id === 'som'){
                targetElement.value = (element.value * data.usd).toFixed(2)
                el.value= (element.value * data.eur).toFixed(2)
            }
            if(element.id === 'usd'){
                targetElement.value = ( data.usd / element.value).toFixed(2)
                el.value= ( element.value / data.usd *data.eur).toFixed(2)
            }
            if(element.id === 'eur'){
                targetElement.value = (element.value * data.eur).toFixed(2)
                el.value = (element.value / data.eur * data.usd).toFixed(2)
            }
            element.value === '' && (targetElement.value = '', el.value = '')

            // if(element.value === ''){
            //     targetElement.value = ""
            // }
        }
    }
}
converter(somInput,usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)
