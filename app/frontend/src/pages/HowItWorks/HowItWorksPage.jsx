import React from 'react';
import { Search, ShoppingCart, Mail, CheckCircle, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { howItWorks } from '../../data/mock';

const iconMap = {
  Search: Search,
  ShoppingCart: ShoppingCart,
  Mail: Mail,
};

const HowItWorksPage = () => {
  const additionalInfo = [
    {
      icon: Zap,
      title: 'Instant Activation',
      description: 'Most keys activate instantly on your gaming platform',
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'All transactions are encrypted and secure',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Our team is always here to help you',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-[#00ff88]">Works</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting your favorite games is quick and easy. Follow these simple steps.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, index) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <div key={step.step} className="relative">
                  <div className="glass-card rounded-2xl p-8 text-center hover:neon-border transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-[#00ff88] text-black font-bold flex items-center justify-center text-sm heading-font">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-[#00ff88]" />
                    </div>

                    {/* Content */}
                    <h3 className="heading-font text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>

                    {/* Arrow for desktop */}
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-[#00ff88]/50" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Indicator */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-full">
            <CheckCircle className="w-6 h-6 text-[#00ff88]" />
            <span className="text-white font-medium">Start playing in under 5 minutes!</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {additionalInfo.map((info, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center flex-shrink-0">
                <info.icon className="w-6 h-6 text-[#00ff88]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="heading-font text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <Link to="/store">
            <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-bold text-lg px-10 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/25">
              Browse Games
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
