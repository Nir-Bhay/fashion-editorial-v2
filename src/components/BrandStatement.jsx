export default function BrandStatement() {
  return (
    <section className="py-24 bg-charcoal text-warm-white rounded-3xl mx-4 md:mx-6 mb-24">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 md:col-span-5 md:order-2">
           <div className="aspect-[3/4] overflow-hidden rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
           </div>
        </div>
        <div className="col-span-12 md:col-span-7 md:order-1 md:pr-12">
          <span className="text-sunset-orange uppercase tracking-widest text-sm font-semibold mb-4 block">Our Philosophy</span>
          <h2 className="text-section mb-8 leading-tight">
            Fashion is not just about clothes. <br/>
            It's about the <span className="text-muted-taupe italic font-serif">stories</span> we tell.
          </h2>\n          <div className=\"space-y-6 text-lg text-warm-white/80 font-light leading-relaxed max-w-xl\">\n            <p>\n              We believe in the power of \"moments.\" The quiet confidence of a perfect silhouette, the texture that speaks without words, the color that captures a mood.\n            </p>\n            <p>\n              Our design philosophy is rooted in minimalist luxury—stripping away the excess to reveal the essential. Every piece is curated to be a canvas for your personal expression, designed to last beyond the season.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n  )\n}\n