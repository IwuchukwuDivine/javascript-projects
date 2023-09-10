const addBtn = document.querySelector('.add');
const inputNote = document.querySelector('.write-something');
const textArea = document.getElementById('write-note');
const noteCont = document.querySelector('.note-container');

const randomColors = ["#b744b8", "#adb9e3", "#acdde7", "#1e555c", "#f15152", "#3a2e39", "#b5ffe1", "#cc2936", "#ebbab9", "#352208", "#7b6b43", "#914d76", "#d4f2db", "#cef7a0", "#eef8ff", "#7d53de", "#34f6f2", "#e0efda", "#d782ba", "#eeb1d5", "#b3d89c","#d0efb1", "#f7d002", "#018e42", "#f00699"];

addBtn.addEventListener('click', () => {
  inputNote.classList.add("show");
  textArea.focus();
})
textArea.addEventListener('keydown', (event) => {
  if (event.key === "Enter" && textArea.value) {
    inputNote.classList.remove("show");
    let newNotePad = textArea.value;
    let div = document.createElement("div");
    div.className = "new-notes";
    let color = chooseColor();
    div.setAttribute("style", `background-color: ${color}`);
    div.innerHTML = `
      <p>${newNotePad}</p>
      <span>Double Click To Delete</span>
    `;
    
    textArea.value = "";
    div.addEventListener("dblclick", (e) => {
      div.remove();
  
    })

    noteCont.appendChild(div);
   
  }
})

function chooseColor() {
  let color = randomColors[Math.floor(Math.random() * randomColors.length)];
  return color
}
