<template>
  <div class="header">
    <ul class="header-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sobre">Sobre</router-link></li>
      <li><router-link to="/trabalhe-conosco">Trabalhe conosco</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &-list {
    background-color: black;
    display: flex;    
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    li {
      list-style-type: none;
      color: white;
      padding: 20px;
    }
  }
}
</style>