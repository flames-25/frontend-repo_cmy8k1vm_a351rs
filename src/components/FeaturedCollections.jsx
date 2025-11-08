const collections = [
  {
    title: 'Kerala Bridal Gold',
    image:
      'https://images.unsplash.com/photo-1625863997567-4a7c93866839?q=80&w=1600&auto=format&fit=crop',
    tag: 'Bridal',
  },
  {
    title: 'Diamond Statement',
    image:
      'https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=1600&auto=format&fit=crop',
    tag: 'Diamond',
  },
  {
    title: 'Temple Heritage',
    image:
      'https://images.unsplash.com/photo-1647591183347-5e3e51dc9e7d?q=80&w=1600&auto=format&fit=crop',
    tag: 'Gold',
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">
              Featured Collections
            </h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Explore curated selections blending tradition with contemporary elegance.
            </p>
          </div>
          <a href="#shop" className="hidden md:inline text-sm underline underline-offset-4">Browse all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c) => (
            <a key={c.title} href="#shop" className="group relative overflow-hidden rounded-xl shadow-sm">
              <img
                src={c.image}
                alt={c.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs text-neutral-800">
                  {c.tag}
                </span>
                <h3 className="mt-3 text-xl font-serif text-white">{c.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
