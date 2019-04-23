<template>
  <div class="header">
    <ul class="header-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/sobre">Sobre</router-link></li>
      <li><router-link to="/trabalhe-conosco">Trabalhe conosco</router-link></li>
    </ul>
    <router-view />
    <div class="parag">
      <p>aaa</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}

// chave pública 1787f89ed421d2c416207935b27f4d5f
// chave privada 9d6d7558f269df3263ea03761fcf730957026d67
</script>

<style lang="css">
  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header .header-list {
    background-color: black;
    display: flex;    
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: -16px;
  }
  .header .header-list li {
    list-style-type: none;
    color: white;
    padding: 20px;
  }
  .parag {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #000;
  }
</style>