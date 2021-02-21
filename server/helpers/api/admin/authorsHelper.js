function validateCreateAuthorInputs(category) {
  let errors = [];

  if (!category.firstName) errors.push('First name cannot be blank.');
  if (!category.lastName) errors.push('Last name cannot be blank.');

  return errors;
}

module.exports = {
  validateCreateAuthorInputs
};