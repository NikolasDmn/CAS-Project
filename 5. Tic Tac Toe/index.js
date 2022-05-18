let player = "X";
function switchPlayer() {
	if (player == "X") {
		player = "O";
	} else {
		player = "X";
	}
}
function parse(className) {
	return className.split(" ").slice(1);
}
function checkWinner(classes) {
	classes.forEach((value, index) => {
		let elements = Array.from(document.getElementsByClassName(value));
		let tiles = elements.map((x) => x.innerHTML);
		if (tiles.every((x) => x === tiles[0])) {
			elements.forEach((x) => {
				x.className = x.className + " winner";
			});
			setTimeout(function () {
				location.reload();
			}, 5 * 1000);
		}
	});
}
function onTile(x, y) {
	var tile = document.getElementsByClassName(`row${x} col${y}`)[0];
	tile.innerHTML = player;
	switchPlayer();
	classes = parse(tile.className);
	checkWinner(classes);
}

function init() {
	console.log("init");
	const app = document.createElement("div");
	app.setAttribute("id", "app");
	document.body.appendChild(app);
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			const button = document.createElement("button");
			button.className = `tButton row${row} col${col} ${
				col == row ? "diag" : ""
			} ${col + row == 2 ? "iDiag" : ""}`;
			button.setAttribute("onclick", `onTile(${row}, ${col})`);
			app.appendChild(button);
		}
	}
}
init();
