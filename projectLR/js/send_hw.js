const divBlock = document.querySelector('.block_user');
divBlock.style.display = 'flex'
divBlock.style.flexWrap = 'wrap'

const cardRequest = async ()=>{
    try{
        const response = await fetch(' https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(post=>{
            const cardDiv = document.createElement('div');
            cardDiv.style.paddingTop = '80px'
                cardDiv.innerHTML = `
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEm0bvBHCx9SbNHrlJmRWPWJPjDjbxz3X8QQ&usqp=CAU" alt="posr_user">
                <h5>${post.title}</h5>
                <p>${post.body}</p>
                `
            cardDiv.style.width= '270px'
            cardDiv.style.margin= '10px'
            divBlock.appendChild(cardDiv)
        })
    }catch(err){
        console.log(err)
    }
}
cardRequest()
// document.body.appendChild(divBlock);
