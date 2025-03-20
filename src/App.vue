<template>
	<navbar/>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
	components: {Navbar}
}
</script>

<style lang="scss">
	@import '@/assets/scss/variable';
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
	}
	body {
		overflow-x: hidden;
	}
	#app {
		width: 100%;
		max-width: 1320px;
		padding-left: 25px;
		padding-right: 25px;
		margin-left: auto;
		margin-right: auto;
		font-family: $poppins;
	}
</style>