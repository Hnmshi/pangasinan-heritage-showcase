'use client';

import Link from 'next/link';
import { Typography, Button, Icon, FadeIn } from '../atoms';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-20 sm:py-28 lg:py-36 px-4 overflow-hidden" aria-label="Welcome banner">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn delay={0.1} direction="none"><Typography variant="overline" className="!text-primary-200 mb-4 block">Explore the Province of Pangasinan</Typography></FadeIn>
        <FadeIn delay={0.2}><Typography variant="h1" className="!text-white mb-6">Discover Our Heritage</Typography></FadeIn>
        <FadeIn delay={0.35}><Typography variant="body" className="!text-primary-100 max-w-2xl mx-auto mb-8 text-lg">From the breathtaking Hundred Islands to the historic Cape Bolinao Lighthouse, experience the rich cultural and natural heritage of Pangasinan.</Typography></FadeIn>
        <FadeIn delay={0.5}><Link href="/sites/"><Button variant="secondary" size="lg">Start Exploring<Icon name="arrow-right" size={20} className="ml-2" /></Button></Link></FadeIn>
      </div>
    </section>
  );
}
