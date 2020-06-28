function calculateFamilyCapacity(family) {
  const guestsOver4 = family.filter((value) => {
    if (value.age > 4) {
      return value;
    }
  }, 0);

  const numberOfGuests = guestsOver4.length;

  const familyCapacity = numberOfGuests;

  return familyCapacity;
}

export { calculateFamilyCapacity };
