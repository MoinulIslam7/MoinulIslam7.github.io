// components/StructuredData.tsx
import Script from 'next/script';

export default function StructuredData() {
  const personData = {
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
    email: 'moinul180180@gmail.com',
    telephone: '+8801626248996',
    description: 'Moinul Islam is a professional Full Stack Software Developer with 3+ years of experience specializing in building scalable web applications. Expert in Python, JavaScript, React, Next.js, Node.js, and modern web technologies.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka',
      postalCode: '1216',
      addressCountry: 'BD',
      streetAddress: 'Mirpur 2'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Gigalogy'
    }
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Moinul Islam Portfolio',
    alternateName: ['Moinul Islam', 'Moinul.dev', 'MoinulIslam7'],
    url: 'https://moinulislam7.github.io/',
    description: 'Professional portfolio of Moinul Islam, Full Stack Software Developer with 3+ years of experience.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://moinulislam7.github.io/'
      }
    }
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Moinul Islam - Full Stack Developer',
    url: 'https://moinulislam7.github.io/',
    telephone: '+8801626248996',
    email: 'moinul180180@gmail.com',
    image: 'https://moinulislam7.github.io/Moinul-Islam.png',
    areaServed: 'Worldwide',
    priceRange: '$$',
    serviceType: ['Web Development', 'Full Stack Development', 'Backend Development', 'Frontend Development'],
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
      'Web Development',
      'Full Stack Development'
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.8103',
      longitude: '90.2506'
    }
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://moinulislam7.github.io/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://moinulislam7.github.io/#about'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: 'https://moinulislam7.github.io/#projects'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Skills',
        item: 'https://moinulislam7.github.io/#skills'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Experience',
        item: 'https://moinulislam7.github.io/#experience'
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: 'https://moinulislam7.github.io/#contact'
      }
    ]
  };

  const creativeWorkData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Full Stack Development Portfolio',
    description: 'A comprehensive portfolio showcasing projects, experience, and technical expertise in Full Stack Development.',
    author: personData,
    datePublished: '2023-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en'
  };

  return (
    <>
      <Script id="ld-json-person" type="application/ld+json">
        {JSON.stringify(personData)}
      </Script>
      <Script id="ld-json-website" type="application/ld+json">
        {JSON.stringify(websiteData)}
      </Script>
      <Script id="ld-json-organization" type="application/ld+json">
        {JSON.stringify(organizationData)}
      </Script>
      <Script id="ld-json-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script>
      <Script id="ld-json-creative-work" type="application/ld+json">
        {JSON.stringify(creativeWorkData)}
      </Script>
    </>
  );
}
