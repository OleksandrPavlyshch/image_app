<template>
    <div class="image-gallery">
        <div
             v-if="isLoggedIn"
            class="image-gallery"
        >
            <h1>Image gallery</h1>
            <img 
                v-for="image in images" 
                :key="image.id"
                :src="image.link" 
                :alt="image.title"
            >
        </div>
        <h1 v-else>Please login</h1>
     
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    name: 'image-gallery',
    computed: mapGetters(['isLoggedIn', 'images']),
    methods: mapActions(['fetchImages']),
    created() {
        this.fetchImages();
    }

}
</script>
