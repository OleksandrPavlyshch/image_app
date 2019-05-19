<template>
  <q-header elevated class="glossy">
      <q-toolbar q-gutter-sm>

        <q-toolbar-title>
          ImageApp
        </q-toolbar-title>

        <q-space />


        <q-tabs v-if="isLoggedIn" inline-label>
          <q-route-tab
            icon="photo_library"
            to="/"
            exact
            label="Gallery"
          />
          <q-route-tab
            icon="cloud_upload"
            to="/upload"
            exact
            label="Upload"
          />
        </q-tabs>
        
        <q-avatar class="q-mx-md" v-if="isShowAccontWelcome">
          <img :src="accountData.avatar">
          <q-tooltip content-class="blue-grey-8" content-style="font-size: 16px">
            {{accountData.url}}
          </q-tooltip>
        </q-avatar>
        <q-btn 
          v-if="isLoggedIn"
          @click="logout" 
          outline
          flat
          round
          icon="exit_to_app" 
        />

        <q-btn 
          v-else
          outline
          @click="login" 
       flat
          label="login"
          icon="camera_front" 
        />
      </q-toolbar>
    </q-header>
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
  .avatar-image {
    max-width: 1.5em;
  }
  .router-link-exact-active {
    color: #fff !important;
  }
</style>
