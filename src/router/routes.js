
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue') },
      { path: '/about', component: () => import('src/pages/PageAbout.vue') },
      { path: '/archive', component: () => import('src/pages/PageArchive.vue') },
      { path: '/subscibe', component: () => import('src/pages/PageSubscribe.vue') }
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
