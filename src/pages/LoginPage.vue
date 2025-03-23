<template>
	<div class="login">
		<back-button class="login__back-btn"/>
		<div class="fadeLeft">
			<h1 class="login__title">Login</h1>
			<h2 class="login__sub-title">Don't have an account? <router-link to="/signup" class="login__link">Sign up</router-link></h2>
			<form class="login__form" method="post">
				<form-input v-model="email" :type="'email'" :placeholder="'Email address'"/>
				<form-input v-model="password" :type="'password'" :placeholder="'Password'"/>
				<check-button v-model:checked="isRemember" :id="'remember'">Remember me</check-button>
				<submit-button>Log in</submit-button>
			</form>
		</div>
		<div class="login__right-images">
			<div class="login__food-circle"></div>
			<img class="login__food-img" :src="require('@/assets/img/login-food.png')" alt="">
			<img class="login__food-leaf-img login__food-leaf-img_1" :src="require('@/assets/img/login-food-leaf-1.png')" alt="">
			<img class="login__food-leaf-img login__food-leaf-img_2" :src="require('@/assets/img/login-food-leaf-2.png')" alt="">
			<img class="login__food-leaf-img login__food-leaf-img_3" :src="require('@/assets/img/login-food-leaf-3.png')" alt="">
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
		&__right-images {
			position: absolute;
			top: 60px;
			right: -150px;
		}
		&__food-circle {
			position: absolute;
			top: 50%;
    		left: 50%;
			display: block;
			width: calc(100% + 60px * 4);
			height: calc(100% + 60px * 4);
   			transform: translate(-50%, -50%);
			background-color: $secondColorOpacity;
			border-radius: 100%;
			z-index: 0;
			animation: fadeRightAbsoulte 0.5s ease-in-out;
		}
		&__food-img {
			position: relative;
			z-index: 1;
			animation: fadeRight 1.5s ease-in-out;
		}
		&__food-leaf-img {
			position: absolute;
			z-index: 2;

			&_1 {
				top: -60px;
				left: 40px;
			}
			&_2 {
				left: -205px;
				bottom: -50px;
			}
			&_3 {
				right: 150px;
				bottom: -170px;
			}
		}
	}
	.fadeLeft {
		animation: fadeLeft 1s ease-in-out;
	}
	.fadeRight {
		animation: fadeRight 1s ease-in-out;
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
	@keyframes fadeRight {
		from {
			opacity: 0;
			transform: translateX(1000px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@keyframes fadeRightAbsoulte {
		from {
			opacity: 0;
			transform:translate(1000px, -50%);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}
</style>