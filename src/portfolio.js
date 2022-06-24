const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://www.joris-lefait.com",
  title: "JL",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Joris Lefait",
  role: "FullStack developer",
  description:
    "I'm Joris. I started my career in programming in 2019 after some years working in chemistry. I was first a front-end developer and then I started learning back-end development with Node.js, Express.js and PostgreSQL. I also work with some Raspberry Pi and am learning basics of cybersecurity.",
  // resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/joris-lefait-79b7646b/",
    github: "https://github.com/midayex",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Chatbot Improvement",
    description:
      "Create an HMI which allow data analyst to rework on some chatbot responses to make it more efficient. In pair with a data scientist, remotly.",
    stack: [
      "React",
      "Python",
      "Uvicorn",
      "FastAPI",
    ],
  },
  {
    name: "SNCF",
    description:
      "Rework of the front-end of all ter.sncf.fr websites, in React + Next.js with accessibility constraints, and regions specifiations themes. In a team of 10 peoples sometimes in customer's office, most remotly.",
    stack: [
      "TypeScript",
      "React",
      "NextJS",
      "MaterialUI",
      "Storybook",
      "Gitlab",
      "JIRA",
    ],
    livePreview: "https://m.ter.sncf.com/hauts-de-france",
  },
  {
    name: "POC Svelte x Algolia x TailwindCSS",
    description:
      "Self training in order to learn some basics of Svelte.js. Development of a quick and basic search engine based on an Algolia sample dataset with TailwindCSS for style.",
    stack: ["Svelte", "Algolia", "Tailwind"],
  },
  {
    name: "Cevoo",
    description:
      "Mobile application entirely dedicated to veterinary auxiliaries. Addition of new features, code update, performance optimization. Implementation of a points system per user according to the actions performed, addition of a duel functionality between users.",
    stack: ["React Native", "Node.JS", "PostgreSQL", "Gitlab", "Heroku"],
  },
  {
    name: "POC Shopify webhooks - headless commerce",
    description:
      "Catch part of Shopify requests via webhooks on a webservice in Node.js and Prisma in order to have a database of products, categories and customers. The purpose is to have more freedom than with classic Shopify APIs in a context of Headless project creation on the front-end.",
    stack: ["Node.JS", "Gitlab"],
  },
  {
    name: "Unsold",
    description:
      "Update back-end and API's. Migration of some PostgreSQL requests to Prisma requests for performance improvement.",
    stack: ["Node.JS", "Express", "Prisma", "PostgreSQL", "Gitlab", "Heroku"],
  },
  {
    name: "RapidFlyer",
    description:
      "Redesign of the front-end for the V4 of the Website in Next.js in headless commerce. In a team of 10 people directly at the customer. Development of screens and deployment of revenue phases in direct contact with the customer.",
    stack: [
      "React",
      "NextJS",
      "Azure",
      "Redux",
      "Redux Saga",
      "StyledComponent",
    ],
    livePreview: "https://www.rapid-flyer.com/",
  },
  {
    name: "Experiencis",
    description:
      "Development of a platform aimed at connecting buyers and individuals in order to carry out remote visits to goods (real estate, automobile, high-tech). In tandem with a technical lead, reinforcement on the Front development part of a Web App in ReactJS.",
    stack: ["React", "Material Design"],
  },
  {
    name: "SuperCollab",
    description:
      "As part of the creation of a Start-Up, creation of a Web App allowing the connection between different law firms / notaries.",
    stack: ["React", "Docker"],
    livePreview: "https://supercollab.fr",
  },
  {
    name: "NewDeal",
    description:
      "During a partnership between NewDeal and La Mobilery, realization of a mobile application in React Native of an HR management solution (establishment of pay slips, leave requests ...).",
    stack: ["React Native", "Typescript"],
  },
  {
    name: "Leroy Merlin",
    description:
      "Intervention as a techOps. Management of the fleet of terminals deployed in France in stores and warehouses via an MDM. Deployment of updates and fixes to terminals. Implementation of analytics feedback to monitor the status of deployments and the status of terminals. Development of a monitoring platform for the solutions deployed by the squad. Deployment of solutions via Docker and Kubernetes. Participation in the Google Cloud Challenge for 3 days in partnership with ADEO, project to port a legacy application to a cloud infrastructure. Benchmark of the various MDMs on the market, consultation with terminal manufacturers for fleet renewal.",
    stack: [
      "Javascript",
      "Python",
      "Shell",
      "Docker",
      "Kubernetes",
      "GCP",
      "Openshift",
    ],
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  { name: "HTML", source: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", source: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    name: "JavaScript",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    source: "https://www.typescriptlang.org/",
  },
  { name: "React", source: "https://reactjs.org/" },
  {
    name: "Redux",
    source: "https://redux.js.org/",
  },
  {
    name: "NextJS",
    source: "https://nextjs.org/",
  },
  {
    name: "Storybook",
    source: "https://storybook.js.org/",
  },
  { name: "SASS", source: "https://sass-lang.com/" },
  {
    name: "MaterialUI",
    source: "https://mui.com/",
  },
  {
    name: "StyledComponents",
    source: "https://styled-components.com/",
  },
  { name: "Git", source: "https://git-scm.com/" },
  { name: "CI/CD", source: "https://docs.gitlab.com/ee/ci/" },
  { name: "Jest", source: "https://jestjs.io/" },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "contact@joris-lefait.com",
};

const docs = [
  {
    name: "Migrate Node x PostgreSQL to Prisma",
    path: "assets/migrate-node-postgresql-to-prisma.pdf",
  },
  {
    name: "Add TailwindCSS to Svelte project",
    path: "assets/add-tailwindcss-to-svelte-project.pdf",
  },
  {
    name: "Homemade npm package",
    path: "assets/homemade-npm-package.pdf",
  },
  {
    name: "Use private npm package",
    path: "assets/use-private-npm-package.pdf",
  },
  {
    name: "Implement Algolia Search",
    path: "assets/implement-algolia-search.pdf",
  },
  {
    name: "Init Node x Express x Prisma project",
    path: "assets/init-node-express-prisma-project.pdf",
  },
];

export { header, about, projects, skills, contact, docs };
