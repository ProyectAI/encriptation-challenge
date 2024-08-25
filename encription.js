


function Codificar(){
    let palabra = document.getElementById("codigo").value;

    let palabracodificada= "";
    for (let i=0; i <palabra.length; i++) {
        if (palabra[i]=="e" ){
            palabracodificada += "enter";
        } 
        else if (palabra[i]=="i" ){
            palabracodificada += "imes";
        }
        else if (palabra[i]=="a" ){
            palabracodificada += "ai";
        }
        else if (palabra[i]=="o" ){
            palabracodificada += "ober";
        }
        else if (palabra[i]=="u" ){
            palabracodificada += "ufat";
        }
        else{
            palabracodificada += palabra[i];
        };

    };
    alert(`${palabracodificada}`);
};


function Decodificar() {
    //usamos la interfaz replace para reemplazar la palabras claves por la vocales 
    //usamos i para que no diferencie entre minúscula y mayúscula
    let textoDecodificado = document.getElementById("codigo").value;
    textoDecodificado= textoDecodificado.replace(/enter/g,"e");
    textoDecodificado = textoDecodificado.replace(/imes/g, 'i');
    textoDecodificado = textoDecodificado.replace(/ai/g, 'a');
    textoDecodificado = textoDecodificado.replace(/ober/g, 'o');
    textoDecodificado = textoDecodificado.replace(/ufat/g, 'u');

    alert(`${textoDecodificado}`);
    
};