import { send } from '../../server/mailer';
import { ContactFormEntries } from '../../types/helpers/components/homepage/HomepageHelpersTypes';

export default async function contact(req, res) {
  const { firstName, lastName, email, message }: ContactFormEntries = req.body.data;
  let status: number = 200;
  let messages: string[] = [];

  if (req.method === 'POST') {
    const name: string = `${firstName} ${lastName}`;

    try {
      await send({ name, email, text: message });
      messages = [`Your message has been sent!`];
    } catch {
      status = 500;
      messages = ['Error sending email...'];
    }
  } else {
    status = 404;
    messages = ['Endpoint not found...'];
  }

  res.statusCode = status;
  res.json({ messages });
};