function validateCreateAuthorInputs(author) {
  let errors = [];

  if (!author.firstName) errors.push('First name cannot be blank.');
  if (!author.lastName) errors.push('Last name cannot be blank.');

  return errors;
}

module.exports = {
  validateCreateAuthorInputs
};