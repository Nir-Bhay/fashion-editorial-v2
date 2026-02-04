export default function ProductCard({ product }) {
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 group-focus-within:bg-black/5 transition-colors duration-300" />
        
        {/* Quick Action Overlay */}
        <div className="absolute bottom-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 transition-all duration-300">
          <button
            className="bg-warm-white text-charcoal p-3 rounded-full shadow-lg hover:bg-sunset-orange hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-orange"
            aria-label="Add to cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
           <h3 className="text-base font-medium text-charcoal group-hover:text-sunset-orange group-focus-within:text-sunset-orange transition-colors">
             <a href={`#product-${product.id}`} className="focus:outline-none focus-visible:underline after:absolute after:inset-0 after:z-10">
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
