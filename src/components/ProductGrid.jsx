import ProductCard from './ProductCard';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Wool Blend Oversized Coat",
    category: "Coats & Jackets",
    price: 389,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Pleated Wide Leg Trousers",
    category: "Trousers",
    price: 195,
    image: "https://images.unsplash.com/photo-1584370848010-d7d6ac31603d?q=80&w=1935&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Silk Satin Midi Dress",
    category: "Dresses",
    price: 245,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2083&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Cashmere Turtleneck",
    category: "Knitwear",
    price: 220,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Structured Leather Blazer",
    category: "Coats & Jackets",
    price: 450,
    image: "https://images.unsplash.com/photo-1550614000-4b9519e02c60?q=80&w=1922&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Minimalist Cotton Shirt",
    category: "Tops",
    price: 120,
    image: "https://images.unsplash.com/photo-1598532163257-5260846101116?q=80&w=1908&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "High-Waist Denim",
    category: "Trousers",
    price: 180,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Cropped Wool Jacket",
    category: "Coats & Jackets",
    price: 275,
    image: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Ribbed Knit Dress",
    category: "Dresses",
    price: 210,
    image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1887&auto=format&fit=crop"
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {MOCK_PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
