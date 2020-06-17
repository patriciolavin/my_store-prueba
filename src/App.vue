<template>
  <div id="app">
    <b><navbar :brand="'Mi tienda en línea'"/></b>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>


<style>

  

</style>
