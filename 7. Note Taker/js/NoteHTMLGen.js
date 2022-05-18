import NoteAPI from "./NoteAPI.js";
import NoteView from "./NoteView.js";

export default class NoteHTMLGen {
	static generateSmallNote(title, content, date, id) {
		const sidebar = document.getElementById("sidebar");
		const updated = new Date(date);
		const smallNote = document.createElement("div");
		smallNote.setAttribute("class", "smallNote");
		smallNote.setAttribute("note-id", `${id}`);
		smallNote.innerHTML = `
                                    <div class="smallNoteTitle">
                                        ${title}
                                    </div>
                                    <div class="smallNoteContent">
                                        ${content.substring(0, 60)}
                                        ${content.length > 60 ? "..." : ""}
                                    </div>
                                    <div class="smallNoteDate">
                                    ${updated.toLocaleString(undefined, {
										dateStyle: "full",
										timeStyle: "short",
									})}
                                    <div class="smallNoteDelete" id="delete${id}"><i class="fa-solid fa-trash" ></i></div></div>
                                `;
		smallNote.addEventListener("click", (e) => {
			NoteView.openNote(title, content, id, smallNote);
		});
		sidebar.appendChild(smallNote);
		const deleteButton = document.getElementById(`delete${id}`);
		deleteButton.addEventListener("click", (e) => {
			setTimeout(() => {
				NoteAPI.deleteNote(id);
				NoteView.update();
				NoteView.newNote();
			}, 1);
		});
		deleteButton.style.display = "none";
		smallNote.addEventListener("contextmenu", (e) => {
			$(deleteButton).animate({ width: "toggle" });
			e.preventDefault();
		});

		return smallNote;
	}
}
