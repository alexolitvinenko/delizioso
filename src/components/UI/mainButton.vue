<template>
	<button class="btn"><slot></slot></button>
</template>

<script>
	export default {
		name: 'main-button'
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.btn {
		padding: 15px 35px;
		font-family: $poppins;
		font-weight: 600;
		font-size: 14px;
		color: #fff;
		background: transparent;
		border: none;
		border-radius: 133px;
		cursor: pointer;

		&.green {
			background-color: #3fa72f;
		}
		&.orange {
			background-color: $secondColor;
		}
	}
</style>