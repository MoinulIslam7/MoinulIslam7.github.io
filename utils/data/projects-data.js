// Projects without a real screenshot leave `image` null — the card falls back to
// its emoji tile, which suits the dark theme better than the stock placeholder art.
import uttoradhikar from '/public/image/uttoradhikar.jpg';
import bhumibdMap from '/public/image/bhumibd-map.jpg';
import bhumibdKhatian from '/public/image/bhumibd-khatian.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Discord Bot',
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
        shortDescripton: ['Revamped Core Devs site with a dynamic UI', 'Managed updates, optimizations for peak performance, and increased traffic alignment', 'This is description 3'],
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. To develop the API, we used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose. For the UI, we utilized NextJS, Formik, TailwindCSS, and other npm libraries. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: "HTML, CSS, Tailwind, jQuery, ensuring a responsive and dynamic web presence",
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: null,
    },
    {
        id: 4,
        name: 'Scrumo',
        shortDescripton: ['Task Management Revolution: Bulk updates, time tracking, immersive collaboration', 'Personalized profiles, themes, and centralized notifications for oversight.', 'React.js, Redux, Node.js for streamlined team workflows.'],
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: "Express, MongoDB, OpenAI API, AWS SES, AWS S3, Node Mailer, Joi, Puppeteer, EC2, PM2, Nginx",
        code: '',
        demo: '',
        image: null,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Uttoradhikar.Org',
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
        id: 6,
        name: 'BhumiBD — Satellite Map & Land Assistant',
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
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },