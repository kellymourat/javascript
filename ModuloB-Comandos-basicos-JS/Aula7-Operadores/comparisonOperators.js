// Operadores relacionais 
console.log("10 > 5 ?", 10 > 5);       // true
console.log("3 < 2 ?", 3 < 2);         // false
console.log("7 >= 7 ?", 7 >= 7);       // true
console.log("4 <= 3 ?", 4 <= 3);       // false

console.log("____________________________________________________");

// Operadores de Igualdade
const x = 5;
const y = "5";

console.log(x == y);    // true > compara apenas valor
console.log(x === y);   // false > compara valor e tipo
console.log(x != y);    // false > valor igual, tipo ignorado
console.log(x !== y);   // true > valor igual, mas tipo diferente

console.log("____________________________________________________");

// Operadores Lógicos: && (E), || (OU), ! (NÃO)
const n1 = 6;
const n2 = 10;

const resultado = n1 <= n2 || n2 / 2 == 2; // true || false > true
console.log(resultado);

const n3 = 6;
const n4 = 6;

const resultado1 = n3 >= n4 && n3 / n4 == 1; // true && true > true
console.log(resultado1);

const a1 = 10;
const b1 = 15;

const resultado2 = !(a1 > b1 || a1 / b1 == 1);
// (false || false) = false > !false = true
console.log(resultado2);

console.log("____________________________________________________");

// Operador Ternário: condicao ? valorTrue : valorFalse
const num = 8;
const res = num % 2 == 0 ? 5 : 9;
console.log(res); 

const idade = 16;
const cal = idade >= 18 ? 'Seja Bem Vindo!' : 'Acesso Negado!';
console.log(cal); 

const nota = 5;
const val = nota >= 7 
  ? 'Aprovado' 
  : nota >= 5 
    ? 'Recuperação' 
    : 'Reprovado';
console.log(val); 

