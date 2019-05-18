<template>

  <q-header elevated class="header bg-primary text-white">
    <q-toolbar class=" text-white shadow-2 ">
      <q-btn flat label="Image app" />
      <q-btn flat>
        <router-link class="nav-link" to="/">Gallery</router-link>
      </q-btn>
      <q-btn flat>
        <router-link class="nav-link" to="/upload">Upload</router-link>
      </q-btn>
      <q-space />
      <q-tabs  shrink>
        <q-tab name="tab1" label="Tab 1" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
  </q-header>
  <!-- <header>
    <nav class="navbar navbar-dark navbar-expand bg-dark">
      <router-link class="navbar-brand" to="/">ImageApp</router-link> 
      <ul v-if="isLoggedIn" class="navbar-nav ml-auto">
          <li v-if="isShowAccontWelcome" class="nav-link text-white"> {{accountData.url}} </li>
          <li v-if="isShowAccontWelcome" class="nav-link text-white" :title="accountData.url">
            <img class="rounded-circle avatar-image" :src="accountData.avatar" alt="accountData.url">
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Gallery</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/upload">Upload</router-link>
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
          </li>
      </ul>
      <ul v-else class="navbar-nav ml-auto">
          <li class="nav-item">
            <a @click.prevent="login" class="nav-link text-white" href="#">Login</a>
          </li>
      </ul>
    </nav>
  </header> -->
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'app-header',
    methods: mapActions(['login', 'logout', 'getAccountData']),
    computed: {
      ...mapGetters(['isLoggedIn', 'accountData']),
      isShowAccontWelcome: function() {
        return this.accountData && this.isLoggedIn;
      }
      
    },
    created: function() {
      this.$nextTick(function () {
        this.getAccountData();
      })
    },
}
</script>

<style lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .avatar-image {
    max-width: 1.5em;
  }
  .router-link-exact-active {
    color: #fff !important;
  }
</style>
