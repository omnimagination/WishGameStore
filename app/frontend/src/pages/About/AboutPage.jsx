import React from 'react';
import { Gamepad2, Users, Heart, Target, Award, Shield, Zap, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Gamers First',
      description: 'Everything we do is for the gaming community. We understand what gamers want.',
    },
    {
      icon: Target,
      title: 'Affordability',
      description: 'Premium games shouldn\'t break the bank. We make gaming accessible to everyone.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'All our products are legitimate and sourced from authorized distributors.',
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Instant delivery means you\'re gaming within minutes of your purchase.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Gamers' },
    { number: '1,000+', label: 'Games Available' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center">
            <Gamepad2 className="w-10 h-10 text-[#00ff88]" />
          </div>
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#00ff88]">WishGameStore</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're passionate gamers who believe everyone deserves access to great games without emptying their wallets.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-font text-2xl md:text-3xl font-bold text-white mb-4">
                Our <span className="text-[#00ff88]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  WishGameStore was born from a simple frustration: why should gaming be so expensive? As lifelong gamers ourselves, we understood the excitement of discovering new worlds and the disappointment of seeing price tags that felt out of reach.
                </p>
                <p>
                  We set out to change that. By partnering with authorized distributors and optimizing our operations, we're able to offer legitimate game keys at prices that make sense.
                </p>
                <p>
                  Today, we've helped thousands of gamers expand their libraries without compromise. And we're just getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center">
                <Globe className="w-32 h-32 text-[#00ff88]/30" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00ff88]/20 rounded-full blur-[40px]" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#00d4ff]/20 rounded-full blur-[40px]" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-500"
            >
              <div className="heading-font text-3xl md:text-4xl font-bold text-[#00ff88] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="heading-font text-2xl md:text-3xl font-bold text-white mb-4">
              Our <span className="text-[#00ff88]">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at WishGameStore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-[#00ff88]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <Users className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
          <h2 className="heading-font text-2xl md:text-3xl font-bold text-white mb-4">
            Built by Gamers, for Gamers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Our team is made up of passionate gamers from around the world. We play the games we sell, and we understand what our community needs.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff88]/10 rounded-full">
            <Award className="w-5 h-5 text-[#00ff88]" />
            <span className="text-[#00ff88] font-medium">Trusted Since 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
