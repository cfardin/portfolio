// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import supabaseLogo from './assets/tech_logo/supabase.svg'


import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// projects image 
import bookPic from './assets/projects/book.png';
import moviePic from './assets/projects/movie.png';
import keyPic from './assets/projects/key.png';
import redPic from './assets/projects/red.gif';
import studyPic from './assets/projects/studynook.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Supabase', logo: supabaseLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


// projects data
export const projects = [

  {
    title: "Movie Archive",
    description:
      "A movie browsing application built with React that uses The Movie Database API to fetch and display movie information.",
    technologies: [
      "React",
      "React Router",
      "Vite",
      "TMDB API"
    ],
    image: moviePic,
    liveDemo: "https://my-movie-archive.netlify.app/",
    github: "https://github.com/cfardin/movie-archive"
  },

  {
    title: "StudyNook",
    description:
      "A full-stack study room booking platform where users can browse, search, filter, list, and book study rooms with date and time-slot conflict detection.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
      "HeroUI",
      "React Hook Form"
    ],
    image: studyPic,
    liveDemo: "https://studynook-client-vert.vercel.app/",
    github: "https://github.com/cfardin/studynook-client"
  },

  {
    title: "Red Rush",
    description:
      "A Java Swing arcade game where players avoid incoming cars and ambulances, collect points, and compete for a persistent high score.",
    technologies: [
      "Java",
      "Java Swing",
      "OOP",
      "File I/O"
    ],
    image: redPic,
    liveDemo: null,
    github: "https://github.com/cfardin/Red_Rush_Java_OOP_Project"
  },

  {
    title: "Key Reflex",
    description:
      "A browser-based typing and reflex game focused on improving keyboard reaction speed through interactive challenges.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    image: keyPic,
    liveDemo: "https://key-reflex.vercel.app/",
    github: "https://github.com/cfardin/Key-Reflex"
  },


  {
    title: "Book Borrow",
    description:
      "A book borrowing web application built with Next.js and MongoDB, featuring authentication, book management, forms, notifications, and a responsive interface.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
      "DaisyUI"
    ],
    image: bookPic,
    liveDemo: "https://book-borrow-liard.vercel.app/",
    github: "https://github.com/cfardin/book-borrow"
  },

];