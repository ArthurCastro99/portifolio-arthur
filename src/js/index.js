let navCheckbox = document.getElementById("menu");

let navList = document.querySelectorAll("a.link-hamburguer");

navList.forEach((link) => {
  link.addEventListener("click", () => (navCheckbox.checked = false));
});

let animacao = document.querySelectorAll(".animar");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aparecer");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.20 },
);
animacao.forEach((element) => {
  observer.observe(element);
});
