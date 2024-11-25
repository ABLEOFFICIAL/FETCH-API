let btn = document.getElementById('btn');
let about = document.getElementById('about');


btn.addEventListener('click', function(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('text-space').innerHTML = data;
    });
})

about.addEventListener('click', function(){
    fetch('aboutMe.txt')
    .then((res) => res.text())
    .then((data) => {
        let about = document.getElementById('about-space');
        about.innerHTML = data;
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