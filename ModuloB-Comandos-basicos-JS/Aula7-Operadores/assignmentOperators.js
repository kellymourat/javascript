// Operadores de atribuição simples
let n = 3;
n = 3 + 4;
n = n - 5;
n = n * 4;
n = n / 2;
n = n ** 2;
n = n % 5;
console.log(n);

// Operadores de auto-atribuição (forma encurtada)
let x = 3;
x += 4;
x -= 5;
x *= 4;
x /= 2;
x **= 2;
x %= 5;
console.log(x);

// Incremento e decremento (--b) (++b)
// Pré-fixado: altera antes de usar
let b = 5;
console.log(++b); // 6
console.log(b);   // 6

// Pós-fixado: usa o valor e só depois altera (a--)(b++)
let a = 5;
console.log(a++); // 5
console.log(a);   // 6

