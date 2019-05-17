<template>
    <div 
        class="upload"
        :class="{'dragged': isDragged }"
        @dragenter="startDrag"
        @drop="endDrag"
        @dragleave.stop="endDrag"
    >
        <input 
            class="upload-input" 
            type="file"
            ref="mediaUploadFile"
            multiple="multiple"
            :accept="imageTypes"
            @change="onSelectUploadFiles($event.target.files)"
        >

        <div 
            class="upload-text"
            @click="onUploadClick"
        >
            <i class="upload-icon fas fa-cloud-upload-alt"></i>
            <p class="m-0">Drop it like it's hot.</p>
            <p class="m-0">Add your files by dropping them anywhere in this window.</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
const imageTypes = ['image/png', 'image/jpeg', 'image/gif'];


export default {
    name: 'Upload',
    data() {
        return {
           isDragged: false, 
           isDataLoadingProcess: false,
        }
    },
    computed: {
       imageTypes: () => imageTypes.join(','),
    },
    methods: {
        ...mapActions(['uploadImages']),
        startDrag() {
            this.isDragged = true;
        },
        endDrag(e) {
            if (e.relatedTarget) return;

            setTimeout(() => {
                this.isDragged = false;
            }, 200);
        },
        onUploadClick() {
            if(this.isDataLoadingProcess) return;
            this.$refs.mediaUploadFile.click();
        },
        onSelectUploadFiles(images) {
            this.uploadImages(images)
        },
    }

}
</script>

<style lang="scss" scoped>
    .upload {
        text-align: center;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        background-color: rgba(#000 , .1);
        transition: background-color .3s ease;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        &.dragged {
            background-color: rgba(#000 , .4);
        }
        &-input {
            display: none;
            z-index: 100;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            .dragged & {
                display: block;
            }
        }
        &-text {
            border: 3px dashed #000;
            cursor: pointer;
            padding: 5em;
            border-radius: 3em;
            transition: all .3s ease;
            p {
                font-size: 1.5em;
            }
            .dragged & {
                background-color: rgba(#fff , .7);
                box-shadow: 0 0 3em rgba(#fff , .7);
            }
        }
        &-icon {
            font-size: 3em;
            margin-bottom: .5em; 
        }
    }
</style>

