document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton-dinamico');
    const sorpresa = document.getElementById('sorpresa');
    const mensajeInicial = document.querySelector('.mensaje-inicial');
    let haSidoClickeado = false;
    
    // Obtener el elemento de audio
    const musica = document.getElementById('musicaFondo'); 

    // Función para crear CORAZONES/CUPIDOS FLOTANTES
    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon-flotante');
        
        // Elige entre corazones y cupidos
        const elementos = ['❤️', '💖', '💘', '🏹']; 
        corazon.innerHTML = elementos[Math.floor(Math.random() * elementos.length)];
        
        // Estilos aleatorios para la animación
        corazon.style.fontSize = Math.random() * 1.5 + 1.2 + 'em'; 
        corazon.style.left = Math.random() * 100 + 'vw'; 
        corazon.style.opacity = Math.random() * 0.8 + 0.5; 
        corazon.style.animationDuration = Math.random() * 3 + 3 + 's'; 
        corazon.style.animationDelay = Math.random() * 2 + 's'; 
        
        document.getElementById('confetti-container').appendChild(corazon);

        // Limpiar elementos después de caer
        setTimeout(() => {
            corazon.remove();
        }, parseFloat(corazon.style.animationDuration) * 1000 + 1000); 
    }

    // Evento del botón
    boton.addEventListener('click', () => {
        if (!haSidoClickeado) {
            
            // 1. REPRODUCIR LA MÚSICA
            musica.play().catch(error => {
                console.log("Error al reproducir el audio automáticamente:", error);
            });

            // 2. Mostrar la sección de sorpresa (la carta)
            sorpresa.classList.add('mostrar');
            
            // 3. Ocultar el mensaje inicial
            mensajeInicial.style.display = 'none';

            // 4. Cambiar el icono del botón y detener animación
            boton.innerHTML = '🎉';
            boton.style.animation = 'none';
            boton.style.backgroundColor = '#FFD700';
            
            // 5. Activar los corazones/cupidos (SPLASH inicial)
            for (let i = 0; i < 70; i++) {
                crearCorazon();
            }

            // 6. Scroll suave hasta la carta
            sorpresa.scrollIntoView({ behavior: 'smooth' });

            haSidoClickeado = true;

        } else {
            // Generador de más corazones/cupidos si ya se hizo clic
            for (let i = 0; i < 20; i++) {
                crearCorazon();
            }
            // Efecto de rebote en el botón
            boton.style.transform = 'scale(1.2)';
            setTimeout(() => {
                boton.style.transform = 'scale(1)';
            }, 100);
        }
    });
});