<template>
	<div class="login">
		<h1 class="login__title">Login</h1>
		<h2 class="login__sub-title">Don't have an account? <router-link to="/signup" class="login__link">Sign up</router-link></h2>
		<form class="login__form">
			<form-input :type="email"/>
		</form>
	</div>
</template>

<script>
export default {
	setup () {
		

		return {}
	}
}
</script>

<style lang="scss" scoped>

</style>