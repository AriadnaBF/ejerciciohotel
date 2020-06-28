function getChosenRooms() {
  let result = [];
  const allCheckboxes = document.querySelectorAll(".check-rooms");

  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      result.push(checkbox.value);
    }
  });

  return result;
}

export { getChosenRooms };
