function Family(familymembers, phone, checkin) {
  this.idFamily = familymembers[0].dni;
  this.surname = familymembers[0].lastname;
  this.tlf = phone;
  this.guests = familymembers;
  this.numRoom = "toAssign";
  this.checkInDate = checkin;
}

export { Family };
