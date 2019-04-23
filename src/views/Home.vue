<template>
    <div class="home">
      <p>home</p>
      <Characters />
      <HelloWorld />
    </div>
</template>

<script>
import  HelloWorld from '@/components/HelloWorld.vue'
import  Characters from '@/components/Characters.vue'

export default {
  name:'Home',
  components: {
    HelloWorld,
    Characters
  }
}
</script>
<style lang="css">
  .home {
    position: relative;
  }
</style>