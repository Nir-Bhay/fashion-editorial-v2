import { Search, ShoppingBag, Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-sm transition-all duration-300 border-b border-muted-taupe/20">
      <div className="max-w-[1600px] mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <a href="/" className="text-2xl font-bold tracking-tight uppercase">Moment</a>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {['New Arrivals', 'Editorial', 'Shop', 'Collections'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium hover:text-charcoal/60 transition-colors uppercase tracking-wide">
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          <button
            className="hover:text-sunset-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-orange rounded-full p-1"
            aria-label="Search"
            title="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            className="hover:text-sunset-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-orange rounded-full p-1"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <Heart size={20} strokeWidth={1.5} />
          </button>

          <button
            className="relative hover:text-sunset-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-orange rounded-full p-1"
            aria-label="Cart with items"
            title="Cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-sunset-orange rounded-full" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
