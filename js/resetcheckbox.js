function resetCheckboxes() {
  const checkBoxes = document.querySelectorAll(".check-rooms");

  checkBoxes.forEach((value) => {
    if (value.checked) {
      value.checked = false;
    }
  });
}

export { resetCheckboxes };
