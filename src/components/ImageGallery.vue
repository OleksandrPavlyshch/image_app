<template>
    <div>
        <div
             v-if="isLoggedIn"
            class="image-gallery"
        >
            <h1>Image gallery</h1>
            <div class="image_grid">
                <div
                    class="image_grid-item"
                    v-for="image in images" 
                    :key="image.id"
                    :style="{
                        width: `${image.width*270/image.height}px`,
                        flexGrow: `${image.width*270/image.height}`
                    }"
                >
                    <i 
                        :style="{
                            paddingBottom: `${image.height/image.width*100}%`,
                        }"
                    ></i>
                    <img 
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
.image_grid {
    display: flex;
    flex-wrap: wrap;
    &::after {
        content: '';
        flex-grow: 999999999;
    }
    &-item {
        margin: 2px;
        background-color: violet;
        position: relative;
        i {
            display: block;
        }
        img {
            position: absolute;
            top: 0;
            width: 100%;
            vertical-align: bottom;
        }
    }
}

// .image-grid {
//     display: grid;
//     // column-count: 3;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 10px;
//     grid-template-columns: repeat(auto-fill, minmax(330px,1fr));
//     grid-auto-rows: 40px;
//     img {
//         max-width: 100%;
//     }
// }
</style>

