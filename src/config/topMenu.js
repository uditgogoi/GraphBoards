export default {
  createGraph: {
    targetPage: "createDashboard",
    items: [
      {
        label: "Graph",
        icon: "pi pi-chart-line",
        items: [
          {
            label: "Bar",
            command: () => window.addGraph("bar"),
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
  },
};
