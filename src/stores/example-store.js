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
        letra: 'V3',
        nombre: 'VUE 3',
        label: ''
      },
      {
        letra: 'V2',
        nombre: 'VUE 2',
        label: ''
      },
      {
        letra: 'Q',
        nombre: 'QuasarJS 2 y 3 ',
        label: 'Framework basado en VueJS'
      }
    ],
    devTools: [
      {
        letra: 'B',
        nombre: 'Bootstrap 5',
        label: 'Framework CSS'
      },
      {
        letra: 'A',
        nombre: 'AnimateCSS - AnimeJS',
        label: 'Bibliotecas de animaciones CSS'
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

    ]
  }),
  getters: {
  },
  actions: {

  },
});
