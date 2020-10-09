<template>
  <div>
  </div>
</template>

<script>
export default {
    mounted: async function() {
		await this.$localForage.setItem("test", "helo")
		let item = await this.$localForage.getItem("test")
		console.log(item)
	}
}
</script>

<style>


</style>