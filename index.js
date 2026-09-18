let paisesSection = document.querySelector(".paises-section")
async function carregarDados() {
    const response = await fetch("./paises.json");
    const dados = await response.json();

    console.log(dados);
    console.log(dados[0].nome_pais);
    dados.forEach(pais => {
        paisesSection.innerHTML+= `
                <div class="container">
                    <div class="header-container">
                        <img class="bandeira-pais" src="${pais.bandeira_pais}">
                    </div>
                    <div>
                        <h2>${pais.nome_pais}</h2>
                        <p>Capital: <strong>${primeiraMaiuscula(pais.capital[0])}</strong></p>
                    
                    </div>
                </div>
        `
    });
}
carregarDados();
function primeiraMaiuscula(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}