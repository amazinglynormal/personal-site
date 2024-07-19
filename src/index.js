const button = document.querySelector(".button");

button.addEventListener("click", (event) => {
  event.target.classList.toggle("shadow");
  event.target.classList.toggle("shadow-click");

  setTimeout(() => {
    event.target.classList.toggle("shadow-click");
    event.target.classList.toggle("shadow");
  }, 300);
});
