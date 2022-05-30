

function calcular(){
    var bonk = document.getElementById("nrOne").value
    var notaCem = 0;
    var notaCinq = 0;
    var notaVinte = 0;
    var notaDez = 0;
    var notaCinco = 0;
    var notaDois = 0;
    var notaUm = 0;
    while (bonk > 0){
        if (bonk > 100){
            bonk -= 100
            notaCem ++
        }
        else if (bonk >= 50){
            bonk -= 50
            notaCinq ++
        }
        else if (bonk >= 20){
            bonk -= 20
            notaVinte ++
        }
        else if (bonk >= 10){
            bonk -= 10
            notaDez ++
        }
        else if (bonk >= 5){
            bonk -= 5
            notaCinco ++
        }
        else if (bonk >= 2){
            bonk -= 2
            notaDois ++
        }
        else if (bonk >= 1){
            bonk -= 1
            notaUm ++
        }
    }
    document.getElementById("novalinha").innerHTML = "<p>NrNotas100 - " + notaCem + "</p><br>" + "<p>NrNotas50 - " + notaCinq + "</p><br>" + "<p>NrNotas20 - " + notaVinte + "</p><br>" + "<p>NrNotas10 - " + notaDez + "</p><br>" + "<p>NrNotas5 - " + notaCinco + "</p><br>" + "<p>NrNotas2 - " + notaDois + "</p><br>" + "<p>NrNotas1 - " + notaUm + "</p><br>"
}

