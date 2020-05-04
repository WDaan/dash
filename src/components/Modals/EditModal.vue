<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
                <v-list-item link v-on="on">
                    <v-icon class="pr-2">edit</v-icon>
                    <v-list-item-title style="font-size:15px">
                        Edit</v-list-item-title
                    >
                </v-list-item>
            </template>
            <v-card>
                <v-list v-if="tile" dense rounded>
                    <v-form
                        v-model="valid"
                        class="pa-5 pt-10 mx-auto"
                        style="max-width: 300px;"
                    >
                        <TileForm :schema="schema" :timed="false"></TileForm>
                        <v-btn
                            :disabled="!valid"
                            @click="editTile"
                            color="cyan accent-3 white--text"
                            >Edit Tile</v-btn
                        >
                    </v-form>
                </v-list>
                <div v-else class="pa-4">
                    <h3 class="subtitle">no tiles on found</h3>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import TileStore from '@/mixins/TileStore'
import { mapGetters } from 'vuex'
export default {
    name: 'DeleteModal',
    props: {
        id: String
    },
    mixins: [TileStore],
    data() {
        return {
            dialog: false
        }
    },
    computed: {
        ...mapGetters(['getTileById']),
        tile() {
            return this.getTileById(this.id)
        }
    },
    created() {
        this.createFormSchema(this.tile.tileName, this.tile)
    },
    methods: {
        editTile() {
            let props = this.formatProps()
            let tile = {
                id: this.tile.id,
                props
            }
            this.$store.commit('EDIT_TILE', tile)

            this.dialog = false

            //confirmation
            this.$toast.success('Tile updated successfully!')
        }
    }
}
</script>
