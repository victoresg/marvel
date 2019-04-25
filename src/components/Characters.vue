<template>
  <div class="characters">
    <div class="cards row"> 
      <div class="card col-md-4" v-for="({ id, name }, index) in characters" :key="index">
        <router-link :to="{ name: 'character', params: { id: id, name: name } }">{{ name }}</router-link>
      </div>
    </div>
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

<style lang="scss">
.characters {
  padding: 80px;
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      padding: 4rem 0;
      margin: 10px;
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      }
    }
  }
}
</style>