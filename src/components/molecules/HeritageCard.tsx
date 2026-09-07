'use client';

import Link from 'next/link';
import { Typography, ResponsiveImage, Icon, Button, ScaleOnHover } from '../atoms';
import type { HeritageSite } from '@/data/heritage-sites';

export default function HeritageCard({ site }: { site: HeritageSite }) {
  return (
    <ScaleOnHover>
      <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full" aria-label={`Heritage site: ${site.name}`}>
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <ResponsiveImage src={site.image} alt={`Photo of ${site.name}`} className="h-full w-full group-hover:scale-110 transition-transform duration-700 ease-out" />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-semibold px-2.5 py-1 rounded-full">{site.category}</span>
        </div>
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <Typography variant="h3" className="text-lg mb-1">{site.name}</Typography>
          <div className="flex items-center gap-1 text-neutral-400 mb-3">
            <Icon name="location" size={16} />
            <Typography variant="caption" as="span">{site.location}</Typography>
          </div>
          <Typography variant="bodySmall" className="mb-4 flex-1 line-clamp-3">{site.description}</Typography>
          <Link href={`/sites/${site.id}/`}>
            <Button variant="outline" size="sm" className="self-start group/btn">
              Explore
              <Icon name="arrow-right" size={16} className="ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </article>
    </ScaleOnHover>
  );
}
