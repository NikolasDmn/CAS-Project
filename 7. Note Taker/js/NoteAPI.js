export default class NoteAPI {
	static getAllNotes() {
		const notes = JSON.parse(localStorage.getItem("stored-notes") || "[]");
		return notes.sort((a, b) => {
			return new Date(a.date) >= new Date(b.date) ? -1 : 1;
		});
	}
	static saveNote(noteToSave) {
		const notes = NoteAPI.getAllNotes();
		const noteExists = notes.find((note) => note.id == noteToSave.id);
		if (noteExists) {
			noteExists.title = noteToSave.title;
			noteExists.dateUpdated = new Date().toISOString();
			noteExists.content = noteToSave.content;
			localStorage.setItem("stored-notes", JSON.stringify(notes));
			return -1;
		} else {
			noteToSave.id = Math.floor(Math.random() * 100000);
			noteToSave.dateUpdated = new Date().toISOString();
			notes.push(noteToSave);
			localStorage.setItem("stored-notes", JSON.stringify(notes));
			return noteToSave;
		}
	}
	static deleteNote(id) {
		const notes = NoteAPI.getAllNotes();
		const newNotes = notes.filter((note) => note.id != id);
		localStorage.setItem("stored-notes", JSON.stringify(newNotes));
	}
}
