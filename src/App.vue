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
    <footer class="footer bg-dark">
      <div class="container-fluid py-2">
        <span class="text-light">Footer</span>
      </div>
    </footer>
  </div>
</template>

<script>
import appHeader from './components/Header'

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

