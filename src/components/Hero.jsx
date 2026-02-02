export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 max-w-[1600px] mx-auto min-h-[85vh] flex flex-col justify-center">
      <div className="grid grid-cols-12 gap-6 items-center">
        {/* Text Content */}
        <div className="col-span-12 md:col-span-5 relative z-10">
          <h1 className="text-display leading-[0.85] tracking-tight mb-8">
            WEAR <br />
            A STYLE <br />
            <span className="italic font-serif font-light text-charcoal/70 block mt-2">moment.</span>
          </h1>
          <p className="text-body max-w-md mb-10 text-charcoal/70">
            Curated collections for the modern minimalist. Discover the art of dressing with intention and confidence.
          </p>
          <button className="group flex items-center space-x-2 text-sm font-bold tracking-widest uppercase border-b-2 border-charcoal pb-2 hover:text-sunset-orange hover:border-sunset-orange transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-4 rounded-sm">
            <span>Explore Collection</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Image */}
        <div className="col-span-12 md:col-span-7 relative">
          <div className="aspect-[3/4] md:aspect-[16/10] w-full overflow-hidden rounded-[2rem]">
             <img 
               src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2832&auto=format&fit=crop" 
               alt="Editorial Fashion" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
             />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-warm-white rounded-full flex items-center justify-center border border-muted-taupe/30 hidden md:flex animate-spin-slow">
             <div className="text-[10px] uppercase tracking-[0.2em] text-center w-full h-full relative">
                <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0">
                  <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                  <text>
                    <textPath href="#curve" className="fill-current text-charcoal">
                      • NEW COLLECTION • SPRING 2024
                    </textPath>
                  </text>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
