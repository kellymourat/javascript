let num = document.getElementById("fnum");
let lista = document.getElementById("flist");
let res = document.getElementById("res");
let valores = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido, ou já encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Vetor vazio, adicione valores antes de finalizar!");
  } else {
    let tot = valores.length;
    let menor = valores[0];
    let maior = valores[0];
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] < menor) menor = valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
    }
    media = soma / tot
    res.innerHTML = "";
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p> A soma total de todos valores: ${soma} </p>`
    res.innerHTML += `<p> A média dos valores digitados é: ${media} </p>`
  }
}
