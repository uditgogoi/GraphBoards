<template>
  <div>
    <vue-draggable-resizable
      class-name-active="active-selected-card"
      :x="component.x"
      :y="component.y"
      :w="component.w"
      :h="component.h"
      :resizable="resizable"
      :draggable="draggable"
      class="draggable-box"
      @dragging="onDragStart" 
      @resizing="onResizeStart"
    >
      <component :is="component.name"></component>
    </vue-draggable-resizable>
  </div>
</template>
<script>
export default {
  name: "DraggableComponent",
  components: {
    TableCard: () => import("@/modules/dashboard/components/TableCard.vue"),
    ValueCard: () => import("@/modules/dashboard/components/ValueCard.vue"),
    BarGraph: () => import("@/modules/dashboard/components/graphs/Bar.vue"),
    LineGraph: () => import("@/modules/dashboard/components/graphs/Line.vue"),
    AreaGraph: () => import("@/modules/dashboard/components/graphs/Area.vue"),
    RadialGraph: () =>
      import("@/modules/dashboard/components/graphs/Radial.vue"),
    StackedGraph: () =>
      import("@/modules/dashboard/components/graphs/Stacked.vue"),
    ScatterplotGraph: () =>
      import("@/modules/dashboard/components/graphs/Scatterplot.vue"),
  },
  props: {
    xPosition: String,
    yPosition: String,
    width: String,
    height: String,
    resizable: Boolean,
    draggable:Boolean,
    component: Object,
  },
  methods: {
      onDragStart(x,y) {
          const obj= {
              x:x,
              y:y
          }
          this.$emit("on-drag-start",obj )
      },

      onResizeStart(x, y, width, height) {
          const dimensions= {
              x:x,
              y:y,
              width:width,
              height:height
          };
          this.$emit("on-resize-start",dimensions )
      }
  }
};
</script>
