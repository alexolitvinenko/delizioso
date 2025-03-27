<template>
	<div class="auth">
		<back-button class="auth__back-btn"/>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in" appear>
				<component :is="Component" />
			</transition>
		</router-view>
		<FoodBlock :type="type"/>
	</div>
</template>

<script>
import FoodBlock from '@/components/FoodBlock.vue';
import LoginForm from '@/components/LoginForm.vue';
import SignUpForm from '@/components/SignUpForm.vue';
import { useRoute } from 'vue-router';

export default {
	components: {LoginForm, SignUpForm, FoodBlock},

	setup () {
		const route = useRoute();
		const type = route.path.slice(1);

		return {
			type
		}
	},
	watch: {
		$route (to, from) {
			this.type = to.path.slice(1);
		}
	}
}
</script>

<style lang="scss" scoped>
	* {
		transition: all .5s; 
	}
	.fade-enter-active,
	.fade-leave-active {
		opacity: 1;
		transform: translateX(0);
	}

	.fade-leave-to,
	.fade-enter-from {
		opacity: 0;
		transform: translateX(-1000px);
	}
	.auth {
		&__back-btn {
			position: absolute;
			top: 40px;
			left: 15px;
		}
	}
</style>