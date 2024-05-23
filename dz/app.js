 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data=>{
    data.forEach((post) => {
    console.log('userId: '+ post.userId)
        console.log('id: ' + post.id)
        console.log('title: ' + post.title)
        console.log( 'body: ' + post.body)
})
})