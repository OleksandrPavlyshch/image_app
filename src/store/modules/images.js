import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: null,

};

const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    }, 
    async uploadImages({ comit, rootState}, images) {
        const { token } = rootState.auth;
        await api.uploadImages(token, images)
            .then(function (values) {
                router.push('/');
            })
            .catch(function (values) {
                router.push('/');
            });
        router.push('/');

    }

};

const getters = {
    images: () => state.images,

};
const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
}