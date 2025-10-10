import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ContractInvitation } from '../emails/contract-invitation';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, name, message, questions } = req.body;

        if (!email || !name || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'leanforward.designs@gmail.com',
            subject: `New contact from ${name}`,
            react: ContractInvitation() as React.ReactElement,
        });

        return res.status(200).json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}