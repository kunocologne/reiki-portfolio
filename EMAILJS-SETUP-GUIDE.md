# EmailJS Setup Guide for Contact Form

## Overview
This guide explains how to set up EmailJS to make your contact form functional. This service will send form submissions directly to nathanaelmor@gmail.com without complex server setup.

## Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and click "Sign Up Free"
2. Create an account using your preferred method

## Step 2: Connect Your Email Service
1. In your EmailJS dashboard, go to "Email Services" 
2. Click "Add New Service"
3. Select "Gmail" (or another provider)
4. Follow the steps to connect your nathanaelmor@gmail.com account
5. Name your service (e.g., "nathanael_service") and save it
6. Note the **Service ID** (looks like: "service_xxxxxxx")

## Step 3: Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email address
   - `{{service_requested}}` - The service they're interested in
   - `{{message}}` - Their message
4. Save the template
5. Note the **Template ID** (looks like: "template_xxxxxxx")

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys" in the dashboard
2. Copy your **Public Key** (looks like: "XXXXXXXXXXXXXXXXXX")

## Step 5: Update Your Website Code
1. Open the file: `app/contact/sections/FormSection.tsx`
2. Update the following lines with your actual values:
   ```javascript
   const serviceId = 'service_default'; // Replace with your Service ID
   const templateId = 'template_default'; // Replace with your Template ID 
   const publicKey = 'your_public_key'; // Replace with your Public Key
   ```
3. Save the file and deploy your website

That's it! Your contact form will now send emails directly to nathanaelmor@gmail.com when visitors submit the form.

## Free Plan Limitations
- 200 emails per month
- EmailJS branding in emails

If you need more, consider upgrading to a paid plan. 