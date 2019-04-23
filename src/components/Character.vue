<template>
  <div>
    <h3>olá</h3>
    <ul>
      <li v-for="({name, id, description}, index) in character" :key="index">
        {{ name }}
        {{ description }}
      </li>
    </ul>
  </div>
</template>

<script>
import Marvel from '../services/marvel'

export default {
  name: 'Characters',
  data: () => ({
    character: []
  }),
  mounted() {
    this.getCharacterById ()
  },
  methods: {
    async getCharacterById () {
      try {
        const characterId = this.$route.params.id
        const res = await Marvel.listCharactersById(characterId)
        const { results } = res.data.data
        this.character = results
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="css">

</style>