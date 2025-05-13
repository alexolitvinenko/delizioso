<template>
	<div class="signup">
		<h1 class="signup__title">Sign up</h1>
		<h2 class="signup__sub-title">Have an account? <router-link to="/login" :replace="true" class="signup__link">Login</router-link></h2>
		<SignUpForm class="signup__form"/>
	</div>
</template>

<script>
import FoodBlock from '@/components/FoodBlock.vue';
import SignUpForm from '@/components/SignUpForm.vue';

export default {
	components: {SignUpForm, FoodBlock},

	setup () {

		return {
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.signup {
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
	@media screen and (max-width: $tablet) {
		.signup {
			align-items: center;
			min-height: auto;

			&__form {
			}
		}
	}
</style>