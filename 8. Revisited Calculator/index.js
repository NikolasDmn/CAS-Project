const buttons = [
	"C",
	"⌫",
	"x^",
	"÷",
	"7",
	"8",
	"9",
	"x",
	"4",
	"5",
	"6",
	"-",
	"1",
	"2",
	"3",
	"+",
	"0",
	".",
	"=",
];

const app = document.getElementById("app");
const out = document.getElementById("out");
let calculate = "";
function onPress(text) {
	switch (text) {
		case "C":
			out.innerHTML = "";
			calculate = "";
			break;
		case "⌫":
			out.innerHTML = out.innerHTML.slice(0, -1);
			calculate = calculate.slice(0, -1);
			break;
		case "x^":
			out.innerHTML += "^";
			calculate += "**";
			break;
		case "=":
			console.log(calculate);
			const num = eval(calculate).toFixed(4);
			out.innerHTML = num;
			calculate = num;
			break;
		case "x":
			out.innerHTML += "x";
			calculate += "*";
			break;
		case "÷":
			out.innerHTML += "÷";
			calculate += "/";
			break;
		default:
			console.log("bruh");
			out.innerHTML += text;
			calculate += text;
	}
}
buttons.forEach((buttonText, index) => {
	const button = document.createElement("button");
	button.innerText = buttonText;
	button.classList.add("button");
	["÷", "x", "-", "+", "="].includes(buttonText)
		? button.classList.add("operator")
		: null;
	["C", "⌫", "x^"].includes(buttonText)
		? button.classList.add("moreOperators")
		: null;
	[...Array(10).keys()].map(String).includes(buttonText)
		? button.classList.add("number")
		: null;
	buttonText == "0" ? button.setAttribute("id", "zeroButton") : null;
	button.setAttribute("onclick", `onPress("${buttonText}")`);
	app.appendChild(button);
});
