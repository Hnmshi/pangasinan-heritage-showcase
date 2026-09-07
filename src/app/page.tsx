import { HeaderNavigation, HeritageGrid, HeroSection } from '@/components/organisms';
import { Typography } from '@/components/atoms';
import { heritageSites } from '@/data/heritage-sites';

export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <main>
        <HeroSection />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <HeritageGrid sites={heritageSites} />
        </section>
      </main>
      <footer className="bg-neutral-800 text-neutral-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Typography variant="bodySmall" className="!text-neutral-400">&copy; 2025 Pangasinan Heritage Digital Showcase. All rights reserved.</Typography>
        </div>
      </footer>
    </>
  );
}
