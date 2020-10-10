<template>
  <div>
      <div class="container">

      </div>
  </div>
</template>

<script>
export default {
    mounted: async function() {
        
        let user = await this.$localForage.getItem("user")
        
        //Default user if it does not exist
		if(user == null){
            user = {
                documents: []
            }
            await this.$localForage.setItem("user", user)
        }
	}
}
</script>

<style>


</style>