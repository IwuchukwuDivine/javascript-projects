let addBtn = document.querySelector('.add-icon');
let popUp = document.querySelector('.popup');
let closeButton = document.querySelector('.close-button');
let addNewNote = document.querySelector('.add-new-note');
let headerText = document.querySelector('.add-header');
let inputTitle = document.querySelector('.input-title');
let inputNote = document.getElementById('new-note');
let gridContainer = document.querySelector('.grid-container');

let newNotepads = JSON.parse(localStorage.getItem("newNotepadd")) || [];

let isUpdate = false, updateId;

renderNotes();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

addBtn.addEventListener('click', () => {
  popUp.classList.add("show");
  inputTitle.focus();
})

closeButton.addEventListener('click', () => {
  isUpdate= false;
  popUp.classList.remove("show");
  inputTitle.value = "";
  inputNote.value = "";
  headerText.innerHTML = "Add a new note";
  addNewNote.innerHTML = "Add note";
})

addNewNote.addEventListener('click', () => {
  addNote();
  closeButton.click();
})

function addNote() {
  let newTitle = inputTitle.value;
  let newNote = inputNote.value;
  let newDate = new Date();
  let month = months[newDate.getMonth()];
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  console.log(day);

  if (newTitle && newNote) {
    let newInfo = {
      Title:newTitle, Description:newNote,
      Day: `${month} ${day}, ${year}`
    }
    
    if (!isUpdate) {
      newNotepads.push(newInfo);
    } else {
      isUpdate= false;
      newNotepads[updateId] = newInfo;
    }
   
    saveToStorage();
    renderNotes();
  }
}

function saveToStorage() {
  localStorage.setItem("newNotepadd", JSON.stringify(newNotepads));
}

function renderNotes() {
  document.querySelectorAll('.notes').forEach(note => note.remove());
  newNotepads.forEach((note, index) => {
    let div = document.createElement("div");
    div.className = "notes";
    div.innerHTML = `
        <h2>${note.Title}</h2>
        <p>${note.Description}</p>
        <div class="bottom-content">
          <div class="date">${note.Day}</div>
          <div class="settings">
            <i onclick="showMore(this)" class="ri-more-fill more"></i>
            <div class="action">
              <div onclick="updateNote(${index}, '${note.Title}', '${note.Description}')" class="edit-note"><i class="ri-pencil-line edit"></i> <span>Edit</span></div>
              <div onclick="deleteNote(${index})" class="delete-note"><i class="ri-delete-bin-line delete"></i> <span>Delete</span></div>
            </div>
          </div>
        </div>
    `;
  
    gridContainer.appendChild(div);
  });

}

function showMore(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener('click', (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  })
}

function deleteNote(noteId) {
  let confirmDelete = confirm("Are you sure you want to delete this.");
  if (confirmDelete) {
    newNotepads.splice(noteId, 1);
    saveToStorage();
    renderNotes();
  }
}

function updateNote(noteId, noteTitle, noteDesc) {
  isUpdate = true;
  updateId = noteId;
  inputTitle.value = noteTitle;
  inputNote.value = noteDesc;
  addBtn.click();
  headerText.innerHTML = "Update note";
  addNewNote.innerHTML = "Update Note";
}