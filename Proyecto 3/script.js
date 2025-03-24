function Navigate(index) {
    let listaSlides = document.querySelectorAll('.swiper-slide');
    let ahoraActivado = document.querySelector('.swiper-slide.activada');
    
    if (ahoraActivado && Array.from(listaSlides).indexOf(ahoraActivado) === index) {
        return;  // SI ESTA EN MISMA SECCION NO PASA NADA
    }
        
    listaSlides.forEach(slide => {
        slide.classList.remove('ultima')
        if (slide.classList.contains('activada')) {
            slide.classList.remove('activada');
            slide.classList.add('ultima');
        }
    });

    let eleccionSlides = document.querySelectorAll('.swiper-slide')[index];
    eleccionSlides.classList.add('activada'); 
}

window.onload = function () {
    Navigate(0); 
};
