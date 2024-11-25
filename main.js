let btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('text-space').innerHTML = data;
    });
})