function bedsUsed() {
  let bedsUsed = 0;

  const allCheckboxes = document.querySelectorAll(".check-rooms");

  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const roomCapacity = document.querySelector(
        `#room-${checkbox.value}-capacity`
      );
      const noOfBeds = parseInt(roomCapacity.innerHTML);
      bedsUsed = bedsUsed + noOfBeds;
    }
  });

  return bedsUsed;
}

export { bedsUsed };
