function fillBill(family, rooms, duration) {
  const showName = document.querySelector("#bill-show-name");
  const showTlf = document.querySelector("#bill-show-tlf");
  const showDNI = document.querySelector("#bill-show-dni");

  showName.setAttribute(
    "value",
    `${family.guests[0].name} ${family.guests[0].lastName}`
  );
  showTlf.setAttribute("value", `${family.tlf}`);
  showDNI.setAttribute("value", `${family.idFamily}`);

  const billBody = document.querySelector("#bill-table");

  rooms.forEach((value) => {
    billBody.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
    <td scope="row" class="service">Hospedaje</td>
    <td class="room-rented text-center">${value.idRoom}</td>
    <td class="price-per-night text-center">${value.price}</td>
    <td class="nights text-center">${duration}</td>
    <td class="total-price-room text-right">${value.price * duration}</td>
  </tr>`
    );
  });

  const totalBeforeTax = document.querySelector("#before-tax");

  let sumPriceRooms = 0;

  const allRoomsPrice = document.querySelectorAll(".total-price-room");

  allRoomsPrice.forEach((item) => {
    const money = parseInt(item.innerHTML);
    sumPriceRooms = sumPriceRooms + money;
  });

  totalBeforeTax.innerHTML = `${sumPriceRooms}€`;

  const taxMoney = document.querySelector("#tax");
  const tax = sumPriceRooms * 0.21;
  taxMoney.innerHTML = `${tax}€`;

  const totalAfterTax = document.querySelector("#after-tax");
  totalAfterTax.innerHTML = `${sumPriceRooms + tax}€`;
}

export { fillBill };
