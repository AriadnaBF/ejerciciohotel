import { dateToNumber } from "./datetonumber.js";
import { Family } from "./Family.js";

function createNewFamily(familyMembers) {
  const phone = document.querySelector("#family-tlf");
  const checkInDate = document.querySelector("#check-in-date");
  const dateInNumber = dateToNumber(checkInDate.value);

  const family = new Family(familyMembers, phone.value, dateInNumber);
  return family;
}

export { createNewFamily };
