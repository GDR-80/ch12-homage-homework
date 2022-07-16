const menuBtn = document.getElementById("menu-button");
const dropdown = document.getElementById("dropdown");

const toggleMenu = () => {
  menuBtn.classList.toggle("menu-open");
  dropdown.classList.toggle("menu-open");
};

menuBtn.addEventListener("click", toggleMenu);
dropdown.addEventListener("click", toggleMenu);
