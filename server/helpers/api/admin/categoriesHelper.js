function validateCreateCategoryInputs(category) {
  let errors = [];

  if (!category.slug) errors.push('Slug cannot be blank.');
  if (!category.name) errors.push('Name cannot be blank.');

  return errors;
}

module.exports = {
  validateCreateCategoryInputs
};