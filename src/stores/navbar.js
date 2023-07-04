import {defineStore} from 'pinia';

export const useNavbarStore = defineStore('navbarStore',{
    state: () => ({
        links: [
            {name: 'home', href: '#', icon:'fas fa-house'},
            {name: 'habilidades', href: '#skills', icon:'fas fa-code'},
            {name: 'portafolio', href: '#contact', icon:'fas fa-briefcase'},
            {name: 'acerca de mi', href: '#about', icon:'fas fa-address-card'},
            {name: 'curriculo', href: '#works', icon:'fas fa-file-lines'},
        ]
    }),
    getters: {},
    actions: {}
});