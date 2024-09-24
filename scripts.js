// Abrir y cerrar modales
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
    });
});

// Carrusel de imágenes
document.querySelectorAll('.carousel-control').forEach(button => {
    button.addEventListener('click', () => {
        const carousel = button.closest('.carousel');
        const images = carousel.querySelectorAll('.carousel-image');
        const activeImage = carousel.querySelector('.carousel-image.active');
        let newIndex = [...images].indexOf(activeImage);

        if (button.classList.contains('prev')) {
            newIndex = (newIndex - 1 + images.length) % images.length;
        } else {
            newIndex = (newIndex + 1) % images.length;
        }

        activeImage.classList.remove('active');
        images[newIndex].classList.add('active');
    });
});

// Menú desplegable en dispositivos móviles
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.nav ul');
    nav.classList.toggle('active');
});
