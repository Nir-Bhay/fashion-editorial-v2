import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal font-sans selection:bg-sunset-orange/30">
      <Navbar />
      
      <main>
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
                  <button className="lg:hidden text-sm underline">Filter</button>
                </div>
              </div>
              <ProductGrid />
              
              <div className="mt-24 flex justify-center">
                 <button className="px-12 py-4 border border-charcoal text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors duration-300">
                    Load More
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
                    </p>\n                 </div>\n                 <div>\n                    <h4 className=\"text-sm uppercase tracking-widest mb-6\">Shop</h4>\n                    <ul className=\"space-y-4 text-warm-white/60\">\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">New Arrivals</a></li>\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">Dresses</a></li>\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">Tops</a></li>\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">Accessories</a></li>\n                    </ul>\n                 </div>\n                 <div>\n                    <h4 className=\"text-sm uppercase tracking-widest mb-6\">Support</h4>\n                    <ul className=\"space-y-4 text-warm-white/60\">\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">Contact Us</a></li>\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">Shipping & Returns</a></li>\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">Size Guide</a></li>\n                       <li><a href=\"#\" className=\"hover:text-white transition-colors\">FAQ</a></li>\n                    </ul>\n                 </div>\n             </div>\n             \n             <div className=\"pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center\">\n                 <div className=\"text-xs text-warm-white/40 mb-4 md:mb-0\">\n                    © 2024 Moment Fashion. All rights reserved.\n                 </div>\n                 <div className=\"flex space-x-8 text-sm text-warm-white/60\">\n                    <a href=\"#\" className=\"hover:text-white transition-colors\">Instagram</a>\n                    <a href=\"#\" className=\"hover:text-white transition-colors\">Pinterest</a>\n                    <a href=\"#\" className=\"hover:text-white transition-colors\">Twitter</a>\n                 </div>\n             </div>\n         </div>\n      </footer>\n    </div>\n  )\n}\n\nexport default App\n