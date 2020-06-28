import { store } from "./store.js";

function createRoomList(table) {
  store.rooms.forEach((value) => {
    if (value.avaliable === true) {
      table.insertAdjacentHTML(
        "beforeend",
        `
        <tr class="table-success avaliable-room">
          <th scope="row" class="text-left">${value.idRoom}</th>
          <td class="text-center avaliable-beds">${value.capacity}</td>
          <td class="text-center">${value.guest}</td>
          <td class="text-center"> <i class="fas fa-check text-success"></i> </td>
        </tr>
        
        `
      );
    } else {
      table.insertAdjacentHTML(
        "beforeend",
        `
      <tr class="table-danger">
        <th scope="row" class="text-left">${value.idRoom}</th>
        <td class="text-center occupied">${value.capacity}</td>
        <td class="text-center">${value.guest}</td>
        <td class="text-center"><i class="fas fa-times text-danger"></i></td>
      </tr>
      
      `
      );
    }
  });
}

export { createRoomList };
