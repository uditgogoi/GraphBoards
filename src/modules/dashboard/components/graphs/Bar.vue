<template>
  <Card class="full-card-height">
    <template #content>
      <div>
        Bar graph
      </div>
      <apexchart min-width="300" type="bar" :options="options" :series="series"></apexchart>
    </template>
  </Card>
</template>
<script>
export default {
  name: "BarGraph",
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60],
        },
      ],
    };
  },
};
</script>
<style scoped></style>
