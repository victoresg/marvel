<template>
    <div class="home">
      <h3>Personagens</h3>
      <Characters />
    </div>
</template>

<script>
import  Characters from '@/components/Characters.vue'

export default {
  name:'Home',
  components: {
    Characters
  }
}
</script>
<style lang="css">
  .home {
    position: relative;
  }
</style>