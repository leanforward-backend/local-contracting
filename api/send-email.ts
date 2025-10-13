import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { VercelInviteUserEmail } from '../emails/contract-invitation.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message, questions } = req.body;

        if (!email || !name) {
            return res.status(400).json({ error: 'Missing required fields: name and email' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Toby <onboarding@resend.dev>',
            to: 'leanforward.designs@gmail.com',
            subject: `New contact from ${name}`,
            react: VercelInviteUserEmail({
                name,
                email,
                subject: message || 'No subject provided',
                questions: questions || 'No questions provided'
            }),
        });

        if (error) {
            console.error('Resend API error:', error);
            return res.status(500).json({
                error: 'Failed to send email',
                details: error.message
            });
        }

        console.log('Email sent successfully:', data);

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully!',
            data
        });

    } catch (error) {
        console.error('Unexpected error sending email:', error);
        return res.status(500).json({
            error: 'Failed to send email',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}