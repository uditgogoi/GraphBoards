<template>
  <div id="side-menu">
      <div class="logo-wrapper">
          <img src="../assets//209-2097319_saas.jpg" width="100px">
      </div>
      
    <Menu :model="items"/>
  </div>
</template>
<script>
export default {
  name: "AppSideBar",
  data() {
        return {
         items: [
             {
					label: 'Home',
					icon: 'pi pi-home',
					command: () => {
						this.$router.push({path:'/home'}).catch(() => { /* ignore */ });
					}
				},
				{
					label: 'Create Dashboard',
					icon: 'pi pi-microsoft',
					command: () => {
						this.$router.push({path:'/create'});
					}
				},
			]
        }
    }
};
</script>
