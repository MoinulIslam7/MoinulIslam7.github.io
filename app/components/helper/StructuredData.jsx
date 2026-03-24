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
          'https://www.linkedin.com/in/moinul-islam7/',
          'https://dev.to/moinulislam7',
          'https://x.com/MoinulI7',
          'https://www.facebook.com/mnl1122/',
          'https://leetcode.com/u/MoinulIslam7/',
          'https://stackoverflow.com/users/22913262/moinul-islam'
        ],
        jobTitle: 'Software Engineer',
        image: 'https://moinulislam7.github.io/profile.png',
        description: 'Moinul Islam is a dedicated Full Stack Software Developer specialized in building scalable web applications with JavaScript, React, Next.js, and Node.js. Passionate about problem-solving and modern web aesthetics.',
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
