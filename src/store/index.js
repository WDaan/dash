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
        availableTiles: [],
        theme: true
    },
    mutations: {
        ADD_TILE(state, tile) {
            state.tiles.push(tile)
        },
        DELETE_TILE(state, id) {
            state.tiles = state.tiles.filter(el => el.id !== id)
        },
        EDIT_TILE(state, tile) {
            let index = state.tiles.findIndex(el => el.id === tile.id)
            state.tiles[index].props = tile.props
        },
        REGISTER_TILES(state, tiles) {
            state.availableTiles = [...tiles]
        },
        TOGGLE_THEME(state) {
            state.theme = !state.theme
        }
    },
    actions: {},
    modules: {},
    getters: {
        getAllTiles: state => () => state.tiles,
        getAvailableTiles: state => () => state.availableTiles,
        getTheme: state => () => state.theme,
        getTileById: state => id => state.tiles.filter(el => el.id === id)[0]
    }
})
