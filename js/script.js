// array para armazenamento de dados
const products = [];

function addProduct() {
  const productName = document.getElementById("product-name").value;

  //verificando se há um valor add  no array e chamamos o exebir produtos

  if (productName) {
    const product = {
      name: productName,
    };

    products.push(product);
    displayProducts();
    document.getElementById("product-name").value = ""; // apagando o campo para entender que foi enviado dado
  }
}

function displayProducts() {
  // insetindo colunas, com respectivos conteudos, e um botão de remover
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(function (product) {
    const row = productList.insertRow();
    const cell1 = row.insertCell(0);
    cell1.innerHTML =
      `<input type="checkbox" onclick="comprado(this)">` + product.name;
    const cell2 = row.insertCell(1);
    cell2.innerHTML = `
        <button class='btn btn-danger removeu' onclick='removerlinhaTabela1(this)'><span class="material-symbols-outlined">delete </span></button></td>
        `;
  });
}

//remoção da linha da primeira tabela
function removerlinhaTabela1(linha) {
  let i = linha.parentNode.rowIndex;
  document.getElementById("product-list").deleteRow(i);
  products.splice(i - 1, 1); // Remove o item correspondente do array
}

function comprado(checkbox) {
  // quando o checkbox for checado, o item é insetido na tabela de
  //tarefas concluida e pode ser removida

  if (checkbox.checked) {
    const productList = document.getElementById("item-comprado");

    alert("Item de tarefa concluido, role para baixo para conferir");
    products.forEach(function (product) {
      const row = productList.insertRow();
      const cell1 = row.insertCell(0);
      row.classList.add("produto-comprado");
      cell1.innerHTML = product.name;
      const cell2 = row.insertCell(1);
      cell2.innerHTML = `
            <button class='btn btn-danger' onclick='removerlinhaTabela2(this)'><span class="material-symbols-outlined">delete </span></button></td>
            `;
    });
  }
}
// removação de linha para a segunda tabela
function removerlinhaTabela2(linha) {
  let i = linha.parentNode.rowIndex;
  document.getElementById("item-comprado").deleteRow(i);
  products.splice(i - 1, 1); // Remove o item correspondente do array
}

//

const productForm = document.getElementById("formulario");

productForm.addEventListener("submit", function (e) {
  e.preventDefault(); //evita o recarregamento da pagina
  addProduct();
});
