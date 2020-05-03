<template>
    <div
        style="padding: 7px; background-color: var(--bg-screen)"
        class="grid gap-spacing h-screen p-2"
        :class="theme"
    >
        <slot></slot>
    </div>
</template>

<style>
* {
    text-align: center;
    color: var(--text-default);
}
</style>

<script>
import { mapGetters } from 'vuex'
import TileStore from '@/mixins/TileStore'

export default {
    name: 'Dashboard',
    mixins: [TileStore],
    props: {
        theme: String
    },
    computed: {
        ...mapGetters(['getAllTiles']),
        tiles() {
            return this.getAllTiles()
        }
    },
    mounted() {
        this.tiles.forEach(tile => {
            let { tileName } = tile
            delete tile.tileName

            let instance = this.createComponent(tileName, tile)

            this.mountComponent(instance)
        })
    }
}
</script>
