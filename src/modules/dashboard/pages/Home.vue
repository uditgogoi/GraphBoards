<template>
  <div id="home">
    <button @click="goToDemo">click here</button>
    <template v-if="!loading">
      <div v-for="(component, key) in components" :key="key">
        <DraggableComponent :component="component" :resizable="false"  :draggable="false"/>
      </div>
    </template>
    <div v-else>
      loading...
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {
    DraggableComponent: () =>
      import("@/modules/dashboard/components/DraggableComponent.vue"),
  },
  data() {
    return {
      components: [],
      loading:false,
    };
  },
  mounted() {
    this.loading=true;
    const components = localStorage.getItem("components");
    this.components = JSON.parse(components);
    setTimeout(()=>this.loading=false,2000);
    
    console.log(this.components)
  },
  methods: {
    onMenuToggle() {},
    goToDemo() {
      this.$router.push({path:'/demo/frefd', params: {message:'hello there this is a demio'}})
    }
  },
};
</script>
<style>
#home {
    background:rgb(241, 252, 248);
    height: 100vh;
}
</style>
