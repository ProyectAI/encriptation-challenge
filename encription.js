// Evento para el botón Codificar
document.getElementById('mostrarBtn').addEventListener('click', function() {
    Codificar();
});

// Función para codificar el texto y mostrar el resultado
function Codificar() {
    let palabra = document.getElementById("codigo").value;
    let palabracodificada = "";

    // Codificar el texto
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "e") {
            palabracodificada += "enter";
        } else if (palabra[i] === "i") {
            palabracodificada += "imes";
        } else if (palabra[i] === "a") {
            palabracodificada += "ai";
        } else if (palabra[i] === "o") {
            palabracodificada += "ober";
        } else if (palabra[i] === "u") {
            palabracodificada += "ufat";
        } else {
            palabracodificada += palabra[i];
        }
    }

    // Mostrar el resultado en el div de salida
    mostrarResultado(palabracodificada);

    // Mostrar el botón oculto
    document.getElementById('ocultoBtn').style.display = 'inline'; // O 'block' dependiendo de tus necesidades
}

// Función para decodificar el texto (como antes)
function Decodificar() {
    let textoDecodificado = document.getElementById("codigo").value;
    textoDecodificado = textoDecodificado.replace(/enter/g, "e");
    textoDecodificado = textoDecodificado.replace(/imes/g, 'i');
    textoDecodificado = textoDecodificado.replace(/ai/g, 'a');
    textoDecodificado = textoDecodificado.replace(/ober/g, 'o');
    textoDecodificado = textoDecodificado.replace(/ufat/g, 'u');

    alert(textoDecodificado);
}

// Función para mostrar el resultado en el div de salida
function mostrarResultado(resultado) {
    const salidaDiv = document.querySelector('.salida');
    
    // Ocultar las imágenes dentro del div de salida
    const imagenes = salidaDiv.querySelectorAll('img');
    imagenes.forEach(img => img.style.display = 'none');
    
    // Limpiar el contenido previo en el div de salida
    salidaDiv.innerHTML = '';

    // Mostrar el texto codificado/decodificado en el div de salida
    const parrafoResultado = document.createElement('p');
    parrafoResultado.textContent = resultado;
    parrafoResultado.classList.add('resultado'); // Añadir clase para estilos
    salidaDiv.appendChild(parrafoResultado);
}
