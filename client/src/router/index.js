import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomePage.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('@/views/AboutPage.vue')
		},
		{
			path: '/training',
			name: 'training',
			component: () => import('@/views/MyTraining.vue')
		},
		{
			path: '/training/:id',
			name: 'video',
			props: true,
			component: () => import('@/views/VideoPage.vue')
		},
		{
			path: '/auth',
			name: 'auth',
			redirect: '/auth/signIn',
			component: () => import('@/views/AuthPage.vue'),
			children: [
				{
					path: 'signIn',
					name: 'login',
					component: () => import('@/views/AuthPage.vue')
				},
				{
					path: 'signUp',
					name: 'register',
					component: () => import('@/views/AuthPage.vue')
				}
			]
		},
		{
			path: '/course/:courseId',
			name: 'course',
			props: true,
			component: () => import('@/views/CoursesDetails.vue')
		}
	]
})


router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0)
	next()
})

export default router
