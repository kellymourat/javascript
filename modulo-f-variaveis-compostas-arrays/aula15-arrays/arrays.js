// Arrays são usados para armazenar coleções de dados, como números, strings, objetos, etc.

// Exemplo prático com números
let numeros = [35, 12, 26, 55];

// Adiciona o número 1 no final do array
numeros.push(1); 

// Ordena o array (por padrão, como string, CUIDADO!)
numeros.sort();  // Esse sort está incorreto para números

// Remove o primeiro elemento do array
numeros.shift(); // Remove o menor valor (porque o sort já foi feito antes)

// Mostra o conteúdo atual do array
console.log(numeros);


let num = [35, 12, 26, 55];

num.push(1);                      // Adiciona 1 ao final
num.sort((a, b) => a - b);        // Ordena numericamente
num.shift();                      // Remove o menor valor (1)

console.log(num);                 

console.log(`Nosso vetor é ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O segundo valor do vetor é ${num[1]}`);
console.log(num[0]);


// Mostra o tamanho do array
console.log(`O vetor tem ${num.length} posições`);

// Mostra o valor da segunda posição (índice 1)
console.log(`O segundo valor do vetor é ${num[1]}`);

// Mostra o valor da primeira posição (índice 0)
console.log(num[0]);


