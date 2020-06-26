function switchSections(button, activateThis) {
  const buttonDeactivate = document.querySelector(".active");
  buttonDeactivate.classList.replace("active", "inactive");
  buttonDeactivate.removeAttribute("aria-pressed");

  const sectionDeactivate = document.querySelector(".active-section");
  sectionDeactivate.classList.replace("active-section", "d-none");

  button.classList.replace("inactive", "active");
  button.setAttribute("aria-pressed", "true");

  activateThis.classList.replace("d-none", "active-section");
}

export { switchSections };
