'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '../atoms';
import { NavigationItem } from '../molecules';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sites/', label: 'Explore' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function HeaderNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-neutral-100' : 'bg-transparent'}`}>
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary-400 rounded-lg">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">P</div>
            <div className="hidden sm:block">
              <span className={`font-display text-lg ${scrolled ? 'text-neutral-900' : 'text-white'} transition-colors`}>Pangasinan</span>
              <span className={`block text-[10px] font-bold uppercase tracking-[0.15em] ${scrolled ? 'text-primary-500' : 'text-white/70'} transition-colors -mt-0.5`}>Heritage</span>
            </div>
          </Link>
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => <NavigationItem key={link.href} href={link.href} label={link.label} scrolled={scrolled} />)}
          </ul>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} className={`md:hidden p-2 rounded-xl ${scrolled ? 'text-neutral-600 hover:bg-neutral-100' : 'text-white hover:bg-white/10'} transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400`} onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 bg-white rounded-2xl mt-2 shadow-xl border border-neutral-100 p-3">
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => <NavigationItem key={link.href} href={link.href} label={link.label} scrolled={true} onClick={() => setMobileOpen(false)} />)}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
