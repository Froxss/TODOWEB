const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-open");
});
