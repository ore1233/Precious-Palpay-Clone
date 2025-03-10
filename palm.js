const ul = document.querySelector("#ul");
const bar = document.querySelector(".hamburger");
const icon = document.querySelector(".icon");

bar.addEventListener("click", () => {
  if (ul.classList.contains("active")) {
      ul.classList.remove("active");
      icon.setAttribute("class", "fas fa-bars-staggered");
} else {
    ul.classList.add("active");
    icon.setAttribute("class", "fas fa-times");
  }
});
