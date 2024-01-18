let menubar = document.getElementById('bars');
let close = document.getElementById('times');
let menu = document.querySelector('menu');
let img = document.querySelector('.works img');
let div = document.querySelector('.works li div');
let logo = document.getElementById('logo');




logo.addEventListener('click', () => {
    window.URL()
})

menubar.addEventListener('click', () => {
    menu.classList.add("active");
})
close.addEventListener('click', () => {
    menu.classList.remove("active");
})

img.addEventListener('mouseover', () => {
   div.classList.add('show')
})