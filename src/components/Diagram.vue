
<template>
  <div class="card flex justify-content-center">
      <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Chart from 'primevue/chart';

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body);

  return {
    labels: ['A','B','C'],
      datasets: [
          {   
              data: [21,22,57],
              backgroundColor: [documentStyle.getPropertyValue('--green-600'), documentStyle.getPropertyValue('--red-600'),documentStyle.getPropertyValue('--blue-600')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--green-600'), documentStyle.getPropertyValue('--red-600'), documentStyle.getPropertyValue('--blue-600')]
          }
      ]
  };
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  return {
      plugins: {
          legend: {
              labels: {
                  cutout: '60%',
                  color: textColor
              }
          }
      }
  };
};
</script>
<style scoped>
.card{
  border-radius:8px;
}
</style>