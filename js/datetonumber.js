function dateToNumber(date) {
  const removedHyphens = date.replace(/\D/g, "");
  const result = parseInt(removedHyphens);
  return result;
}

export { dateToNumber };
