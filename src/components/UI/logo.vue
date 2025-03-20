<template>
	<div class="logo">
		<span class="logo__letter">D</span>
		<span class="logo__text">Delizi<span class="logo__orange">oso</span></span>
	</div>
</template>

<script>
	export default {
		name: 'logo'
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';
	.logo {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 20px;

		&__letter {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;
			font-weight: 600;
			font-size: 25px;
			color: #fff;
			background-color: $secondColor;
			border-radius: 100%;
		}
		&__text {
			font-weight: 600;
			font-size: 14px;
			color: $primaryColor;
		}
		&__orange {
			color: $secondColor;
		}
	}
</style>