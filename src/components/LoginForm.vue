<template>
	<form class="login-form" method="post">
		<form-input v-model="email" :type="'email'" :placeholder="'Email address'"/>
		<form-input v-model="password" :type="'password'" :placeholder="'Password'"/>
		<check-button v-model:checked="isRemember" :id="'remember'">Remember me</check-button>
		<submit-button>Log in</submit-button>
	</form>
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
	.login-form {
		display: flex;
		flex-direction: column;
		row-gap: 40px;
		width: 100%;
		max-width: 490px;
	}
</style>