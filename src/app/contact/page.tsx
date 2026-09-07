'use client';

import { useState, FormEvent } from 'react';
import { HeaderNavigation } from '@/components/organisms';
import { Typography, Button, Icon, FadeIn } from '@/components/atoms';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <HeaderNavigation />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <FadeIn>
          <Typography variant="overline" className="mb-4 block">Get in Touch</Typography>
          <Typography variant="h1" className="mb-3">Contact Us</Typography>
          <Typography variant="body" className="mb-8">Have questions about Pangasinan&apos;s heritage sites or this platform? We&apos;d love to hear from you.</Typography>
        </FadeIn>
        <FadeIn delay={0.2}>
          {submitted ? (
            <div className="bg-accent-50 border border-accent-200 rounded-lg p-6 text-center">
              <Typography variant="h3" className="mb-2 !text-accent-700">Thank you!</Typography>
              <Typography variant="body">Your message has been received. We&apos;ll get back to you soon.</Typography>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                <input id="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors text-sm sm:text-base" placeholder="Luis Paolo Hong" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                <input id="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors text-sm sm:text-base" placeholder="luwes@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors text-sm sm:text-base resize-y" placeholder="Your message..." />
              </div>
              <Button type="submit" size="lg">Send Message<Icon name="arrow-right" size={18} className="ml-2" /></Button>
            </form>
          )}
        </FadeIn>
      </main>
    </>
  );
}
