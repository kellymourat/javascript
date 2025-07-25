// Operadores Aritméticos
// + adição, - subtração, * multiplicação, / divisão, % resto, ** exponenciação

console.log(5 + 3);   
console.log(10 - 4);   
console.log(2 * 3);     
console.log(8 / 2);     
console.log(10 % 3);    
console.log(2 ** 3);    

console.log("____________________________________________________");

// Ordem de precedência:
// 1. Parênteses ()
// 2. Exponenciação **
// 3. Multiplicação, divisão e módulo: *, /, %
// 4. Soma e subtração: +, -
// 5. Relacionais: >, <, >=, <=
// 6. Igualdade: ==, !=, ===, !==
// 7. Lógicos: && e ||

// Testando a precedência:
const certo = 2 + 3 * 4; // Multiplica primeiro: 3 * 4 = 12, depois soma: 2 + 12 = 14
console.log("certo =", certo);

const a = 5 + 3; // 8
console.log("a =", a);

const b = a % 5; // Resto da divisão: 8 % 5 = 3
console.log("b =", b);

const c = 5 * b ** 2; // Primeiro b**2 = 9, depois 5 * 9 = 45
console.log("c =", c);

const d = 10 - a / 2; // Primeiro divide: 8 / 2 = 4, depois 10 - 4 = 6
console.log("d =", d);

const e = (6 * 2) / d; // 6 * 2 = 12, depois 12 / 6 = 2
console.log("e =", e);

const f = (b % e) + 4 / e;
// b % e = 3 % 2 = 1
// 4 / e = 4 / 2 = 2
// Soma final: 1 + 2 = 3
console.log("f =", f);
