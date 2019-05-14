import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token'),
    userName: window.localStorage.getItem('user_name'),
    accountData: null,
};

const getters = {
    isLoggedIn: state => !!state.token,
    accountData: state => state.accountData,
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
        commit('setAccountData', null);
        window.localStorage.removeItem('imgur_token');
        window.localStorage.removeItem('user_name');
        router.push('/');
    },
    login: () => {
        api.login();
    },
    finalizeLogin: ( { commit }, hash ) => {
        const query = qs.parse( hash.replace('#', '') );
        console.log(query)
        commit('setToken', query.access_token);
        commit('setUserName', query.account_username);
        
        window.localStorage.setItem('imgur_token', query.access_token);
        window.localStorage.setItem('user_name', query.account_username);
        router.push('/');
    },
    async getAccountData({ commit }) {
        const response = await api.getAccountData(state.userName);
        commit('setAccountData', response.data.data);
    }

};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setUserName: (state, userName) => {
        state.userName = userName;
    },
    setAccountData: (state, accountData) => {
        state.accountData = accountData;
    }

};
export default {
    state,
    mutations,
    actions,
    getters,
}
