<template>
	<button @click="comeBack" class="back-btn">
		<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.11381 8.75111L9.37106 16.0066C9.53536 16.1709 9.62767 16.3937 9.62767 16.6261C9.62767 16.8585 9.53536 17.0813 9.37106 17.2456C9.20676 17.4099 8.98392 17.5022 8.75156 17.5022C8.51921 17.5022 8.29636 17.4099 8.13206 17.2456L0.257064 9.37061C0.175578 9.28933 0.110929 9.19277 0.0668173 9.08646C0.022706 8.98016 0 8.8662 0 8.75111C0 8.63601 0.022706 8.52205 0.0668173 8.41575C0.110929 8.30944 0.175578 8.21289 0.257064 8.13161L8.13206 0.256605C8.29636 0.0923035 8.51921 0 8.75156 0C8.98392 0 9.20676 0.0923035 9.37106 0.256605C9.53536 0.420907 9.62767 0.643748 9.62767 0.876105C9.62767 1.10846 9.53536 1.3313 9.37106 1.49561L2.11381 8.75111Z" fill="white" />
		</svg>
	</button>
</template>

<script>
import { useRouter } from 'vue-router';

	export default {
		name: 'back-button',

		setup () {
			const router = useRouter();

			return {
				router
			}
		},
		methods: {
			comeBack() {
				this.router.back();
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.back-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 33px;
		height: 33px;
		background-color: $secondColor;
		border: none;
		border-radius: 100%;
		cursor: pointer;
	}
</style>