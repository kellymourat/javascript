// variáveis são usadas para armazenar dados que podem ser reutilizados em um programa. Elas atuam como contêineres para diferentes tipos de informações, como números, textos, valores booleanos e objetos. Existem três formas de declarar variáveis em JavaScript: var, let e const, cada uma com suas particularidades.

const nome = "Berg";
const idade = 36;
const isAtivo = true;
const salario = 2500.5;
const endereco = { rua: "Rua A", cidade: "Lisboa" };
const numeros = [1, 2, 3, 4, 5];

console.log(nome);
console.log(idade);
console.log(isAtivo);
console.log(salario);
console.log(endereco);
console.log(numeros);

console.log("______________________________________________________________");

// Use let quando a variável muda.

// Use const para valores fixos.

// Evitar var (só serve para entender códigos antigos).

//const — quando o valor não muda

const PI = 3.14159;
const nomE = "Kelly";
const idadE = 30;

console.log(PI);
console.log(nomE);
console.log(idadE);

// let — quando o valor muda

let count = 0;
let message = "Olá, mundo!";
console.log(message);

let contador = 0;
contador++; // aumenta 1
console.log(contador);

let estado = "inativo";
estado = "ativo";
console.log(estado);

// É importante lembrar que em versões mais recentes do JavaScript (ES6 e seguintes), o uso de let e const é preferível para declarar variáveis, pois eles oferecem um escopo de bloco mais previsível e evitam alguns problemas comuns associados ao var. No entanto, entender o comportamento do var ainda é crucial para trabalhar com códigos mais antigos ou quando for necessário lidar com o hoisting.

//ES6 melhorou o controle do escopo com let e const, reduzindo bugs comuns do hoisting.
console.log("______________________________________________________________");

// Tipos Primitivos

// string
const nome2 = "kelly";
console.log(nome2);
console.log(typeof nome2); 

// number
const temperatura = 36.5;
console.log(temperatura);
console.log(typeof temperatura); 

// boolean
const estaLogado = true;
const temConta = false;
console.log(estaLogado);
console.log(typeof estaLogado); 

// null
const vazio = null;
console.log(vazio);
console.log(typeof vazio);

// bigint
const numeroGigante = 9007199254740991n;
console.log(numeroGigante);
console.log(typeof numeroGigante); 
