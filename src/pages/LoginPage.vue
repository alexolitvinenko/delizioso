<template>
	<div class="login">
		<back-button class="login__back-btn"/>
		<div class="fadeLeft">
			<h1 class="login__title">Login</h1>
			<h2 class="login__sub-title">Don't have an account? <router-link to="/signup" class="login__link">Sign up</router-link></h2>
			<form class="login__form">
				<form-input v-model="email" :type="'email'" :placeholder="'Email address'"/>
				<form-input v-model="password" :type="'password'" :placeholder="'Password'"/>
				<check-button v-model:checked="isRemember" :id="'remember'">Remember me</check-button>
			</form>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		let email = ref('');
		let password = ref('');
		let isRemember = ref(false);

		return {
			email, password, isRemember
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
		&__form {
			display: flex;
			flex-direction: column;
			row-gap: 40px;
		}
		&__back-btn {
			position: absolute;
			top: 40px;
			left: 15px;
		}
	}
	.fadeLeft {
		animation: fadeLeft 1s ease-in-out;
	}

	@keyframes fadeLeft {
		from {
			opacity: 0;
			transform: translateX(-1000px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>