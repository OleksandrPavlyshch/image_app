<template>
    <h1 v-if="isLoggedIn">image gallery</h1>
    <h1 v-else>Please login</h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'image-gallery',
    computed: mapGetters(['isLoggedIn']),
}
</script>
