<template>
	<input :value="modelValue" @input="updateInput" class="input" :type="$props.type">
</template>

<script>
	export default {
		name: 'form-input',
		props: {
			modelValue: [String, Number],
			type: [String]
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

</style>