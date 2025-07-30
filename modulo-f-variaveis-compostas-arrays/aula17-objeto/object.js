let amigo = {
  nome: "kelly",
  sexo: "F",
  peso: 64.4,
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
  },
};
amigo.engordar(5);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);

let pessoa = {
  nome: "Kelly",
  idade: 30,
  cidade: "Lisboa",
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

console.log(pessoa.nome);
pessoa.saudacao();

let carro = {
  modelo: "BMW",
  ligado: false,
  ligar() {
    this.ligado = true;
    console.log(`${this.modelo} está ligado.`);
  },
  desligar() {
    this.ligado = false;
    console.log(`${this.modelo} foi desligado.`);
  },
};

carro.ligar();
carro.desligar();
