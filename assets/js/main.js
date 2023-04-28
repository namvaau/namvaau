// Nav Menu
var menu = document.querySelector('.nav_menu');
var open = document.querySelector('#open')
var close = document.querySelector('#close')

function openMenu() {
    menu.style.display = 'block';
    close.style.display = 'inline-block';
    open.style.display = 'none';
}

function closeMenu() {
    menu.style.display = 'none';
    open.style.display = 'inline-block';
    close.style.display = 'none';
}

// Ngày sinh nhật

var deadline = new Date('2023-05-28 23:55:00').getTime();
setInterval(function () {

    var now = new Date().getTime();
    time = deadline - now;
    var day = Math.floor(time / (24 * 60 * 60 * 1000));
    time = time - day * 24 * 60 * 60 * 1000;
    var hours = Math.floor(time / (60 * 60 * 1000));
    time = time - hours * 60 * 60 * 1000;
    var minutes = Math.floor(time / (60 * 1000));
    time = time - minutes * 60 * 1000;
    var second = Math.floor(time / (1000));
    document.getElementById('day').innerText = day;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('second').innerText = second;

}, 1000)

// Cuộn màn hình

window.addEventListener('scroll', () => {
    document.querySelector('.header_top').classList.toggle('header_top_none', window.scrollY > 0)
})

// Faqs

var faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('faq_open');
        var icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus'
        } else {
            icon.className = 'fa-solid fa-plus'
        }
    })
})