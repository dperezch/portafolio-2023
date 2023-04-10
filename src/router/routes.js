
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/AboutMePage.vue') },
      { path: '/skills', component: () => import('pages/SkillsPage.vue') },
      { path: '/works', component: () => import('pages/WorksPage.vue') },
      { path: '/contact', component: () => import('src/pages/PortafolioPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
