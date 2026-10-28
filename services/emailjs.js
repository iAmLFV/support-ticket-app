const SERVICE_ID = process.env.EXPO_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.EXPO_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.EXPO_PUBLIC_EMAILJS_PUBLIC_KEY;

// Sends the support request and the screenshot link through EmailJS
export async function sendSupportEmail({ name, email, category, message, imageUrl }) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        name: name,                    // {{name}}
        reply_to: email,               // {{reply_to}}
        issue_category: category,      // {{issue_category}}
        message: message,              // {{message}}
        image_url: imageUrl,           // {{image_url}}
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Email could not be sent');
  }
}