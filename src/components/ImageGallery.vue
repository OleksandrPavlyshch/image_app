<template>
    <div>
        <div
             v-if="isLoggedIn"
            class="gallery"
        >
            <h1>Image gallery</h1>
            <div class="gallery_grid">
                <div
                    class="gallery_grid-item"
                    v-for="image in images" 
                    :key="image.id"
                    :style="{
                        width: `${image.width*270/image.height}px`,
                        flexGrow: `${image.width*270/image.height}`
                    }"
                >
                    <i 
                        class="gallery_grid-item-spacer"
                        :style="{
                            paddingBottom: `${image.height/image.width*100}%`,
                        }"
                    ></i>
                    <img 
                        class="gallery_grid-item-image"
                        :src="image.link" 
                        :alt="image.title"
                    >
                </div>
                
            </div>
           
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

<style lang="scss" scoped>
.gallery_grid {
    display: flex;
    flex-wrap: wrap;
    &::after {
        content: '';
        flex-grow: 999999999;
    }
    &-item {
        margin: 5px;
        background-color: violet;
        position: relative;
        &-spacer {
            display: block;
        }
        &-image {
            position: absolute;
            top: 0;
            width: 100%;
            vertical-align: bottom;
        }
    }
}

</style>

