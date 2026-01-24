import { Metadata } from 'next';
import HomeClient from '../components/HomeClient';

export const metadata: Metadata = {
  title: 'Boom Boom Thailand | Bespoke Travel & Elite Expeditions',
  description: 'Experience luxury travel redefined. Bespoke tours and elite expeditions personally curated by local experts in Thailand. Discover hidden gems with our exclusive scout network.',
  keywords: ['luxury travel Thailand', 'bespoke tours', 'private expeditions', 'luxury retreats', 'exclusive travel agency'],
  authors: [{ name: 'Boom Boom Thailand Team' }],
  metadataBase: new URL('https://boomboomthailand.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Boom Boom Thailand | Bespoke Travel & Elite Expeditions',
    description: 'Bespoke tours and elite expeditions personally curated by local experts in Thailand.',
    url: 'https://boomboomthailand.com',
    siteName: 'Boom Boom Thailand',
    images: [
      {
        url: '/thailand.png',
        width: 1200,
        height: 630,
        alt: 'Boom Boom Thailand Luxury Travel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boom Boom Thailand | Bespoke Travel & Elite Expeditions',
    description: 'Bespoke tours and elite expeditions personally curated by local experts in Thailand.',
    site: '@boomboomthailand',
    creator: '@boomboomthailand',
    images: ['/thailand.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Boom Boom Thailand",
            "image": "https://boomboomthailand.com/thailand.png",
            "url": "https://boomboomthailand.com",
            "telephone": "989-989-9899",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangkok",
              "addressCountry": "TH"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />
      <HomeClient />
    </>
  );
}
