'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography, Icon, ResponsiveImage, FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/atoms';
import type { HeritageSite } from '@/data/heritage-sites';

const siteDetails: Record<string, { highlights: string[]; tips: string[]; bestTime: string; howToGetThere: string }> = {
  'hundred-islands': {
    highlights: ['Island-hopping tours across 124 islands and islets', 'Snorkeling and diving in crystal-clear waters', "Governor's Island — panoramic viewpoint with zipline", 'Quezon Island — white-sand beach with picnic cottages', "Children's Island — shallow, calm waters for families"],
    tips: ['Book boat tours early in the morning for calmer waters', 'Bring reef-safe sunscreen to protect the marine ecosystem', 'Rent snorkeling gear at the Lucap Wharf before departure', 'Weekday visits have fewer crowds and lower cottage prices'],
    bestTime: 'March to May (dry season) for the best weather and clearest waters.',
    howToGetThere: 'From Manila, take a bus to Alaminos City (5-6 hours). Head to Lucap Wharf to register and rent a boat.',
  },
  'bolinao-lighthouse': {
    highlights: ['Panoramic 360° views of the South China Sea', 'Century-old Spanish colonial architecture', 'Stunning sunset viewing spot', 'Nearby Patar Beach with powdery white sand', 'Rich history as a maritime navigation beacon since 1905'],
    tips: ['Visit late afternoon for the best sunset photos', 'Wear comfortable shoes — there is a short uphill walk', 'Combine with a visit to nearby Enchanted Cave', 'Bring water as vendors may not always be available'],
    bestTime: 'November to February for cooler weather and dramatic skies.',
    howToGetThere: 'From Alaminos or Dagupan, take a bus or van to Bolinao town. Hire a tricycle to the lighthouse.',
  },
  'balungao-hot-spring': {
    highlights: ['Natural sulfuric hot springs at the foot of Mt. Balungao', 'Therapeutic warm waters believed to heal skin ailments', 'Lush tropical greenery surrounding the springs', 'Cold spring pool nearby for a refreshing contrast', 'Picnic areas and basic accommodations available'],
    tips: ['Bring extra clothes — you will want to soak', 'Visit on weekdays for a quieter experience', 'The water is naturally warm, no heating needed', 'Combine with a hike up Mt. Balungao for adventure'],
    bestTime: 'Year-round, but the rainy season makes the surrounding greenery more lush.',
    howToGetThere: 'From Dagupan or Urdaneta, take a bus or jeepney to Balungao town. Tricycles are available to the resort.',
  },
  'patar-beach': {
    highlights: ['Pristine white-sand beach with turquoise waters', 'Dramatic rock formations perfect for photos', 'One of the best sunset spots in Pangasinan', 'Nearby Bolinao Falls and Enchanted Cave', 'Quiet and uncrowded compared to mainstream beaches'],
    tips: ['Visit during low tide to explore the rock formations', 'Bring your own food — vendors are limited', 'Best photos during golden hour before sunset', 'Combine with a visit to Cape Bolinao Lighthouse nearby'],
    bestTime: 'March to May for calm seas and sunny skies.',
    howToGetThere: 'From Bolinao town center, hire a tricycle to Patar Beach (about 30 minutes). Roads are paved but winding.',
  },
  'cabongaoan-beach': {
    highlights: ['The famous Death Pool — a natural cliff-side tidal pool', 'Fine white-sand beach with clear waters', 'Dramatic rock formations and sea caves', 'Off-the-beaten-path adventure destination', 'Camping-friendly with beachfront tent areas'],
    tips: ['Wear sturdy shoes for the rocky trail to the Death Pool', 'Visit during low tide for the safest pool access', 'Bring your own supplies — no stores nearby', 'The trail takes about 20 minutes from the beach'],
    bestTime: 'March to May for calm seas and clear weather.',
    howToGetThere: 'From Alaminos City, take a jeepney or van to Burgos town. Hire a tricycle to Cabongaoan Beach (about 15 minutes from town).',
  },
  'tondaligan-beach': {
    highlights: ['Public beach along the scenic Lingayen Gulf', 'Waterfront promenade perfect for evening walks', 'Local seafood restaurants and food stalls nearby', 'Playground and picnic areas for families', "Gateway to Dagupan's famous bangus (milkfish) industry"],
    tips: ['Best visited during late afternoon for the sunset', 'Try the grilled bangus from nearby restaurants', 'The beach is free to enter — a great budget option', 'Parking is available but fills up on weekends'],
    bestTime: 'November to May (dry season) for pleasant beach weather.',
    howToGetThere: 'Tondaligan is in Dagupan City, accessible by tricycle from the city center.',
  },
};

export default function SiteDetailContent({ site, otherSites }: { site: HeritageSite; otherSites: HeritageSite[] }) {
  const details = siteDetails[site.id];
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <ResponsiveImage src={site.image} alt={`${site.name} landscape`} className="h-full w-full" effect="warm" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}><div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 border border-white/10"><div className="w-1.5 h-1.5 bg-accent-400 rounded-full" /><span className="text-xs font-bold uppercase tracking-wider text-white/80">{site.category}</span></div></FadeIn>
            <FadeIn delay={0.3}><h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-3">{site.name}</h1></FadeIn>
            <FadeIn delay={0.4}><div className="flex items-center gap-2 text-white/70"><Icon name="location" size={16} /><span className="text-sm">{site.location}, Pangasinan</span></div></FadeIn>
          </div>
        </div>
      </motion.section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <FadeIn><Link href="/sites/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 text-sm font-semibold mb-8 transition-colors group"><Icon name="arrow-right" size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />Back to all sites</Link></FadeIn>

        <FadeIn delay={0.1}><Typography variant="body" className="text-lg leading-relaxed mb-12">{site.description}</Typography></FadeIn>

        {details && (
          <>
            <FadeIn delay={0.15}><Typography variant="h2" className="mb-6">Highlights</Typography></FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {details.highlights.map((h, i) => (
                <StaggerItem key={i}><div className="flex items-start gap-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-5 border border-primary-100"><div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0"><Icon name="star" size={14} className="text-white" /></div><Typography variant="bodySmall" className="!text-neutral-700">{h}</Typography></div></StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <StaggerItem><div className="bg-accent-50 rounded-2xl p-6 border border-accent-100"><div className="flex items-center gap-2 mb-3"><div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center"><Icon name="star" size={14} className="text-white" /></div><Typography variant="h4" className="!text-accent-700">Best Time to Visit</Typography></div><Typography variant="body" className="!text-accent-800">{details.bestTime}</Typography></div></StaggerItem>
              <StaggerItem><div className="bg-secondary-50 rounded-2xl p-6 border border-secondary-100"><div className="flex items-center gap-2 mb-3"><div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center"><Icon name="location" size={14} className="text-white" /></div><Typography variant="h4" className="!text-secondary-700">How to Get There</Typography></div><Typography variant="body" className="!text-secondary-800">{details.howToGetThere}</Typography></div></StaggerItem>
            </StaggerContainer>

            <FadeIn><Typography variant="h2" className="mb-6">Travel Tips</Typography></FadeIn>
            <StaggerContainer className="space-y-3 mb-16">
              {details.tips.map((tip, i) => (
                <StaggerItem key={i}><div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-5 border border-neutral-100 hover:border-primary-200 transition-colors"><span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-sm">{i + 1}</span><Typography variant="body">{tip}</Typography></div></StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}

        <FadeIn>
          <div className="border-t border-neutral-100 pt-12">
            <Typography variant="overline" className="block mb-2">Continue Exploring</Typography>
            <Typography variant="h2" className="mb-8">More Destinations</Typography>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherSites.map((s) => (
                <StaggerItem key={s.id}>
                  <Link href={`/sites/${s.id}/`}>
                    <ScaleOnHover>
                      <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all border border-neutral-100 hover:border-primary-200">
                        <div className="h-40 overflow-hidden"><ResponsiveImage src={s.image} alt={s.name} className="h-full w-full group-hover:scale-105 transition-transform duration-700" /></div>
                        <div className="p-4">
                          <Typography variant="bodySmall" className="font-semibold !text-neutral-800 line-clamp-1">{s.name}</Typography>
                          <div className="flex items-center gap-1 mt-1.5"><Icon name="location" size={12} className="text-neutral-400" /><Typography variant="caption">{s.location}</Typography></div>
                        </div>
                      </div>
                    </ScaleOnHover>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
