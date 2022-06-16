var contador = 0;
var numero

function adic(){
    if (contador === 0){
        numero = parseInt(document.getElementById("valor").value);
        contador = 1
    }
    numero += 1;

    document.getElementById("novalinha").innerHTML = "<p>" + numero + "</p>";
}

function remo(){
    if (contador === 0){
        numero = parseInt(document.getElementById("valor").value);
        contador = 1
    }
    numero -= 1;

    document.getElementById("novalinha").innerHTML = "<p>" + numero + "</p>";
}