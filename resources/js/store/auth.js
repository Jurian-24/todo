import axios from 'axios';

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null,
        credentials: null,
    },

    getters: {
        authenticated (state) {
            return state.authenticated
        },

        user (state) {
            return state.user
        },

        credentials (state) {
            return state.credentials
        }
    },

    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },

        SET_USER (state, value) {
            state.user = value
        },

        SET_CREDENTIALS (value) {
            state.credentials = '';
        }
    },
    action: {
        async signIn ({dispatch}, credentials) {
            await axios.get('/sanctum/crsf-cookie')
            const response = await axios.post('/api/login', credentials)
            response.then(() => {
                dispatch('me')
            })
            return response;
        },

        async signOut ({dispatch}) {
            await axios.post('/api/logout')

            return dispatch('me')
        },

        me({ commit }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
        }
    }
}