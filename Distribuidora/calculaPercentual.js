const faturamentoDosEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const total = Object.values(faturamentoDosEstados).reduce(
  (acc, cur) => acc + cur,
  0
);

const percentuais = {};
for (const estado in faturamentoDosEstados) {
  percentuais[estado] = (faturamentoDosEstados[estado] / valorTotal) * 100;
}

console.log("Percentual de representação do faturamento mensal por estado:");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
