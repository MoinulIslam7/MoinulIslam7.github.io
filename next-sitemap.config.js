/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://moinulislam7.github.io/',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.9,
    exclude: ['/404', '/500'],
    robotsTxtOptions: {
        sitemaps: [
            'https://moinulislam7.github.io/sitemap.xml',
            'https://moinulislam7.github.io/sitemap-0.xml',
        ],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/.next'],
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 0,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                crawlDelay: 0,
            },
        ],
    },
    additionalPaths: async (config) => {
        const paths = [
            {
                loc: '/',
                changefreq: 'weekly',
                priority: 1.0,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#about',
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#skills',
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#projects',
                changefreq: 'weekly',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#experience',
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#education',
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#blogs',
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            },
            {
                loc: '/#contact',
                changefreq: 'monthly',
                priority: 0.7,
                lastmod: new Date().toISOString(),
            },
        ];
        return paths;
    },
};
