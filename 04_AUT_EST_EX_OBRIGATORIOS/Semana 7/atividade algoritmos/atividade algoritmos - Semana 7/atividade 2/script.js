

function mostrar(){
    texto1 = document.getElementById("text1").value
    texto2 = document.getElementById("text2").value

    document.getElementById("novalinha").innerHTML = "<p>" + texto1 + "-" + texto2 + "</p>"

}

function trocar(){
    textoo1 = document.getElementById("text1").value
    textoo2 = document.getElementById("text2").value

    document.getElementById("novalinha").innerHTML = "<p>" + textoo2 + "-" + textoo1 + "</p>"

}