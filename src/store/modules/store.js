import Vue from 'vue';
import Vuex from 'vuex';
import cats from './cats.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        cats:cats
    }
})