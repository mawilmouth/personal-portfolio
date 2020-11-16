import { send } from '../../server/mailer';

export default async function contact(req, res) {
  const { email = '', name = '', text = '' } = req.body;
  let status: number = 200;
  let messages: string[] = [];

  if (req.method === 'POST') {
    try {
      await send({ email, name, text });
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