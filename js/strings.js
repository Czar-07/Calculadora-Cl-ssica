const textInput = document.getElementById("textInput");
const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");
const fontColor = document.getElementById("fontColor");
const output = document.getElementById("output");
const fontSizeValue = document.getElementById("fontSizeValue");
const saveBtn = document.getElementById("saveBtn");
const savedTextsDiv = document.getElementById("savedTexts");
//pegam elementos do HTML com as classes selecionadas.

textInput.addEventListener("input", updatePreview);
fontSize.addEventListener("input", updatePreview);
fontFamily.addEventListener("change", updatePreview);
fontColor.addEventListener("input", updatePreview);
saveBtn.addEventListener("click", saveText);
//chama a função updatePreview para digitar no campo de texto, alterar o tamanho da fonte, selecionar a família de fontes ou escolher a cor.
// saveText serve para salvar seu texto e suas configurações.

let texts = []; // essa variável serve para armazenar os textos salvos e suas configurações (tamanho, fonte, cor).
let editingIndex = null;// essa variável serve para controlar o índice do texto que está sendo editado. o "null" é para dizer que nenhum texto está em edição.

function updatePreview() {
  output.textContent = textInput.value;
  output.style.fontSize = `${fontSize.value}px`;
  output.style.fontFamily = fontFamily.value;
  output.style.color = fontColor.value;
  fontSizeValue.textContent = `${fontSize.value}px`;
}

// Essa função serve para atualizar automaticamente cada mudança feita pelo seu texto, como tamanho e cor.

function renderSavedTexts() {
  savedTextsDiv.innerHTML = "";
  texts.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "saved-text";
    div.style.fontSize = `${item.size}px`;
    div.style.fontFamily = item.font;
    div.style.color = item.color;
    div.innerHTML = `
      <div>${item.text}</div>
      <button onclick="editText(${index})">Editar</button>
      <button onclick="deleteText(${index})">Excluir</button>
    `;
    savedTextsDiv.appendChild(div);
  });
}

//essa função serve para renderizar o salvamento do seu texto, colocando ele na parte de baixo do site
// também tem a opção de remover o texto salvo. 

function saveText() {
  const newText = {
    text: textInput.value.trim(),
    size: fontSize.value,
    font: fontFamily.value,
    color: fontColor.value,
  };

  if (!newText.text) return;

  if (editingIndex === null) {
    texts.push(newText);
  } else {
    texts[editingIndex] = newText;
    editingIndex = null;
    saveBtn.textContent = "Salvar";
  }

  textInput.value = "";
  updatePreview();
  renderSavedTexts();
}

// Essa função serve para deixar salvo todos os seus textos feitos, assim não perdendo nenhum das suas escritas.

function editText(index) {
  const item = texts[index];
  textInput.value = item.text;
  fontSize.value = item.size;
  fontFamily.value = item.font;
  fontColor.value = item.color;
  editingIndex = index;
  saveBtn.textContent = "Atualizar";
  updatePreview();
}

// Essa função serve para você poder editar qualquer um dos textos feitos, seja cor, tamanho e o tipo da fonte.

function deleteText(index) {
  texts.splice(index, 1);
  editingIndex = null;
  saveBtn.textContent = "Salvar";
  renderSavedTexts();
}

// Essa função serve para você retirar qualquer um dos textos que você fez na sua página.

updatePreview();
// Essa linha serve para quando carregar a página, todos os valores serão resetados
