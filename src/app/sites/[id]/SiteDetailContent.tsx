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
    howToGetThere: 'From Manila, take a bus to Alaminos City (5-6 hours). Head to Lucap Wharf to register and rent a boat for island-hopping.',
  },
  'bolinao-lighthouse': {
    highlights: ['Panoramic 360° views of the South China Sea', 'Century-old Spanish colonial architecture', 'Stunning sunset viewing spot', 'Nearby Patar Beach with powdery white sand', 'Rich history as a maritime navigation beacon since 1905'],
    tips: ['Visit late afternoon for the best sunset photos', 'Wear comfortable shoes — there is a short uphill walk', 'Combine with a visit to nearby Enchanted Cave', 'Bring water as vendors may not always be available'],
    bestTime: 'November to February for cooler weather and dramatic skies.',
    howToGetThere: 'From Alaminos or Dagupan, take a bus or van to Bolinao town. Hire a tricycle to the lighthouse (about 20 minutes from town center).',
  },
  'balungao-hot-spring': {
    highlights: ['Natural sulfuric hot springs at the foot of Mt. Balungao', 'Therapeutic warm waters believed to heal skin ailments', 'Lush tropical greenery surrounding the springs', 'Cold spring pool nearby for a refreshing contrast', 'Picnic areas and basic accommodations available'],
    tips: ['Bring extra clothes — you will want to soak', 'Visit on weekdays for a quieter experience', 'The water is naturally warm, no heating needed', 'Combine with a hike up Mt. Balungao for adventure'],
    bestTime: 'Year-round, but the rainy season (June-October) makes the surrounding greenery more lush.',
    howToGetThere: 'From Dagupan or Urdaneta, take a bus or jeepney to Balungao town. Tricycles are available to the hot spring resort.',
  },
  'manaoag-church': {
    highlights: ['One of the most visited pilgrimage sites in the Philippines', 'Houses the miraculous ivory image of the Blessed Virgin Mary', 'Beautiful Baroque-style church architecture', 'Religious museum with historical artifacts', 'Vibrant annual fiesta celebrations'],
    tips: ['Visit early morning for a quieter prayer time', 'The church grounds can get very crowded on weekends', 'Dress modestly as this is an active place of worship', 'Try the local delicacies sold by vendors outside the church'],
    bestTime: 'Any time of year. The feast day in April draws the largest crowds.',
    howToGetThere: 'Manaoag is about 20 minutes from Dagupan City. Buses and jeepneys run frequently from Dagupan and Urdaneta.',
  },
  'enchanted-cave': {
    highlights: ['Crystal-clear underground cold spring water', 'Unique rock formations inside the cave', 'Refreshing swimming in natural spring water', 'Tropical garden surroundings', 'Multiple pools with varying depths'],
    tips: ['Bring waterproof bags for your electronics', 'The cave steps can be slippery — wear aqua shoes', 'Arrive early to avoid long queues on weekends', 'Life vests are available for non-swimmers'],
    bestTime: 'March to May when the heat makes the cold spring water most refreshing.',
    howToGetThere: 'Located in Barangay Tara, Bolinao. From Bolinao town center, hire a tricycle (about 15 minutes).',
  },
  'tondaligan-beach': {
    highlights: ['Public beach along the scenic Lingayen Gulf', 'Waterfront promenade perfect for evening walks', 'Local seafood restaurants and food stalls nearby', 'Playground and picnic areas for families', "Gateway to Dagupan's famous bangus (milkfish) industry"],
    tips: ['Best visited during late afternoon for the sunset', 'Try the grilled bangus from nearby restaurants', 'The beach is free to enter — a great budget-friendly option', 'Parking is available but can fill up on weekends'],
    bestTime: 'November to May (dry season) for pleasant beach weather.',
    howToGetThere: 'Tondaligan is in Dagupan City, easily accessible by tricycle from the city center (about 10 minutes).',
  },
};

export default function SiteDetailContent({ site, otherSites }: { site: HeritageSite; otherSites: HeritageSite[] }) {
  const details = siteDetails[site.id];
  return (
    <main>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-primary-800">
        <ResponsiveImage src={site.image} alt={`${site.name} landscape`} effect="warm" className="h-full w-full" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}><span className="inline-block bg-secondary-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">{site.category}</span></FadeIn>
            <FadeIn delay={0.3}><Typography variant="h1" className="!text-white mb-2">{site.name}</Typography></FadeIn>
            <FadeIn delay={0.4}><div className="flex items-center gap-1.5 text-white/80"><Icon name="location" size={18} /><span className="text-sm font-medium">{site.location}, Pangasinan</span></div></FadeIn>
          </div>
        </div>
      </motion.section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <FadeIn><Link href="/sites/" className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-700 text-sm font-medium mb-8 transition-colors"><Icon name="arrow-right" size={16} className="rotate-180" />Back to all sites</Link></FadeIn>

        <FadeIn delay={0.1}><Typography variant="body" className="text-lg leading-relaxed mb-10">{site.description}</Typography></FadeIn>

        {details && (
          <>
            <FadeIn delay={0.15}><Typography variant="h2" className="mb-5">Highlights</Typography></FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {details.highlights.map((h, i) => (
                <StaggerItem key={i}><div className="flex items-start gap-3 bg-primary-50 rounded-lg p-4"><Icon name="star" size={18} className="text-secondary-500 mt-0.5 flex-shrink-0" /><Typography variant="bodySmall" className="!text-neutral-700">{h}</Typography></div></StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <StaggerItem><div className="bg-accent-50 border border-accent-200 rounded-xl p-5"><Typography variant="h4" className="!text-accent-700 mb-2">Best Time to Visit</Typography><Typography variant="body" className="!text-accent-800">{details.bestTime}</Typography></div></StaggerItem>
              <StaggerItem><div className="bg-secondary-50 border border-secondary-200 rounded-xl p-5"><Typography variant="h4" className="!text-secondary-700 mb-2">How to Get There</Typography><Typography variant="body" className="!text-secondary-800">{details.howToGetThere}</Typography></div></StaggerItem>
            </StaggerContainer>

            <FadeIn><Typography variant="h2" className="mb-5">Travel Tips</Typography></FadeIn>
            <StaggerContainer className="space-y-3 mb-12">
              {details.tips.map((tip, i) => (
                <StaggerItem key={i}><div className="flex items-start gap-3 bg-neutral-50 rounded-lg p-4 border border-neutral-200"><span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span><Typography variant="body">{tip}</Typography></div></StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}

        <FadeIn>
          <div className="border-t border-neutral-200 pt-10">
            <Typography variant="h2" className="mb-6">More to Explore</Typography>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherSites.map((s) => (
                <StaggerItem key={s.id}>
                  <Link href={`/sites/${s.id}/`}>
                    <ScaleOnHover>
                      <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-36 overflow-hidden"><ResponsiveImage src={s.image} alt={s.name} className="h-full w-full group-hover:scale-110 transition-transform duration-700" /></div>
                        <div className="p-3">
                          <Typography variant="bodySmall" className="font-semibold !text-neutral-700 line-clamp-1">{s.name}</Typography>
                          <div className="flex items-center gap-1 mt-1"><Icon name="location" size={12} className="text-neutral-400" /><Typography variant="caption">{s.location}</Typography></div>
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
