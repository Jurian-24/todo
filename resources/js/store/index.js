import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';

Vue.use(vuex);

export default new Vuex.Store({
    modules: {
        auth
    }
})