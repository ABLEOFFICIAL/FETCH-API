let btn = document.getElementById('btn');
let about = document.getElementById('about');
let aboutSpace = document.getElementById('about-space');



btn.addEventListener('click', function(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        aboutSpace.innerHTML = data;
    });
})

about.addEventListener('click', function(){
    fetch('aboutMe.txt')
    .then((res) => res.text())
    .then((data) => {
        aboutSpace.innerHTML = data;
    })
})

document.getElementById('post').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let post = document.getElementById('post-space');
        post.innerHTML = '<h3>Users</h3>';
        data.forEach((item) => {
            post.innerHTML += `<p>${item.title}</p>`
            post.innerHTML += `<p>${item.userId}</p>`
            post.innerHTML += `<p>${item.body}</p>`

        })
    })
})

document.getElementById('client').addEventListener('click', function(){
    fetch('client.json')
    .then((res) => res.json())
    .then((data) => {
        aboutSpace.innerHTML = '<h3>Users</h3>';
        data.forEach((item) => {
            aboutSpace.innerHTML += `
            <p>${item.userId}</p>
            <p>${item.title}</p>
            <p>${item.it}</p>
            <p>${item.body}</p>
            `

        })
    })
})

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    let text = document.getElementById('text').value;
    let formBody = document.getElementById('form-body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {       //1st and 2nd parameters (url to fetch data from and a method)
        method: 'POST',                                         //....
        headers: {                                              //paremeter 3
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: text, body: formBody})    // parameter 4
    })
    .then((res) => res.json())//response
    .then((data) => {
        console.log(data);
    })
})