// Comandos básicos para navegar na árvore do site, utilizando DOM com javascript.

// === SELECIONANDO POR TAG ===
const corpo = document.body; // seleciona o <body> inteiro
const primeiroParagrafo = document.getElementsByTagName("p")[0]; // seleciona o primeiro <p>
corpo.style.background = "black";
primeiroParagrafo.style.color = "blue";

const segundoParagrafo = document.getElementsByTagName("p")[1]; // seleciona o segundo <p>
alert(segundoParagrafo.innerText); // mostra só o texto (sem tags)
alert(segundoParagrafo.innerHTML); // mostra o conteúdo completo (com tags HTML)

// === SELECIONANDO POR ID ===
const divMsg = document.getElementById("msg"); // seleciona o elemento com ID "msg"
divMsg.innerText = "Estou aprendendo DOM";
divMsg.style.background = "green";

// forma mais direta:
document.getElementById("msg").innerText = "Olá"; // altera direto sem criar variável

// === SELECIONANDO POR CLASSE ===
const elementosClasse = document.getElementsByClassName("destaque"); // retorna coleção com todos os elementos da classe "destaque"
elementosClasse[0].innerText = "Alterado via classe"; // altera o primeiro elemento dessa classe

// === SELECIONANDO COM querySelector e querySelectorAll ===

const divPorID = document.querySelector("div#msg"); // seleciona a <div> com ID "msg"
divPorID.style.background = "blue";

const divPorClasse = document.querySelector("div.msg");
divPorClasse.style.background = "blue";

// 1. Adicionar elemento com createElement e appendChild
document.body.appendChild(
  document.createElement("p")
).textContent = `User Agent: ${navigator.userAgent}`;

// 2. Adicionar com querySelector e appendChild
document
  .querySelector("body")
  .appendChild(
    document.createElement("p")
  ).textContent = `Character Set: ${document.characterSet}`;

// 3. Adicionar com insertAdjacentElement e innerText
document.body.insertAdjacentElement(
  "beforeend",
  document.createElement("p")
).innerText = "Olá, Mundo!";

// 4. Adicionar com innerHTML
document.body.insertAdjacentHTML("beforeend", `<p>URL: ${document.URL}</p>`);

// 5. Adicionar atributo com setAttribute
document.body
  .appendChild(document.createElement("p"))
  .setAttribute("id", "example-id") ||
  (document.querySelector("#example-id").textContent = "Exemplo com ID");

// 6. Adicionar evento com addEventListener
document.body.appendChild(document.createElement("button")).textContent =
  "Clique aqui";
document
  .querySelector("button")
  .addEventListener("click", () => alert("Botão clicado!"));
