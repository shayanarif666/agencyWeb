// Variables
const openAsideMenu = document.querySelector("#openAsideMenu");
const closeAsideMenu = document.querySelector("#closeAsideMenu");
const asideMenu = document.querySelector("#aside");

// Function To Toggle Aside Bar
const toggleAsideMenuBar = (isOpen) => {
    asideMenu.style.right = isOpen ? "0%" : "-150%";
}


openAsideMenu.addEventListener("click", () => toggleAsideMenuBar(true));
closeAsideMenu.addEventListener("click", () => toggleAsideMenuBar(false));