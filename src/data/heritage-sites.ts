export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

export const heritageSites: HeritageSite[] = [
  {
    id: 'hundred-islands',
    name: 'Hundred Islands National Park',
    location: 'Alaminos City',
    description: 'A national park composed of 124 islands and islets spread across the Lingayen Gulf. Famous for island-hopping, snorkeling, and pristine beaches.',
    image: '/images/hundred-islands.jpg',
    category: 'Natural Wonder',
  },
  {
    id: 'bolinao-lighthouse',
    name: 'Cape Bolinao Lighthouse',
    location: 'Bolinao',
    description: 'A century-old lighthouse perched on a hilltop offering panoramic views of the South China Sea and surrounding coastline.',
    image: '/images/bolinao-lighthouse.jpg',
    category: 'Historical Landmark',
  },
  {
    id: 'balungao-hot-spring',
    name: 'Balungao Hot Spring',
    location: 'Balungao',
    description: 'Natural hot spring at the foot of Mt. Balungao, surrounded by lush greenery. Known for its therapeutic sulfuric waters.',
    image: '/images/balungao-hot-spring.jpg',
    category: 'Natural Wonder',
  },
  {
    id: 'manaoag-church',
    name: 'Minor Basilica of Our Lady of Manaoag',
    location: 'Manaoag',
    description: 'A renowned pilgrimage site and minor basilica, drawing devotees from across the Philippines for its miraculous image of the Blessed Virgin Mary.',
    image: '/images/manaoag-church.jpg',
    category: 'Religious Heritage',
  },
  {
    id: 'enchanted-cave',
    name: 'Enchanted Cave',
    location: 'Bolinao',
    description: 'A natural underground cave with crystal-clear cold spring water, perfect for swimming. Surrounded by rock formations and tropical plants.',
    image: '/images/enchanted-cave.jpg',
    category: 'Natural Wonder',
  },
  {
    id: 'tondaligan-beach',
    name: 'Tondaligan Blue Beach',
    location: 'Dagupan City',
    description: 'A popular public beach along the Lingayen Gulf, known for its gray sand and scenic waterfront promenade.',
    image: '/images/tondaligan-beach.jpg',
    category: 'Beach & Coastline',
  },
];
