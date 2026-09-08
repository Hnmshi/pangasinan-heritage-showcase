'use client';

import Link from 'next/link';
import { Typography, Button, Icon, FadeIn } from '../atoms';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 text-white px-4 overflow-hidden" aria-label="Welcome banner">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center pt-20">
        <FadeIn delay={0.1} direction="none">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/10">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Discover Pangasinan Province</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
            Where Heritage<br />
            <span className="text-gradient">Meets Paradise</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <Typography variant="body" className="!text-white/70 max-w-xl mx-auto mb-10 text-lg">
            Explore 124 islands, century-old lighthouses, healing hot springs, and sacred landmarks across the heart of northern Luzon.
          </Typography>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sites/">
              <Button variant="primary" size="lg">
                Explore Sites
                <Icon name="arrow-right" size={20} className="ml-2" />
              </Button>
            </Link>
            <Link href="/about/">
              <Button variant="ghost" size="lg" className="!text-white/70 hover:!text-white hover:!bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.65}>
          <div className="flex items-center justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-white/10">
            {[{ num: '6+', label: 'Heritage Sites' }, { num: '124', label: 'Islands' }, { num: '100+', label: 'Years of History' }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl sm:text-3xl text-white">{stat.num}</div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
