const contacts = document.querySelectorAll(".contact");

contacts.forEach((contact) => {
  contact.addEventListener("mouseenter", () => {
    contact.firstElementChild.style.opacity = "100%";
  });
  contact.addEventListener("mouseleave", () => {
    contact.firstElementChild.style.opacity = "70%";
  });
});
