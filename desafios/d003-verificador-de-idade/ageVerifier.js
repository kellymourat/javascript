function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fano = document.getElementById("txtano");
  const res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] verifique os dados novamente");
  } else {
    const fsex = document.getElementsByName("radsex");
    const idade = ano - Number(fano.value);
    const unidade = idade === 1 ? "ano" : "anos";
    let genero = fsex[0].checked ? "Homem" : "Mulher";
    let faixa = "";
    let imgSrc = "";

    if (fsex[0].checked) {
      if (idade >= 0 && idade < 2) {
        genero = "Bebê menino";
        imgSrc = "./imagens/fotobebe.png";
      } else if (idade < 12) {
        genero = "Criança menino";
        imgSrc = "./imagens/fotocrianca.jpg";
      } else if (idade < 21) {
        genero = "Jovem homem";
        imgSrc = "./imagens/fotojovem.png";
      } else if (idade < 60) {
        genero = "Adulto homem";
        imgSrc = "./imagens/fotoadulto.png";
      } else {
        genero = "Idoso homem";
        imgSrc = "./imagens/fotoidoso.png";
      }
    } else if (fsex[1].checked) {
      if (idade >= 0 && idade < 2) {
        genero = "Bebê menina";
        imgSrc = "./imagens/fotobebem.png";
      } else if (idade < 12) {
        genero = "Criança menina";
        imgSrc = "./imagens/fotocriancam";
      } else if (idade < 21) {
        genero = "Jovem mulher";
        imgSrc = "./imagens/fotojovemm.png";
      } else if (idade < 60) {
        genero = "Adulta mulher";
        imgSrc = "./imagens/fotoadultom.png";
      } else {
        genero = "Idosa mulher";
        imgSrc = "./imagens/fotoidosa.png";
      }
    }

    const img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("src", imgSrc);

    res.innerHTML = `Detectamos ${genero} com ${idade} ${unidade}.`;
    res.style.textAlign = "center";
    res.appendChild(img);
  }
}
