<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand bg-dark">
      <router-link class="navbar-brand" to="/">ImageApp</router-link> 
      <ul v-if="isLoggedIn" class="navbar-nav ml-auto">
          <li v-if="accountData" class="nav-link text-white">Welcome {{accountData.url}} </li>
          <li v-if="accountData" class="nav-link text-white">
            <img class="rounded-circle avatar-image" :src="accountData.avatar" alt="accountData.url">
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link text-white" href="#">Logout</a>
          </li>
      </ul>
      <ul v-else class="navbar-nav ml-auto">
          <li class="nav-item">
            <a @click.prevent="login" class="nav-link" href="#">Login</a>
          </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'app-header',
    methods: mapActions(['login', 'logout', 'getAccountData']),
    computed: mapGetters(['isLoggedIn', 'accountData']),
    created: function() {
      this.$nextTick(function () {
        this.getAccountData();
      })
    },
    // computed: mapState(['accountData'])
}
</script>

<style lang="scss" scoped>
  .avatar-image {
    max-width: 1.5em;
  }
</style>
