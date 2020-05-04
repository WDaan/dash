<template>
    <div
        :style="tilePosition"
        class="grid overflow-hidden rounded"
        style="background-color: var(--bg-tile); position:relative;"
        @contextmenu.prevent="$refs.menu.open"
    >
        <div
            class="overflow-hidden p-3"
            :class="{ 'filter-fade-tile': !noFade }"
        >
            <slot></slot>
            <vue-context ref="menu">
                <v-card
                    :dark="theme"
                    elevation="20"
                    width="170"
                    style="position:absolute; top: 50%; z-index: 10; overflow: show"
                >
                    <v-list dense rounded>
                        <EditModal :id="id"></EditModal>
                        <v-list-item link @click.prevent="rightClickDelete(id)">
                            <v-icon>delete</v-icon>
                            <v-list-item-title style="font-size:15px"
                                >Delete</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-card>
            </vue-context>
        </div>
    </div>
</template>
<script>
import { VueContext } from 'vue-context'
import DarkMode from '@/mixins/DarkMode'

export default {
    name: 'Tile',
    components: { VueContext },
    mixins: [DarkMode],
    props: {
        id: String,
        position: {
            type: String
        },
        noFade: {
            type: Boolean,
            default: false
        },
        tileName: String
    },
    computed: {
        tilePosition() {
            return `grid-area: ${this.positionToGridAreaNotation(
                this.position
            )}`
        }
    },
    methods: {
        positionToGridAreaNotation(position) {
            const [from, to = null] = position.toLowerCase().split(':')
            if (from.length < 2 || (to && to.length < 2)) {
                return
            }
            const areaFrom = `${from.substring(1)} / ${this.indexInAlphabet(
                from[0]
            )}`
            const area = to
                ? `${areaFrom} / ${Number(to.substring(1)) +
                      1} / ${this.indexInAlphabet(to[0]) + 1}`
                : areaFrom
            return area
        },
        indexInAlphabet(character) {
            const index = character.toLowerCase().charCodeAt(0) - 96
            return index < 1 ? 1 : index
        },
        rightClickDelete(id) {
            this.$store.commit('DELETE_TILE', id)
            this.$toast.success('Tile removed successfully!')
        }
    }
}
</script>
