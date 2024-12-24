const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
  
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });
  
  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
  
  ScrollReveal().reveal(".register__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".register__content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".register__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});
  