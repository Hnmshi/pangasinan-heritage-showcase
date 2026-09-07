'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../atoms';
import { NavigationItem } from '../molecules';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sites/', label: 'Heritage Sites' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function HeaderNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-md">
            <span aria-hidden="true" className="text-2xl">🏝️</span>
            <span className="hidden sm:inline">Pangasinan Heritage</span>
            <span className="sm:hidden">Heritage</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => <NavigationItem key={link.href} href={link.href} label={link.label} />)}
          </ul>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} className="md:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-300" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => <NavigationItem key={link.href} href={link.href} label={link.label} onClick={() => setMobileOpen(false)} />)}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
