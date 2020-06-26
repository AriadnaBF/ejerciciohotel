function showFamilyData(family, date) {
  const showIdFamily = document.querySelector("#show-id-family");
  const showPhoneFamily = document.querySelector("#show-phone-family");
  const showCheckInDate = document.querySelector("#show-checkindate-family");
  assignValue(showIdFamily, family, "idFamily");
  assignValue(showPhoneFamily, family, "tlf");
  showCheckInDate.setAttribute("value", `${date}`);
  const showRooms = document.querySelector("#show-family-rooms");

  family.numRoom.forEach((value) => {
    showRooms.insertAdjacentHTML(
      "beforeend",
      `
    <li class="list-group-item">${value}</li>`
    );
  });

  const showMembers = document.querySelector("#show-family-members");

  family.guests.forEach((value) => {
    showMembers.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
                      <td scope="row">${value.name}</td>
                      <td>${value.lastName}</td>
                      <td>${value.age}</td>
                      <td>${value.dni}</td>
                    </tr>
    `
    );
  });
}

function assignValue(input, user, tofill) {
  input.setAttribute("value", `${user[tofill]}`);
}

export { showFamilyData };
