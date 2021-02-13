function validateSignInBody (data) {
  let valid = true;

  try {
    if (!data.username) return valid = false;
    if (!data.password) return valid = false;
  } catch (ex) {
    valid = false;
  }

  return valid;
}

function validateSignOutBody (data) {
  let valid = true;

  try {
    if (!data.id) return valid = false;
  } catch (ex) {
    valid = false;
  }

  return valid;
}

module.exports = {
  validateSignInBody,
  validateSignOutBody
};