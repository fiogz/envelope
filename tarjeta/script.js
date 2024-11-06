
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

// Script para corazones que siguen el cursor
document.addEventListener('mousemove', function (e) {
    const body = document.body;
    const heart = document.createElement('span');
    heart.classList.add('cursor-heart');
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    const size = Math.random() * 5 + 2;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.transform = `rotate(${Math.random() * 180}deg)`;
    body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});