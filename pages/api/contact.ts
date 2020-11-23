import { send } from '../../server/mailer';
import { ContactFormEntries } from '../../types/helpers/components/homepage/HomepageHelpersTypes';
import { validateContactEntries } from '../../helpers/api/ContactHelpers';

export default async function contact(req, res) {
  const { firstName, lastName, email, message }: ContactFormEntries = req.body.data;
  const entries: ContactFormEntries = { firstName, lastName, email, message };
  let status: number = 200;
  let messages: string[] = validateContactEntries(entries);

  if (messages.length) status = 400;

  if (req.method === 'POST' && status !== 400) {
    const name: string = `${firstName} ${lastName}`;

    try {
      await send({ name, email, text: message });
      messages = [`Your message has been sent!`];
    } catch {
      status = 500;
      messages = ['There was an error sending your message. Please try again later.'];
    }
  }

  if (req.method !== 'POST') {
    status = 404;
    messages = ['Endpoint not found...'];
  }

  res.statusCode = status;
  res.json({ messages });
};