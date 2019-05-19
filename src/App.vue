<template>
  <q-layout view="lHh Lpr lFf">
    <app-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import appHeader from './components/AppHeader'

export default {
  name: 'LayoutDefault',

  components: {
    appHeader,
  },
}
</script>

<style>
</style>
