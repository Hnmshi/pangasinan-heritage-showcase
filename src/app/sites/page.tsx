import { HeaderNavigation, HeritageGrid } from '@/components/organisms';
import { heritageSites } from '@/data/heritage-sites';

export const metadata = { title: 'Heritage Sites — Pangasinan Heritage Digital Showcase' };

export default function SitesPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <HeritageGrid sites={heritageSites} />
      </main>
    </>
  );
}
