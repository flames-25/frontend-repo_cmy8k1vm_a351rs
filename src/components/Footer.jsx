const brandMaroon = '#6B1E19';

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div>
            <h3 className="text-xl font-serif" style={{ color: brandMaroon }}>Cheerans Jewellery</h3>
            <p className="mt-3 text-sm text-neutral-600 max-w-xs">
              Royal craftsmanship from Thriprayar and Paravur. BIS hallmarked gold, curated diamonds, and timeless silver.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Thriprayar & Paravur, Kerala</li>
              <li>+91 9656104818</li>
              <li>cheeransjewellery@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Gold</li>
              <li>Diamond</li>
              <li>Bridal</li>
              <li>Silver</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900">Visit Us</h4>
            <div className="mt-3 rounded-lg overflow-hidden border">
              <iframe
                title="Cheerans Jewellery Location"
                src="https://www.google.com/maps?q=Thriprayar,+Kerala&output=embed"
                className="w-full h-40"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="py-6 border-t flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Cheerans Jewellery. All rights reserved.</p>
          <p>
            Crafted with care in Kerala.
          </p>
        </div>
      </div>
    </footer>
  );
}
