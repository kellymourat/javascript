// Percurso tradicional de um array (vetor)
const valores = [8, 1, 7, 4, 2, 9];

// Forma manual de acessar uma posição (pouco prática para percorrer tudo)
// console.log(valores[0]); 

// Percorrendo todas as posições com índice numérico
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

/*
  Explicação do laço:
  - let pos = 0          > índice inicial
  - pos < valores.length > condição de parada
  - pos++                > incremento a cada repetição
*/

console.log("___________________________________________________");


// Versão simplificada com push(), sort(), indexOf() e for...in
const val = [42, 20, 10, 60, 15];

// Adiciona novo valor ao final do array
val.push(2);

// Ordena numericamente (evita ordenação como string)
val.sort((x, y) => x - y); // Menores valores primeiro

// Busca o valor 20 dentro do array
const pos = val.indexOf(20); // Retorna a posição, ou -1 se não encontrar

if (pos === -1) {
  console.log(`O valor 20 não foi encontrado!`);
} else {
  console.log(`O valor 20 está na posição ${pos}`);
}

// Percorrendo o array usando for...in (índices)
for (let pos in val) {
  console.log(`A posição ${pos} tem o valor ${val[pos]}`);
}

/*
  Observação:
  - for...in percorre os índices do array
  - Ideal para arrays simples
  - Em projetos maiores, prefira for...of com .entries() para mais controle
*/
