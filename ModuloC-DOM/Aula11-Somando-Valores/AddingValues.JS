function somar() {
  const tn1 = document.getElementById("txtn1");
  const tn2 = document.querySelector("input#txtn2");
  const res = document.getElementById("res");
  const n1 = Number(tn1.value);
  const n2 = Number(tn2.value);
  const s = n1 + n2;
  res.innerHTML = `A soma entre ${n1} e ${n2} é igual: <strong>${s}</strong>`;
}
