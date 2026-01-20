import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const SubscriptionCard = ({ subscription, onSubscribe }) => {
  const isUltimate = subscription.badge === 'Ultimate';
  const isPopular = subscription.isPopular;

  return (
    <div
      className={`relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        isUltimate
          ? 'border border-amber-500/30'
          : isPopular
          ? 'border border-[#00ff88]/30'
          : 'border border-white/5'
      }`}
      style={{
        boxShadow: isUltimate
          ? '0 20px 50px rgba(245, 158, 11, 0.15)'
          : isPopular
          ? '0 20px 50px rgba(0, 255, 136, 0.1)'
          : 'none',
      }}
    >
      {/* Badge */}
      {subscription.badge && (
        <div className="absolute top-0 right-0">
          <Badge
            className={`rounded-none rounded-bl-xl px-4 py-1.5 font-semibold text-xs ${
              isUltimate
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black'
                : 'bg-[#00ff88] text-black'
            }`}
          >
            <Sparkles className="w-3 h-3 mr-1" />
            {subscription.badge}
          </Badge>
        </div>
      )}

      {/* Neon Glow Effect */}
      {(isPopular || isUltimate) && (
        <div
          className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
          style={{
            background: isUltimate
              ? 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.3), transparent 70%)'
              : 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.3), transparent 70%)',
          }}
        />
      )}

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-gray-400 text-sm mb-2">{subscription.name}</h3>
          <p className={`heading-font text-2xl font-bold ${isUltimate ? 'text-amber-400' : 'text-white'}`}>
            {subscription.duration}
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-gray-400 text-lg">₹</span>
            <span
              className={`heading-font text-5xl font-bold ${
                isUltimate ? 'text-amber-400' : isPopular ? 'text-[#00ff88]' : 'text-white'
              }`}
            >
              {subscription.price}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hud-line w-full mb-6" />

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {subscription.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  isUltimate ? 'bg-amber-500/20' : 'bg-[#00ff88]/20'
                }`}
              >
                <Check
                  className={`w-3 h-3 ${isUltimate ? 'text-amber-400' : 'text-[#00ff88]'}`}
                />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          onClick={() => onSubscribe?.(subscription)}
          className={`w-full py-6 font-semibold text-base transition-all duration-300 ${
            isUltimate
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black hover:shadow-lg hover:shadow-amber-500/25'
              : isPopular
              ? 'bg-[#00ff88] hover:bg-[#00ff88]/90 text-black hover:shadow-lg hover:shadow-[#00ff88]/25'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
          }`}
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
