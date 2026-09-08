'use client';

import Link from 'next/link';
import { Typography, ResponsiveImage, Icon, ScaleOnHover } from '../atoms';
import type { HeritageSite } from '@/data/heritage-sites';

export default function HeritageCard({ site }: { site: HeritageSite }) {
  return (
    <ScaleOnHover>
      <Link href={`/sites/${site.id}/`}>
        <article className="group relative bg-white rounded-3xl overflow-hidden h-full border border-neutral-100 hover:border-primary-200 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10" aria-label={`Heritage site: ${site.name}`}>
          {/* Image with overlay */}
          <div className="relative h-52 sm:h-60 overflow-hidden">
            <ResponsiveImage src={site.image} alt={`Photo of ${site.name}`} effect="vibrant" className="h-full w-full group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Floating category pill */}
            <div className="absolute top-4 right-4">
              <span className="glass text-primary-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{site.category}</span>
            </div>
            {/* Location badge - appears on hover */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
              <Icon name="location" size={14} />
              <span className="text-xs font-medium">{site.location}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <Typography variant="h3" className="!text-lg mb-2 group-hover:text-primary-600 transition-colors duration-300">{site.name}</Typography>
            <Typography variant="bodySmall" className="line-clamp-2 mb-4">{site.description}</Typography>

            {/* Explore link */}
            <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              <span>Explore</span>
              <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </article>
      </Link>
    </ScaleOnHover>
  );
}
