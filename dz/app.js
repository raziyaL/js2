const btn = document.querySelector('#getData');
const container = document.querySelector('.class')
btn.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET','person.json');
    request.setRequestHeader('Content-type','application/json');
    request.send()
    request.onload=()=>{
        const data = JSON.parse(request.response)
        data.forEach(item=>{
            const div= document.createElement('div');
            div.innerHTML=`
                <img src="${item.person_photo}" alt="photo">
                <p>name: ${item.name}</p>
                <p>age: ${item.age}</p>
            `
            container.appendChild(div);
        })
    }
}

    const request = new XMLHttpRequest()
    request.open('GET','free.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.onload = ()=> {
        const data = JSON.parse(request.response)
        console.log(data)

    }

