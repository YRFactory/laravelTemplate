import axios from 'axios'

const state = {
    user: null
}

const getters = {
    user: state => state.user
}

const mutations = {
    setUser (state, user) {
        state.user = user;
    }
}

const actions = {
    async register({ commit }, data) {
        const response = await axios.post('/api/register', data)
        commit('setUser', response.data);
    },

    async searchUser({ commit }) {
        const response = await axios.get('/api/user');
        const user = response.data ? response.data : null;
        commit('setUser', user);
    },

    async login({ commit }, data) {    //追加
        const response = await axios.post('/api/login', data);
        commit('setUser', response.data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}