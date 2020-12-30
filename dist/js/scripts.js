function openCloseMenu() {
	const icon = document.getElementById("menu_icon");
	const menu = document.getElementById("menu_drawer");

	icon.addEventListener("click", (e) => {
		const clicked = e.target.classList.contains("clicked");

		if (clicked) {
			icon.classList.remove("clicked");
			menu.classList.remove("active");
		} else {
			icon.classList.add("clicked");
			menu.classList.add("active");
		}
	});
}

window.onload = () => {
	openCloseMenu();
};
