import { HeaderNavigation, HeritageGrid, HeroSection } from '@/components/organisms';
import { Typography } from '@/components/atoms';
import { heritageSites } from '@/data/heritage-sites';

export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <main>
        <HeroSection />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <HeritageGrid sites={heritageSites} />
        </section>
      </main>
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-sm font-bold mx-auto mb-4">P</div>
          <Typography variant="bodySmall" className="!text-neutral-500">&copy; 2025 Pangasinan Heritage Digital Showcase</Typography>
          <Typography variant="caption" className="!text-neutral-600 mt-1 block">Built with Next.js 14 &bull; Atomic Design &bull; Deployed on GitHub Pages</Typography>
        </div>
      </footer>
    </>
  );
}
