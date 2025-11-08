import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: '22K Bridal Necklace Set',
    price: '₹2,35,000',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Temple Gold Bangle',
    price: '₹78,900',
    image:
      'https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Diamond Pendant',
    price: '₹56,450',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c49?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Silver Oxidised Set',
    price: '₹12,990',
    image:
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    rating: 4.6,
  },
];

export default function ShopShowcase() {
  return (
    <section id="shop" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Trending Pieces</h2>
            <p className="mt-2 text-neutral-600">Fine jewellery, thoughtfully crafted for every occasion.</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm px-3 py-1 rounded-full border">Gold</button>
            <button className="text-sm px-3 py-1 rounded-full border">Diamond</button>
            <button className="text-sm px-3 py-1 rounded-full border">Bridal</button>
            <button className="text-sm px-3 py-1 rounded-full border">Silver</button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a key={p.id} href="#" className="group rounded-xl border bg-white p-3 shadow-sm">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-neutral-900">{p.name}</h3>
                <div className="mt-1 flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="#F59E0B" stroke="#F59E0B" />
                  <span className="text-sm text-neutral-600">{p.rating}</span>
                </div>
                <div className="mt-2 text-lg font-semibold text-neutral-900">{p.price}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
