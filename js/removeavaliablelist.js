function removeAvaliableList() {
  const roomList = document.querySelectorAll(".d-active");
  roomList.forEach((value) => {
    value.classList.replace("d-active", "d-none");
  });
}

export { removeAvaliableList };
