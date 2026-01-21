const CATEGORIES = [
  { name: 'View All', count: 124 },
  { name: 'New Arrivals', count: 18 },
  { name: 'Coats & Jackets', count: 32 },
  { name: 'Knitwear', count: 24 },
  { name: 'Dresses', count: 15 },
  { name: 'Trousers', count: 21 },
  { name: 'Accessories', count: 14 },
];

const COLORS = [
  'bg-black',
  'bg-white border border-gray-200',
  'bg-neutral-400',
  'bg-amber-700',
  'bg-blue-900',
];

const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function Sidebar() {
  return (
    <aside className="sticky top-28 w-full pr-8 hidden lg:block">
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-6">Category</h3>
        <ul className="space-y-3">
          {CATEGORIES.map((cat, idx) => (
            <li key={cat.name} className={`flex justify-between items-center group cursor-pointer py-1 ${idx === 0 ? 'text-charcoal font-medium' : 'text-charcoal/60'}`}>
              <span className="group-hover:text-charcoal group-hover:translate-x-1 transition-all duration-300">{cat.name}</span>
              <span className="text-xs text-charcoal/40 font-mono">{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pt-8 border-t border-muted-taupe/30">
        <h3 className="text-lg font-semibold mb-6">Filter</h3>
         <div className="space-y-4">
            <div>
               <p className="text-sm font-medium mb-3">Color</p>
               <div className="flex flex-wrap gap-2">
                  {COLORS.map((color, i) => (
                    <button key={i} className={`w-6 h-6 rounded-full ${color} hover:scale-110 transition-transform`}></button>
                  ))}
               </div>
            </div>

            <div className="pt-4">
               <p className="text-sm font-medium mb-3">Size</p>
               <div className="grid grid-cols-3 gap-2">
                  {SIZES.map((size) => (
                    <button key={size} className="text-xs py-1 border border-muted-taupe/30 rounded hover:border-charcoal hover:bg-charcoal hover:text-white transition-colors">
                      {size}
                    </button>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </aside>
  )
}
