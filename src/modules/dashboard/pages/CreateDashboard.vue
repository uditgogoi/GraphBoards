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
      <br/>
      <div class="data-component">
        <vue-draggable-resizable
          class-name-active="active-selected-card"
          v-for="(component, key) in componentCount"
          :key="key"
          :x="component.x"
          :y="component.y"
          :w="200"
          :h="200"
          :resizable="true"
          class="draggable-box"
         
        >
          <component :is="component.name"></component>
        </vue-draggable-resizable>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateDashboard",
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
  data() {
    return {
      componentCount: [],
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
    draggingElement: function () {
      if (! this.draggingId) return;

      return this.elements.find(el => el.id === this.draggingId);
    }
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
        name: this.getGraphComponent(type),
        type: "graph",
        section: type,
      };
      this.componentCount.push(component);
    },

    addTable() {
      const component = {
        name: "TableCard",
        type: "table",
      };
      this.componentCount.push(component);
    },

    addCard(type) {
      const component = {
        name: "ValueCard",
        type: "card",
        section: type,
      };
      this.componentCount.push(component);
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

    dragging(id, left, top) {
      this.draggingId = id;

      if (!this.sync) return;

      const offsetX = left - this.draggingElement.x;
      const offsetY = top - this.draggingElement.y;

      const deltaX = this.deltaX(offsetX);
      const deltaY = this.deltaY(offsetY);

      this.elements.map((el) => {
        if (el.id !== id) {
          el.x += deltaX;
          el.y += deltaY;
        }

        return el;
      });
    },
    dragstop(id, left, top) {
      this.elements.map((el) => {
        if (el.id === id) {
          el.x = left;
          el.y = top;
        }

        return el;
      });

      this.draggingId = null;
      this.prevOffsetX = 0;
      this.prevOffsetY = 0;
    },
    deltaX(offsetX) {
      const ret = offsetX - this.prevOffsetX;

      this.prevOffsetX = offsetX;

      return ret;
    },
    deltaY(offsetY) {
      const ret = offsetY - this.prevOffsetY;

      this.prevOffsetY = offsetY;

      return ret;
    },
  },
};
</script>
<style scoped>
.option-bar {
  padding-left: 2rem;
}
.data-component {
  height: 85vh;
  overflow-y: scroll;
  width: 100%;
  position: relative;
  background: rgb(227, 241, 236);
}
</style>
