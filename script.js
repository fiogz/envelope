
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

let lastHeartTime = 0; // Tiempo del último corazón creado
const heartInterval = 80; // Intervalo mínimo en milisegundos entre corazones (100ms)

const createHeart = (e) => {
    const currentTime = Date.now();
    if (currentTime - lastHeartTime >= heartInterval) {
        lastHeartTime = currentTime;

        const body = document.body;
        const heart = document.createElement('span');
        heart.classList.add('cursor-heart');
        heart.style.left = `${e.pageX || e.touches[0].pageX}px`;
        heart.style.top = `${e.pageY || e.touches[0].pageY}px`;
        const size = Math.random() * 5 + 2;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.transform = `rotate(${Math.random() * 180}deg)`;
        body.appendChild(heart);

        // Eliminar el corazón después de 1 segundo
        setTimeout(() => heart.remove(), 1000);
    }
};

// Detectar movimiento del mouse
document.addEventListener('mousemove', createHeart);

// Detectar movimiento en pantalla táctil (móviles)
document.addEventListener('touchmove', createHeart);


// Función para crear los textos flotantes aleatorios
const createFloatingText = () => {
    const body = document.body;
    const textElement = document.createElement('spann');
    
    // Texto aleatorio
    const texts = ['Rohayhueterei', 'Te amo mucho mi amor','Amor mío'];
    const randomText = texts[Math.floor(Math.random() * texts.length)];

    textElement.textContent = randomText;  // Asignar el texto aleatorio
    textElement.classList.add('floating-text');  // Añadir la clase para los estilos

    const randomX = Math.random() * (window.innerWidth - 200);  // Restar un valor para no generar fuera de la pantalla
    const randomY = Math.random() * (window.innerHeight - 100);  // Restar un valor para no generar fuera de la pantalla

    // Establecer la posición en el fondo
    textElement.style.left = `${randomX}px`;
    textElement.style.top = `${randomY}px`;

    body.appendChild(textElement);
    
    // Eliminar el texto después de 2 segundos
    setTimeout(() => textElement.remove(), 2000);
};

// Generar los textos flotantes de forma aleatoria
setInterval(createFloatingText, 500);  // Ajusta el intervalo según lo que necesites
