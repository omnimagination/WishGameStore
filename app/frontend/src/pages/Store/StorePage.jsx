import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, Grid, List } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import GameCard from '../../components/cards/GameCard';
import { featuredGames, filterOptions } from '../../data/mock';

const StorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedEdition, setSelectedEdition] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const filteredGames = useMemo(() => {
    return featuredGames.filter((game) => {
      // Search filter
      if (searchQuery && !game.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && game.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Edition filter
      if (selectedEdition !== 'All' && game.edition !== selectedEdition) {
        return false;
      }

      // Price filter
      if (selectedPrice !== 'All') {
        const price = game.price;
        switch (selectedPrice) {
          case 'Under ₹500':
            if (price >= 500) return false;
            break;
          case '₹500 - ₹1000':
            if (price < 500 || price > 1000) return false;
            break;
          case '₹1000 - ₹2000':
            if (price < 1000 || price > 2000) return false;
            break;
          case 'Above ₹2000':
            if (price <= 2000) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPrice, selectedEdition]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPrice('All');
    setSelectedEdition('All');
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== 'All' || selectedPrice !== 'All' || selectedEdition !== 'All';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-white mb-4">
            Game <span className="text-[#00ff88]">Store</span>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Browse our extensive collection of PC games, DLCs, and more at unbeatable prices.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="glass-card rounded-xl p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#00ff88]/50 focus:ring-[#00ff88]/20"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[140px] bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10">
                  {filterOptions.categories.map((cat) => (
                    <SelectItem key={cat} value={cat} className="text-white hover:bg-white/10">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="w-[150px] bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10">
                  {filterOptions.priceRanges.map((range) => (
                    <SelectItem key={range} value={range} className="text-white hover:bg-white/10">
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedEdition} onValueChange={setSelectedEdition}>
                <SelectTrigger className="w-[140px] bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Edition" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10">
                  {filterOptions.editions.map((edition) => (
                    <SelectItem key={edition} value={edition} className="text-white hover:bg-white/10">
                      {edition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden border-white/10 text-white hover:bg-white/10"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* View Toggle */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10">
                  {filterOptions.categories.map((cat) => (
                    <SelectItem key={cat} value={cat} className="text-white hover:bg-white/10">
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10">
                  {filterOptions.priceRanges.map((range) => (
                    <SelectItem key={range} value={range} className="text-white hover:bg-white/10">
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedEdition} onValueChange={setSelectedEdition}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Edition" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10">
                  {filterOptions.editions.map((edition) => (
                    <SelectItem key={edition} value={edition} className="text-white hover:bg-white/10">
                      {edition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="col-span-full text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear All Filters
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-medium">{filteredGames.length}</span> games
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">No games found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
            <Button onClick={clearFilters} className="bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-semibold">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StorePage;
