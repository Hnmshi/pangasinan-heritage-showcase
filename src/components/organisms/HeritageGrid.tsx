'use client';

import { useState, useMemo } from 'react';
import { Typography, StaggerContainer, StaggerItem, FadeIn } from '../atoms';
import { HeritageCard, SearchForm } from '../molecules';
import type { HeritageSite } from '@/data/heritage-sites';

export default function HeritageGrid({ sites }: { sites: HeritageSite[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    if (!query) return sites;
    const q = query.toLowerCase();
    return sites.filter((s) => s.name.toLowerCase().includes(q) || s.location.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
  }, [sites, query]);

  return (
    <section aria-label="Heritage sites gallery" className="w-full">
      <FadeIn>
        <div className="text-center mb-12">
          <Typography variant="overline" className="block mb-3">Featured Destinations</Typography>
          <Typography variant="h2" className="mb-4">Explore Our Heritage Sites</Typography>
          <Typography variant="body" className="max-w-2xl mx-auto mb-8">Discover the natural wonders, historical landmarks, and cultural treasures that make Pangasinan a must-visit destination.</Typography>
          <div className="flex justify-center">
            <SearchForm onSearch={setQuery} />
          </div>
        </div>
      </FadeIn>
      {filtered.length === 0 ? (
        <div className="text-center py-16"><Typography variant="body" className="text-neutral-400">No heritage sites match your search. Try a different term.</Typography></div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((site) => <StaggerItem key={site.id}><HeritageCard site={site} /></StaggerItem>)}
        </StaggerContainer>
      )}
    </section>
  );
}
