import { Resend } from 'resend';
import { ContractInvitation } from '../emails/contract-invitation';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {

    try {

        // Send email to yourself (notification of new contact)
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'tobycrust@gmail.com',
            subject: `New contact from Toby`,
            text: `Name: Toby\nEmail: tobycrust@gmail.com\nMessage: message\nQuestions: questions`,
        });

        // Send confirmation email back to the person who filled out the form
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'tobycrust@gmail.com',
            subject: 'Thanks for reaching out!',
            react: ContractInvitation(),
        });

        // Send success response
        return res.status(200).json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}