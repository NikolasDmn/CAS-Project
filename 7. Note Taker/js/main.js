import NoteAPI from "./NoteAPI.js";
import NoteHTMLGen from "./NoteHTMLGen.js";
import NoteView from "./NoteView.js";

const sidebar = document.getElementById("sidebar");
NoteAPI.getAllNotes().forEach((value, index) => {
	console.log(value.id);
	NoteHTMLGen.generateSmallNote(
		value.title,
		value.content,
		value.dateUpdated,
		value.id
	);
});

const addButton = document.getElementById("addNoteButton");
addButton.addEventListener("click", (e) => {
	NoteView.newNote();
});
NoteView.newNote();
const titleField = document.getElementById("titleTextField");
const contentField = document.getElementById("contentTextField");
[titleField, contentField].forEach((e) => {
	e.addEventListener("blur", (e) => {
		NoteView.saveNoteListener();
	});
});
