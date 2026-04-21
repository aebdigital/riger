# SMTP2GO Contact Form Setup

This project sends the contact form through a Netlify Function:

- Function: `netlify/functions/contact.js`
- Form component: `components/InquiryForm.tsx`
- Endpoint: `/.netlify/functions/contact`

## Required Netlify Environment Variables

Set these in Netlify dashboard under **Site configuration -> Environment variables**:

```bash
CONTACT_FORM_RECIPIENT=rigersro@gmail.com
SMTP2GO_API_KEY=your-smtp2go-api-key
SMTP2GO_SENDER="Riger s.r.o. <noreply@pozicovnalesenia.sk>"
```

`SMTP2GO_SENDER` must be a sender identity verified in SMTP2GO. The contact form uses the visitor email as the `Reply-To` header, so replies can go directly to the customer.

## Flow

1. Visitor submits the form in the homepage order section.
2. `components/InquiryForm.tsx` validates the required fields and sends JSON to `/.netlify/functions/contact`.
3. `netlify/functions/contact.js` validates the payload and environment variables.
4. The function calls the SMTP2GO API.
5. The form shows a success or error message without leaving the page.

## Local Testing

The function endpoint is available when running through Netlify Dev:

```bash
netlify dev
```

For a normal `npm run dev` session, the Next.js app works, but the Netlify function endpoint is not mounted unless Netlify Dev is running.

## Troubleshooting

- `Contact form is not configured.` means at least one required environment variable is missing.
- `Email service rejected the message.` means SMTP2GO returned an unsuccessful response. Check the sender identity and API key.
- If submissions work locally but not on deploy, confirm the environment variables are set for the deployed Netlify context.
