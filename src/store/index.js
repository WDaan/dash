/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'dash',
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        tiles: [],
        availableTiles: []
    },
    mutations: {
        ADD_TILE(state, tile) {
            state.tiles.push(tile)
        },
        DELETE_TILE(state, id) {
            state.tiles = state.tiles.filter(el => el.id !== id)
        },
        REGISTER_TILES(state, tiles) {
            state.availableTiles = [...tiles]
        }
    },
    actions: {},
    modules: {},
    getters: {
        getAllTiles: state => () => state.tiles,
        getAvailableTiles: state => () => state.availableTiles
    }
})
