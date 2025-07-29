// Calculando fatorial 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

console.log("_________________________________________");

console.log(fatorial(5));
// Recursividade
function fatorial1(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * fatorial1(n - 1);
  }
}
console.log(fatorial1(5));

console.log("_________________________________________");
function contagemRegressiva(numero) {
  if (numero <= 0) {
    return; // Caso base: para a recursão
  }
    console.log(numero);
    contagemRegressiva(numero - 1); // Chamada recursiva
}
contagemRegressiva(10);

console.log("_________________________________________");

function somaAteN(n) {
  if (n <= 0) return 0;
  return n + somaAteN(n - 1);
}

console.log(somaAteN(5));


console.log("_________________________________________");

function imprimirString(str, i = 0) {
  if (i >= str.length) return;
  {
    console.log(str[i]);
    imprimirString(str, i + 1);
  }
}
imprimirString("Kelly");


console.log("_________________________________________");

function contagemRegressivaComDelay(n) {
  if (n < 0) return;
  console.log(n);
  setTimeout(() => contagemRegressivaComDelay(n - 1), 1000);
}

contagemRegressivaComDelay(5);
