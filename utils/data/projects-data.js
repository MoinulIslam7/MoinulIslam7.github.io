// Projects without a real screenshot leave `image` null — the card falls back to
// its emoji tile, which suits the dark theme better than the stock placeholder art.
import uttoradhikar from '/public/image/uttoradhikar.jpg';
import bhumibdMap from '/public/image/bhumibd-map.jpg';
import bhumibdKhatian from '/public/image/bhumibd-khatian.jpg';
import poshHome from '/public/image/posh-home.jpg';
import poshMarketplace from '/public/image/posh-marketplace.jpg';
import poshVenues from '/public/image/posh-venues.jpg';
import poshPlanner from '/public/image/posh-planner.jpg';
import poshInspirations from '/public/image/posh-inspirations.jpg';
import poshCorporate from '/public/image/posh-corporate.jpg';
import ghorbdHome from '/public/image/ghorbd-home.jpg';
import ghorbdListings from '/public/image/ghorbd-listings.jpg';
import ghorbdMap from '/public/image/ghorbd-map.jpg';
import ghorbdListing from '/public/image/ghorbd-listing.jpg';
import ghorbdLand from '/public/image/ghorbd-land.jpg';
import ghorbdPricing from '/public/image/ghorbd-pricing.jpg';

export const projectsData = [
    {
        id: 9,
        name: 'GhorBD — Rent & Property Listings',
        emoji: '🏠',
        category: 'Property & Rentals',
        summary: 'A website that helps people in Bangladesh find a home to rent or buy, and lets owners advertise their property for free.',
        problem: 'Finding a flat in Dhaka usually means walking the streets looking for "To-Let" signs. GhorBD puts every listing in one place, searchable by area, budget and size.',
        audience: 'Tenants and families looking for a home, and landlords or owners who want to rent out or sell property.',
        contribution: 'I designed and built the whole thing myself: the website people use, the server and database behind it, and putting it online.',
        shortDescripton: ['Bengali-first platform for renting and selling flats, houses, rooms, hotels and land across Bangladesh', 'Search by area, type, bedrooms and budget, with a list view and an interactive map view', 'Free listings for owners, plus Pro/Business plans with invoices, rent reminders and building QR codes'],
        description: 'GhorBD (ঘর বিডি) is a property platform for Bangladesh where tenants find বাসা, ফ্ল্যাট, রুম and hotels to rent and buyers find flats, houses and land for sale, contacting owners directly. The home page search filters by area, property type, bedrooms and a maximum-budget slider, with quick links to popular Dhaka neighbourhoods such as Uttara, Dhanmondi, Bashundhara, Mirpur and Gulshan, and browsing by division.\n\nListings can be explored as cards or on an OpenStreetMap-based map showing each property\'s rent as a pin, alongside filters for type, area, rent range and verified-only. A separate land section covers plot size in কাঠা/বিঘা, road width and dag/khatian details. Posting a listing is free; Pro and Business plans add unlimited listings, verification priority, invoices and PDF receipts, automatic rent reminders, building QR codes, multi-building management and income/expense reports. The site also includes a blog, guides and land-related calculators, with SEO-friendly Bengali URLs and a dark mode.\n\nGhorBD was designed and built entirely by me.',
        tools: "Next.js, React, OpenStreetMap, Leaflet, Tailwind CSS, REST API, SEO, i18n (bn/en)",
        role: 'Full Stack Developer (Solo)',
        code: '',
        demo: 'https://ghorbd.com/',
        image: ghorbdHome,
        gallery: [ghorbdHome, ghorbdListings, ghorbdMap, ghorbdListing, ghorbdLand, ghorbdPricing],
        url: ''
    },
    {
        id: 8,
        name: 'Posh Celebration',
        emoji: '🎉',
        category: 'Event Planning',
        summary: 'An online marketplace for planning birthdays, weddings and office events in Bangladesh. Book decorators, venues, photographers and food all in one place.',
        problem: 'Planning an event usually means calling many vendors one by one. Posh Celebration brings them together, and its AI tools can draft a full event plan from a short description.',
        audience: 'People organising a celebration, companies planning corporate events, and event vendors looking for more customers.',
        contribution: 'I was part of the development team and worked on both the backend (the server and data behind the site) and the frontend (the pages people see and use).',
        shortDescripton: ['Bangladesh\'s first AI-powered celebration marketplace for birthdays, weddings and corporate events', 'Marketplace of decor, venues, people & services and food, with deals, cart and vendor onboarding', 'AI tools: Posh Buddy drafts an event plan from a brief, Posh Planner builds it from templates with EMI payments'],
        description: 'Posh Celebration is an event-planning marketplace based in Dhaka where customers plan birthdays, weddings and corporate events, browse packages and book vendors in one place. The marketplace is organised into Decor & Equipment, Venues, Posh Selection, People & Service and Food & Beverage, with sub-categories such as restaurants, party halls and villas, plus curated "Deals of the week", "Most Selling" and vendor-offer collections and a Real Events inspiration gallery.\n\nTwo AI-powered tools sit on top of the marketplace: Posh Buddy, which turns a short brief about the event into a complete plan, and Posh Planner, which starts from a template, lets users add the services and products they like, and supports smart installments & EMI. A partner programme lets vendors list their services and reach clients across Bangladesh.\n\nI worked on Posh Celebration as part of the team, contributing to both the backend and the frontend.',
        tools: "Laravel, React, Inertia.js, Vite, Tailwind CSS, REST API, AI Integration",
        role: 'Full Stack Developer (Team)',
        code: '',
        demo: 'https://poshcelebration.com/',
        image: poshHome,
        gallery: [poshHome, poshMarketplace, poshVenues, poshPlanner, poshInspirations, poshCorporate],
        url: ''
    },
    {
        id: 5,
        name: 'Uttoradhikar.Org',
        emoji: '🕌',
        category: 'Islamic Inheritance',
        summary: 'A free calculator, in Bangla, that tells each family member their fair share of an inheritance under Islamic law.',
        problem: 'Dividing land, gold and money under Islamic (Faraiz) rules is complicated and often leads to family disputes. This tool does the math instantly and shows it clearly.',
        audience: 'Families in Bangladesh settling an inheritance, and anyone who wants to understand Faraiz rules.',
        contribution: '',
        shortDescripton: ['Islamic inheritance (Faraiz) calculator in Bengali', 'Pick from 25+ heir types — spouse, children, parents, grandparents, siblings, uncles and cousins', 'Splits land (শতাংশ), gold & silver (ভরি) and cash into per-heir Sharia shares', 'Rules guide, markdown blog and legal-advice chat widget, installable as a PWA'],
        description: 'Uttoradhikar.Org is a Bengali-language Islamic inheritance calculator that turns a complex Faraiz calculation into a single form. Users tick the surviving relatives from a list of more than twenty-five heir categories — স্বামী/স্ত্রী, পুত্র/কন্যা, পিতা/মাতা, দাদা/দাদি/নানি, full and half siblings, nephews, uncles and cousins, including predeceased children — enter the estate as land in শতাংশ, gold and silver in ভরি and cash in টাকা, and get each heir\'s exact share back instantly.\n\nThe app is a React + Vite single-page application with a markdown-driven rules (বিধি) section and blog, full Bengali SEO metadata, and PWA support so it works offline. A floating chat widget offers আইনি পরামর্শ (legal guidance) alongside the calculator.',
        tools: "React, Vite, JavaScript, Tailwind CSS, Markdown, PWA (Service Worker), SEO",
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://uttoradhikar.org/',
        image: uttoradhikar,
        url: ''
    },
    {
        id: 1,
        name: 'Discord Bot',
        emoji: '🤖',
        category: 'AI Chatbot',
        summary: 'A chatbot for Discord servers that answers questions with ChatGPT and creates pictures from a text description.',
        problem: 'Lets a Discord community use AI chat and image generation without leaving the app they already use every day.',
        audience: 'Discord communities and the people who run them.',
        contribution: 'I built the backend: connecting Discord to OpenAI and Stable Diffusion, and keeping the bot running on a server.',
        shortDescripton: ['OpenAI (Chatgpt 3.5) integration.', 'Slash Commands', 'Stable Diffusion for Image Generation', 'Enabled seamless interaction within Discord servers'],
        description: "",
        tools: "Express, MongoDB, OpenAI API, AWS SES, AWS S3, Node Mailer, Joi, Puppeteer, EC2, PM2, Nginx",
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: null,
        url: 'https://github.com/MoinulIslam7/discord-bot-with-openai'
    },
    {
        id: 2,
        name: 'Amazon & Indeed web scraping with puppeteer',
        emoji: '🕷️',
        category: 'Data Collection',
        summary: 'A tool that automatically collects product details from Amazon and job posts from Indeed, and saves them as spreadsheet-ready files.',
        problem: 'Copying hundreds of products or job listings by hand takes hours. This tool does it automatically and saves everything as JSON and CSV files.',
        audience: 'Researchers, online sellers and job seekers who need a lot of data quickly.',
        contribution: 'I wrote the scraper with Puppeteer, which drives a real browser to read the pages automatically.',
        shortDescripton: ['Puppeteer scraper for Amazon & Indeed, capturing gaming laptops and job listings from URL', 'Simplicity and adaptability in multi-source scraping', 'Extract all product data saved in JSON & CSV file'],
        description: "",
        tools: "Express, MongoDB, OpenAI API, AWS SES, AWS S3, Node Mailer, Joi, Puppeteer, EC2, PM2, Nginx",
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: null,
        url: 'https://github.com/MoinulIslam7/Amazon-and-Indeed-Web-Scraping-with-Puppeteer'
    },
    {
        id: 3,
        name: 'Coredevs Website',
        emoji: '🌐',
        category: 'Company Website',
        summary: 'A redesigned website for Core Devs, a software company: more modern, faster, and easier to keep up to date.',
        problem: 'The old site needed a fresh look and better performance to attract and keep more visitors.',
        audience: 'Potential clients and visitors learning about Core Devs.',
        contribution: 'I revamped the site and handled its ongoing updates and performance improvements.',
        shortDescripton: ['Revamped Core Devs site with a dynamic UI', 'Managed updates, optimizations for peak performance, and increased traffic alignment'],
        description: '',
        tools: "HTML, CSS, Tailwind, jQuery, ensuring a responsive and dynamic web presence",
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: null,
    },
    {
        id: 4,
        name: 'Scrumo',
        emoji: '📋',
        category: 'Team Productivity',
        summary: 'A task manager that helps teams plan their work, track time and stay on the same page.',
        problem: 'Teams easily lose track of who is doing what. Scrumo keeps tasks, time tracking and notifications in one place.',
        audience: 'Software and project teams.',
        contribution: 'I worked across the app as a full stack developer, using React and Redux for the interface and Node.js for the server.',
        shortDescripton: ['Task Management Revolution: Bulk updates, time tracking, immersive collaboration', 'Personalized profiles, themes, and centralized notifications for oversight.', 'React.js, Redux, Node.js for streamlined team workflows.'],
        description: '',
        tools: "Express, MongoDB, OpenAI API, AWS SES, AWS S3, Node Mailer, Joi, Puppeteer, EC2, PM2, Nginx",
        code: '',
        demo: '',
        image: null,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'BhumiBD — Satellite Map & Land Assistant',
        emoji: '🛰️',
        category: 'Land & Maps',
        summary: 'A satellite map of Bangladesh where you draw around a piece of land and instantly see its size in বিঘা, কাঠা or শতাংশ.',
        problem: 'Measuring land usually needs a surveyor. Here anyone can get a quick estimate on the map, save it as a PDF, and ask land questions to a Bangla AI assistant.',
        audience: 'Landowners, buyers, and anyone who wants to check the size of a plot.',
        contribution: '',
        shortDescripton: ['High-resolution satellite map of Bangladesh, entirely in Bengali', 'Draw points, lines, polygons and rectangles to measure real land area and distance', 'Results in traditional units — শতাংশ, কাঠা, বিঘা — with PDF export', 'Nearby schools & hospitals layer plus a Bengali AI assistant for land questions'],
        description: 'BhumiBD is a free Bengali land-information platform built around a high-resolution satellite map of Bangladesh. The measurement toolkit lets users drop points and draw lines, polygons or rectangles directly on the map to get true land area and distance, converted into the traditional units people actually use — শতাংশ, কাঠা and বিঘা — with undo/redo, a 3D view, switchable layers and one-click PDF export of the drawn plot.\n\nAround the map sit a nearby-places layer for schools and hospitals, and an AI assistant that answers land, inheritance and housing questions in Bengali with suggested prompts such as "খতিয়ান কী?" and "নামজারি কিভাবে করব?". Map data comes from OpenStreetMap and geoBoundaries with khatian/dag records from the Ministry of Land\'s DLRMS. The UI is bilingual (বাংলা/EN) with a flash-free dark/light theme resolved before first paint.',
        tools: "React, Vite, Leaflet, OpenStreetMap, geoBoundaries, GeoJSON, AI Assistant, PDF Export, i18n (bn/en)",
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://bhumi.uttoradhikar.org/',
        image: bhumibdMap,
        url: ''
    },
    {
        id: 7,
        name: 'BhumiBD — Khatian & Dag Search',
        emoji: '📜',
        category: 'Land Records',
        summary: 'Look up Bangladesh land records (khatian and dag) from your browser in a few simple steps.',
        problem: 'Finding a land record usually means a trip to a land office. This search guides you to your area step by step and finds the record by number or owner name.',
        audience: 'Landowners, buyers and lawyers checking property records.',
        contribution: '',
        shortDescripton: ['Search Bangladesh land records straight from the Ministry of Land DLRMS dataset', 'Five-step cascading picker: বিভাগ → জেলা → উপজেলা → জরিপ → মৌজা', 'Look up by khatian number, owner name or dag number across CS, SA, RS and BS surveys', 'Every step is stored in the URL, so any search result is a shareable link'],
        description: 'The Khatian & Dag search module of BhumiBD makes Bangladesh land records searchable from the browser. A guided five-step cascading form narrows the query down through বিভাগ, জেলা, উপজেলা/সার্কেল, জরিপ and মৌজা (JL no.), after which users can search by khatian number, owner name or dag number and compare the same property across CS, SA, RS and BS survey periods.\n\nEvery selection is written into the URL, so a completed search can be copied and shared without the recipient repeating the steps. The results are clearly labelled as preliminary index data rather than certified legal documents, with an in-page notice pointing users to the government portal for certified porcha and stating that BhumiBD is not a government body.',
        tools: "React, Vite, React Router, REST API, DLRMS Data, URL State, Server-side SEO Prerendering",
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://bhumi.uttoradhikar.org/khatian',
        image: bhumibdKhatian,
        url: ''
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     emoji: '',
//     category: '',      // short plain label shown on the card, e.g. 'Event Planning'
//     summary: '',       // one or two plain-language sentences for non-technical visitors
//     problem: '',
//     audience: '',
//     contribution: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },