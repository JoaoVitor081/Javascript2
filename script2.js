const btnCadastro = document.getElementById("Cadastro");
btnCadastro.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("nome2").innerHTML = "Nome: " +nome;
});
btnCadastro.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    document.getElementById("email2").innerHTML = "E-mail: " +email;
});
btnCadastro.addEventListener("click", () => {
    let dtnasc = document.getElementById("dtnasc").value;
    document.getElementById("dtnasc2").innerHTML = "Data de Nascimento: " +dtnasc;
});
const btnRestart = document.getElementById("Resetar");
btnRestart.addEventListener ("click", () => {
    document.getElementById("nome2").innerHTML = "Nome: ";
    document.getElementById("email2").innerHTML = "E-mail: ";
    document.getElementById("dtnasc2").innerHTML = "Data de Nascimento: ";
});