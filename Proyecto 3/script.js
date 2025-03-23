function Navigate(index) {
    let movimiento = document.querySelectorAll('.swiper-slide');
    movimiento.forEach(slide => {
        slide.classList.remove('activada'); 
    });

    let eleccionSlides = document.querySelectorAll('.swiper-slide')[index];
    eleccionSlides.classList.add('activada'); 
}

window.onload = function () {
    Navigate(0); 
};
