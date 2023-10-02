import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'home',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/HomeView.vue')
        },
        {
            path: '/facebook',
            name: 'facebook',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/Facebook/FacebookView.vue')
        },
        {
            path: '/quan-tri-fanpage-facebook',
            name: 'fanpage-facebook',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/Facebook/FanpageView.vue')
        },
        {
            path: '/quang-cao-intagram',
            name: 'intagram',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/Facebook/IntagramView.vue')
        },
        {
            path: '/follow-tiktok',
            name: 'follow-tiktok',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/Tiktok/FollowTiktokView.vue')
        },
        {
            path: '/xay-dung-kenh-tiktok',
            name: 'xay-dung-kenh-tiktok',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/Tiktok/xaydungkenhView.vue')
        },
        {
            path: '/quang-cao-tiktok',
            name: 'quang-cao-titok',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/Tiktok/quangcao.vue')
        },
        {
            path: '/seo-web',
            name: 'titok',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/web/seoweb.vue')
        },
        {
            path: '/ads-google',
            name: 'ads-google',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/web/googleAdsView.vue')
        },
        {
            path: '/landingpage',
            name: 'landingpage',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/web/LandingPgaeView.vue')
        },

    ]
})

export default router