import React from 'react';
import { Gamepad2, Trophy, Gift, Star } from 'lucide-react';
import SubscriptionCard from '../../components/cards/SubscriptionCard';
import { subscriptions } from '../../data/mock';

const GamePassPage = () => {
  const benefits = [
    {
      icon: Gamepad2,
      title: '100+ Games',
      description: 'Access a huge library of games including new releases',
    },
    {
      icon: Trophy,
      title: 'Day One Releases',
      description: 'Play new games on day one at no extra cost',
    },
    {
      icon: Gift,
      title: 'Member Perks',
      description: 'Exclusive discounts and in-game content',
    },
    {
      icon: Star,
      title: 'EA Play Included',
      description: 'Get EA Play membership included free',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Xbox <span className="text-[#00ff88]">Game Pass</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get unlimited access to over 100 high-quality games for PC. New games added all the time.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-5 text-center hover:neon-border transition-all duration-500"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#00ff88]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your <span className="text-[#00ff88]">Plan</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Pick the subscription that fits your gaming needs. All plans include instant activation.
            </p>
          </div>

          {/* Subscription Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {subscriptions.map((subscription) => (
              <SubscriptionCard key={subscription.id} subscription={subscription} />
            ))}
          </div>

          {/* Comparison Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-gray-300 text-sm">
                <span className="text-amber-400 font-semibold">Ultimate</span> includes Xbox Live Gold + Console access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white mb-4">
                  Why <span className="text-[#00ff88]">Game Pass</span>?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Discover New Favorites</h4>
                      <p className="text-gray-400 text-sm">Try games you might never have bought</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Save Money</h4>
                      <p className="text-gray-400 text-sm">One low price for hundreds of games</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Play Day One</h4>
                      <p className="text-gray-400 text-sm">Get new releases as soon as they launch</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center">
                  <Gamepad2 className="w-24 h-24 text-[#00ff88]/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-full blur-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamePassPage;
