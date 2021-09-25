<template>
  <div>
    <div class="option-bar">
      <div style="text-align:left">
        <Button
          icon="pi pi-chevron-down"
          type="button"
          label="Add Element"
          @click="toggle"
          iconPos="right"
        />
        <TieredMenu ref="menu" :model="items" :popup="true" />
      </div>
      <br />
      <div class="data-component">
        <span v-for="(component, key) in components" :key="key">
          <DraggableComponent
            :component="component"
            :resizable="true"
            :draggable="true"
            @on-drag-start="onDragStart($event,component.id)"
            @on-resize-start="onResizeStart($event, component.id)"
          />
        </span>
      </div>
      <div class="p-text-right p-mt-2">
        <Button
          icon="pi pi-save"
          type="button"
          label="Save Dashboard"
          @click="saveDashboard"
          iconPos="left"
          class="p-button-secondary"
        >
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import {uniqueID} from "@/utils/helper";
export default {
  name: "CreateDashboard",
  components: {
    DraggableComponent: () =>
      import("@/modules/dashboard/components/DraggableComponent.vue"),
  },
  data() {
    return {
      components: [],
      sync: false,
      draggingId: null,
      prevOffsetX: 0,
      prevOffsetY: 0,

      items: [
        {
          label: "Graph",
          icon: "pi pi-chart-line",
          items: [
            {
              label: "Bar",
              command: () => this.addGraph("bar"),
            },
            {
              label: "Line",
              command: () => this.addGraph("line"),
            },
            {
              label: "Area",
              command: () => this.addGraph("area"),
            },
            {
              label: "Scatterplot",
              command: () => this.addGraph("scatterplot"),
            },
            {
              label: "Radial",
              command: () => this.addGraph("radial"),
            },
            {
              label: "Stack Chart",
              command: () => this.addGraph("stack"),
            },
          ],
        },
        {
          label: "Value Card",
          icon: "pi pi-fw pi-credit-card",
          items: [
            {
              label: "Number",
              command: () => this.addCard("number"),
            },
            {
              label: "Graph",
              command: () => this.addCard("graph"),
            },
          ],
        },
        {
          label: "Table",
          icon: "pi pi-fw pi-table",
          command: () => this.addTable(),
        },
      ],
      menuItem: "",
    };
  },

  computed: {
    draggingElement: function() {
      if (!this.draggingId) return;

      return this.elements.find((el) => el.id === this.draggingId);
    },
  },
  mounted() {
    window.addEventListener("keydown", (ev) => {
      if (ev.keyCode === 17) {
        this.sync = true;
      }
    });
    window.addEventListener("keyup", (ev) => {
      if (ev.keyCode === 17) {
        this.sync = false;
      }
    });
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },

    addGraph(type) {
      const component = {
        id: uniqueID(),
        name: this.getGraphComponent(type),
        type: "graph",
        section: type,
        w:300,
        h:200,
      };
      this.components.push(component);
      console.log(this.components)
    },

    addTable() {
      const component = {
        id: uniqueID(),
        name: "TableCard",
        type: "table",
        w:500,
        h:300,
      };
      this.components.push(component);
    },

    addCard(type) {
      const component = {
        id: uniqueID(),
        name: "ValueCard",
        type: "card",
        section: type,
        w:200,
        h:200,
      };
      this.components.push(component);
    },

    getGraphComponent(graphType) {
      switch (graphType) {
        case "bar":
          return "BarGraph";
        case "line":
          return "LineGraph";
        case "area":
          return "AreaGraph";
        case "radial":
          return "RadialGraph";
        case "scatterplot":
          return "ScatterplotGraph";
        case "stacked":
          return "StackedGraph";
      }
    },

    onDragStart(obj, id) {
      this.x = obj.x;
      this.y = obj.y;
      this.replacePosition(obj.x, obj.y,id);
    },

    onResizeStart(dimension,id) {
      this.replaceDimenstion(dimension,id)
    },

    saveDashboard() {
      localStorage.setItem("components", JSON.stringify(this.components));
    },

    replacePosition(x,y,id) {
      this.components.forEach(component=> {
        if(component.id==id ) {
          component.x=x;
          component.y=y;
        }
      })
    },

    replaceDimenstion(dimension,id) {
        this.components.forEach(component=> {
        if(component.id==id ) {
          component.x=dimension.x;
          component.y=dimension.y;
          component.w= dimension.width;
          component.h= dimension.height;
        }
      })
    }

    // dragging(id, left, top) {
    //   this.draggingId = id;

    //   if (!this.sync) return;

    //   const offsetX = left - this.draggingElement.x;
    //   const offsetY = top - this.draggingElement.y;

    //   const deltaX = this.deltaX(offsetX);
    //   const deltaY = this.deltaY(offsetY);

    //   this.elements.map((el) => {
    //     if (el.id !== id) {
    //       el.x += deltaX;
    //       el.y += deltaY;
    //     }

    //     return el;
    //   });
    // },
    // dragstop(id, left, top) {
    //   this.elements.map((el) => {
    //     if (el.id === id) {
    //       el.x = left;
    //       el.y = top;
    //     }

    //     return el;
    //   });

    //   this.draggingId = null;
    //   this.prevOffsetX = 0;
    //   this.prevOffsetY = 0;
    // },
    // deltaX(offsetX) {
    //   const ret = offsetX - this.prevOffsetX;

    //   this.prevOffsetX = offsetX;

    //   return ret;
    // },
    // deltaY(offsetY) {
    //   const ret = offsetY - this.prevOffsetY;

    //   this.prevOffsetY = offsetY;

    //   return ret;
    // },
  },
};
</script>
<style scoped>
.option-bar {
  padding-left: 2rem;
}
.data-component {
  height: 80vh;
  overflow-y: scroll;
  width: 100%;
  position: relative;
  background: rgb(227, 241, 236);
}
</style>
