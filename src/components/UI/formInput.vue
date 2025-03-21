<template>
	<input :value="modelValue" @input="updateInput" class="input" :type="$props.type" :placeholder="$props.placeholder">
</template>

<script>
	export default {
		name: 'form-input',
		props: {
			modelValue: [String, Number],
			type: [String],
			placeholder: [String]
		},
		setup () {

			return {
			}
		},
		methods: {
			updateInput(event) {
				this.$emit('update:modelValue', event.target.value);
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/assets/scss/variable';

	.input {
		width: 100%;
		max-width: 490px;
		padding: 15px 50px;
		font-family: $poppins;
		font-weight: 400;
		font-size: 20px;
		line-height: 200%;
		color: $primaryColor;
		background-color: rgba(208, 204, 199, 0.1);
		border: 1px solid transparent;
		border-radius: 10px;

		&::placeholder {
			font-weight: 400;
			font-size: 20px;
			line-height: 200%;
			color: #a0978c;
		}
	}
</style>