<template>
  <div class="character">
    <h3>olá</h3>
    <ul>
      <li v-for="({name, id, description}, index) in character" :key="index">
        {{ name }}
        {{ description }}
      </li>
      <img :src="url">
    </ul>
  </div>
</template>

<script>
import Marvel from '../services/marvel'

export default {
  name: 'Characters',
  data: () => ({
    character: [],
    url: '',
    size: 'standard_large.jpg'
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
        const [ { thumbnail } ] = results
        console.log(results)
        
        this.url = `${thumbnail.path}/${this.size}`
        this.character = results
      } catch (error) {
        throw Error(error)
      }
    }
  }
}
</script>

<style lang="css">
.character {
  padding: 10rem;
}
</style>