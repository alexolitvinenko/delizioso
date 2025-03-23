<template>
	<button class="submit-btn" type="submit"><slot></slot></button>
</template>

<script>
	export default {
		name: 'submit-button'
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.submit-btn {
		width: 100%;
		max-width: 490px;
		padding: 20px;
		text-align: center;
		font-family: $poppins;
		font-weight: 500;
		font-size: 20px;
		color: #fff;
		background-color: $secondColorOpacity;
		border: none;
		border-radius: 10px;
		cursor: pointer;
	}
</style>