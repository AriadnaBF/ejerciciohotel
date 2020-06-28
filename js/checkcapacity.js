import { currentCapacity } from "./currentcapacity.js";
import { calculateFamilyCapacity } from "./familycapacity.js";

function checkCapacity(family) {
  const hotelCapacity = currentCapacity();
  const familyCapacity = calculateFamilyCapacity(family);

  if (hotelCapacity < familyCapacity) {
    return false;
  }
  return true;
}

export { checkCapacity };
