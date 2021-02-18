function validateCreatePostInputs(post) {
  let errors = [];

  if (!post.slug) errors.push('Slug cannot be blank.');
  if (!post.title) errors.push('Title cannot be blank.');
  if (!post.subtitle) errors.push('Subtitle cannot be blank.');
  if (!post.content) errors.push('Content cannot be blank.');
  if (!post.releaseDate) errors.push('Release Date cannot be blank.');
  if (!post.authorId) errors.push('Post must have an author.');
  if (!('draft' in post)) errors.push('Draft must be true or false.');

  return errors;
}

module.exports = {
  validateCreatePostInputs
};