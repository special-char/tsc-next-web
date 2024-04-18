import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { email, name } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: true,
    auth: {
      user: 'student@thespecialcharacter.com',
      pass: 'kwue gclo psfn xrtv',
    },
  });

  const mailOptions = {
    from: 'student@thespecialcharacter.com',
    to: email,
    subject: 'Welcome to The Special Character',
    html: `<p>Thank You for Registering with The Special Character</p>
    <p>Dear ${name},</p>
    <p>We would like to express our sincere gratitude for taking the time to register with us. Your decision to join our community is greatly appreciated, and we are excited to have you on board.</p>
    <p>Should you have any questions, need assistance, or simply want to connect with us, please feel free to reach out through any of the following channels:</p>
    <ul>
      <li>Email: <a href="mailto:student@thespecialcharacter.com">student@thespecialcharacter.com</a></li>
      <li>SMS:<a href="sms:+917600096432"> +91-7600096432</a>
    </li>
      <li> WhatsApp:<a href="https://wa.me/7600096432"> +91-7600019432</a>
    </li>
    </ul>
    <p>Your satisfaction and experience with us are of utmost importance, and we are here to assist you every step of the way. Thank you for choosing us, and we look forward to serving your needs.</p>
    <p>Warm regards,<br>Team The Special Character.</p>
    <p><a href="https://maps.app.goo.gl/9WNfYVgQUTVaYha58">
    B-604-605 Ganesh Glory 11, Jagatpur Road. S.G. Highway, Ahmedabad
</a>
</p>
    <p>Follow us on:
        <a href="https://www.linkedin.com/company/thespecialcharacter/">Linkedin</a>,  <a href="https://instagram.com/thespecialchar?igshid=NGVhN2U2NjQ0Yg==">Instagram</a>
    </p>
<p><a href="http://www.thespecialcharacter.com">www.thespecialcharacter.com</a></p>
    `,
  };

  try {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: `Welcome email sent to ${email}`,
    });
  } catch (error) {
    return NextResponse.json({
      message: `Error sending welcome email: ${error.message}`,
    });
  }
}
