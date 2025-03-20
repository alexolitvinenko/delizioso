import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import MenuPage from '@/pages/MenuPage.vue'
import OrderPage from '@/pages/OrderPage.vue'
import ReservationPage from '@/pages/ReservationPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/menu',
		name: 'Menu',
		component: MenuPage
	},
	{
		path: '/about',
		name: 'About As',
		component: AboutPage
	},
	{
		path: '/order',
		name: 'Order online',
		component: OrderPage
	},
	{
		path: '/reservation',
		name: 'Reservation',
		component: ReservationPage
	},
	{
		path: '/contact',
		name: 'Contact us',
		component: ContactPage
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router