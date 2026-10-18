// components/StructuredData.jsx
// Rendered as plain <script> tags so the JSON-LD is in the static HTML
// (next/script injects it client-side, which crawlers may not see).

const SITE_URL = 'https://moinulislam7.github.io/';

export default function StructuredData() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: 'Moinul Islam',
    alternateName: 'MoinulIslam7',
    url: SITE_URL,
    image: `${SITE_URL}Moinul-Islam.jpg`,
    jobTitle: 'Full Stack Software Developer',
    description: 'Moinul Islam is a Full Stack Software Developer at Gigalogy with 3+ years of experience building scalable web applications with Python, JavaScript, React, Next.js and Node.js. Based in Dhaka, Bangladesh.',
    email: 'mailto:moinul180180@gmail.com',
    telephone: '+8801626248996',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka',
      postalCode: '1216',
      addressCountry: 'BD',
      streetAddress: 'Mirpur 12'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Gigalogy'
    },
    knowsAbout: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'REST APIs',
      'Full Stack Development'
    ],
    sameAs: [
      'https://github.com/MoinulIslam7',
      'https://www.linkedin.com/in/moinulislam7/',
      'https://dev.to/MoinulIslam7',
      'https://x.com/MoinulIslam77',
      'https://www.facebook.com/MoinulIslamm7/',
      'https://leetcode.com/u/MoinulIslam7/',
      'https://stackoverflow.com/users/22913262/moinulislam7'
    ]
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: 'Moinul Islam',
    alternateName: ['Moinul Islam Portfolio', 'MoinulIslam7'],
    url: SITE_URL,
    description: 'Portfolio of Moinul Islam, Full Stack Software Developer based in Dhaka, Bangladesh.',
    inLanguage: 'en',
    author: { '@id': `${SITE_URL}#person` },
    publisher: { '@id': `${SITE_URL}#person` }
  };

  const profilePageData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}#profile`,
    url: SITE_URL,
    name: 'Moinul Islam - Full Stack Developer',
    isPartOf: { '@id': `${SITE_URL}#website` },
    mainEntity: { '@id': `${SITE_URL}#person` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}og-image.jpg`,
      width: 1200,
      height: 630
    },
    image: `${SITE_URL}og-image.jpg`,
    dateModified: new Date().toISOString()
  };

  return (
    <>
      {[personData, websiteData, profilePageData].map((data) => (
        <script
          key={data['@id']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
