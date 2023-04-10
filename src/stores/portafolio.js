import { defineStore } from "pinia"

export const usePortafolioStore = defineStore('portafolioStore', {
    state: ()=> ({
        cards: [
            {
                video: '/app-lista-compras.mp4',
                title: 'App Lista de compras',
                subtitle: 'Aplicación Vue/Android',
                description: 'Aplicación híbrida, realizada con el framework QuasarJS que está basado en VueJS.',
                icons: [
                    {
                        path: 'html5_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'css_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'javascript_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'vue_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
                        size: '40px'
                    },
                    {
                        path: 'https://cordova.apache.org/static/img/cordova_bot.png',
                        size: '40px'
                    },
                    {
                        path: 'android_icon.png',
                        size: '40px'
                    },
                ],
                github: 'https://github.com/dperezch/lista-de-compras-23',
                playstore: 'https://play.google.com/store/apps/details?id=org.dapps.quasar.lista'

            },
            {
                video: '/video-energiza.mp4',
                title: 'App Autoinstruccional',
                subtitle: 'Aplicación Vue/Android',
                description: 'Aplicación para cursos auto-instruccionales para formato tablet, realizada con el framework QuasarJS que está basado en VueJS.',
                icons: [
                    {
                        path: 'html5_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'css_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'javascript_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'vue_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg',
                        size: '40px'
                    },
                    {
                        path: 'https://cordova.apache.org/static/img/cordova_bot.png',
                        size: '40px'
                    },
                    {
                        path: 'android_icon.png',
                        size: '40px'
                    },
                ],
                github: 'https://github.com/dperezch/master-autoinstruccional'

            },
            {
                video: '/todo-react.mp4',
                title: 'Ejercicio TODO',
                subtitle: 'Aplicación React JS',
                description: 'Ejercicio CRUD utilizando React JS y Vite',
                icons: [
                    {
                        path: 'javascript_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'react_icon.png',
                        size: '40px'
                    },
                    {
                        path: 'tailwind_icon.png',
                        size: '40px'
                    },
                ],
                github: 'https://github.com/dperezch/todo-react',
                netlify: 'https://todo-react-1.netlify.app/'

            }
        ]
    }),
    getters: {},
    actions: {}
})