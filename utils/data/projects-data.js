import ayla from '/public/png/placeholder.png';
import crefin from '/public/png/placeholder.png';
import realEstate from '/public/png/placeholder.png';
import travel from '/public/png/placeholder.png';
export const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    role: "Full Stack Developer",
    tools: "Next.js, Tailwind CSS, React, Framer Motion",
    description: "The very website you're looking at right now! Built with Next.js and Tailwind CSS, this portfolio went through 12 design iterations before I finally settled on this one. Features include smooth animations, a dark mode that's easier on the eyes during late-night coding sessions, and just the right amount of developer humor.",
    shortDescripton: [
      "My personal portfolio website",
      "Built with Next.js and Tailwind CSS",
      "Responsive design",
      "Dark mode by default (because developers)"
    ],
    code: "https://github.com/moinulislam7/portfolio",
    demo: "https://moinulislam7.github.io",
    url: "https://moinulislam7.github.io",
    image: {
      src: ayla
    }
  },
  {
    id: 2,
    name: "Task Manager App",
    role: "Full Stack Developer",
    tools: "React, Node.js, Express, MongoDB",
    description: "A task management application that helps you organize your work. Ironically, I built this when I was supposed to be working on another project. Features include task creation, due dates, priority levels, and the inevitable 'Mark all as done' button for those overwhelming days.",
    shortDescripton: [
      "Task management application",
      "User authentication",
      "CRUD operations",
      "Responsive design"
    ],
    code: "https://github.com/moinulislam7/task-manager",
    demo: "https://task-manager-demo.com",
    image: {
      src: crefin
    }
  },
  {
    id: 3,
    name: "E-commerce Platform",
    role: "Frontend Developer",
    tools: "Vue.js, Vuex, Vuetify",
    description: "An e-commerce platform for a local boutique. Learned the hard way that shopping cart logic is more complicated than it looks. Features include product listings, a shopping cart, user reviews, and a checkout process that I swear worked during testing.",
    shortDescripton: [
      "Online shopping platform",
      "Product catalog",
      "Shopping cart functionality",
      "User reviews system"
    ],
    code: "https://github.com/moinulislam7/ecommerce",
    demo: "https://ecommerce-demo.com",
    image: {
      src: realEstate
    }
  },
  {
    id: 4,
    name: "Weather Dashboard",
    role: "Frontend Developer",
    tools: "React, OpenWeather API, Chart.js",
    description: "A weather dashboard that shows current conditions and forecasts. Mostly used to confirm that yes, it's still too hot/cold/rainy outside. Features include location-based weather, 5-day forecast, and charts that make the data look more impressive than it actually is.",
    shortDescripton: [
      "Weather information dashboard",
      "Current conditions",
      "5-day forecast",
      "Interactive charts"
    ],
    code: "https://github.com/moinulislam7/weather-app",
    demo: "https://weather-demo.com",
    image: {
      src: realEstate
    }
  },
  {
    id: 5,
    name: "Blog Platform",
    role: "Full Stack Developer",
    tools: "Next.js, Markdown, Tailwind CSS",
    description: "A platform where I write about things I just learned and pretend to be an expert. Features include markdown support, syntax highlighting, and a comments section that's miraculously free of spam (so far).",
    shortDescripton: [
      "Technical blog platform",
      "Markdown support",
      "Syntax highlighting",
      "Responsive design"
    ],
    code: "https://github.com/moinulislam7/blog",
    demo: "https://moinul-blog.com",
    image: {
      src: realEstate
    }
  },
  {
    id: 6,
    name: "Recipe Finder",
    role: "Full Stack Developer",
    tools: "React, Edamam API, Firebase",
    description: "An application that finds recipes based on ingredients you have. Mostly used to find excuses to order takeout instead. Features include ingredient search, recipe saving, and a 'Surprise me' button that's led to some interesting dinner choices.",
    shortDescripton: [
      "Recipe search application",
      "Ingredient-based search",
      "Favorite recipes",
      "Meal planning"
    ],
    code: "https://github.com/moinulislam7/recipe-finder",
    demo: "https://recipe-demo.com",
    image: {
      src: realEstate
    }
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