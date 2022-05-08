

function hmax(){
    var velocidade = document.getElementById("V0").value;
    var altura = 0;
    altura = (velocidade * velocidade) / 20;
    document.getElementById("saida").innerHTML = altura;

}

function time(){
    var velocidade = document.getElementById("tempo").value;
    var tempor = 0;
    tempor = velocidade / 10;
    document.getElementById("saida").innerHTML = tempor;
}