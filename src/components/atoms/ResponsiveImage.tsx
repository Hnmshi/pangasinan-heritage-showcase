'use client';

import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  effect?: 'none' | 'vibrant' | 'warm' | 'cool';
}

export default function ResponsiveImage({ src, alt, width, height, className = '', priority = false, effect = 'vibrant' }: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const fullSrc = `${basePath}${src}`;

  const effectClasses: Record<string, string> = {
    none: '',
    vibrant: 'brightness-105 contrast-105 saturate-110',
    warm: 'brightness-105 contrast-105 saturate-110 sepia-[0.1]',
    cool: 'brightness-105 contrast-110 saturate-105 hue-rotate-[5deg]',
  };

  if (error) {
    return (
      <div className={`bg-primary-100 flex items-center justify-center text-primary-400 ${className}`} role="img" aria-label={alt} style={{ width, height, minHeight: height || 200 }}>
        <div className="text-center p-4">
          <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" /></svg>
          <span className="text-xs">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="absolute inset-0 bg-primary-100 animate-pulse" style={{ minHeight: height || 200 }} />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={fullSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${effectClasses[effect]} ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      />
    </div>
  );
}