function saveNoteToLocalStorage(Note) {
  localStorage.setItem("Notes", JSON.stringify(Note));
  alert("Note Saved Successfully.");
}

let NoteObj = {};
NoteObj.Note = prompt("Enter your note:\n");
saveNoteToLocalStorage(NoteObj);
