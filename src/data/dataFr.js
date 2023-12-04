import p3image1 from '../assets/images/projectImages/p3/sophiebluel2.png';
import p3image2 from '../assets/images/projectImages/p3/sophiebluel3.png';
import p3preview from '../assets/images/projectImages/previews/sophiebluel.png';
import p2preview from '../assets/images/projectImages/previews/booki2.png';
import p4preview from '../assets/images/projectImages/previews/menumaker.png';
import p5preview from '../assets/images/projectImages/previews/ninacarducci.png';
import p6preview from '../assets/images/projectImages/previews/kasa.png';
import p7preview from '../assets/images/projectImages/previews/p7code.png';
import { useTranslation } from 'react-i18next';

// const { t } = useTranslation();

export const projectsDataFr = [
  {
    title: 'Booki - Site de Vacances',
    date: 'Aout 2023',
    images: [
      {
        image: p2preview,
        alt: 'Apercu de Booki Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Login Design',
      },
    ],
    tags: ['HTML', 'CSS'],
    description: "Un projet pour montrer l'éfficacité d'un code HTML et CSS Optimizé et moderne"
  },
  {
    title: 'Portfolio pour Designer Architecte',
    date: 'September 2023',
    images: [
      {
        image: p3preview,
        alt: 'Apercu de  Portfolio Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Login Design',
      },
    ],
    tags: ['Javascript'],
    description: 'Un projet poiur créer la structure javascript pour un portfolio.'
  },
  {
    title: 'Plannification de projet pour un Menu Maker',
    date: 'Septembre 2023',
    images: [
      {
        image: p4preview,
        alt: 'Apercu de MenuMaker Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Login Design',
      },
    ],
    tags: ['Managment de Projet', 'Methodologies Agile'],
    description: "J'ai organisé le planning et execution d'une équipe de developpeurs pour la creation d'un web app"
  },
  {
    title: 'Nina Carducci - Photographe',
    date: 'Octobre 2023',
    images: [
      {
        image: p5preview,
        alt: 'Preview of the Photographer Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Login Design',
      },
    ],
    tags: ['Performance Optimization', 'SEO'],
    description: "Un site de photographe deja crée avais besoin d'une optimization de performance et visibilité"
  },
  {
    title: 'Kasa - Site de location',
    date: 'Octobre 2023',
    images: [
      {
        image: p6preview,
        alt: 'Preview of the Kasa Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Login Design',
      },
    ],
    tags: ['React', 'Sass'],
    description: 'Un projet pour démontrer la puissance de React et ses composant réutilisables sur ce site magnifique'
  },
  {
    title: 'Mon Vieux Grimoire',
    date: 'Novembre 2023',
    images: [
      {
        image: p7preview,
        alt: 'Preview of the backend of MVG Website'
      },
      {
        image: p3image1,
        alt: 'Sophie Bluel Website Login Design',
      },
      {
        image: p3image2,
        alt: 'Sophie Bluel Website Login Design',
      },
    ],
    tags: ['NodeJS', 'Express', 'MongoDB'],
    description: 'Avec un Front déja construit, ma mission était de monter un système back-end pour le site.'
  },
];
