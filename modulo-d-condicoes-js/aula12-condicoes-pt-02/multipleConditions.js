//Condições Múltiplas, válido para testar valores pontuais.
// 0 = Domingo
// 1= Segunda
// 2 = Terça-Ferira
// 3 = Quarta-Feira
// 4 = Quinta-Feira
// 5 = Sexta-Feira
// 6= Sábado

const agora = new Date();
const diaSem = agora.getDay();
// const diaSem = 5;
switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("[ERRO] Dia invádio!");
}
