<template>
  <Card id="table" class="full-card-height">
    <template #title>
      Table
    </template>
    <template #content>
      <DataTable :value="data">
        <Column field="vin" header="Vin"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="brand" header="Brand"></Column>
        <Column field="color" header="Color"></Column>
      </DataTable>
    </template>
  </Card>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
// import ColumnGroup from "primevue/columngroup";
export default {
  name: "TableCard",
  components: {
    DataTable,
    Column,
    // ColumnGroup,
  },
  data() {
    return {
      data: [
        { brand: "Volkswagen", year: 2012, color: "Orange", vin: "dsad231ff" },
        { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
        { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
      ],
    };
  },
};
</script>
