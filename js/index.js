import { store } from "./store.js";
import { createFamilyMembers } from "./createfamilymembers.js";
import { checkCapacity } from "./checkcapacity.js";
import { calculateFamilyCapacity } from "./familycapacity.js";
import { createNewFamily } from "./createnewfamily.js";
import { listAvaliableRooms } from "./listavaliablerooms.js";
import {
  check101,
  check102,
  check103,
  check104,
  check105,
  check201,
  check202,
  check203,
  check204,
  check205,
} from "./checkboxqueries.js";
import { checkboxRoom } from "./checkboxclick.js";
import { switchSections } from "./switchsections.js";
import { dateToNumber } from "./datetonumber.js";
import { getChosenRooms } from "./getchosenrooms.js";
import { resetGuests } from "./resetguests.js";
import { resetCheckboxes } from "./resetcheckbox.js";
import { removeAvaliableList } from "./removeavaliablelist.js";
import { createRoomList } from "./createroomlist.js";
import { showFamilyData } from "./showfamilydata.js";
import { calculateStay } from "./calculatestay.js";
import { fillBill } from "./fillbill.js";

const initCheckIn = () => {
  const checkInForm = document.querySelector("#form-check-in");
  checkInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const noOfGuests = document.querySelectorAll(".guest-name").length;
    const familyMembers = createFamilyMembers(noOfGuests);
    const roomForEveryone = checkCapacity(familyMembers);
    if (!roomForEveryone) {
      $("#modalcapacity").modal();
      return;
    }

    const family = createNewFamily(familyMembers);
    store.guests.push(family);

    const sectionCheckIn = document.querySelector("#section-check-in");
    const sectionAssignRoom = document.querySelector("#section-assign-room");

    sectionCheckIn.classList.replace("active-section", "d-none");
    sectionAssignRoom.classList.replace("d-none", "active-section");

    const showMembers = document.querySelector("#family-total");

    const familyCapacity = calculateFamilyCapacity(familyMembers);
    showMembers.innerHTML = familyCapacity;

    listAvaliableRooms();

    checkboxRoom(check101);
    checkboxRoom(check102);
    checkboxRoom(check103);
    checkboxRoom(check104);
    checkboxRoom(check105);
    checkboxRoom(check201);
    checkboxRoom(check202);
    checkboxRoom(check203);
    checkboxRoom(check204);
    checkboxRoom(check205);
  });

  const buttonRegister = document.querySelector("#finish-check-in");

  buttonRegister.addEventListener("click", () => {
    const chosenRooms = getChosenRooms();

    const family = store.guests.find((value) => {
      if (value.numRoom === "toAssign") {
        return value;
      }
    });

    family.numRoom = chosenRooms;

    store.rooms.forEach((storeroom) => {
      chosenRooms.forEach((famroom) => {
        if (storeroom.idRoom == famroom) {
          storeroom.guest = family.idFamily;
          storeroom.avaliable = false;
        }
      });
    });

    const checkInDate = document.querySelector("#check-in-date");
    const date = checkInDate.value;
    checkInForm.reset();
    resetGuests();
    resetCheckboxes();
    removeAvaliableList();
    $("#modal1").modal();
    const sectionAssignRoom = document.querySelector("#section-assign-room");
    const sectionGuestDetails = document.querySelector(
      "#section-guest-details"
    );
    sectionAssignRoom.classList.replace("active-section", "d-none");
    sectionGuestDetails.classList.replace("d-none", "active-section");

    showFamilyData(family, date);
  });
};

const initList = () => {
  const showList = document.querySelector("#all-rooms");
  showList.innerHTML = "";

  createRoomList(showList);

  const showAllAvaliableRooms = document.querySelector(
    "#list-all-rooms-avalible"
  );

  const getAvaliableRooms = document.querySelectorAll("tr.avaliable-room");
  console.log(getAvaliableRooms);
  const noOfAvaliableRooms = getAvaliableRooms.length;

  showAllAvaliableRooms.innerHTML = noOfAvaliableRooms;

  const showAllAvaliableBeds = document.querySelector(
    "#list-all-beds-avaliable"
  );
  const getAvaliableBeds = document.querySelectorAll(".avaliable-beds");
  let noOfAvaliableBeds = 0;

  getAvaliableBeds.forEach((item) => {
    const noOfBedsInRoom = parseInt(item.innerHTML);
    noOfAvaliableBeds = noOfAvaliableBeds + noOfBedsInRoom;
  });

  showAllAvaliableBeds.innerHTML = noOfAvaliableBeds;
};

const addNewGuest = () => {
  const newGuestButton = document.querySelector("#add-new-guest");
  let counter = 1;
  newGuestButton.addEventListener("click", (event) => {
    event.preventDefault();
    let prevGuest = document.querySelector(`#guest-${counter}`);
    if (prevGuest === null) {
      prevGuest = document.querySelector(`#guest-1`);
      counter = 1;
    }

    counter++;
    prevGuest.insertAdjacentHTML(
      "afterend",
      `<fieldset id="guest-${counter}" class="extra-guests border border-success rounded-lg my-2 p-3"">
    <h3 class="mb-3"><i class="fas fa-user"></i> Huésped ${counter}:</h3>
<div class="from-group row mb-2">
<div class="col">
    <label for="guest-name-${counter}">Nombre:</label>
    <input type="text" id="guest-${counter}-name" class="guest-name form-control" placeholder="Nombre" required/>
</div>
<div class="col">
    <label for="guest-${counter}-last-name">Apellido:</label>
    <input
      type="text"
      id="guest-${counter}-last-name"
      placeholder="Apellido"
      class="guest-lastname form-control"
required
    />
</div>
                  </div>
<div class="form-group row">
                    <div class="col-auto">
    <label for="guest-${counter}-dni">DNI/NIF:</label>
    <input type="text" id="guest-${counter}-dni" placeholder="12345678A" class="guest-dni form-control"/>
</div>
                    <div class="col-auto">
    <label for="guest-${counter}-age">Edad:</label>
    <input type="number" id="guest-${counter}-age" class="guest-age form-control" min="0" max="123" required/>
 </div>
                  </div>
  </fieldset>`
    );
  });
};

const deleteLastGuest = () => {
  const deleteGuestButton = document.querySelector("#delete-last-guest");
  deleteGuestButton.addEventListener("click", (event) => {
    event.preventDefault();
    const extraGuests = document.querySelectorAll(".extra-guests");
    const indexOfLastGuest = extraGuests.length - 1;
    extraGuests[indexOfLastGuest].remove();
  });
};

const initCheckOut = () => {
  const selectFamily = document.querySelector("#check-out-id-family");
  selectFamily.innerHTML = "";

  store.guests.forEach((value) => {
    selectFamily.insertAdjacentHTML(
      "beforeend",
      `<option value="${value.idFamily}">${value.idFamily}</option>`
    );
  });

  const checkOutForm = document.querySelector("#form-check-out");
  checkOutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const getFamilyId = selectFamily.value;
    const familyToCheckOut = store.guests.find((value) => {
      if (value.idFamily === getFamilyId) {
        return value;
      }
    });

    console.log(getFamilyId);

    const roomsToEmpty = store.rooms.filter((value) => {
      if (value.guest === getFamilyId) {
        value.guest = "";
        value.avaliable = true;
        return value;
      }
    });

    const dateofCheckIn = familyToCheckOut.checkInDate;
    const checkOutDate = document.querySelector("#check-out-date");
    const dateofCheckOut = dateToNumber(checkOutDate.value);

    const durationOfStay = calculateStay(dateofCheckIn, dateofCheckOut);

    fillBill(
      familyToCheckOut,
      roomsToEmpty,
      durationOfStay,
      checkOutDate.value
    );

    const indexOfFamily = store.guests.findIndex((value) => {
      if (value.idFamily == getFamilyId) {
        console.log("aracola");
        return value;
      }
    });

    store.rooms.forEach((value) => {
      if (value.guest == getFamilyId) {
        value.guest = "";
        value.avaliable = true;
      }
    });

    store.guests.splice(indexOfFamily, "1");

    const sectionCheckOut = document.querySelector("#section-check-out");
    const sectionPrintBill = document.querySelector("#section-print-bill");

    sectionCheckOut.classList.replace("active-section", "d-none");
    sectionPrintBill.classList.replace("d-none", "active-section");
  });
};

const gotoCheckIn = () => {
  const checkInButton = document.querySelector("#button-to-check-in");
  const checkInSection = document.querySelector("#section-check-in");
  checkInButton.addEventListener("click", () => {
    switchSections(checkInButton, checkInSection);
  });
};

const gotoCheckOut = () => {
  const checkOutButton = document.querySelector("#button-to-check-out");
  const checkOutSection = document.querySelector("#section-check-out");
  checkOutButton.addEventListener("click", () => {
    switchSections(checkOutButton, checkOutSection);
    initCheckOut();
  });
};

const gotoList = () => {
  const listButton = document.querySelector("#button-to-room-list");
  const listSection = document.querySelector("#section-room-list");
  listButton.addEventListener("click", () => {
    switchSections(listButton, listSection);
    initList();
  });
};

addNewGuest();

initCheckIn();

gotoCheckIn();

gotoCheckOut();

gotoList();

deleteLastGuest();
