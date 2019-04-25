<template>
  <div class="footer">
    <ul class="footer-list">
      <li>Home</li>
      <li>Sobre</li>
      <li>Trabalhe conosco</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
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
    bottom: 0;
    z-index: 999;
    margin-bottom: 0rem;
    li {
      list-style-type: none;
      color: white;
      padding: 20px;
    }
  }
}
</style>