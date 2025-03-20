<template>
	<div class="burger">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="2.75" y="2.75" width="7.5" height="7.5" rx="2.25" stroke="#311F09" stroke-width="1.5" />
			<rect x="13.75" y="2.75" width="7.5" height="7.5" rx="2.25" stroke="#311F09" stroke-width="1.5" />
			<rect x="2.75" y="13.75" width="7.5" height="7.5" rx="2.25" stroke="#311F09" stroke-width="1.5" />
			<rect x="13.75" y="13.75" width="7.5" height="7.5" rx="3.75" stroke="#FF8A00" stroke-width="1.5" />
		</svg>
	</div>
</template>

<script>
	export default {
		name: 'burger'
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.burger {
		display: none;
		width: 24px;
		height: 24px;
		cursor: pointer;
	}
	@media screen and (max-width: $laptop) {
		.burger {
			display: block;
		}
	}
</style>