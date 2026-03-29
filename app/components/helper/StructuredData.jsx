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
          'https://www.linkedin.com/in/moinulislam7/',
          'https://dev.to/MoinulIslam7',
          'https://x.com/MoinulIslam77',
          'https://www.facebook.com/MoinulIslamm7/',
          'https://leetcode.com/u/MoinulIslam7/',
          'https://stackoverflow.com/users/22913262/moinulislam7'
        ],
        jobTitle: 'Full Stack Software Developer',
        image: 'https://moinulislam7.github.io/Moinul-Islam.png',
        description: 'Moinul Islam is a professional Full Stack Software Developer specialized in building scalable web applications with Python, JavaScript, React, Next.js, and Node.js. Passionate about problem-solving and modern web aesthetics.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhaka',
          addressCountry: 'Bangladesh'
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Gigalogy'
        }
      })}
    </Script>
  );
}
