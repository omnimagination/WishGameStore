import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Gamepad2, Headphones, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/button';
import GameCard from '../../components/cards/GameCard';
import { featuredGames, categories, trustFeatures } from '../../data/mock';

const iconMap = {
  Zap: Zap,
  Shield: Shield,
  Gamepad2: Gamepad2,
  Headphones: Headphones,
};

const HomePage = () => {
  const trendingGames = featuredGames.filter((game) => game.isTrending).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#00ff88]" />
            <span className="text-gray-300 text-sm">Trusted by 10,000+ Gamers</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">Play More.</span>
            <br />
            <span className="text-[#00ff88] text-glow">Pay Less.</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Cheap & Original PC Games, Game Passes & Subscriptions.
            <br className="hidden sm:block" />
            Instant delivery, unbeatable prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/store">
              <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-bold text-lg px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/25">
                Browse Games
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/deals">
              <Button
                variant="outline"
                className="border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 font-semibold text-lg px-8 py-6 transition-all duration-300"
              >
                View Deals
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-[#00ff88]/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-[#00ff88] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => {
              const Icon = category.icon === 'Monitor' ? Gamepad2 : 
                          category.icon === 'Ticket' ? Zap :
                          category.icon === 'RefreshCw' ? Shield : Gamepad2;
              return (
                <Link
                  key={category.id}
                  to="/store"
                  className="group glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#00ff88]/10 flex items-center justify-center group-hover:bg-[#00ff88]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#00ff88]" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                  <p className="text-gray-500 text-sm">{category.count}+ Available</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* HUD Divider */}
      <div className="hud-line max-w-4xl mx-auto" />

      {/* Trust Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-[#00ff88]">WishGameStore</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're committed to providing the best gaming experience at unbeatable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] || Zap;
              return (
                <div
                  key={feature.id}
                  className="group glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00ff88]/10 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-[#00ff88]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending Games Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#00ff88]" />
              <h2 className="heading-font text-2xl md:text-3xl font-bold text-white">
                Trending Games
              </h2>
            </div>
            <Link
              to="/store"
              className="flex items-center gap-1 text-[#00ff88] hover:text-[#00ff88]/80 text-sm font-medium transition-colors duration-300"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-transparent to-[#00d4ff]/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="heading-font text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-[#00ff88]">Level Up</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of gamers who save big on their favorite titles. Start browsing now!
          </p>
          <Link to="/store">
            <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-bold text-lg px-10 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/25">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
