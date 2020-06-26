import { currentCapacity } from "./auxiliar/currentcapacity.js";
import { calculateFamilyCapacity } from "./auxiliar/familycapacity.js";

function checkCapacity(family) {
  const hotelCapacity = currentCapacity();
  const familyCapacity = calculateFamilyCapacity(family);

  if (hotelCapacity < familyCapacity) {
    return false;
  }
  return true;
}

export { checkCapacity };
