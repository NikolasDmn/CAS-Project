import NoteAPI from "./NoteAPI.js";
import NoteHTMLGen from "./NoteHTMLGen.js";

export default class NoteView {
	static openNote(title, content, note_id, note) {
		console.log("open");
		this.note_id = note_id;
		const titleField = document.getElementById("titleTextField");
		titleField.value = title;
		const contentField = document.getElementById("contentTextField");
		contentField.value = content;
		Array.from(document.getElementsByClassName("smallNote")).forEach(
			(e) => {
				e.className = "smallNote";
			}
		);
		note.className += " smallNoteOpen";
	}
	static newNote() {
		console.log("new note");
		this.note_id = null;
		Array.from(document.getElementsByClassName("smallNote")).forEach(
			(e) => {
				e.className = "smallNote";
			}
		);
		console.log("brub");
		const titleField = document.getElementById("titleTextField");
		titleField.value = "";
		const contentField = document.getElementById("contentTextField");
		contentField.value = "";
	}
	static update(note_id) {
		Array.from(document.getElementsByClassName("smallNote")).forEach(
			(e) => {
				e.remove();
			}
		);
		NoteAPI.getAllNotes().forEach((value, index) => {
			const note = NoteHTMLGen.generateSmallNote(
				value.title,
				value.content,
				value.dateUpdated,
				value.id
			);
			if (value.id == note_id) {
				NoteView.openNote(value.title, value.content, value.id, note);
			}
		});
	}
	static saveNoteListener() {
		const titleField = document.getElementById("titleTextField");
		const contentField = document.getElementById("contentTextField");
		const updatedTitle = titleField.value.trim();
		const updatedContent = contentField.value.trim();
		const note_id = this.note_id;
		if (updatedTitle.length > 0 && updatedContent.length > 0) {
			if (note_id != null) {
				NoteAPI.saveNote({
					id: note_id,
					title: updatedTitle,
					content: updatedContent,
				});
				NoteView.update(note_id);
			} else {
				const note = NoteAPI.saveNote({
					title: updatedTitle,
					content: updatedContent,
				});
				NoteView.update(note.id);
			}
		}
	}
}
