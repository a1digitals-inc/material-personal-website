import defaultprofilepic from "../assets/images/defaultprofilepic.jfif";
import * as portfolioTypes from "../components/Cards/constants";

export const personalData = {
  greeting: "Hi, I'm",
  name: "Dyarlen Iber",
  description:
    "I'm a Full-Stack developer with professional experience working with PHP, Laravel, JavaScript, Node.js, SQL, React and Go. Take a look at my work or get in touch!",
  email: "dyarlen1@gmail.com",
  profilePicture: defaultprofilepic,
  socialMedias: [
    {
      name: "github",
      url: "https://github.com/dyarleniber",
    },
    {
      name: "linkedin",
      url: "https://ie.linkedin.com/in/dyarleniber",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/dyarleniber/",
    },
    {
      name: "dev",
      url: "https://dev.to/dyarleniber",
    },
  ],
};

export const menuItems = [
  {
    to: "/",
    primary: "Home",
  },
  {
    to: "/portfolio",
    primary: "Portfolio",
  },
];

export const portfolioData = {
  title: "Portfolio",
  description:
    "All my projects are covered by automated tests and deployed on platforms such as GitHub Pages or Netlify. For more details about the source code, automated tests, CI/CD workflow and technologies used, please visit the github page of each project.",
};

const frontEndPortfolio = [
  {
    id: 101,
    name: "Personal website",
    description:
      "💻 Personal website using JavaScript, React, Hooks, Material-UI and Jest.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: ["JavaScript", "React", "Hooks", "Material-UI", "Jest"],
    homepage: "https://dyarleniber.com",
    github: "https://github.com/dyarleniber/personal-website",
  },
  {
    id: 102,
    name: "New York Times movie reviews",
    description:
      "🎥 Application for search New York Times movie reviews and get movie critics using JavaScript, React, Redux, Hooks, redux-saga, styled-components and Jest.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Hooks",
      "redux-saga",
      "styled-components",
      "Jest",
    ],
    homepage: "https://dyarleniber.github.io/nyt-movie-reviews/",
    github: "https://github.com/dyarleniber/nyt-movie-reviews",
  },
  {
    id: 103,
    name: "Habit tracker front-end",
    description:
      "Habit tracker front-end system using Javascript, React, Redux, React hooks, redux-saga and styled-components.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: [
      "React",
      "Redux",
      "Hooks",
      "redux-saga",
      "styled-components",
    ],
    homepage: null,
    github: "https://github.com/dyarleniber/habit-tracker-front-end",
  },
  {
    id: 104,
    name: "React to-do list",
    description:
      "📋 to-do list using JavaScript, React, Redux, Hooks, Bootstrap and Jest.",
    type: portfolioTypes.FRONTEND_TYPE,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Hooks",
      "Bootstrap",
      "Jest",
    ],
    homepage: "https://dyarleniber.github.io/react-to-do-list/",
    github: "https://github.com/dyarleniber/react-to-do-list",
  },
];

const backEndPortfolio = [
  {
    id: 201,
    name: "Habit tracker back-end",
    description:
      "Habit tracker back-end system using Javascript, Node.js, Express, JWT, MongoDB, Mongoose, Nodemailer, Handlebars, Redis, Winston and Jest with 100% code coverage in tests.",
    type: portfolioTypes.BACKEND_TYPE,
    technologies: ["Node.js", "Express", "JWT", "MongoDB", "Redis", "Jest"],
    homepage: null,
    github: "https://github.com/dyarleniber/habit-tracker-back-end",
  },
  {
    id: 202,
    name: "Payment API",
    description: "Payment gateway API.",
    type: portfolioTypes.BACKEND_TYPE,
    technologies: ["PHP"],
    homepage: null,
    github: "https://github.com/dyarleniber/php-payment-api",
  },
  {
    id: 203,
    name: "PHP Docker environment",
    description: "PHP and MySQL environment with Docker and Docker Compose.",
    type: portfolioTypes.BACKEND_TYPE,
    technologies: ["PHP", "MySQL", "Docker"],
    homepage: null,
    github: "https://github.com/dyarleniber/docker-php",
  },
  {
    id: 204,
    name: "Awesome Fizzbuzz",
    description:
      "This project was developed applying the Chain of Responsibility Pattern and the Builder Pattern to develop FizzBuzz.",
    type: portfolioTypes.BACKEND_TYPE,
    technologies: ["PHP", "Docker"],
    homepage: null,
    github: "https://github.com/dyarleniber/awesome-fizzbuzz",
  },
];

export const portfolio = [...backEndPortfolio, ...frontEndPortfolio];
