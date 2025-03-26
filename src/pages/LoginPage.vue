<template>
	<div class="login">
		<h1 class="login__title">Login</h1>
		<h2 class="login__sub-title">Don't have an account? <router-link to="/signup" class="login__link">Sign up</router-link></h2>
		<LoginForm/>
	</div>
</template>

<script>
import FoodBlock from '@/components/FoodBlock.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
	components: {LoginForm, FoodBlock},

	setup () {

		return {
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		min-height: 100vh;

		&__title {
			font-family: $raleway;
			font-weight: 700;
			font-size: 50px;
			color: $primaryColor;
		}
		&__sub-title {
			margin-top: 15px;
			margin-bottom: 40px;
			font-weight: 400;
			font-size: 20px;
			line-height: 200%;
			color: $thirdColor;
		}
		&__link {
			color: #0094FF;
		}
	}
</style>