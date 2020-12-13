function openCloseMenu() {
    let icon = document.getElementById("menu_icon");
    let menu = document.getElementById("menu_drawer");

    icon.addEventListener("click", function (e) {
        let clicked = e.target.classList.contains("clicked");

        if (clicked === false) {
            icon.classList.add("clicked");
            menu.classList.add("active");
        } else if (clicked === true) {
            icon.classList.remove("clicked");
            menu.classList.remove("active");
        }
    });
}

window.onload = function () {
    openCloseMenu();
};
