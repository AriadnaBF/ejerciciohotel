function calculateStay(checkingdate, checkoutdate) {
  const result = checkoutdate - checkingdate;
  return result;
}

export { calculateStay };
