<template>
     <header>
      <nav class="navbar navbar-dark navbar-expand bg-dark">
        <router-link class="navbar-brand" to="/">My ImageApp</router-link> 
        <ul class="navbar-nav ml-auto">
            <li v-if="isLoggedIn" class="nav-item active">
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
            </li>
            
            <li v-else class="nav-item active">
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
    name: 'header',
    methods: mapActions(['login', 'logout']),
    computed: mapGetters(['isLoggedIn']),

}
</script>

