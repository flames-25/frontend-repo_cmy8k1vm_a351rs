import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ShopShowcase from './components/ShopShowcase';
import Footer from './components/Footer';

const brandMaroon = '#6B1E19';
const brandGold = '#C9A74C';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <style>{`
        :root { --brand-maroon: ${brandMaroon}; --brand-gold: ${brandGold}; }
        .font-serif { font-family: 'Playfair Display', 'Cormorant Garamond', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; }
      `}</style>
      <Navbar />
      <Hero />

      <main>
        <FeaturedCollections />
        <ShopShowcase />

        <section id="about" className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif">About Cheerans</h2>
                <p className="mt-4 text-neutral-600">
                  Cheerans Jewellery blends Kerala's age-old goldsmithing heritage with modern design sensibilities. From bridal grandeur to everyday elegance, each piece is crafted with precision and passion.
                </p>
                <ul className="mt-6 space-y-2 text-neutral-700">
                  <li>• BIS Hallmarked Purity</li>
                  <li>• Transparent Making Charges</li>
                  <li>• Custom Designs & Resizing</li>
                </ul>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1600&auto=format&fit=crop"
                  alt="Kerala bridal gold"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
