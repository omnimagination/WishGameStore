import React, { useState } from 'react';
import { Mail, Instagram, Clock, Send, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'support@wishgamestore.com',
      link: 'mailto:support@wishgamestore.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@wishgamestore',
      link: 'https://instagram.com/wishgamestore',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      value: '24/7 Available',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-[#00ff88]" />
          </div>
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#00ff88]">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or need help? We're here for you. Reach out and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Response Time */}
            <div className="glass-card rounded-xl p-6 border border-[#00ff88]/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-[#00ff88] font-medium">Quick Response</span>
              </div>
              <p className="text-gray-400 text-sm">
                Average response time: <span className="text-white">Under 2 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00ff88]/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#00ff88]" />
                  </div>
                  <h3 className="heading-font text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00ff88]/50 focus:ring-[#00ff88]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00ff88]/50 focus:ring-[#00ff88]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00ff88]/50 focus:ring-[#00ff88]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows={6}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00ff88]/50 focus:ring-[#00ff88]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold py-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
