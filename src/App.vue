<template>
  <q-layout class="app" view="hHh lpr">
    <app-header />
    <q-page-container class="main">
      <q-page>
        <router-view />
      </q-page>
      
    </q-page-container>
  </q-layout>
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
    position: relative;
  }

</style>

