import Spline from '@splinetool/react-spline';

const brandMaroon = '#6B1E19';
const brandGold = '#C9A74C';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="min-h-[80vh] md:min-h-[88vh] flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              Premium Kerala Gold · BIS Hallmarked
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
              Timeless Elegance, Crafted in Kerala
            </h1>
            <p className="mt-4 text-neutral-200 max-w-xl">
              Discover bridal masterpieces and contemporary gold, diamond, and silver designs from Thriprayar's beloved jewellery house.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white"
                style={{ background: brandMaroon }}
              >
                Shop Now
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium"
                style={{ border: `1px solid ${brandGold}`, color: brandGold }}
              >
                Bridal Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
    </section>
  );
}
