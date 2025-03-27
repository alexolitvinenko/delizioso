<template>
	<div class="food-block-images">
		<div class="food-block-images__food-circle"></div>
		<transition name="fade" mode="out-in" appear>
			<img v-if:="$props.type==='login'" class="food-block-images__food-img" :src="require('@/assets/img/login-food.png')" alt="">
			<img v-else-if="$props.type==='signup'" class="food-block-images__food-img" :src="require('@/assets/img/signup-food.png')" alt="">
		</transition>
		<img class="food-block-images__food-leaf-img food-block-images__food-leaf-img_1" :src="require('@/assets/img/login-food-leaf-1.png')" alt="">
		<img class="food-block-images__food-leaf-img food-block-images__food-leaf-img_2" :src="require('@/assets/img/login-food-leaf-2.png')" alt="">
		<img class="food-block-images__food-leaf-img food-block-images__food-leaf-img_3" :src="require('@/assets/img/login-food-leaf-3.png')" alt="">
	</div>
</template>

<script>
	export default {
		props: {
			type: [String]
		},
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.food-block-images {
		position: absolute;
		top: 60px;
		right: -150px;
		width: 760px;
		height: 767px;
		
		&__food-circle {
			position: absolute;
			top: 50%;
    		left: 50%;
			display: block;
			width: calc(100% + 60px * 4);
			height: calc(100% + 60px * 4);
   			transform: translate(-50%, -50%);
			background-color: $secondColorOpacity;
			border-radius: 100%;
			z-index: 0;
			animation: fadeRightAbsoulte 0.5s ease-in-out;
		}
		&__food-img {
			position: relative;
			z-index: 1;
			-webkit-filter: drop-shadow(-12px 29px 91px rgba(181, 153, 120, 0.41));
			filter: drop-shadow(-12px 29px 91px rgba(181, 153, 120, 0.41));
		}
		&__food-leaf-img {
			position: absolute;
			z-index: 2;

			&_1 {
				top: -60px;
				left: 40px;
			}
			&_2 {
				left: -205px;
				bottom: -50px;
			}
			&_3 {
				right: 150px;
				bottom: -170px;
			}
		}
	}
	@keyframes fadeRightAbsoulte {
		from {
			opacity: 0;
			transform:translate(1000px, -50%);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}
	.fade-enter-active,
	.fade-leave-active {
		opacity: 1;
		transform: translateX(0);
	}

	.fade-enter-active {
		transition: all 1s;
	}

	.fade-leave-active {
		transition: all 0.5s;
	}

	.fade-leave-to,
	.fade-enter-from {
		opacity: 0;
		transform: translateX(1000px);
	}
</style>