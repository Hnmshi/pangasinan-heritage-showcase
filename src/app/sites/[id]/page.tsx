import { notFound } from 'next/navigation';
import { heritageSites } from '@/data/heritage-sites';
import { HeaderNavigation } from '@/components/organisms';
import SiteDetailContent from './SiteDetailContent';

export function generateStaticParams() {
  return heritageSites.map((site) => ({ id: site.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const site = heritageSites.find((s) => s.id === params.id);
  if (!site) return { title: 'Not Found' };
  return { title: `${site.name} — Pangasinan Heritage`, description: site.description };
}

export default function SiteDetailPage({ params }: { params: { id: string } }) {
  const site = heritageSites.find((s) => s.id === params.id);
  if (!site) notFound();
  const otherSites = heritageSites.filter((s) => s.id !== site.id).slice(0, 3);
  return (
    <>
      <HeaderNavigation />
      <SiteDetailContent site={site} otherSites={otherSites} />
    </>
  );
}
