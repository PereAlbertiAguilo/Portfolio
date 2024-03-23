const navbarDropdownBtn = document.querySelectorAll(".navbarDropdownBtn");
const navbarDropdownMenu = document.querySelector(".navbarDropdownMenu");

window.onresize = CloseDropdown;
window.onscroll = CloseDropdown;

navbarDropdownBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbarDropdownMenu.classList.toggle("hide");
  });
});

function CloseDropdown() {
  navbarDropdownMenu.classList.add("hide");
}
