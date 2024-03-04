import { NextResponse } from 'next/server';
import { Twilio } from 'twilio';

export  async function POST(req:Request,)  {
    const {phone,name} = await req.json()
    const body = `hello  ${name}`;
  const twilio = new Twilio('ACee313f432f362ffac7edc2ee3a2d15c3','87d731f531108e10e9729e7572a73399' );
console.log(twilio);

  try {
    await twilio.messages.create({
      to: phone,
      from: '+18605305726',
      body,
    });

   return NextResponse.json({ success: true, message: 'SMS sent successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
