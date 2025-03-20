<template>
	<div class="nav-bar">
		<div class="nav-bar__body">
			<router-link to="/"><logo/></router-link>
			<div :class="[isShowMobMenu ? 'nav-bar__links fadeOut' : 'nav-bar__links']">
				<router-link v-for="route in myroutes" :key="route.path" class="nav-bar__link" activeClass="nav-bar__link_active" :to="route.path">{{route.meta.label}}</router-link>
			</div>
			<div class="nav-bar__btns">
				<cart-button class="active"/>
				<main-button class="nav-bar__login-btn green" @click="openLogin">Log in</main-button>
				<burger @click="showMobMenu"/>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default {
	setup () {
		const router = useRouter();
		const myroutes = router.getRoutes().filter((r) => r.meta?.label);
		let isShowMobMenu = ref(false);

		return {
			router, myroutes, isShowMobMenu
		}
	},
	methods: {
		showMobMenu() {
			this.isShowMobMenu = ! this.isShowMobMenu;
		},
		openLogin() {
			this.router.push({ path: '/login' })
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';
	
	.nav-bar {
		position: sticky;
		top: 0;
		column-gap: 20px;
		margin-top: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: #fff;

		&__body {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 20px;
		}

		&__link {
			color: $primaryColor;

			&_active {
				color: $secondColor;
			}
		}
		&__btns {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 40px;
		}
	}
	@media screen and (max-width: $laptop) {
		.nav-bar {
			&__links {
				position: absolute;
				top: 52px;
				right: -300px;
				flex-direction: column;
				row-gap: 20px;
				width: 100%;
				max-width: 200px;
				padding-top: 20px;
				padding-bottom: 20px;
				transition: all 0.3s linear;
				opacity: 0;
				background-color: #fff;

				&.fadeOut {
					right: 0;
					opacity: 1;
				}
			}
		}
	}
	@media screen and (max-width: $mobile) {
		.nav-bar {
			&__links {
				max-width: none;
			}
			&__btns {
				column-gap: 20px;
			}
			&__login-btn {
				display: none;
			}
		}
	}
</style>