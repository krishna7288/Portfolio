import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    carrent,
    jobit,
    tripguide,
    threejs
  } from "../assets";


 
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const skills = [
    {
      title: "React.js Developer",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Start from Sep 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "I create dynamic web applications,Using components and virtual DOM for efficient rendering.",
        "Building engaging UIs with reusable code, I bring ideas to life.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Node js Developer",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Start from Feb 2023",
      points: [
        "Building robust web applications with Node.js and related technologies, while ensuring scalability and performance optimization.",
        "Leveraging the power of Node.js to create efficient server-side solutions, handling data processing and API integrations.",
        "Implementing RESTful APIs and microservices architecture, ensuring seamless communication between client and server.",
        "Deploying applications using containerization technologies like Docker, ensuring easy scalability and deployment across multiple environments."
      ],
    },
    {
      title: "Django Developer",
      icon: threejs,
      iconBg: "#383E56",
      date: "Start from Jan 2023",
      points: [
        "Developing scalable web applications with Django and related technologies, focusing on robustness and performance optimization.",
        "Leveraging Django's powerful features to build efficient server-side solutions, handling complex data processing and seamless API integrations.",
        "Implementing RESTful APIs and utilizing Django's built-in support for microservices architecture, ensuring efficient client-server communication.",
        "Deploying Django applications using containerization technologies like Docker, enabling easy scalability and streamlined deployment across various environments."
      ],
    },
    {
      title: "Full stack Developer",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Start from June 2023",
      points: [
        
       "As a full stack developer, I excel in developing scalable web applications using a combination of front-end and back-end technologies, ensuring robustness and optimal performance.",
       "I leverage my expertise in both client-side and server-side development to build efficient solutions, handling complex data processing and seamlessly integrating APIs.",
       "Implementing RESTful APIs and adopting microservices architecture, I ensure efficient communication between clients and servers, delivering reliable and responsive applications.",
       "With proficiency in deploying applications using containerization technologies like Docker, I enable easy scalability and streamlined deployment across diverse environments, offering flexibility and efficiency."
      ],
    },
  ];
  
  const education = [
    {
      type:
        "BE Computer Science",
      name: "MAIET,              Pudukkottai.",
      year: "[Aug 2017] – [Aug 2021]",
      grade: "[CGPA – 8.5.]",
       },
    {
      type:
        "HSC",
      name: "SCGR Higher Secondary School, Amaravathipudur.",
      year: "[June 2016] – [May 2017]",
      grade: "[Percentage – 78.4]",
    },
    {
      type:
        "SSLC",
      name: "SCGR Higher Secondary School, Amaravathipudur.",
      year: "[June 2014] – [April 2015]",
      grade: "[Percentage – 89.7]",
    },
  ];
  
  const projects = [
    {
      name: "Job IT",
      description:
        "A job application website connects job seekers with employers, facilitating the process of finding employment opportunities and submitting applications online.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/krishna7288/Dynamic_Developers",
    },
    {
      name: "Weather",
      description:
        "A dynamic weather website providing real-time updates and forecasts for accurate weather information at your fingertips try to use this.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/krishna7288/weatherapp",
    },
    {
      name: "Keeper",
      description:
        "Keeper website: A secure and user-friendly platform for organizing and safeguarding your important information, ensuring peace of mind and easy access to your data.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "npm",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/krishna7288/Keeper",
    },
  ];
  
  export { services, technologies, skills, education, projects };