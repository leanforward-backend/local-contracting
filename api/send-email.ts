import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { ContractInvitation } from '../src/react-email-starter/emails/contract-invitation';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message, questions } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'tobycrust@gmail.com', // Replace with your verified domain
            to: email,
            subject: 'Thanks for reaching out!',
            react: ContractInvitation({
                username: name,
                invitedByUsername: 'Toby Crust',
                invitedByEmail: 'tobycrust@gmail.com',
            }),
        });

        res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' });
    }
}

