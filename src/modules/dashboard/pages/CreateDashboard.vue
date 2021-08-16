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
      <div>
        <div v-for="(component, key) in componentCount" :key="key" class="data-component">
          <component :is="component.name"></component>
        </div>
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
    BarGraph:()=>import("@/modules/dashboard/components/graphs/Bar.vue"),
    LineGraph:()=>import("@/modules/dashboard/components/graphs/Line.vue"),
    AreaGraph:()=>import("@/modules/dashboard/components/graphs/Area.vue"),
    RadialGraph:()=>import("@/modules/dashboard/components/graphs/Radial.vue"),
    StackedGraph:()=>import("@/modules/dashboard/components/graphs/Stacked.vue"),
    ScatterplotGraph:()=>import("@/modules/dashboard/components/graphs/Scatterplot.vue"),
  },
  data() {
    return {
      componentCount: [],
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
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },

    addGraph(type) {
      const component = {
        name: this.getGraphComponent(type),
        type: 'graph',
        section:type,
      };
      this.componentCount.push(component);
    },

    addTable() {
      const component = {
        name: "TableCard",
        type:'table'
      };
      this.componentCount.push(component);
    },

    addCard(type) {
      const component = {
        name: "ValueCard",
        type:'card',
        section: type,
      };
      this.componentCount.push(component);
    },

    getGraphComponent(graphType) {
      switch(graphType) {
        case 'bar':
          return 'BarGraph';
        case 'line':
            return 'LineGraph';
          case 'area':
            return 'AreaGraph';
          case 'radial':
            return 'RadialGraph';
          case 'scatterplot':
            return 'ScatterplotGraph';
          case 'stacked':
            return 'StackedGraph'
      }
    }
  },
};
</script>
<style scoped>
.option-bar {
  padding-left: 2rem;
}
.data-component {
  width:300px;
  position:relative
}
</style>
