function carregar() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("imagem");
  const section = document.getElementById("fundo-rel");

  const data = new Date();
  const hora = data.getHours();
//   const hora = 11;
  const min = data.getMinutes().toString().padStart(2, "0");

  msg.innerHTML = `Agora são <strong>${hora}h${min}min</strong>.`;

  let saudacao, foto, frlg, corfundo, tema = "";

  if (hora >= 0 && hora < 12) {
    saudacao = "Bom Dia!";
    foto = "fotomanha.png";
    frlg = "fundomanha.jpg";
    corfundo = "#dac4acff";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa Tarde!";
    foto = "fototarde.png";
    frlg = "fundotarde.jpg";
    corfundo = "#e4dac9ff";
    tema = "tarde"; 
  } else {
    saudacao = "Boa Noite!";
    foto = "fotonoite.png";
    frlg = "fundonoite.jpg";
    corfundo = "#092b3d";
  }

  img.src = `imagens/${foto}`;
  msg.innerHTML += `<p>${saudacao}</p>`;
  document.body.style.background = corfundo;
  document.body.className = tema;

  section.style.background = `url('imagens/${frlg}') no-repeat center center fixed`;
}
