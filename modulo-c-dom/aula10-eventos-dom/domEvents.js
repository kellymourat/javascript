const a = document.getElementById("area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", Sair);

function clicar() {
  a.innerText = "Clicou!";
  a.style.background = "red";
}
function entrar() {
  a.innerText = "Entrou!";
}
function Sair() {
  a.innerText = "Saiu!";
  a.style.background = "violet";
}
