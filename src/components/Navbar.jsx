import { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const brandMaroon = '#6B1E19';
const brandGold = '#C9A74C';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center"
              style={{ background: brandGold }}
            >
              <span className="text-white font-semibold">C</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-serif" style={{ color: brandMaroon }}>
                Cheerans Jewellery
              </span>
              <span className="text-[11px] tracking-widest uppercase text-neutral-500">
                Thriprayar · Kerala
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-neutral-700 hover:text-neutral-900">Home</a>
            <a href="#shop" className="text-sm text-neutral-700 hover:text-neutral-900">Shop</a>
            <a href="#collections" className="text-sm text-neutral-700 hover:text-neutral-900">Collections</a>
            <a href="#about" className="text-sm text-neutral-700 hover:text-neutral-900">About</a>
            <a href="#contact" className="text-sm text-neutral-700 hover:text-neutral-900">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-neutral-100">
              <ShoppingCart size={20} color={brandMaroon} />
            </button>
            <button className="inline-flex items-center justify-center rounded-full p-2 hover:bg-neutral-100">
              <User size={20} color={brandMaroon} />
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <a onClick={() => setOpen(false)} href="#home" className="px-2 py-2 rounded hover:bg-neutral-100">Home</a>
              <a onClick={() => setOpen(false)} href="#shop" className="px-2 py-2 rounded hover:bg-neutral-100">Shop</a>
              <a onClick={() => setOpen(false)} href="#collections" className="px-2 py-2 rounded hover:bg-neutral-100">Collections</a>
              <a onClick={() => setOpen(false)} href="#about" className="px-2 py-2 rounded hover:bg-neutral-100">About</a>
              <a onClick={() => setOpen(false)} href="#contact" className="px-2 py-2 rounded hover:bg-neutral-100">Contact</a>
              <div className="flex items-center gap-3 pt-2">
                <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                  <ShoppingCart size={18} /> Cart
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                  <User size={18} /> Account
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
