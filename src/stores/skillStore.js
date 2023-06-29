import { defineStore } from 'pinia';

export const useSkillStore = defineStore('skillStore', {
  state: () => ({
    list: [
      {
        letra: 'H',
        nombre: 'HTML',
        label: ''
      },
      {
        letra: 'C',
        nombre: 'CSS',
        label: ''
      },
      {
        letra: 'J',
        nombre: 'JAVASCRIPT',
        label: ''
      }
    ],
    frameworks: [
      {
        letra: 'V',
        nombre: 'VueJS 3 y VueJS 2',
        label: 'Vite, Pinia'
      },
      {
        letra: 'R',
        nombre: 'ReactJS',
        label: 'hooks'
      },
      {
        letra: 'N',
        nombre: 'Next JS',
        label: 'Framework ReactJS'
      },
      {
        letra: 'Q',
        nombre: 'QuasarJS 2 y 3 ',
        label: 'Framework VueJS'
      },
      {
        letra: 'B',
        nombre: 'Bootstrap 5',
        label: 'Framework CSS'
      },
      {
        letra: 'M',
        nombre: 'Material UI',
        label: 'Framework CSS'
      },
      {
        letra: 'T',
        nombre: 'Tailwind',
        label: 'Framework CSS'
      },
      {
        letra: 'A',
        nombre: 'AnimateCSS - AnimeJS',
        label: 'animaciones CSS'
      },
    ],
    devTools: [
      {
        letra: 'G',
        nombre: 'Git - Github',
        
      },
      {
        letra: 'V',
        nombre: 'Visual Studio Code',
        
      },
      {
        letra: 'A',
        nombre: 'Android Studio',
        
      },


    ],
    backend: [
      {
        letra: 'N',
        nombre: 'Node JS',
        label: ''
      },
      {
        letra: 'E',
        nombre: 'Express JS ',
        label: 'Framework de NodeJS'
      },

    ],
    backendTools: [
      {
        letra: 'P',
        nombre: 'Postman',
        label: 'Herramienta para testear APIs'
      },
      {
        letra: 'M',
        nombre: 'MongoDB - Mongo Atlas',
        label: 'Base de datos en la nube'
      },
      {
        letra: 'H',
        nombre: 'Heroku',
        label: 'Servicios en la nube'
      }
    ],
    designTools: [
      {
        letra: 'M',
        nombre: 'Miro',
        label: 'Wireframes'
      },
      {
        letra: 'F',
        nombre: 'Figma',
        label: 'Mockups y Prototipos'
      },
      {
        letra: 'P',
        nombre: 'Photoshop',
        label: 'Edición de imágenes'
      },
      {
        letra: 'L',
        nombre: 'Lunacy',
        label: 'Iconos svg/png'
      },
      {
        letra: 'M',
        nombre: 'Movavi Video',
        label: 'Edición de videos'
      },
      {
        letra: 'T',
        nombre: 'Trello',
        label: 'Organización de trabajo'
      }

    ],
    frontEnd: ['HTML','CSS', 'JAVASCRIPT','RESPONSIVE DESIGN','VUE3', 'QUASARJS', 'REACTJS', 'NEXTJS', 'BOOTSTRAP','TAILWIND','ANIMATEJS'],
    backEnd:['NODEJS', 'EXPRESS.JS', 'DATABASE SQL', 'DATABASE NOSQL'],
    cloudSkills: ['AWS', 'MONGO-DB', 'HEROKU'],
    developerTools: ['GITHUB', 'VSCODE', 'POSTMAN', 'ANDROID STUDIO'],
    design:['PHOTOSHOP','FIGMA','MIRO','LUNACY', 'CANVA', 'MOVAVI VIDEO'],
    badges:[
      {name: 'talento digital badge', src:'bootcamp-desarrollo-aplicaciones-front-end-trainee.png', path:'https://www.credly.com/badges/ca6b7d32-3150-4fa0-983e-0ab29b7ec8ea/public_url'},
      {name: 'AWS academy badge', src:'aws-academy-graduate-aws-academy-cloud-foundations.png', path:'https://www.credly.com/badges/7130d6c7-45c2-4f69-8c85-fb75177438c2/public_url'},
      {name: 'AWS cloud quest', src:'aws-cloud-quest-cloud-practitioner.png',path:'https://www.credly.com/badges/d401af24-ec52-44b8-9618-3f5f9af1215a/public_url'},
      {name: 'Certiprof LLL', src:'lifelong-learning.png',path:'https://www.credly.com/badges/c859833f-3721-42d6-bcfb-47e8536db39a/public_url'}
    ]
  }),
  getters: {
  },
  actions: {

  },
});
