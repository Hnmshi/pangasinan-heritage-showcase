'use client';

import { useState, FormEvent } from 'react';
import { Icon } from '../atoms';

export default function SearchForm({ onSearch, placeholder = 'Search heritage sites...' }: { onSearch: (q: string) => void; placeholder?: string }) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); onSearch(query.trim()); };

  return (
    <form onSubmit={handleSubmit} role="search" aria-label="Search heritage sites" className="relative w-full max-w-md">
      <label htmlFor="heritage-search" className="sr-only">Search heritage sites</label>
      <input id="heritage-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} className="w-full pl-4 pr-12 py-3 rounded-lg border border-neutral-300 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors text-sm sm:text-base" />
      <button type="submit" aria-label="Submit search" className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 text-primary-500 hover:bg-primary-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300">
        <Icon name="search" size={20} />
      </button>
    </form>
  );
}
