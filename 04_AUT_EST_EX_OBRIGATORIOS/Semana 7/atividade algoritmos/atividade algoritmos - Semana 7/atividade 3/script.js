

function mostrar(){
    var number = document.getElementById("numero").textContent
    var numbero = document.getElementById("numero").value

    if(number.length == 11){
        document.getElementById("novalinha").innerHTML = "<p>" + numbero + "</p>"
    }
    else{
        document.getElementById("staticBackdrop").style.display = "block";
    }
}