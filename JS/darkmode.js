const buttonDarkMode = document.querySelector(".dark");

buttonDarkMode.addEventListener("click", function (theme) {
  document.body.classList.toggle("dark");
  theme.preventDefault();
});
