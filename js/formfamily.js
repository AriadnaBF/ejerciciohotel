import { Guest } from "./Guest.js";

function formFamily(noOfMembers) {
  let family = [];

  for (let i = 0; i < noOfMembers; i++) {
    const name = document.querySelector(`#guest-${i + 1}-name`);
    const lastName = document.querySelector(`#guest-${i + 1}-last-name`);
    const dni = document.querySelector(`#guest-${i + 1}-dni`);
    const age = document.querySelector(`#guest-${i + 1}-age`);

    const familyMember = new Guest(
      dni.value,
      name.value,
      lastName.value,
      age.value
    );

    family.push(familyMember);
  }

  return family;
}

export { formFamily };
