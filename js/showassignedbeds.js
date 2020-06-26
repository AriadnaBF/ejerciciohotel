function showAssignedBeds() {
  const showMembers = document.querySelector("#family-total");
  const familyMembersNumber = parseInt(showMembers.innerHTML);
  let bedsUsed = 0;

  const allCheckboxes = document.querySelectorAll(".check-rooms");

  allCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const room = document.querySelector(`#room-${checkbox.value}-capacity`);
      const noOfBeds = parseInt(room.innerHTML);
      bedsUsed = bedsUsed + noOfBeds;
    }
  });

  const showAssignedBeds = document.querySelector("#assigned-beds");
  showAssignedBeds.innerHTML = bedsUsed;
  return bedsUsed;
}

export { showAssignedBeds };
