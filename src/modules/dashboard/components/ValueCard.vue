<template>
  <Card id="value-card" class="full-card-height">
    <template #title>
      Value
    </template>
    <template #content>
      <span class="card-value-number">23</span>
    </template>
  </Card>
</template>
<script>
export default {
  name: "ValueCard",
};
</script>
<style scoped>
#value-card {
  /* background: rgb(230, 221, 221); */
}
.card-value-number {
  font-size: 3rem;
}
</style>
