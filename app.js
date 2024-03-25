const navbarDropdownBtn = document.querySelectorAll(".navbarDropdownBtn");
const navbarDropdownMenu = document.querySelector(".navbarDropdownMenu");
const navbarContainer = document.querySelector(".navbarContainer");

window.onresize = CloseDropdown;
window.onscroll = CloseDropdown;

// Navabar hide on scroll

var lastScrollTop = 0;

window.addEventListener("scroll", () => {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbarContainer.style.transform = "translateY(-80px)";
  } else {
    navbarContainer.style.transform = "translateY(0px)";
  }
  lastScrollTop = scrollTop;
});

// Navabar dropdown open close

navbarDropdownBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbarDropdownMenu.classList.toggle("hide");
  });
});

function CloseDropdown() {
  navbarDropdownMenu.classList.add("hide");
}
