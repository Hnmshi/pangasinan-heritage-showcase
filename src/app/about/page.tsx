'use client';

import { HeaderNavigation } from '@/components/organisms';
import { Typography, FadeIn } from '@/components/atoms';

export default function AboutPage() {
  return (
    <>
      <HeaderNavigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <FadeIn><Typography variant="overline" className="mb-4 block">About the Project</Typography><Typography variant="h1" className="mb-6">Preserving Pangasinan&apos;s Heritage</Typography></FadeIn>
        <FadeIn delay={0.15}><Typography variant="body" className="mb-4">The Pangasinan Heritage Digital Showcase is a digital initiative by the Pangasinan Provincial Tourism Office to promote cultural awareness and tourism for the province&apos;s most iconic heritage sites.</Typography></FadeIn>
        <FadeIn delay={0.25}><Typography variant="body" className="mb-4">From the world-renowned Hundred Islands National Park in Alaminos City to the historic Cape Bolinao Lighthouse and the therapeutic hot springs of Balungao, Pangasinan is home to a rich tapestry of natural wonders, historical landmarks, and cultural treasures.</Typography></FadeIn>
        <FadeIn delay={0.3}><Typography variant="h2" className="mt-10 mb-4">Our Mission</Typography><Typography variant="body" className="mb-4">This platform aims to make information about Pangasinan&apos;s heritage sites accessible to everyone — including users on limited mobile data connections. We believe that cultural preservation begins with awareness, and digital access is key to reaching a wider audience.</Typography></FadeIn>
        <FadeIn delay={0.4}><Typography variant="h2" className="mt-10 mb-4">Built With</Typography><Typography variant="body" className="mb-4">This showcase is built using React with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The component architecture follows Brad Frost&apos;s Atomic Design methodology for maintainability and reusability. The platform is designed to meet WCAG 2.1 AA accessibility standards.</Typography></FadeIn>
      </main>
    </>
  );
}
