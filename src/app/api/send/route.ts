import { EmailTemplate } from '@/components/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

    const body = await request.json()

    console.log(body)

    return Response.json(body)

    // try {
    //     const data = await resend.emails.send({
    //         from: 'Nathan <onboarding@resend.dev>',
    //         to: ['nathanferreiradev@gmail.com'],
    //         subject: 'Hello world',
    //         react: EmailTemplate({ firstName: 'Nathan' }) as React.ReactElement,
    //     });

    //     return Response.json(data);
    // } catch (error) {
    //     return Response.json({ error });
    // }
}
