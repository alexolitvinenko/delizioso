<template>
	<div class="check-btn">
		<input :checked="$props.checked" @input="check" :id="$props.id" class="check-btn__input" type="checkbox">
		<label :for="$props.id" class="check-btn__label"><slot></slot></label>
	</div>
</template>

<script>
	export default {
		name: 'check-button',
		props: {
			checked: [Boolean],
			id: [String]
		},
		setup () {

			return {
			}
		},
		methods: {
			check(event) {
				this.$emit('update:checked', event.target.checked);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.check-btn {
		display: flex;
		align-items: center;
		column-gap: 20px;

		&__input {
			width: 30px;
			height: 30px;
			background-color: #fff;
			border: 1px solid #dcd4cb;
		}
		&__label {
			font-weight: 400;
			font-size: 20px;
			line-height: 200%;
			color: $thirdColor;
		}
	}
</style>