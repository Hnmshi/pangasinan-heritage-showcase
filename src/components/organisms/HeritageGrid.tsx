'use client';

import { useState, useMemo } from 'react';
import { Typography, StaggerContainer, StaggerItem } from '../atoms';
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <Typography variant="h2">Discover Pangasinan</Typography>
        <SearchForm onSearch={setQuery} />
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-16"><Typography variant="body" className="text-neutral-400">No heritage sites match your search. Try a different term.</Typography></div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((site) => <StaggerItem key={site.id}><HeritageCard site={site} /></StaggerItem>)}
        </StaggerContainer>
      )}
    </section>
  );
}
