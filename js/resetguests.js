function resetGuests() {
  const extraGuests = document.querySelectorAll(".extra-guests");
  extraGuests.forEach((value) => {
    value.remove();
  });
}

export { resetGuests };
