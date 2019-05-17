<template>
    <div v-if="editedImage" class="container-fluid">
        <div class="row mb-3">
            <div class="col">
                <h1>Edit image</h1>
            </div>  
        </div>
        <div class="row">
            <div class="col-md-4">
                <img 
                    :src="editedImage.link" 
                    :alt="editedImage.title" 
                    class="image"
                >
            </div>
            <div class="col-md-6">
                <form action="#">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input 
                        v-model="editedImage.title"
                        type="text" 
                        class="form-control form-control-lg" id="title" 
                        placeholder="Enter title">
                    </div>
                    <div class="form-group">
                        <label for="description">Example textarea</label>
                        <textarea 
                        placeholder="Enter description"
                        class="form-control form-control-lg" 
                        id="description" 
                        rows="3"
                        v-model="editedImage.description"></textarea>
                    </div>
                    <button 
                        class="btn btn-outline-danger btn-lg"
                        @click.prevent="cancelAction"
                    >Cancel</button>
                    <button 
                        class="btn btn-success btn-lg ml-3"
                        @click.prevent="saveAction"
                    >Save</button>
                </form>
            </div>
        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { router } from '../main';

export default {
    name: 'edit-image',
    props: ['id'],
    created: function() {
        console.log(this.id)
        this.getImageData(this.id)
    },
    beforeDestroy: function(){
        this.cleanImageData()
    },
    methods: {
        ...mapActions(['getImageData', 'cleanImageData', 'updateImage']),
        cancelAction: function() {
            router.push('/')
        },
        saveAction: function() {
            this.updateImage(this.editedImage);
        }
    },
    computed: mapGetters(['editedImage']),
}
</script>

<style lang="scss" scoped>
    .image{
        max-width: 100%;
    }
</style>
