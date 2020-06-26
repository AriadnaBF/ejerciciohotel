import { store } from "../store.js";

function currentCapacity() {
  const result = store.rooms.reduce((prev, next) => {
    if (next.avaliable) {
      return prev + next.capacity;
    }
    return prev;
  }, 0);
  return result;
}

export { currentCapacity };
