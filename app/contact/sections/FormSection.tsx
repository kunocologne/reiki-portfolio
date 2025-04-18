"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const FormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'general',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  // Initialize EmailJS with the public key
  React.useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.email || !formData.message) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        service_requested: formData.service,
        message: formData.message
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      );

      if (result.status === 200) {
        // Success
        setNotification({
          show: true,
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: 'general',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Get In Touch</h2>
        
        {notification.show && (
          <div 
            className={`mb-4 p-3 rounded-lg ${
              notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {notification.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block mb-1 text-sm font-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block mb-1 text-sm font-medium">
              I'm interested in
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="general">General Information</option>
              <option value="wellness">Wellness Coaching</option>
              <option value="reiki">Reiki Healing</option>
              <option value="nutrition">Nutrition Consultation</option>
              <option value="other">Other Services</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
