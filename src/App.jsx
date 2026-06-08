import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';

function App() {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [liveMessage, setLiveMessage] = useState('');

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setLiveMessage('Loading more products...');
  };

  useEffect(() => {
    if (isLoadingMore) {
      const timer = setTimeout(() => {
        setIsLoadingMore(false);
        setLiveMessage('Successfully loaded more products');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoadingMore]);

  useEffect(() => {
    if (liveMessage && !isLoadingMore) {
      const clearLiveMessageTimer = setTimeout(() => {
        setLiveMessage('');
      }, 3000);
      return () => clearTimeout(clearLiveMessageTimer);
    }
  }, [liveMessage, isLoadingMore]);

  return (
    <div className="min-h-screen bg-warm-white text-charcoal font-sans selection:bg-sunset-orange/30">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-4 focus:left-4 focus:bg-charcoal focus:text-white focus:px-6 focus:py-3 focus:font-medium focus:rounded-sm focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-sunset-orange"
      >
        Skip to content
      </a>
      <Navbar />
      
      <main id="main-content" tabIndex="-1">
        <Hero />
        
        <BrandStatement />
        
        <section className="max-w-[1600px] mx-auto px-6 pb-24" id="shop">
          <div className="grid grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-2">
              <Sidebar />
            </div>
            
            {/* Product Grid */}
            <div className="col-span-12 lg:col-span-10">
              <div className="flex justify-between items-end mb-12 border-b border-muted-taupe/30 pb-4">
                <h2 className="text-section">Latest Arrivals</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-charcoal/60">Showing 9 of 124 items</span>
                  <button className="lg:hidden text-sm underline focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 rounded-sm">Filter</button>
                </div>
              </div>
              <ProductGrid />
              
              <div className="mt-24 flex justify-center flex-col items-center">
                 <div aria-live="polite" className="sr-only">
                    {liveMessage}
                 </div>
                 <button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    aria-label={isLoadingMore ? "Loading more products" : "Load more products"}
                    className="px-12 py-4 border border-charcoal text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                 >
                    {isLoadingMore && <Loader2 className="animate-spin" size={16} />}
                    {isLoadingMore ? "Loading..." : "Load More"}
                 </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-charcoal text-warm-white py-16">
         <div className="max-w-[1600px] mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                 <div className="col-span-1 md:col-span-2">
                    <span className="text-3xl font-bold tracking-tight uppercase mb-6 block">Moment</span>
                    <p className="text-warm-white/60 max-w-sm">
                      Elevating the everyday through minimalist design and sustainable practices. Join our journey.
                    </p>
                 </div>
                 <div>
                    <h4 className="text-sm uppercase tracking-widest mb-6">Shop</h4>
                    <ul className="space-y-4 text-warm-white/60">
                       <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Dresses</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Tops</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-sm uppercase tracking-widest mb-6">Support</h4>
                    <ul className="space-y-4 text-warm-white/60">
                       <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                 </div>
             </div>

             <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                 <div className="text-xs text-warm-white/40 mb-4 md:mb-0">
                    © 2024 Moment Fashion. All rights reserved.
                 </div>
                 <div className="flex space-x-8 text-sm text-warm-white/60">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                 </div>
             </div>
         </div>
      </footer>
    </div>
  )
}

export default App
