import WelcomeTemplate from '../../../emails/WelcomeTemplate';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend("re_LHiXFDNX_NdYvVDxnyKyNLALkuk2sNbbL");

type body = {
  email: string | null;
  name: string | null;
}

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  try {
    const { email, name }= await req.json();

    await resend.contacts.create({
      email: email,
      firstName: name,
      unsubscribed: false,
      audienceId: '5d7a47c3-19dc-460f-aade-a4af044cbb96',
    })

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

    NextResponse.json({ status: 'done' });
  } catch (error) {
    console.error('Error creating contact:', error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
}