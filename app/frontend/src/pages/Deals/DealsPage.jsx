import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, Gift, ArrowRight, Percent, Flame } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import GameCard from '../../components/cards/GameCard';
import CountdownTimer from '../../components/common/CountdownTimer';
import { deals, featuredGames } from '../../data/mock';

const DealsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-gray-300 text-sm">Limited Time Offers</span>
          </div>
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            Hot <span className="text-[#00ff88]">Deals</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Grab the best games at unbeatable prices. These deals won't last forever!
          </p>
        </div>

        {/* Featured Deal Banner */}
        <div className="relative glass-card rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-transparent to-[#00d4ff]/10" />
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <Badge className="bg-orange-500/20 text-orange-400 mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  Flash Sale
                </Badge>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-3">
                  {deals[0].title}
                </h2>
                <p className="text-gray-400 mb-4">{deals[0].description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#00ff88] heading-font text-5xl font-bold">
                    {deals[0].discount}
                  </div>
                  <div className="text-gray-400 text-sm">
                    on selected<br />titles
                  </div>
                </div>
                <Link to="/store">
                  <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/25">
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-3 flex items-center gap-2 justify-center">
                  <Clock className="w-4 h-4" />
                  Ends in
                </p>
                <CountdownTimer endDate={deals[0].endsIn} />
              </div>
            </div>
          </div>
        </div>

        {/* All Deals */}
        <div className="space-y-12">
          {deals.map((deal, index) => (
            <div key={deal.id}>
              {/* Deal Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 flex items-center justify-center">
                    {index === 0 ? (
                      <Flame className="w-5 h-5 text-orange-500" />
                    ) : index === 1 ? (
                      <Zap className="w-5 h-5 text-[#00d4ff]" />
                    ) : (
                      <Gift className="w-5 h-5 text-[#00ff88]" />
                    )}
                  </div>
                  <div>
                    <h3 className="heading-font text-xl font-bold text-white">{deal.title}</h3>
                    <p className="text-gray-500 text-sm">{deal.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="bg-[#00ff88]/20 text-[#00ff88] font-bold">
                    <Percent className="w-3 h-3 mr-1" />
                    {deal.discount}
                  </Badge>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs">Ends in</p>
                    <CountdownTimer endDate={deal.endsIn} className="scale-75 origin-right" />
                  </div>
                </div>
              </div>

              {/* Deal Games */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {deal.games.map((gameId) => {
                  const game = featuredGames.find((g) => g.id === gameId);
                  return game ? <GameCard key={game.id} game={game} /> : null;
                })}
              </div>

              {/* Divider */}
              {index < deals.length - 1 && <div className="hud-line mt-12" />}
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 glass-card rounded-2xl p-8 md:p-12 text-center">
          <Gift className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
          <h3 className="heading-font text-2xl md:text-3xl font-bold text-white mb-3">
            Never Miss a Deal
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Subscribe to get notified about flash sales and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ff88]/50"
            />
            <Button className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
