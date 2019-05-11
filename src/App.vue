<template>
  <div class="app" id="app">
    <app-header />

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <main class="main container-fluid py-2">
      <router-view/>
    </main>
  </div>
</template>

<script>
import appHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    appHeader
  },
}
</script>

<style lang="scss">
  html, 
  body {
      height: 100%;
  }
  .app {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  .main{
    flex: 1;
  }

</style>

