<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn small icon v-on="on">
                    <v-icon class="white--text">delete</v-icon>
                </v-btn>
            </template>
            <v-card :dark="theme">
                <v-list v-if="tiles.length >= 1" dense rounded>
                    <v-list-item
                        style="display: block; margin: auto;"
                        class="pt-2"
                        link
                        v-for="c in tiles"
                        v-bind:key="c.id"
                        @click="deleteTile(c.id)"
                    >
                        {{ c.tileName }} - {{ c.props.position }}
                    </v-list-item>
                </v-list>
                <div v-else class="pa-4">
                    <h3 class="subtitle">no tiles on dashboard</h3>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DarkMode from '@/mixins/DarkMode'
export default {
    name: 'DeleteModal',
    mixins: [DarkMode],
    data() {
        return {
            dialog: false
        }
    },
    computed: {
        ...mapGetters(['getAllTiles']),
        tiles() {
            return this.getAllTiles()
        }
    },
    created() {},
    methods: {
        deleteTile(id) {
            this.$store.commit('DELETE_TILE', id)

            this.dialog = false

            //confirmation
            this.$toast.success('Tile removed successfully!')
        }
    }
}
</script>
