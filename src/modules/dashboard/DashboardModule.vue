<template>
  <div id="dashboard-module">
    <!-- <AppTopBar @menu-toggle="onMenuToggle" />
    <AppSideMenu/> -->
    <div class="p-grid">
      <div class="p-col-fixed left-navigation-menu">
          <AppSideMenu/>
      </div>
      <div class="p-col">
        <AppTopBar/>
        <router-view/>
      </div>
    </div>
    <!-- <transition name="layout-sidebar">
      <div>
        <div class="layout-logo">
          <router-view />
        </div>
      </div>
    </transition> -->
  </div>
</template>
<script>
export default {
  name: "DashboardModule",
  components: {
    AppTopBar: () => import("@/components/AppTopbar.vue"),
    AppSideMenu:()=>import("@/components/AppSideMenu.vue"),
  },
};
</script>
<style scoped></style>
