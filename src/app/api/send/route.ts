import WelcomeTemplate from '../../../emails/WelcomeTemplate';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = await req.json();
    console.log(body)
    resend.contacts.create({
      email: body.email,
      firstName: body.name,
      unsubscribed: false,
      audienceId: '5d7a47c3-19dc-460f-aade-a4af044cbb96',
    }).catch((err) => console.log(err)).then((res) => console.log(res));

    // const { data, error } = await resend.emails.send({
    //   from: 'Emanuele <join@italiandynamism.com>',
    //   to: [body.email],
    //   subject: 'Welcome to Italian Dynamism',
    //   react: WelcomeTemplate({ firstName: body.name }),
    // });

    // if (error) {
    //   console.log(error)
    //   return Response.json({ error }, { status: 500 });
    // }

    return Response.json({"status": "done"});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}