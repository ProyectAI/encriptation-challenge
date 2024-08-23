
function Codificar(){
    let palabra = document.getElementById("codigo").value;
    let palabracodificada= "";
    for (let i=0; i <palabra.length; i++) {
        if (palabra[i]=="e" ){
            palabracodificada += "enter";
        }else{
            palabracodificada += palabra[i];
        }

    }
    alert(`${palabracodificada}`);
}