document.addEventListener('DOMContentLoaded', function() {
    const mostrarBtn = document.getElementById('mostrarBtn');
    const botonOculto = document.getElementById('ocultoBtn');

    if (!mostrarBtn || !botonOculto) {
        console.error("Uno o más elementos no se encontraron en el DOM.");
        return;
    }

    mostrarBtn.addEventListener('click', function() {
        // Llamar a Codificar() directamente si la función está en encription1.js
        Codificar();
    });

    // Aquí podrías añadir la función para copiar al portapapeles
    window.Copiar = function() {
        const resultado = document.querySelector('.salida p.resultado');
        if (resultado) {
            navigator.clipboard.writeText(resultado.textContent)
                .then(() => {
                    alert('Texto copiado al portapapeles');

                    // Ocultar el texto y el botón de copiar
                    resultado.remove();
                    botonOculto.style.display = 'none';

                    // Mostrar las imágenes que se ocultaron
                    const imagenes = document.querySelector('.salida').querySelectorAll('img');
                    imagenes.forEach(img => img.style.display = 'block');
                })
                .catch(err => console.error('Error al copiar el texto: ', err));
        } else {
            alert('No hay texto para copiar');
        }
    };
});
