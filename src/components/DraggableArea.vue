<template>
    <div id="draggable-area">
        <div style="height: 90vh; width: 98vw;position: relative;">
      <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true" style="background:red">
        <div style="background:red">
          <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
        X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
        </div>
      </vue-draggable-resizable>

     <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true" style="background:green">
       <div style="background:green">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
       </div>
    </vue-draggable-resizable>
  </div>
    </div>
</template>
<script>
export default {
    name:'DraggableArea'
}
</script>
<style scoped>

</style>