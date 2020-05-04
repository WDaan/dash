<template>
    <div
        style="padding: 7px; background-color: var(--bg-screen)"
        class="grid gap-spacing h-screen p-2"
        :class="theme ? '' : 'dark'"
    >
        <component
            v-for="tile in tiles"
            v-bind:key="tile.id"
            :is="tile.tileName"
            v-bind="{ tileId: tile.id, ...tile.props }"
        ></component>
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
        theme: Boolean
    },
    computed: {
        ...mapGetters(['getAllTiles']),
        tiles() {
            return this.getAllTiles()
        }
    }
}
</script>
