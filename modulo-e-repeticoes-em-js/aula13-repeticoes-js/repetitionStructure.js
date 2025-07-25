// For While do While

// Estrutura de repetição com teste lógico no início
// let c = 1;
// while (c <=10){
//   console.log('Olá, Mundo!');
//   c++
// }

// let c = 1;
// while (c <= 50){
//   console.log(`Número: ${c}`)
//   c++

// }

// do While
// Estrutura de repetição com teste lógico no final
let c = 1;
do {
   console.log(`Número ${c}`);
   c++             
}while (c <=20){

}
// Exemplo de uso do do While com entrada de dados
let nome;
do {
  nome = prompt("Digite seu nome:");
} while (!nome || nome.length < 3);
alert(`Bem-vindo, ${nome}!`);

// Exemplo de uso do do While com confirmação
let confirmado;
do {
  confirmado = confirm("Deseja continuar?");
} while (!confirmado);
alert("Você confirmou!");

// Exemplo de uso do do While para criar uma lista de itens
let lista = [];
let item;
do {
  item = prompt("Adicione um item à lista (ou deixe vazio para parar):");
  if (item) lista.push(item);
} while (item);
console.log(lista);

// Exemplo de uso do do While para validar um e-mail
let email;
do {
  email = prompt("Digite seu e-mail:");
} while (!email.includes("@"));
alert("E-mail válido!");