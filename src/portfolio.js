const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://joris-lefait.com',
  title: 'JL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joris Lefait',
  role: 'FullStack developper',
  description:
    "I'm Joris, 28yo. I started my career in programming in 2019 after some years working in chemistry. I was first a front-end developer and since few months I started learning back-end development with Node.js, Express.js and PostgreSQL.",
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/joris-lefait-79b7646b/',
    github: 'https://github.com/midayex',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SNCF',
    description:
      "Rework of the front-end of all ter.sncf.fr websites, in React + Next.js with accessibility constraints, and regions specifiations themes. In a team of 10 peoples sometimes in customer's office, most remotly.",
    stack: [
      'TypeScript',
      'React',
      'NextJS',
      'MaterialUI',
      'Storybook',
      'Gitlab',
      'JIRA',
    ],
  },
  {
    name: 'POC Svelte x Algolia x TailwindCSS',
    description:
      'Self training in order to learn some basics of Svelte.js. Development of a quick and basic search engine based on an Algolia sample dataset with TailwindCSS for style.',
    stack: ['Svelte', 'Algolia', 'Tailwind'],
  },
  {
    name: 'Cevoo',
    description:
      'Mobile application entirely dedicated to veterinary auxiliaries. Addition of new features, code update, performance optimization. Implementation of a points system per user according to the actions performed, addition of a duel functionality between users.',
    stack: ['React Native', 'Node.JS', 'PostgreSQL', 'Gitlab', 'Heroku'],
  },
  {
    name: 'POC Shopify webhooks - headless commerce',
    description:
      'Catch part of Shopify requests via webhooks on a webservice in Node.js and Prisma in order to have a database of products, categories and customers. The purpose is to have more freedom than with classic Shopify APIs in a context of Headless project creation on the front-end.',
    stack: ['Node.JS', 'Gitlab'],
  },
  {
    name: 'Unsold',
    description:
      "Update back-end and API's. Migration of some PostgreSQL requests to Prisma requests for performance improvement.",
    stack: ['Node.JS', 'Express', 'Prisma', 'PostgreSQL', 'Gitlab', 'Heroku'],
  },
  {
    name: 'RapidFlyer',
    description:
      'Redesign of the front-end for the V4 of the Website in Next.js in headless commerce. In a team of 10 people directly at the customer. Development of screens and deployment of revenue phases in direct contact with the customer.',
    stack: [
      'React',
      'NextJS',
      'Azure',
      'Redux',
      'Redux Saga',
      'StyledComponent',
    ],
    livePreview: 'https://www.rapid-flyer.com/',
  },
  {
    name: 'Experiencis',
    description:
      'Development of a platform aimed at connecting buyers and individuals in order to carry out remote visits to goods (real estate, automobile, high-tech). In tandem with a technical lead, reinforcement on the Front development part of a Web App in ReactJS.',
    stack: ['React', 'Material Design'],
  },
  {
    name: 'Leroy Merlin',
    description:
      'Intervention as a techOps. Management of the fleet of terminals deployed in France in stores and warehouses via an MDM. Deployment of updates and fixes to terminals. Implementation of analytics feedback to monitor the status of deployments and the status of terminals. Development of a monitoring platform for the solutions deployed by the squad. Deployment of solutions via Docker and Kubernetes. Participation in the Google Cloud Challenge for 3 days in partnership with ADEO, project to port a legacy application to a cloud infrastructure. Benchmark of the various MDMs on the market, consultation with terminal manufacturers for fleet renewal.',
    stack: [
      'Javascript',
      'Python',
      'Shell',
      'Docker',
      'Kubernetes',
      'GCP',
      'Openshift',
    ],
  },
  {
    name: 'SuperCollab',
    description:
      'As part of the creation of a Start-Up, creation of a Web App allowing the connection between different law firms / notaries.',
    stack: ['React', 'Docker'],
    livePreview: 'https://supercollab.fr',
  },
  {
    name: 'NewDeal',
    description:
      'During a partnership between NewDeal and La Mobilery, realization of a mobile application in React Native of an HR management solution (establishment of pay slips, leave requests ...).',
    stack: ['React Native', 'Typescript'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NextJS',
  'Storybook',
  'SASS',
  'Material UI',
  'StyledComponent',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'contact@joris-lefait.com',
}

export { header, about, projects, skills, contact }
