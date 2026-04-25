import { useState, useEffect } from 'react';

export default function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  return (
    <article className="group relative">
      <div aria-live="polite" className="sr-only">
        {isAdded ? `${product.name} added to cart` : ''}
      </div>
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 group-focus-within:bg-black/5 transition-colors duration-300" />
        
        {/* Quick Action Overlay */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 transition-all duration-300 z-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsAdded(true);
            }}
            className={`p-3 rounded-full shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-orange ${
              isAdded
                ? 'bg-charcoal text-white'
                : 'bg-warm-white text-charcoal hover:bg-sunset-orange hover:text-white'
            }`}
            aria-label={isAdded ? "Added to cart" : "Add to cart"}
          >
            {isAdded ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
           <h3 className="text-base font-medium text-charcoal group-hover:text-sunset-orange group-focus-within:text-sunset-orange transition-colors">
             <a href="#" className="after:absolute after:inset-0 after:z-10 focus:outline-none">
               {product.name}
             </a>
           </h3>
           <p className="text-sm text-charcoal/50 mt-1">{product.category}</p>
        </div>
        <span className="text-base font-medium text-charcoal">${product.price}</span>
      </div>
    </article>
  )
}
