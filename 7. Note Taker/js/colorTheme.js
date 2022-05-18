const root = document.documentElement;

const button = document.createElement("button");
button.setAttribute("id", "themeChangeButton");

const icon = document.createElement("i");
icon.setAttribute("id", "themeChangeIcon");

button.appendChild(icon);
function getStoredTheme() {
	return JSON.parse(localStorage.getItem("theme") || null);
}

function setTheme(theme) {
	root.style.setProperty("--background-color", theme.backgroundColor);
	root.style.setProperty("--sidebar-color", theme.sideBarColor);
	root.style.setProperty("--text-color", theme.textColor);
	root.style.setProperty("--note-hover-color", theme.noteHoverColor);
	button.setAttribute("data-theme", theme.theme + " theme");
	icon.className = theme.icon;
}

function setLightTheme() {
	localStorage.setItem(
		"theme",
		JSON.stringify({
			theme: "light",
			icon: "fa-solid fa-moon",
			backgroundColor: "#fff",
			sideBarColor: "hsl(0, 0%, 85%)",
			textColor: "#000",
			noteHoverColor: "hsl(0, 0%, 80%)",
		})
	);
	setTheme(getStoredTheme());
}
function setDarkTheme() {
	localStorage.setItem(
		"theme",
		JSON.stringify({
			theme: "dark",
			icon: "fa-solid fa-sun",
			backgroundColor: "hsl(0, 0%, 12%)",
			sideBarColor: "hsl(0, 0%, 15%)",
			textColor: "#fff",
			noteHoverColor: "hsl(0, 0%, 10%)",
		})
	);
	setTheme(getStoredTheme());
}

if (getStoredTheme() == null) {
	const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
	if (darkThemeMq.matches) {
		setDarkTheme();
	} else {
		setLightTheme();
	}
} else {
	setTheme(getStoredTheme());
}
button.addEventListener("click", () => {
	console.log("bruh");
	if (getStoredTheme().theme == "dark") {
		setLightTheme();
	} else {
		setDarkTheme();
	}
});
document.body.appendChild(button);
