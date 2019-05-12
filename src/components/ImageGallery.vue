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
                        width: `${image.width*250/image.height}px`,
                        flexGrow: `${image.width*250/image.height}`
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
                    <div v-if="image.name" class="gallery_grid-item-title">{{image.name}}</div>
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
.gallery {
    overflow-y: auto;
    &_grid {
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
            cursor: pointer;
            &-spacer {
                display: block;
            }
            &-image {
                position: absolute;
                top: 0;
                width: 100%;
                vertical-align: bottom;
                z-index: 1;
            }
            &-title {
                position: absolute;
                z-index: 2;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 10px;
                color: #fff;
                background-color: rgba(#000, .6);
                font-size: 1em;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>

