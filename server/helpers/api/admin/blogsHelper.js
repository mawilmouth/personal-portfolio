function validateBlogUpdateInputs(blog) {
  let errors = [];

  if (!blog.name) errors.push('Name cannot be blank.');

  return errors;
}

module.exports = {
  validateBlogUpdateInputs
};