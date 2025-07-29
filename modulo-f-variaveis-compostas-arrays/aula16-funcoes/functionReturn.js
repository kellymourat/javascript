// Função nomeada 'parImpar' que recebe 1 parâmetro (n)
function parImpar(n) {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Armazena o retorno da função ao passar o valor 9
let resultado1 = parImpar(9);
console.log(resultado1);

// Função 'soma' que recebe dois parâmetros obrigatórios: n1 e n2
// Retorna o resultado da soma entre os dois valores fornecidos
function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(4, 3));

// Função 'somaComPadrao' com parâmetros opcionais usando valores padrão = 0
// Se um argumento não for passado, será considerado 19 automaticamente
function somaComPadrao(n1 = 0, n2 = 0) {
  return n1 + n2;
}
console.log(somaComPadrao(19));

// Função anônima atribuída à variável 'dobrar'
// Recebe um argumento (x) e retorna seu valor multiplicado por 2
let dobrar = function (x) {
  return x * 2;
};
console.log(dobrar(15));
