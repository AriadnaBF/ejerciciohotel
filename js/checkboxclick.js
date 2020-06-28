import { bedsUsed } from "./bedsused.js";

function checkboxRoom(checkBox) {
  const showMembers = document.querySelector("#family-total");
  const showassignedbeds = document.querySelector("#assigned-beds");

  checkBox.addEventListener("click", () => {
    showassignedbeds.innerHTML = bedsUsed();

    if (showMembers.innerHTML <= showassignedbeds.innerHTML) {
      const registerFamily = document.querySelector("#finish-check-in");
      registerFamily.removeAttribute("disabled");
    } else {
      const registerFamily = document.querySelector("#finish-check-in");
      registerFamily.setAttribute("disabled", "");
    }
  });
}

export { checkboxRoom };
