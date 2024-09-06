function pesquisar() {
  let section = document.getElementById('resultados-pesquisa');
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); // Converte o texto do campo de pesquisa para minúsculas e remove espaços em branco

  let resultados = "";

  if (campoPesquisa === "") {
      section.innerHTML = `<p class="vazio">Nenhum atleta encontrado</p>`;
      return;
  }

  for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descrição.toLowerCase();
      let tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `<div class="item-resultado">
                           <h2>
                               <a href="#">${dado.titulo}</a> <!-- Mantemos o título original -->
                           </h2>
                           <p class="descricao-meta">
                               ${dado.descrição} <!-- Mantemos a descrição original -->
                           </p>
                           <a href="${dado.link}" target="_blank">Mais Informações</a>
                       </div>`;
      }
  }
  if (!resultados){
    resultados= `<p class="vazio">Nome ou esporte incompativél!</p>`
  }


  if (resultados === "") {
      section.innerHTML = `<p class="vazio">Nenhum atleta encontrado</p>`;
  } else {
      section.innerHTML = resultados;
  }
}
