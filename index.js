var preloader = document.querySelector('.outer-div');
let but = document.querySelector('.btn');
let innd = document.querySelector('.inner-div');

function myfunction () {
    preloader.style.display = 'none';
    but.style.display = 'flex';
    document.body.style.backgroundColor = 'black';            
}
