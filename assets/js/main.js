const buyBtns = document.querySelectorAll('.js-buyTicketBtn')
const closeBtn = document.querySelector('.js-modalClose')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modalContainer')

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', () => {
        modal.classList.add('open')
    });
}

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open')
});

modal.addEventListener('click', () => {
    modal.classList.remove('open')
});

modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})

var mobileNav = document.getElementById('nav');
var menuBtn = document.querySelector('.header-menu');
var barBtnIcon = document.querySelector('.header-menu-icon');
var closeBtnIcon = document.querySelector('.menu-xIcon');

var mobileNavCL = mobileNav.classList;
var barBtnIconCL = barBtnIcon.classList;
var closeBtnIconCL = closeBtnIcon.classList;

menuBtn.addEventListener('click', () => {
    mobileNavCL.toggle('show');
    barBtnIconCL.toggle('hide');
    closeBtnIconCL.toggle('show');
});

menuBtn.addEventListener('click', () => {
    if (closeBtnIcon.classList == 'show') {
        mobileNavCL.remove('show');
        barBtnIconCL.remove('hide');
        closeBtnIconCL.remove('show');
    }
});

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function () {
        setTimeout(() => {
            mobileNavCL.remove('show');
            barBtnIconCL.remove('hide');
            closeBtnIconCL.remove('show');
        }, 100);
    }
};