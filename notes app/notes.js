let noteBox = document.querySelector('.notes-container');
let createBtn = document.querySelector('.create-btn');
let writtenNotes = document.querySelectorAll('.input-box');

noteBox.innerHTML = localStorage.getItem("notepads");

createBtn.addEventListener('click', () => {
  createNewnote();
});

function createNewnote() {
  let note = document.createElement("p");
  note.className = "input-box";
  note.setAttribute("contenteditable", "true");
  let image = document.createElement("img");
  image.src = "images/delete.png";
  image.className = "delete-button";
  noteBox.appendChild(note).appendChild(image);

  saveToStorage();
}



noteBox.addEventListener('click', (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveToStorage();
  } else if (e.target.tagName === "P") {
    writtenNotes = document.querySelectorAll('.input-box').forEach((nt) => {
      nt.onkeyup = function () {
        saveToStorage();
      }
    });
  }
});

function saveToStorage() {
  localStorage.setItem('notepads', noteBox.innerHTML);
}

document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});