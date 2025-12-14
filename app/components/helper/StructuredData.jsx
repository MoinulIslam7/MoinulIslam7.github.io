// components/StructuredData.tsx
import Script from 'next/script';

export default function StructuredData() {
  return (
    <Script id="ld-json" type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Moinul Islam',
        url: 'https://moinulislam7.github.io/',
        sameAs: [
          'https://github.com/MoinulIslam7',
          'https://www.linkedin.com/in/MoinulIslam7/',
          'https://dev.to/moinulislam7'
        ],
        jobTitle: 'Software Engineer',
        image: 'https://moinulislam7.github.io/profile.png',
        description: 'Moinul Islam is a full stack software developer with expertise in JavaScript, Vue, React, Node.js, and modern web technologies. With over 3 years of experience, Moinul has worked on various projects, contributing to both frontend and backend development.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'Bangladesh'
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Freelancer'
        }
      })}
    </Script>
  );
}
