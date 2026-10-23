const typed = new Typed("#typed", {
  strings: ["Junior Web Developer", "Computer Science Student", "React.js Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  startDelay: 500,
  loop: true,
  showCursor: true,
  cursorChar: "|"
});

// Nested dropdown
document
  .querySelectorAll(".navbar .dropdown-submenu > .dropdown-toggle")
  .forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const menu = toggle.nextElementSibling;
      const isOpen = menu.classList.toggle("show");
      toggle.classList.toggle("show", isOpen);
      toggle.setAttribute("aria-expanded", isOpen);
    });
  });


document.querySelectorAll(".navbar .dropdown").forEach((dd) => {
  dd.addEventListener("hide.bs.dropdown", () => {
    dd.querySelectorAll(".dropdown-submenu > .dropdown-menu.show").forEach(
      (m) => {
        m.classList.remove("show");
        m.previousElementSibling.classList.remove("show");
        m.previousElementSibling.setAttribute("aria-expanded", "false");
      }
    );
  });
});
