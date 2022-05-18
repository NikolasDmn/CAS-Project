function generateToDo() {
	const input = document.getElementById("inputToDo");
	input.addEventListener("keyup", (e) => {
		if (e.code === "Enter") {
		}
	});
	updateItems();
}

function onAddToDo() {
	const input = document.getElementById("inputToDo");
	ToDoAPI.createToDo(input.value);
	input.value = "";
}
class ToDoBehavior {
	static onClick(todo, element) {
		if (!element.classList.contains("todoItemDone")) {
			element.className += " todoItemDone";
		} else {
			element.className = "todoItem";
		}
		todo.done = !todo.done;
		ToDoAPI.saveToDo(todo);
	}
}

class ToDoAPI {
	static getToDoItems() {
		return JSON.parse(localStorage.getItem("todo") || "[]");
	}
	static saveToDo(todoToSave) {
		const todos = ToDoAPI.getToDoItems();
		const todoSaved = todos.find((todo) => todo.id == todoToSave.id);
		console.log(todoToSave);
		todoSaved.done = todoToSave.done;
		localStorage.setItem("todo", JSON.stringify(todos));
		updateItems();
	}
	static createToDo(text) {
		const todos = ToDoAPI.getToDoItems();
		todos.push({
			id: Math.floor(Math.random() * 100000),
			text: text,

			done: false,
		});
		localStorage.setItem("todo", JSON.stringify(todos));
		updateItems();
	}
	static deleteToDo(deleteID) {
		const todos = ToDoAPI.getToDoItems();
		const newTodos = todos.filter((note) => note.id != deleteID);
		localStorage.setItem("todo", JSON.stringify(newTodos));
	}
}
function getElement(todo) {
	const cont = document.createElement("div");
	cont.setAttribute("class", `todoItem ${todo.done ? "todoItemDone" : ""}`);
	cont.setAttribute("todo-id", todo.id);
	cont.innerHTML = `<span class="todoItemText">${todo.text}</span><div class="smallNoteDelete" id="delete${todo.id}"><i class="fa-solid fa-trash" ></i></div></div>
    `;
	cont.addEventListener("click", () => ToDoBehavior.onClick(todo, cont));
	return cont;
}

function updateItems() {
	const container = document.getElementById("todoContainer");
	container.innerHTML = "";
	ToDoAPI.getToDoItems()
		.reverse()
		.forEach((todo) => {
			const todoElement = getElement(todo);
			container.appendChild(todoElement);
			const deleteButton = document.getElementById(`delete${todo.id}`);
			deleteButton.addEventListener("click", (e) => {
				setTimeout(() => {
					ToDoAPI.deleteToDo(todo.id);
					updateItems();
				}, 1);
			});
			deleteButton.style.display = "none";
			todoElement.addEventListener("contextmenu", (e) => {
				$(deleteButton).animate({ width: "toggle" });
				e.preventDefault();
			});
		});
}
