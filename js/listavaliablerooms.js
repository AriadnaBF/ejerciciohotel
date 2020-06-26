import { store } from "./store.js";

function listAvaliableRooms() {
  const avaliableRooms = store.rooms.filter((value) => {
    if (value.avaliable) {
      return value;
    }
  });

  const roomList = document.querySelectorAll(".check-rooms");

  roomList.forEach((nodeitem) => {
    avaliableRooms.forEach((roomarray) => {
      if (roomarray.idRoom == nodeitem.value) {
        const enableRoom = document.querySelector(`#room-${roomarray.idRoom}`);
        enableRoom.classList.replace("d-none", "d-active");
        nodeitem.classList.add("avaliable-room");
      }
    });
  });
}

export { listAvaliableRooms };
