const toggle = document.getElementById("icon");
const menue = document.getElementById("menue");
toggle.addEventListener("click", () => {
  // toggle icon
  toggle.classList.toggle("fa-bars");
  toggle.classList.toggle("fa-close");
  menue.classList.toggle("top-[8%]");
});
