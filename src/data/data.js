import p3preview from '../assets/images/projectImages/previews/sophiebluel.avif';
import p2preview from '../assets/images/projectImages/previews/booki2.avif';
import p4preview from '../assets/images/projectImages/previews/menumaker.avif';
import p5preview from '../assets/images/projectImages/previews/ninacarducci.avif';
import p6preview from '../assets/images/projectImages/previews/kasa.avif';
import p7preview from '../assets/images/projectImages/previews/p7code.avif';

//p2images
import p2_1 from '../assets/images/projectImages/p2/booki.avif';
import p2_2 from '../assets/images/projectImages/p2/booki3.avif';
import p2_3 from '../assets/images/projectImages/p2/booki4.avif';
//p3images
import p3image1 from '../assets/images/projectImages/p3/sophiebluel2.avif';
import p3image2 from '../assets/images/projectImages/p3/sophiebluel3.avif';
//p4images
import p4_1 from '../assets/images/projectImages/p4/p4_1.avif';
import p4_2 from '../assets/images/projectImages/p4/p4_2.avif';
import p4_3 from '../assets/images/projectImages/p4/p4_3.avif';
import p4_4 from '../assets/images/projectImages/p4/p4_4.avif';
import p4_5 from '../assets/images/projectImages/p4/p4_5.avif';
//p5images
import p5_1 from '../assets/images/projectImages/p5/p5_1.avif';
import p5_2 from '../assets/images/projectImages/p5/p5_2.avif';
import p5_3 from '../assets/images/projectImages/p5/p5_3.avif';
//p6images
import p6_1 from '../assets/images/projectImages/p6/p6_1.avif';
import p6_2 from '../assets/images/projectImages/p6/p6_2.avif';
import p6_3 from '../assets/images/projectImages/p6/p6_3.avif';
//p7images
import p7_1 from '../assets/images/projectImages/p7/p7_1.avif';
import p7_2 from '../assets/images/projectImages/p7/p7_2.avif';
import p7_3 from '../assets/images/projectImages/p7/p7_3.avif';


export const projectsDataEn = [
  {
    title: 'Booki - Holiday Website',
    date: 'August 2023',
    images: [
      {
        image: p2_1,
        alt: 'Preview of the Booki Website'
      },
      {
        image: p2_2,
        alt: 'Booki Mobile Design',
      },
      {
        image: p2_3,
        alt: 'Booki Tablet Design',
      },
    ],
    tags: ['HTML', 'CSS'],
    description: 'A project to display the effects of optimized HTML and responsive CSS Scripts',
    githubLink: 'https://github.com/JulianN96/Open-Classrooms-Project-2'
  },
  {
    title: 'Portfolio for Interior Designer',
    date: 'September 2023',
    images: [
      {
        image: p3preview,
        alt: 'Preview of the Portfolio Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Photo Manager Design',
      },
    ],
    tags: ['Javascript'],
    description: 'A project to implement the javascript functionality of a portfolio website',
    githubLink: 'https://github.com/JulianN96/Open-Classrooms-Project-3'
  },
  {
    title: 'Project Planning for a Menu Maker',
    date: 'September 2023',
    images: [
      {
        image: p4preview,
        alt: 'Preview of the MenuMaker Website'
      },
      {
        image: p4_1,
        alt: 'MenuMaker Client Presentation',
      },
      {
        image: p4_2,
        alt: 'Menu Maker PDF UI',
      },
      {
        image: p4_3,
        alt: 'Menu Maker Modal UI',
      },
      {
        image: p4_4,
        alt: 'Menu Maker Client Login UI',
      },
      {
        image: p4_5,
        alt: 'Menu Maker Project Timeline',
      },
    ],
    tags: ['Project Managment', 'Agile Methodologies'],
    description: 'I was bought on to organise the planning and execution of a dev team to develop a web app',
    githubLink: ''
  },
  {
    title: 'Nina Carducci - Photographer',
    date: 'October 2023',
    images: [
      {
        image: p5preview,
        alt: 'Preview of the Photographer Website'
      },
      {
        image: p5_1,
        alt: 'SEO Report',
      },
      {
        image: p5_2,
        alt: 'Nina Carducci Website Design',
      },
      {
        image: p5_3,
        alt: 'Lighthouse Scores of Website',
      },
    ],
    tags: ['Performance Optimization', 'SEO'],
    description: 'A prebuilt website that needed a little TLC to improve overall performance and SEO visibility',
    githubLink: 'https://github.com/JulianN96/Open-Classrooms-Project-5'
  },
  {
    title: 'Housing Rental Site',
    date: 'October 2023',
    images: [
      {
        image: p6preview,
        alt: 'Preview of the Kasa Website'
      },
      {
        image: p6_1,
        alt: 'Rental property page design',
      },
      {
        image: p6_2,
        alt: 'About page design',
      },
      {
        image: p6_3,
        alt: 'Mobile Preview Design',
      },
    ],
    tags: ['React', 'Sass'],
    description: 'A project to display the power of React and its reusable components rendered in this beautiful rental website',
    githubLink: 'https://github.com/JulianN96/Open-Classrooms-Project-6'
  },
  {
    title: 'Book Review Site',
    date: 'November 2023',
    images: [
      {
        image: p7preview,
        alt: 'Preview of the backend of MVG Website'
      },
      {
        image: p7_1,
        alt: 'Add book webpage preview',
      },
      {
        image: p7_2,
        alt: 'Book browser page preview',
      },
      {
        image: p7_3,
        alt: 'Book info page preview',
      },
    ],
    tags: ['NodeJS', 'Express', 'MongoDB'],
    description: 'With the front-end already built, my task was to build a functional backend for this library where users could submit, save and review their books',
    githubLink: 'https://github.com/JulianN96/Open-Classrooms-Project-7-Backend'
  },
];


export const tagsEn = {
  HTML: ['Clean Code Structure', 'SEO Optimized'],
  CSS: ['Responsive Design', 'UI/UX Design'],
  JS: ['Modular Structure', 'API Integrations', 'User Driven Experiences'],
  React: ['Reusable Components', 'Routing Management', 'Stateful Management'],
  SASS: ['Modular Structure', 'Reusablility of Clean Code', 'Fluid Animations'],
  NodeJS: ['Backend Framework', 'Customizable Server-side Logic', 'MongoDB Setup', 'Secure Applications']
}

export const contactModalEn = {
  "Success": "Success!",
  "Success_Message": "Your message has been sent! I'll get back to you as soon as I can!",
  "Close": "Close",
  "Error": "Error",
  "Error_Message": "Your message couldn't be sent. Please try again!"
}