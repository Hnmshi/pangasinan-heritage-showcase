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
    id: 'patar-beach',
    name: 'Patar Beach',
    location: 'Bolinao',
    description: 'A stunning white-sand beach on the western tip of Bolinao, famous for its dramatic rock formations, turquoise waters, and breathtaking sunsets.',
    image: '/images/patar-beach.jpg',
    category: 'Beach & Coastline',
  },
  {
    id: 'cabongaoan-beach',
    name: 'Cabongaoan Beach',
    location: 'Burgos',
    description: 'A hidden gem known for its jaw-dropping Death Pool — a natural tidal pool perched on a cliff overlooking the sea, plus fine sand and stunning rock formations.',
    image: '/images/cabongaoan-beach.jpg',
    category: 'Beach & Coastline',
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
