// Función para codificar el texto
function Codificar() {
    const textarea = document.getElementById("codigo");
    let palabra = textarea.value.trim(); // Usamos trim() para eliminar espacios en blanco

    // Verificar si el textarea está vacío
    if (palabra === "") {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return; // Detener la ejecución si el textarea está vacío
    }

    let palabracodificada = "";
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] == "e") {
            palabracodificada += "enter";
        } else if (palabra[i] == "i") {
            palabracodificada += "imes";
        } else if (palabra[i] == "a") {
            palabracodificada += "ai";
        } else if (palabra[i] == "o") {
            palabracodificada += "ober";
        } else if (palabra[i] == "u") {
            palabracodificada += "ufat";
        } else {
            palabracodificada += palabra[i];
        }
    }

    mostrarResultado(palabracodificada);
}

// Función para decodificar el texto
function Decodificar() {
    const textarea = document.getElementById("codigo");
    let textoDecodificado = textarea.value.trim(); // Usamos trim() para eliminar espacios en blanco

    // Verificar si el textarea está vacío
    if (textoDecodificado === "") {
        alert("El campo de texto está vacío. Por favor, ingrese un texto.");
        return; // Detener la ejecución si el textarea está vacío
    }

    textoDecodificado = textoDecodificado.replace(/enter/g, "e");
    textoDecodificado = textoDecodificado.replace(/imes/g, 'i');
    textoDecodificado = textoDecodificado.replace(/ai/g, 'a');
    textoDecodificado = textoDecodificado.replace(/ober/g, 'o');
    textoDecodificado = textoDecodificado.replace(/ufat/g, 'u');

    mostrarResultado(textoDecodificado);
}

// Función para mostrar el resultado en el div de salida
function mostrarResultado(resultado) {
    const salidaDiv = document.querySelector('.salida');

    // Ocultar las imágenes dentro del div de salida
    const imagenes = salidaDiv.querySelectorAll('img');
    imagenes.forEach(img => img.style.display = 'none');

    // Elimina solo los párrafos anteriores, si existen, en lugar de todo el contenido del div
    const parrafos = salidaDiv.querySelectorAll('p.resultado');
    parrafos.forEach(p => p.remove());

    // Mostrar el texto codificado/decodificado en el div de salida
    const parrafoResultado = document.createElement('p');
    parrafoResultado.textContent = resultado;
    parrafoResultado.classList.add('resultado'); // Añadir clase para estilos
    salidaDiv.appendChild(parrafoResultado);

    // Asegúrate de que el botón de copiar esté visible
    document.getElementById('ocultoBtn').style.display = 'inline'; // O 'block' dependiendo de tus necesidades
}
