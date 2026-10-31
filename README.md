# Support Ticket App

A Customer Support Form built with React Native and Expo. Users report a problem, attach a screenshot, and the request is sent by email with a clickable screenshot link.

## Team

- Lander T. Fernando (GitHub: iAmLFV)
- John Carl C. Lacastesantos (GitHub: JayceePrime)

## Repository

https://github.com/iAmLFV/support-ticket-app

## Features

- Form with name, email, issue category, message, and screenshot
- Pick, preview, change, or remove an image using expo-image-picker
- Image upload to Cloudinary (unsigned upload preset)
- Support email with a clickable screenshot link sent through EmailJS
- Required-field validation, loading indicator, and duplicate-submit prevention
- Tested on both partners' laptops
- Setup steps verified by both partners
- Verified on both partners' laptops

## Setup

1. Clone the repository:
   git clone https://github.com/iAmLFV/support-ticket-app.git
2. Go into the folder and install packages:
   cd support-ticket-app
   npm install
3. Create a .env file in the project root. Copy .env.example and fill in your own values.
4. Start the app:
   npx expo start
5. Scan the QR code with Expo Go on your phone (same Wi-Fi as the computer).

## Environment Variables

- EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME
- EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET
- EXPO_PUBLIC_EMAILJS_SERVICE_ID
- EXPO_PUBLIC_EMAILJS_TEMPLATE_ID
- EXPO_PUBLIC_EMAILJS_PUBLIC_KEY

The .env file is excluded by .gitignore and is not uploaded to GitHub. Never put passwords, private keys, or API secrets in these variables.

## EmailJS Template Variables

{{name}}, {{reply_to}}, {{issue_category}}, {{message}}, {{image_url}}