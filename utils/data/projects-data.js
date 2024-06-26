import ayla from '/public/png/placeholder.png';
import crefin from '/public/png/placeholder.png';
import realEstate from '/public/png/placeholder.png';
import travel from '/public/png/placeholder.png';

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
        image: ayla,
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
        image: crefin,
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
        image: realEstate,
    },
    {
        id: 4,
        name: 'Scrumo',
        shortDescripton: ['Task Management Revolution: Bulk updates, time tracking, immersive collaboration', 'Personalized profiles, themes, and centralized notifications for oversight.', 'React.js, Redux, Node.js for streamlined team workflows.'],
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: "Express, MongoDB, OpenAI API, AWS SES, AWS S3, Node Mailer, Joi, Puppeteer, EC2, PM2, Nginx",
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
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