import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: null,
    editedImage: null,

};

const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        console.log(response.data.data);
        commit('setImages', response.data.data);
    }, 
    async uploadImages({rootState}, images) {
        const { token } = rootState.auth;
        try{
            await api.uploadImages(token, images)
        } catch {}
        router.push('/');
    },
    async getImageData({commit, rootState }, id) {
        const { token } = rootState.auth;
        const response = await api.getImageData(token, id);
        console.log(response.data.data);
        commit('setEditedImage', response.data.data);
    },
    cleanImageData({commit}) {
        commit('setEditedImage', null)
    },
    async updateImage({ rootState }, image) {
        const { token } = rootState.auth;
        try {
            await api.updateImage(token, image)
        } catch { }
        router.push('/');
    }
};

const getters = {
    images: () => state.images,
    editedImage: () => state.editedImage,

};
const mutations = {
    setImages: (state, images) => {
        state.images = images;
    },
    setEditedImage: (state, image) => {
        state.editedImage = image;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
}