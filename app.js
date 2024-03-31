window.onresize = CloseDropdown;
window.onscroll = CloseDropdown;

// Language changer

const flags = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch("./languages/" + language + ".json");
  const texts = await requestJson.json();

  for (let textTochange of textsToChange) {
    const section = textTochange.dataset.section;
    const value = textTochange.dataset.value;

    textTochange.innerHTML = texts[section][value];
  }
};

flags.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

// Navabar hide on scroll

const navbarContainer = document.querySelector(".navbarContainer");

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

const navbarDropdownBtn = document.querySelectorAll(".navbarDropdownBtn");
const navbarDropdownMenu = document.querySelector(".navbarDropdownMenu");

navbarDropdownBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navbarDropdownMenu.classList.toggle("hide");
  });
});

function CloseDropdown() {
  navbarDropdownMenu.classList.add("hide");
}
