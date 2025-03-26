import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import MenuPage from '@/pages/MenuPage.vue'
import OrderPage from '@/pages/OrderPage.vue'
import ReservationPage from '@/pages/ReservationPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUpPage from '@/pages/SignUpPage.vue'
import LoginAndSignUpPage from '@/pages/LoginAndSignUpPage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
		meta: {
			label: 'Home'
		},
	},
	{
		path: '/menu',
		name: 'menu',
		component: MenuPage,
		meta: {
			label: 'Menu'
		},
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage,
		meta: {
			label: 'About As'
		},
	},
	{
		path: '/order',
		name: 'order',
		component: OrderPage,
		meta: {
			label: 'Order online'
		},
	},
	{
		path: '/reservation',
		name: 'reservation',
		component: ReservationPage,
		meta: {
			label: 'Reservation'
		},
	},
	{
		path: '/contact',
		name: 'contact',
		component: ContactPage,
		meta: {
			label: 'Contact us'
		},
	},
	{
		path: '/auth',
		name: 'auth',
		component: LoginAndSignUpPage,
		children: [
			{
				path: '/login',
				name: 'login',
				component: LoginPage,
			},
			{
				path: '/signup',
				name: 'signup',
				component: SignUpPage,
			}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router