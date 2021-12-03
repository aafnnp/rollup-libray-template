const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

export default {
  isDateValid
};
