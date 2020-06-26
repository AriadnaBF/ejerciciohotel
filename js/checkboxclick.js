import { showAssignedBeds } from "./showassignedbeds.js";

function checkboxRoom(checkBox, familyMembers, surplus) {
  const membersLeft = document.querySelector("#members-left-to-room");
  const roomCapacity = document.querySelector(
    `#room-${checkBox.value}-capacity`
  );
  const showassignedbeds = document.querySelector("#assigned-beds");
  const roomCapacityNumber = parseInt(roomCapacity.innerHTML);
  let result = 0;

  checkBox.addEventListener("click", () => {
    let noOfMembers = parseInt(membersLeft.innerHTML);

    if (checkBox.checked) {
      result = noOfMembers - roomCapacityNumber;
      membersLeft.innerHTML = Math.max(result, 0);
      showassignedbeds.innerHTML = showAssignedBeds();
    } else {
      const noOfAssignedfBeds = parseInt(showassignedbeds.innerHTML);

      if (noOfAssignedfBeds > familyMembers) {
        // membersLeft.innerHTML = 0;
        console.log("hola");
      }

      if (noOfAssignedfBeds < familyMembers) {
        const extraBeds = familyMembers - parseInt(showassignedbeds.innerHTML);
        result = noOfMembers + roomCapacityNumber - extraBeds;
        membersLeft.innerHTML = result;
        console.log("caracola");
      }
      showassignedbeds.innerHTML = showAssignedBeds();
    }
    if (membersLeft.innerHTML == 0) {
      const registerFamily = document.querySelector("#finish-check-in");
      registerFamily.removeAttribute("disabled");
    } else {
      const registerFamily = document.querySelector("#finish-check-in");
      registerFamily.setAttribute("disabled", "true");
    }
  });
}

export { checkboxRoom };
