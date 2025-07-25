// Tratamento de Dados

const nome = window.prompt("Qual é o seu nome ?");
window.alert("É um grande prazer em te conhecer, " + nome + "!");

// ("frase" + valor); usa concatenação
// (number + number ) para adição
// (string + string) para concatenação
// String -> Number

// Number.parseInt() Number inteiro
const numero1 = Number.parseInt(window.prompt("Digite em número: "));
const numero2 = Number.parseInt(window.prompt("Digite outro número: "));
const soma = numero1 + numero2;
window.alert("A soma é: " + soma);

// Number.parseFloat() Number Real
const numero01 = Number.parseFloat(window.prompt("Digite em número: "));
const numero02 = Number.parseFloat(window.prompt("Digite outro número: "));
const soma2 = numero01 + numero02;
window.alert("A soma é: " + soma2);

// Number versão Simplificada
const n1 = Number(window.prompt("Digite em número: "));
const n2 = Number(window.prompt("Digite outro número: "));
const s = n1 + n2;
window.alert("A soma é: " + s);

// conversão para (+ String(s)) ou (+ s.toString())
const n01 = Number(window.prompt("Digite em número: "));
const n02 = Number(window.prompt("Digite outro número: "));
const s1 = n01 + n02;
window.alert("A soma é: " + String(s1));
window.alert(`A soma é: ${s1}`);
window.alert(`A soma entre ${n01} e ${n02} é igual a ${s1}`);

// Template literals ou Template String , É uma forma moderna de escrever strings em JavaScript, introduzida no ES6.
// Usa crase (`) em vez de aspas.

// Permite inserir variáveis/expressões com ${}.

// Suporta quebra de linha automática (sem \n).

const nome1 = "Kelly";
console.log(`Olá, ${nome1}!`); // Olá, Kelly!

const a = 5,
  b = 10;
console.log(`A soma é ${a + b}`); // A soma é 15

// Tratamento de dados para exibição

const numero = 1545.5;
console.log(numero.toFixed(2));

const num = 1545.5;
console.log(num.toFixed(2).replace(".", ","));

const num1 = 1545.5;
console.log(
  num1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

const num01 = 1545.5;
console.log(
  num01.toLocaleString("pt-BR", { style: "currency", currency: "EUR" })
);

const valor = 1234.56;
const valorFormatado = valor.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(valorFormatado);

const num02 = 1545.5;
console.log(
  num02.toLocaleString("pt-BR", {
    style: "currency",
    currency: "EUR",
  })
);

const valor1 = 1234.56;
const valor1Formatado = valor1.toLocaleString("en-us", {
  style: "currency",
  currency: "USD",
});

console.log(valor1Formatado);
