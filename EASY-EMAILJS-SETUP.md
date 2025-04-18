# Quick EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and sign up for free

## Step 2: Set Up Email Service
1. In the EmailJS dashboard, click "Email Services" → "Add New Service"
2. Choose "Gmail" and connect with YOUR Gmail account (not your client's)
3. After connecting, copy the **Service ID** (it looks like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. For the Subject, write: `New Contact Form Message from {{from_name}}`
3. For the Content, write:
```
Name: {{from_name}}
Email: {{from_email}}
Service Requested: {{service_requested}}
Message:
{{message}}

This email was sent from the Nathanael Mor website contact form.
```
4. In the "To Email" field, enter: `nathanaelmor@gmail.com`
5. Save the template and copy the **Template ID** (it looks like `template_xxxxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (it looks like `xxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update Your Website
1. Open the file `.env.local` in your website files
2. Replace these values with the ones you copied:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx` (paste your Service ID)
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx` (paste your Template ID)
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx` (paste your Public Key)
3. Save the file
4. Restart your website (or redeploy if hosted online)

## Done!
The contact form should now work. When someone fills it out, the message will go to nathanaelmor@gmail.com without needing any passwords.

## Testing
Fill out the form yourself and check if the email is delivered to nathanaelmor@gmail.com 