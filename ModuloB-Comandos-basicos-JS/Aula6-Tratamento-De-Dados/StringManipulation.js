// Métodos de String

// propriedades que permitem trabalhar, Preparar, limpar, transformar textos..

// .length

// .toUpperCase() / .toLowerCase()

// .slice(), .substring()

// .replace(), .split(), .trim()

// .includes(), .startsWith(), .endsWith()

const nome = window.prompt("Qual é o seu nome ?");
document.writeln(`Seu nome tem ${nome.length} letras`);
document.writeln(`Olá, ${nome}! Seu nome tem ${nome.length} letras.`);
document.writeln(`Seu nome em maiúscula é ${nome.toUpperCase()}`);
document.writeln(`Seu nome em maiúscula é ${nome.toLocaleLowerCase()}`);
