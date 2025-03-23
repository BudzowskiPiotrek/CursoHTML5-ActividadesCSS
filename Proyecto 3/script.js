function Navigate(index) {
    let limpieza = document.querySelectorAll('.swiper-slide');
    limpieza.forEach(slide => {
        slide.classList.remove('activada'); 
    });

    let eleccionSlides = document.querySelectorAll('.swiper-slide')[index];
    eleccionSlides.classList.add('activada'); 
}

window.onload = function () {
    Navigate(0); 
};
