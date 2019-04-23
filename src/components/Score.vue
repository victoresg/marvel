<template>
  <div class="score">
    <div class="strong">
      <p>Força</p>
      <vue-easy-pie-chart :percent="value" />
    </div>
    <div class="speed">
      <p>Velocidade</p>
      <vue-easy-pie-chart :percent="speed" />
    </div>
  </div>
</template>

<script>
import VueEasyPieChart from 'vue-easy-pie-chart'

export default {
  name:'Score',
  components: {
    VueEasyPieChart
  },
  data: () => ({
    user: {
      nota: 50
    },
    avangers: {
      nota: 65
    }  
  }),
  computed: {
    value: function () {
      return this.user.nota
    },
    speed: function () {
      return this.avangers.nota
    }
  }
}
</script>

<style>
.score {
  display: flex;
  justify-content: center;
  align-items: center;
}
.score .strong  .speed {
  display: flex;
  flex-direction: column;
}

</style>