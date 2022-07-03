const menuBtn = document.getElementById("menu-button");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-open");
  dropdown.classList.toggle("menu-open");
});

dropdown.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-open");
  dropdown.classList.toggle("menu-open");
});
