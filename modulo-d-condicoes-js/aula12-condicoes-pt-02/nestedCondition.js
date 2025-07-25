//Estruturas condicionais aninhadas.
const idade = 80;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("Voto Opcional");
} else {
  console.log("Voto Obrigatório");
}

const hora = 0;
console.log(`Agora são extamente ${hora} horas.`);
if (hora > 5 && hora <= 12) {
  console.log("Bom Dia!");
} else if (hora > 12 && hora < 18) {
  console.log("Boa Tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa Noite!");
} else {
  console.log("Boa Madrugada!");
}

const agora = new Date();
const hora1 = agora.getHours();
console.log(`Agora são exatamente ${hora1} horas.`);
if (hora1 > 5 && hora1 <= 12) {
  console.log("Bom Dia! :)");
} else if (hora1 > 12 && hora1 < 18) {
  console.log("Boa Tarde! :)");
} else if (hora1 >= 18 && hora1 <= 23) {
  console.log("Boa Noite! :)");
} else {
  console.log("Boa Madrugada! :)");
}

// Resolução Simplificada
// const hora = new Date().getHours();
// console.log(`Agora são ${hora} horas.`);

// const saudacao =
//   hora > 5 && hora <= 12 ? 'Bom Dia!' :
//   hora > 12 && hora < 18 ? 'Boa Tarde!' :
//   hora >= 18 && hora <= 23 ? 'Boa Noite!' :
//   'Boa Madrugada!';

// console.log(saudacao);

// function obterSaudacao(hora) {
//   if (hora > 5 && hora <= 12) return 'Bom Dia!';
//   if (hora > 12 && hora < 18) return 'Boa Tarde!';
//   if (hora >= 18 && hora <= 23) return 'Boa Noite!';
//   return 'Boa Madrugada!';
// }

// const hora = new Date().getHours();
// console.log(`Agora são ${hora} horas.`);
// console.log(obterSaudacao(hora));
