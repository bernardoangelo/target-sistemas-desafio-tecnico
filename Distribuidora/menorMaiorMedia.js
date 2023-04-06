const faturamento = require("./dados.json");

let minimo = 0;
let maximo = 0;
let soma = 0;
let contador = 0;

for (let i = 0; i < faturamento.length; i++) {
  const valor = faturamento[i].valor;

  if (!valor || valor <= 0) continue; // Se o valor for nulo ou menor ou igual a zero, pula para a próxima iteração

  if (valor < minimo) minimo = valor;
  if (valor > maximo) maximo = valor;

  soma += valor;
}

const media = soma / faturamento.filter(({ valor }) => valor > 0).length; // Filtra os valores nulos e calcula a média

for (let i = 0; i < faturamento.length; i++) {
  // Conta os dias com faturamento superior à média
  const valor = faturamento[i].valor;

  if (valor > media) contador++;
}

console.log(`Menor valor de faturamento diário: ${minimo}`);
console.log(`Maior valor de faturamento diário: ${maximo}`);
console.log(
  `Número de dias com faturamento diário superior à média mensal: ${contador}`
);
