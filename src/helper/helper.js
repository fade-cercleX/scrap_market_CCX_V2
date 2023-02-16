export const isNumeric = (value) => {
  return !isNaN(value) && !isNaN(parseFloat(value));
};

export const isValidMobileNumber = (number) => {
  const pattern = /^(\+\d{1,2})?\d{10}$/;
  return pattern.test(number);
};
