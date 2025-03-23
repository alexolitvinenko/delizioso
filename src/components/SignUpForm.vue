<template>
	<form class="signup-form" method="post">
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
	.signup-form {
		display: flex;
		flex-direction: column;
		row-gap: 40px;
	}
</style>