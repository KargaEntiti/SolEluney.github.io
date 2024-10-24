function initializeSlider(sliderId) {
    const slider = document.querySelector(`#${sliderId}`);
    const slides = slider.querySelectorAll('.slide');
    const indicators = slider.querySelectorAll('.indicator');
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                indicators[i].classList.add('active');
            }
        });
    }

    // Añadir evento a cada indicador
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            currentIndex = parseInt(index);
            showSlide(currentIndex);
        });
    });

    // Mostrar el primer slide al cargar la página
    showSlide(currentIndex);
}

// Inicializamos el slider
initializeSlider('slider1');
initializeSlider('slider2');
