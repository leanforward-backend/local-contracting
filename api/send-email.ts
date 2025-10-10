import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Get the form data from the request body
        const { email, name, message, questions } = req.body;

        // Validate required fields
        if (!email || !name || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email to yourself (notification of new contact)
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'leanforward.designs@gmail.com',
            subject: `New contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nQuestions: ${questions || 'None'}`,
        });

        // Send success response
        return res.status(200).json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}