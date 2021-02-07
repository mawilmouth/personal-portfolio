function validateUserInputs(data) {
  let valid = true;

  try {
    if (!data.firstName) return valid = false;
    if (!data.lastName) return valid = false;
    if (!data.username) return valid = false;
    if (!data.email) return valid = false;
    if (!data.password) return valid = false;
    if (!data.passwordConfirmation) return valid = false;
    if (data.password !== data.passwordConfirmation) return valid = false;
  } catch (ex) {
    valid = false;
  }
  
  return valid;
}

const validateIdParam = (id) => !!Number(id);

function validateUserUpdateInputs(data) {
  let valid = true;

  try {
    if (!data.firstName) return valid = false;
    if (!data.lastName) return valid = false;
    if (!data.username) return valid = false;
    if (!data.email) return valid = false;
  } catch (ex) {
    valid = false;
  }
  
  return valid;
}

module.exports = {
  validateUserInputs,
  validateIdParam,
  validateUserUpdateInputs
};