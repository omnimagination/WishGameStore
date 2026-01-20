import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Instagram, Twitter, Youtube, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Store', path: '/store' },
    { name: 'Game Pass', path: '/gamepass' },
    { name: 'Deals', path: '/deals' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  const supportLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Refund Policy', path: '/faq' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      {/* HUD Line */}
      <div className="hud-line w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-[#00ff88]" />
              <span className="heading-font text-xl font-bold text-white">
                Wish<span className="text-[#00ff88]">Game</span>Store
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted destination for affordable PC games, subscriptions, and game passes. Play more, pay less.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-font text-sm font-semibold text-white mb-4 tracking-wider">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#00ff88] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="heading-font text-sm font-semibold text-white mb-4 tracking-wider">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#00ff88] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-font text-sm font-semibold text-white mb-4 tracking-wider">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:support@wishgamestore.com"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#00ff88] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                support@wishgamestore.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#00ff88] transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
                @wishgamestore
              </a>
              <p className="text-gray-500 text-xs mt-4">
                Support Hours: 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 WishGameStore. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Powered by <span className="text-[#00ff88]">WishGameStore</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
