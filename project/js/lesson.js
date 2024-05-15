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

// const tabSliderFunc = () => {
//     tabSlider.onmouseover = () => {
//         tabContBlo.forEach((item, index) => {
//             setTimeout(() => {
//                 hideTabCont(index)
//                 showTabCont(index);
//             }, index * 3000);
//         });
//     };
// };
//
// tabSliderFunc();
// tabSliderFunc()

// let slideRunning = false
// const tabSliderFunc = () => {
//     tabSlider.onmouseover = () => {
//         if(!slideRunning) {
//             slideRunning = true
//             tabContBlo.forEach((item, index) => {
//                 setTimeout(() => {
//                     hideTabCont(index)
//                     showTabCont(index);
//                     if (index === tabContBlo.length - 1) {
//                         slideRunning = false
//                     }
//
//                 }, index * 3000);
//             });
//         }
//     };
// };
//
// tabSliderFunc();

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