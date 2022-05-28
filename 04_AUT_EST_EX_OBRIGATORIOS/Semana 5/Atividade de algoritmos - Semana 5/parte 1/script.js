function calcular(){
    var numUm = parseInt(document.getElementById("nrUm").value);
    var numDois = parseInt(document.getElementById("nrDois").value);

    
    if (document.getElementById("operator").value == "+"){
        document.getElementById("novalinha").innerHTML = numUm + numDois;
    }
    else if (document.getElementById("operator").value == "-"){
        document.getElementById("novalinha").innerHTML = numUm - numDois;
    }
    else if (document.getElementById("operator").value == "*"){
        document.getElementById("novalinha").innerHTML = numUm * numDois;
    }
    else if (document.getElementById("operator").value == "/"){
        document.getElementById("novalinha").innerHTML = numUm / numDois;
    }
    else if (document.getElementById("operator").value == "%"){
        document.getElementById("novalinha").innerHTML = numUm % numDois;
    }
}

