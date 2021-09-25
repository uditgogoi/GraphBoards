<template>
  <div id="home">
    <template v-if="!loading">
      <div v-for="(component, key) in components" :key="key">
        <DraggableComponent :component="component" :resizable="false"  :draggable="false"/>
      </div>
    </template>
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
      loading:true,
    };
  },
  created() {
    const components = localStorage.getItem("components");
    this.components = JSON.parse(components);
    this.loading=false;
    console.log(this.components)
  },
  methods: {
    onMenuToggle() {},
  },
};
</script>
<style>
#home {
    background:rgb(241, 252, 248);
    height: 100vh;
}
</style>
