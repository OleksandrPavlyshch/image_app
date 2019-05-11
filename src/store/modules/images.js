import Axios from "axios";
import api from '../../api/imgur';

const state = {
    images: null,

};

const actions = {
    async fetchImages({ commit, rootState }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        console.log(response);
        commit('setImages', response.data.data);
    }, 

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