
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');

// Evento para abrir/cerrar la carta al hacer clic
envelopeWrapper.addEventListener('click', () => {
    // Si el sobre no está abierto o bajado, lo bajamos primero
    if (!envelopeWrapper.classList.contains('flap') && !envelopeWrapper.classList.contains('open')) {
        envelopeWrapper.classList.add('flap'); // Baja rápido
        
        // Después de bajar, esperamos un poco y subimos lentamente
        setTimeout(() => {
            envelopeWrapper.classList.add('open'); // Sube lentamente
        }, 500);
        
    // Si el sobre ya ha sido subido, lo cerramos
    } else {
        envelopeWrapper.classList.remove('flap', 'open');
    }
});

// Evento para corazones que siguen el cursor o toque
const createHeart = (e) => {
    const body = document.body;
    const heart = document.createElement('span');
    heart.classList.add('cursor-heart');
    heart.style.left = `${e.pageX || e.touches[0].pageX}px`; // Usar pageX para el mouse o touches[0].pageX para el toque
    heart.style.top = `${e.pageY || e.touches[0].pageY}px`; // Similar para Y
    const size = Math.random() * 5 + 2;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.transform = `rotate(${Math.random() * 180}deg)`;
    body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
};

// Detectar movimiento del mouse
document.addEventListener('mousemove', createHeart);

// Detectar movimiento en pantalla táctil (móviles)
document.addEventListener('touchmove', createHeart);
