// Change nav style on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})



// <!-- Initialize Swiper(gallery) -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }

    }
});
//navbar toggle
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

openNavBtn.addEventListener("click", ()=>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display='inline-block';
});
closeNavBtn.addEventListener("click", ()=>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display='none';
});

// contact buttons(circular text buttons)
const textButtons = document.querySelectorAll('.contact-btn');
textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((Character, index) => `<span style="transform :rotate(${index * 12}deg)">${Character}</span>`).join('')
})



