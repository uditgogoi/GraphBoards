<template>
  <div id="layout-topbar">
    <Menubar>
      <template #end>
        <Button icon="pi pi-user" class="p-button-rounded p-button-secondary" iconPos="right" @click="toggle"/>
        <Menu ref="menu" :model="items" :popup="true" />
      </template>
    </Menubar>
  </div>
</template>
<script>
export default {
  name: "AppTopbar",
  data() {
    return {
      items: [
        {
          label: "Logout",
          icon: "pi pi-power-off",
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
};
</script>
