const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", ()=> {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = parseInt(num1) + parseInt(num2);
    document.getElementById("resul").innerHTML= ("Seu resultado é:" + soma)
});

const btnSub = document.getElementById("Subtra");
btnSub.addEventListener("click", ()=> {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Sub = parseInt(num1) - parseInt(num2);
    document.getElementById("resul").innerHTML= ("Seu resultado é:" + Sub)
});

const btnMulti = document.getElementById("Multipli");
btnMulti.addEventListener("click", ()=> {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Multi = parseInt(num1) * parseInt(num2);
    document.getElementById("resul").innerHTML= ("Seu resultado é:" + Multi)
});

const btnDiv = document.getElementById("Divisao");
btnDiv.addEventListener("click", ()=> {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Divisao = parseInt(num1) / parseInt(num2);
    document.getElementById("resul").innerHTML= ("Seu resultado é:" + Divisao)
});