// Exercícios Condições Compostas
// const país = "EUA";
// if (país == "Brasil") {
//   console.log("Nacionalidade:", "Brasileiro(a)");
// } else {
//   console.log("Nacionalidade:", "Estrangeiro");
// }

// console.log("______________________________________________________");
// const nac = window.prompt("Digite a sua Nacionalidade: ");
// if (nac.toLowerCase() == "brasil") {
//   console.log("Nacionalidade:", "Brasileiro(a)");
// } else {
//   console.log("Nacionalidade:", "Estrangeiro");
// }

// Ecercício sistema de Multas

function calcular() {
  const lmt = 120;
  const txtv = document.querySelector("input#txtvel");
  const res = document.querySelector("div#res");
  const vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong>km/h </p>`;
  if (vel > 120) {
    res.innerHTML += `<p><strong>Multado!</strong><br>Você ultrapassou o limite de velocidade de <strong>${lmt}Km/h.</strong></p>`;
    res.innerHTML += `<p>Seja prudente, use sempre cinto de Segurança!</p>`;
  } else {
    res.innerHTML += `<p>Obrigado, Boa Viagem!</p>`; //Acrescentar algo ao que já escreveu, use +=. Se quiser trocar tudo use =.
  }
}
