const textInput = document.getElementById("textInput");
const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");
const fontColor = document.getElementById("fontColor");
const output = document.getElementById("output");
const fontSizeValue = document.getElementById("fontSizeValue");
const saveBtn = document.getElementById("saveBtn");
const savedTextsDiv = document.getElementById("savedTexts");

let texts = [];
let editingIndex = null;

function updatePreview() {
  output.textContent = textInput.value;
  output.style.fontSize = `${fontSize.value}px`;
  output.style.fontFamily = fontFamily.value;
  output.style.color = fontColor.value;
  fontSizeValue.textContent = `${fontSize.value}px`;
}

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

function deleteText(index) {
  texts.splice(index, 1);
  editingIndex = null;
  saveBtn.textContent = "Salvar";
  renderSavedTexts();
}

textInput.addEventListener("input", updatePreview);
fontSize.addEventListener("input", updatePreview);
fontFamily.addEventListener("change", updatePreview);
fontColor.addEventListener("input", updatePreview);
saveBtn.addEventListener("click", saveText);

// Inicializar com visual prévio
updatePreview();
