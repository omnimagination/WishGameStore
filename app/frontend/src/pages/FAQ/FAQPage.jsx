import React from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Mail } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Button } from '../../components/ui/button';
import { faqs } from '../../data/mock';

const FAQPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-[#00ff88]" />
          </div>
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#00ff88]">Questions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border border-white/10 rounded-xl px-6 data-[state=open]:border-[#00ff88]/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-white text-left hover:text-[#00ff88] hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Refund Policy Section */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="heading-font text-2xl font-bold text-white mb-4">
            Refund & Replacement Policy
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              At WishGameStore, we want you to be completely satisfied with your purchase. Here's our policy:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Refunds are available within 48 hours of purchase for undelivered or non-working keys</li>
              <li>Once a key has been redeemed, it cannot be refunded</li>
              <li>Replacement keys are provided if your original key doesn't work</li>
              <li>Contact support with your order ID and proof of issue for assistance</li>
            </ul>
            <p className="text-sm text-gray-500">
              Note: Processing time for refunds is typically 3-5 business days.
            </p>
          </div>
        </div>

        {/* Terms Section */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="heading-font text-2xl font-bold text-white mb-4">
            Terms & Conditions
          </h2>
          <div className="space-y-4 text-gray-400 text-sm">
            <p>
              By purchasing from WishGameStore, you agree to our terms of service. Key highlights include:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>All sales are final once a key has been redeemed</li>
              <li>Keys are for personal use only and cannot be resold</li>
              <li>We are not responsible for region-locked content if not specified</li>
              <li>Prices are subject to change without notice</li>
              <li>Users must be 18+ or have parental consent to make purchases</li>
            </ul>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center">
          <h3 className="heading-font text-xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Our support team is ready to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold px-6">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Us
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
