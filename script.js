/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

let click = 1;

function encriptar() {
    let tex = document.getElementById("textoA").value;
    let resultado = "";

    for (let i = 0; i < tex.length; i++) {
        var caracterActual = tex.charAt(i);
        switch (caracterActual) {
            case "a":
                resultado += "ai";
                break;
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
            default:
                resultado += caracterActual;
                break;
        }
    }        

    let texD = document.getElementById("textoA");
    texD.value = "Ingresa tu texto";

    if(click == 1){
        quitarIMG()
        agregarTexto(resultado)
        click =2;
    }else{
        quitarH2();
        agregarTexto(resultado)
    }

}

function vaciarText(){
    let texD = document.getElementById("textoA");
    texD.value = "";
}

function desencriptar() {
    let tex = document.getElementById("textoA").value;
    let resultado = "";
    var i = 0;
    while (i < tex.length) {
        var caracterActual = tex.charAt(i);
        if (caracterActual === "e" && tex.substring(i, i + 5) === "enter") {
            resultado += "e";
            i += 5;
        } else if (caracterActual === "i" && tex.substring(i, i + 4) === "imes") {
            resultado += "i";
            i += 4;
        } else if (caracterActual === "a" && tex.substring(i, i + 2) === "ai") {
            resultado += "a";
            i += 2;
        } else if (caracterActual === "o" && tex.substring(i, i + 4) === "ober") {
            resultado += "o";
            i += 4;
        } else if (caracterActual === "u" && tex.substring(i, i + 4) === "ufat") {
            resultado += "u";
            i += 4;
        } else {
            resultado += caracterActual;
            i++;
        }
    }
    
    let texD = document.getElementById("textoA");
    texD.value = "Ingresa tu texto";

    if(click == 1){
        quitarIMG()
        agregarTexto(resultado)
        click =2;
    }else{
        quitarH2();
        agregarTexto(resultado)
    }
}

function agregarTexto(resultado) {        
    const miAside = document.querySelector(".Cderecho");
    const texto = document.createElement('h2')
    texto.textContent = resultado;
    miAside.appendChild(texto);  
    miAside.appendChild(botonCop(resultado))    
}

function quitarIMG(){
    const miAside = document.querySelector(".Cderecho");
    const img1 = miAside.querySelector("img");
    const h21 = miAside.querySelector("h2");
    const h31 = miAside.querySelector("h3");
    if (img1 != null) {
        miAside.removeChild(img1)
        miAside.removeChild(h21)
        miAside.removeChild(h31)
    }    
}

function quitarH2(){
    const miAside = document.querySelector(".Cderecho");
    const h2 = miAside.querySelector("h2");
    const boton = miAside.querySelector("button");
    miAside.removeChild(h2)
    miAside.removeChild(boton)
}

function botonCop(resultado){
    const botonCopiar = document.createElement('button')
    botonCopiar.textContent = "Copiar"
    botonCopiar.style.background = "#fff"
    botonCopiar.style.width = "300px"
    botonCopiar.style.height = "67px"
    botonCopiar.style.borderRadius = "20px"
    botonCopiar.style.color = "#0a3871"
    botonCopiar.style.border = "1px solid #0a3871"
    botonCopiar.style.fontSize = "20px"
    botonCopiar.style.marginTop = "200px"
    
    botonCopiar.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#0a3871';
        this.style.color = "#fff"
    });

    botonCopiar.addEventListener('mouseout', function () {
        botonCopiar.style.background = "#fff"
        botonCopiar.style.color = "#0a3871"
    });

    botonCopiar.addEventListener('click', function () {
        const textoACopiar = resultado;
        navigator.clipboard.writeText(textoACopiar)
            .then(() => {
                console.log('Texto copiado con éxito!');
            })
            .catch((error) => {
                console.error('Error al copiar el texto: ', error);
            });
    });

    return botonCopiar
}