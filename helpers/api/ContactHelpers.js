exports.validateContactEntries = (entries) => {
  let messages = [];

  const isEmail = validEmail(entries.email);

  if (!entries.firstName) messages.push('First name is not valid');
  if (!entries.lastName) messages.push('Last name is not valid');
  if (!isEmail) messages.push('Email is not valid');
  if (!entries.message) messages.push('Message is not valid');

  return messages;
}

function validEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return email && re.test(email);
}