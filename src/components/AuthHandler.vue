<template>
    <p>please wait</p>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'authHandler',
    methods: mapActions(['finalizeLogin']),
    created: function() {
        this.finalizeLogin(window.location.hash);
    }
}
</script>
