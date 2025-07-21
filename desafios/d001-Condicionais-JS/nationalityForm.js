function clicar() {
  const nac = document.getElementById("txtnac").value.trim().toLowerCase();
  const res = document.getElementById("res");
  res.innerHTML = "";

  if (nac.length === 0) {
    res.innerHTML = "Por favor, preencha o campo.";
  } else if (nac === "brasil") {
    res.innerHTML = "Brasileiro(a)";
  } else {
    res.innerHTML = "Estrangeiro(a)";
  }
}
