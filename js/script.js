const formulario = document.getElementById("formulario");
const listaTarefas = document.getElementById("lista-tarefas");
const listaConcluidas = document.getElementById("lista-concluidas");

const tarefas = {};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome-tarefa").value;

  adicionaTarefa(nome);

  renderizarTarefas();

  document.getElementById("nome-tarefa").value = "";

  formulario.reset();
});

function adicionaTarefa(nome, concluido = false) {
  const id = window.crypto.randomUUID();
  tarefas[id] = { nome, concluido };

  return id;
}

function alternaTarefa(id) {
  tarefas[id].concluido = !tarefas[id].concluido;
}

function removeTarefa(id) {
  delete tarefas[id];
}

function renderizarTarefas() {
  listaTarefas.innerHTML = "";
  listaConcluidas.innerHTML = "";

  for (const id in tarefas) {
    const tarefa = tarefas[id];

    const lista = tarefa.concluido ? listaConcluidas : listaTarefas;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluido;

    checkbox.addEventListener("change", () => {
      alternaTarefa(id);
      renderizarTarefas();
    });

    const botao = document.createElement("button");
    botao.classList.add("btn", "btn-danger", "removeu");
    botao.innerHTML = '<span class="material-symbols-outlined">delete </span>';
    botao.addEventListener("click", () => {
      removeTarefa(id);
      renderizarTarefas();
    });

    li.append(checkbox, tarefa.nome, botao);
    lista.append(li);
  }
}

renderizarTarefas();
