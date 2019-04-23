<template>
  <div> 
    <h3>characters.vue</h3>
    <ol>
      <li v-for="({ id, name }, index) in characters" :key="index">
        <router-link :to="{ name: 'character', params: { id: id, name: name } }">{{ name }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import Marvel from '../services/marvel'

export default {
  name: 'Characters',
  data: () => ({
    characters: []
  }),
  mounted() {
    this.getCharacters()
  },
  methods: {
    async getCharacters () {
      const res = await Marvel.listCharacters()
      const { results } = res.data.data
      try {
        return this.characters = results
      } catch(error) {
        throw Error(error)
      }
    }
  }
}
</script>

<style lang="css">

</style>