
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  
  
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
  
  