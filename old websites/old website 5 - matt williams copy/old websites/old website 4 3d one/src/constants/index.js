import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    laravel,
    html,
    css,
    reactjs,
    php,
    tailwind,
    nodejs,
    postgresql,
    git,
    npm,
    docker,
    miq,
    csusb,
    revature,
    cisco,
    carrent,
    jobit,
    tripguide,
    redis,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "API Integration",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Management",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: php,
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
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "NPM",
      icon: npm,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Intern",
      company_name: "CSUSB",
      icon: csusb,
      iconBg: "#383E56",
      date: "October 2017 - June 2019",
      points: [
        "Developed, maintained, and supported web applications used across campus centers, improving faculty's ability to predict and view student needs.",
        "Collaborating with cross-functional teams including staff members, product managers, and students to create high-quality products.",
        "Expanded knowledge of PHP, MySQL, querying, and MVC framework.",
        "Responsible for creating and maintaining MySQL tables related to web applications.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Revature",
      icon: revature,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - Feb 2020",
      points: [
        "Developed and maintained web applications using JavaScript, Java, REST API, JSON, and SQL.",
        "Improved system security and integrity by implementing advanced login authentication and registration procedures.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Utilized advanced version control systems such as Git to facilitate efficient and collaborative team software development.",
      ],
    },
    {
      title: "Software Enginer",
      company_name: "CISCO",
      icon: cisco,
      iconBg: "#383E56",
      date: "Feb 2020 - Jul 2020",
      points: [
        "Revamped UI design to enhance user experience and visual aesthetics, resulting in heightened client satisfaction.",
        "Successfully executed and validated unit tests for RMA(Product Returns & Replacement) application to ensure flawless implementation and performance.",
        "Collaborated with cross-functional Scrum teams to analyze User Stories and software bugs, develop innovative solutions, and enhance software architecture and performance.",
      ],
    },
    {
      title: "Back End Developer",
      company_name: "MIQ",
      icon: miq,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - Present",
      points: [
        "Developed and utilized Laravel PHP MVC framework proficiently to generate and read EDI files exchanged with U.S. Customs and Border Protection, ensuring seamless e-Commerce operations for Type86 shipments.",
        "Expert in Type86 shipping regulations, enabling tax-free transportation of goods internationally, resulting in substantial cost savings for clients up to hundreds of thousands of dollars on transactions.",
        "Integrated the FlightAware API into the system, resulting in substantial cost savings for clients on transactions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };