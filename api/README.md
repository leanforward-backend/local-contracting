# API Routes

This folder contains Vercel serverless functions for the contact form.

## Setup

1. Get a Resend API key from [https://resend.com](https://resend.com)
2. Add the API key to your Vercel project environment variables:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key

## send-email.ts

Handles form submissions from the contact form and sends confirmation emails using the React Email template.

### Environment Variables Required:
- `RESEND_API_KEY` - Your Resend API key for sending emails

### Request Body:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "message": "What they want to hire you for",
  "questions": "Any additional questions (optional)"
}
```

### Response:
- 200: Email sent successfully
- 400: Missing required fields
- 405: Method not allowed
- 500: Failed to send email

